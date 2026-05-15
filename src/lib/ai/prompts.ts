import type { SupportedLanguage, Unit } from "@/types/curriculum";
import type {
  GeneratePracticeInput,
  GenerateTargetedPracticeInput,
  GenerateUnitSummaryInput,
} from "./types";

const LANG_LABEL: Record<SupportedLanguage, string> = {
  en: "English",
  zh: "Simplified Chinese (简体中文)",
};

function pickLocalized(unit: Unit, language: SupportedLanguage) {
  return {
    title: unit.title[language],
    description: unit.description[language],
    learningGoals: unit.learningGoals?.map((g) => g[language]) ?? [],
    keyConcepts:
      unit.keyConcepts?.map((c) => ({
        id: c.id,
        title: c.title[language],
        explanation: c.explanation[language],
      })) ?? [],
    formulas:
      unit.formulas?.map((f) => ({
        id: f.id,
        name: f.name[language],
        formula: f.formula,
      })) ?? [],
    problemTypes:
      unit.problemTypes?.map((p) => ({
        id: p.id,
        title: p.title[language],
        difficulty: p.difficulty,
      })) ?? [],
  };
}

function unitContext(unit: Unit, language: SupportedLanguage): string {
  const u = pickLocalized(unit, language);
  const lines = [
    `Unit ${unit.number}: ${u.title}`,
    `Description: ${u.description}`,
  ];
  if (u.learningGoals.length) {
    lines.push(`Learning goals:\n- ${u.learningGoals.join("\n- ")}`);
  }
  if (u.keyConcepts.length) {
    lines.push(
      `Key concepts:\n${u.keyConcepts
        .map((c) => `- [${c.id}] ${c.title}: ${c.explanation}`)
        .join("\n")}`,
    );
  }
  if (u.formulas.length) {
    lines.push(
      `Formulas:\n${u.formulas
        .map((f) => `- [${f.id}] ${f.name}: ${f.formula}`)
        .join("\n")}`,
    );
  }
  if (u.problemTypes.length) {
    lines.push(
      `Problem types:\n${u.problemTypes
        .map((p) => `- [${p.id}] ${p.title} (${p.difficulty})`)
        .join("\n")}`,
    );
  }
  return lines.join("\n\n");
}

export const SYSTEM_TUTOR = (language: SupportedLanguage) =>
  `You are a precise and patient precalculus tutor. Respond in ${LANG_LABEL[language]}. Use LaTeX (delimited by $...$ inline and $$...$$ block) for all math. Be concise and pedagogically clear. Output ONLY the JSON requested by the user — no preamble, no markdown fencing.`;

export function generateUnitSummaryPrompt({
  unit,
  language,
}: GenerateUnitSummaryInput): string {
  return [
    `Produce a study summary for the following precalculus unit.`,
    unitContext(unit, language),
    ``,
    `Return strict JSON with this shape:`,
    `{`,
    `  "overview": string,        // 2-4 sentence overview`,
    `  "keyPoints": string[],     // 4-7 bullet points covering must-know facts/formulas`,
    `  "studyTips": string[]      // 2-4 actionable tips, including common mistakes to avoid`,
    `}`,
  ].join("\n");
}

export function generatePracticePrompt({
  unit,
  language,
  difficulty,
  count,
}: GeneratePracticeInput): string {
  return [
    `Generate ${count} ${difficulty} precalculus practice question(s) for the unit below.`,
    unitContext(unit, language),
    ``,
    `Each question must test a different concept where possible. Provide a clear, step-by-step explanation.`,
    ``,
    `CRITICAL — Answer Accuracy:`,
    `1. FIRST solve each problem completely to get the correct answer.`,
    `2. Place that answer as one of the 4 choices (vary placement across A/B/C/D).`,
    `3. Set "answer" to the letter containing the correct value.`,
    `4. Write the explanation — it MUST arrive at the same value as your chosen answer letter.`,
    `5. SELF-CHECK: explanation result must match the choice text of the answer field.`,
    `- Each choice must have a clearly distinct value (at least 15% apart).`,
    `- Distribute correct answers across A/B/C/D, not always "A".`,
    ``,
    `Return strict JSON with this shape:`,
    `{`,
    `  "questions": [`,
    `    {`,
    `      "id": string,                          // stable slug, e.g. "q1"`,
    `      "difficulty": "easy" | "medium" | "hard",`,
    `      "prompt": string,                      // the question, LaTeX allowed`,
    `      "choices": [{ "id": "A"|"B"|"C"|"D", "text": string }] | null,  // null for free-response`,
    `      "answer": string,                      // choice id or final value`,
    `      "explanation": string,                 // worked solution`,
    `      "hints": string[]                      // 1-3 progressive hints`,
    `    }`,
    `  ]`,
    `}`,
  ].join("\n");
}

export function generateTargetedPracticePrompt({
  unit,
  language,
  weakConceptIds,
  count,
}: GenerateTargetedPracticeInput): string {
  const weakList = weakConceptIds.length
    ? weakConceptIds.map((id) => `- ${id}`).join("\n")
    : "- (none specified — choose the most foundational concepts)";
  return [
    `Generate ${count} targeted precalculus practice question(s) focused on the learner's weak areas.`,
    unitContext(unit, language),
    ``,
    `Weak concept IDs (match against the [id] markers above):`,
    weakList,
    ``,
    `Each question must drill one of the weak concepts. Start easier and progress in difficulty across the set. Include hints that scaffold toward the underlying concept.`,
    ``,
    `CRITICAL — Answer Accuracy:`,
    `1. FIRST solve each problem completely to get the correct answer.`,
    `2. Place that answer as one of the 4 choices (vary placement across A/B/C/D).`,
    `3. Set "answer" to the letter containing the correct value.`,
    `4. Write the explanation — it MUST arrive at the same value as your chosen answer letter.`,
    `5. SELF-CHECK: explanation result must match the choice text of the answer field.`,
    `- Each choice must have a clearly distinct value (at least 15% apart).`,
    `- Distribute correct answers across A/B/C/D, not always "A".`,
    ``,
    `Return strict JSON with this shape:`,
    `{`,
    `  "questions": [`,
    `    {`,
    `      "id": string,`,
    `      "targetConceptId": string,             // one of the weak concept ids`,
    `      "difficulty": "easy" | "medium" | "hard",`,
    `      "prompt": string,`,
    `      "choices": [{ "id": "A"|"B"|"C"|"D", "text": string }] | null,`,
    `      "answer": string,`,
    `      "explanation": string,`,
    `      "hints": string[]`,
    `    }`,
    `  ]`,
    `}`,
  ].join("\n");
}
