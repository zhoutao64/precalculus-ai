import { parseAIJson } from "@/lib/ai/parse-json";
import { NextResponse } from "next/server";
import { chapters } from "@/data/curriculum";
import { getAIProvider, SYSTEM_TUTOR } from "@/lib/ai";
import type { SupportedLanguage, Unit } from "@/types/curriculum";

const LANG_LABEL: Record<SupportedLanguage, string> = {
  en: "English",
  zh: "Simplified Chinese (简体中文)",
};

type Answer = { questionId: string; answer: string };

type DiagnosticQuestion = {
  id: string;
  difficulty: "easy" | "medium" | "hard";
  prompt: string;
  choices?: { id: string; text: string }[] | null;
  answer: string;
  conceptId?: string;
};

function findUnit(unitId: string): Unit | null {
  for (const ch of chapters) {
    const found = ch.units.find((u) => u.id === unitId);
    if (found) return found;
  }
  return null;
}

function unitContext(unit: Unit, language: SupportedLanguage): string {
  const lines = [
    `Unit ${unit.number}: ${unit.title[language]}`,
    `Description: ${unit.description[language]}`,
  ];
  if (unit.keyConcepts?.length) {
    lines.push(
      `Key concepts:\n${unit.keyConcepts
        .map((c) => `- [${c.id}] ${c.title[language]}: ${c.explanation[language]}`)
        .join("\n")}`,
    );
  }
  if (unit.formulas?.length) {
    lines.push(
      `Formulas:\n${unit.formulas
        .map((f) => `- [${f.id}] ${f.name[language]}: ${f.formula}`)
        .join("\n")}`,
    );
  }
  if (unit.problemTypes?.length) {
    lines.push(
      `Problem types:\n${unit.problemTypes
        .map((p) => `- [${p.id}] ${p.title[language]} (${p.difficulty})`)
        .join("\n")}`,
    );
  }
  return lines.join("\n\n");
}

function buildGeneratePrompt(unit: Unit, language: SupportedLanguage): string {
  return [
    `Generate a short diagnostic check for the unit below to assess what the student already knows. Produce 3 to 5 questions of mixed difficulty (at least one easy, one medium, one hard).`,
    unitContext(unit, language),
    ``,
    `Each question should target a distinct concept. Where possible, set "conceptId" to a concept id from the [id] markers above so weaknesses can be mapped later.`,
    `Respond in ${LANG_LABEL[language]}.`,
    ``,
    `Return strict JSON with this shape:`,
    `{`,
    `  "questions": [`,
    `    {`,
    `      "id": string,                          // stable slug, e.g. "d1"`,
    `      "difficulty": "easy" | "medium" | "hard",`,
    `      "prompt": string,                      // LaTeX allowed`,
    `      "choices": [{ "id": "A"|"B"|"C"|"D", "text": string }] | null,  // null for free-response`,
    `      "answer": string,                      // choice id or final value`,
    `      "conceptId": string                    // optional, must match a concept id from the unit`,
    `    }`,
    `  ]`,
    `}`,
  ].join("\n");
}

function buildAnalyzePrompt(
  unit: Unit,
  language: SupportedLanguage,
  answers: Answer[],
  questions: DiagnosticQuestion[] | null,
): string {
  const submissionLines = answers.map((a) => {
    const q = questions?.find((qq) => qq.id === a.questionId);
    if (q) {
      const choices = q.choices?.length
        ? `\n  Choices: ${q.choices.map((c) => `${c.id}) ${c.text}`).join(" | ")}`
        : "";
      const conceptTag = q.conceptId ? ` [conceptId: ${q.conceptId}]` : "";
      return `- Question ${q.id}${conceptTag} (${q.difficulty}): ${q.prompt}${choices}\n  Correct answer: ${q.answer}\n  Student answer: ${a.answer}`;
    }
    return `- Question ${a.questionId}\n  Student answer: ${a.answer}`;
  });

  return [
    `Analyze this student's diagnostic check submission for the unit below and produce a personalized assessment.`,
    unitContext(unit, language),
    ``,
    `Submission:`,
    submissionLines.join("\n"),
    ``,
    `Guidelines:`,
    `- "score" is an integer 0-100 reflecting overall correctness, weighted by difficulty.`,
    `- "weakConcepts" should list concept ids (or short concept names if no id maps) the student struggled with. Use the [id] markers above when possible.`,
    `- "recommendations" are 2-4 concrete things the student should review or practice, tied to the weak areas.`,
    `- "nextSteps" are 2-3 short, ordered actions to take right now (e.g. "Re-read key concept X", "Try 3 targeted practice problems on Y").`,
    `- Respond in ${LANG_LABEL[language]}.`,
    ``,
    `Return strict JSON with this shape:`,
    `{`,
    `  "score": number,`,
    `  "weakConcepts": string[],`,
    `  "recommendations": string[],`,
    `  "nextSteps": string[]`,
    `}`,
  ].join("\n");
}

export const maxDuration = 60;
export async function POST(req: Request) {
  try {
    const {
      unitId,
      language = "en",
      answers = [],
      questions = null,
    } = (await req.json()) as {
      unitId: string;
      language?: SupportedLanguage;
      answers?: Answer[];
      questions?: DiagnosticQuestion[] | null;
    };

    const unit = findUnit(unitId);
    if (!unit) {
      return NextResponse.json({ error: "Unit not found" }, { status: 404 });
    }

    const provider = getAIProvider();
    const isAnalyze = Array.isArray(answers) && answers.length > 0;
    const prompt = isAnalyze
      ? buildAnalyzePrompt(unit, language, answers, questions)
      : buildGeneratePrompt(unit, language);

    const result = await provider.generate({
      system: SYSTEM_TUTOR(language),
      messages: [{ role: "user", content: prompt }],
      temperature: isAnalyze ? 0.3 : 0.5,
    });

    const parsed = parseAIJson(result.text);
    return NextResponse.json(parsed);
  } catch (err) {
    const message = err instanceof Error ? err.message : "Unknown error";
    if (message.includes("AI_API_KEY")) {
      return NextResponse.json({ error: "AI not configured" }, { status: 503 });
    }
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
