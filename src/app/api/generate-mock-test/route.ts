import { parseAIJson } from "@/lib/ai/parse-json";
import { NextResponse } from "next/server";
import { chapters } from "@/data/curriculum";
import { getAIProvider, SYSTEM_TUTOR } from "@/lib/ai";
import type { SupportedLanguage, Unit } from "@/types/curriculum";

const MIN_QUESTIONS = 5;
const MAX_QUESTIONS = 20;
const DEFAULT_QUESTIONS = 10;
const MINUTES_PER_QUESTION = 2;

function unitContext(unit: Unit, language: SupportedLanguage): string {
  const title = unit.title[language];
  const description = unit.description[language];
  const goals = unit.learningGoals?.map((g) => g[language]) ?? [];
  const concepts =
    unit.keyConcepts?.map((c) => ({
      id: c.id,
      title: c.title[language],
      explanation: c.explanation[language],
    })) ?? [];
  const formulas =
    unit.formulas?.map((f) => ({
      id: f.id,
      name: f.name[language],
      formula: f.formula,
    })) ?? [];
  const problemTypes =
    unit.problemTypes?.map((p) => ({
      id: p.id,
      title: p.title[language],
      difficulty: p.difficulty,
    })) ?? [];

  const lines = [
    `Unit ${unit.number}: ${title}`,
    `Description: ${description}`,
  ];
  if (goals.length) {
    lines.push(`Learning goals:\n- ${goals.join("\n- ")}`);
  }
  if (concepts.length) {
    lines.push(
      `Key concepts:\n${concepts
        .map((c) => `- [${c.id}] ${c.title}: ${c.explanation}`)
        .join("\n")}`,
    );
  }
  if (formulas.length) {
    lines.push(
      `Formulas:\n${formulas
        .map((f) => `- [${f.id}] ${f.name}: ${f.formula}`)
        .join("\n")}`,
    );
  }
  if (problemTypes.length) {
    lines.push(
      `Problem types:\n${problemTypes
        .map((p) => `- [${p.id}] ${p.title} (${p.difficulty})`)
        .join("\n")}`,
    );
  }
  return lines.join("\n\n");
}

function buildMockTestPrompt(
  unit: Unit,
  language: SupportedLanguage,
  count: number,
): string {
  return [
    `Generate a ${count}-question precalculus mock test for the unit below.`,
    unitContext(unit, language),
    ``,
    `Requirements:`,
    `- Mix difficulties: roughly 30% easy, 50% medium, 20% hard. Order from easier to harder.`,
    `- Most questions (at least 80%) must be multiple choice with exactly 4 distinct choices labeled A, B, C, D. The remaining may be short free-response.`,
    `- Cover different concepts/problem types from the unit; do not repeat the same concept twice in a row.`,
    `- Each "answer" for a multiple-choice question is the choice id ("A", "B", "C", or "D"). For free-response, "answer" is the final value as a clean string.`,
    `- Tag each question with the most relevant concept id from the unit (use the [id] markers above) in "conceptTag".`,
    ``,
    `Return strict JSON with this shape:`,
    `{`,
    `  "questions": [`,
    `    {`,
    `      "id": string,                                    // stable slug, e.g. "q1"`,
    `      "prompt": string,                                // LaTeX allowed`,
    `      "choices": [{ "id": "A"|"B"|"C"|"D", "text": string }] | null,  // null for free-response only`,
    `      "answer": string,`,
    `      "explanation": string,                           // worked solution`,
    `      "difficulty": "easy" | "medium" | "hard",`,
    `      "conceptTag": string                             // a key concept / formula / problem-type id from the unit`,
    `    }`,
    `  ]`,
    `}`,
  ].join("\n");
}

export async function POST(req: Request) {
  try {
    const {
      unitId,
      language = "en",
      questionCount = DEFAULT_QUESTIONS,
    } = (await req.json()) as {
      unitId: string;
      language?: SupportedLanguage;
      questionCount?: number;
    };

    const count = Math.min(
      MAX_QUESTIONS,
      Math.max(MIN_QUESTIONS, Math.floor(questionCount)),
    );

    let unit: Unit | null = null;
    for (const ch of chapters) {
      const found = ch.units.find((u) => u.id === unitId);
      if (found) { unit = found; break; }
    }
    if (!unit) {
      return NextResponse.json({ error: "Unit not found" }, { status: 404 });
    }

    const provider = getAIProvider();
    const prompt = buildMockTestPrompt(unit, language, count);

    const result = await provider.generate({
      system: SYSTEM_TUTOR(language),
      messages: [{ role: "user", content: prompt }],
      temperature: 0.5,
      maxTokens: 8192,
    });

    // Try to parse JSON, with fallback for truncated responses
    let parsed: { questions: unknown[] };
    try {
      parsed = parseAIJson(result.text);
    } catch {
      // Try to extract partial JSON by finding last complete question object
      const text = result.text;
      const lastBracket = text.lastIndexOf("}");
      if (lastBracket > 0) {
        const trimmed = text.substring(0, lastBracket + 1) + "]}";
        try {
          parsed = JSON.parse(trimmed);
        } catch {
          // Try wrapping in questions array
          throw new Error("AI returned invalid JSON. Try fewer questions.");
        }
      } else {
        throw new Error("AI returned invalid JSON. Try fewer questions.");
      }
    }
    return NextResponse.json({
      questions: parsed.questions,
      timeLimit: count * MINUTES_PER_QUESTION,
    });
  } catch (err) {
    const message = err instanceof Error ? err.message : "Unknown error";
    if (message.includes("AI_API_KEY")) {
      return NextResponse.json({ error: "AI not configured" }, { status: 503 });
    }
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
