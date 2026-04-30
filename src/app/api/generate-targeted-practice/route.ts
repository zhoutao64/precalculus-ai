import { parseAIJson } from "@/lib/ai/parse-json";
import { NextResponse } from "next/server";
import { chapters } from "@/data/curriculum";
import { getAIProvider, generateTargetedPracticePrompt, SYSTEM_TUTOR } from "@/lib/ai";
import type { SupportedLanguage } from "@/types/curriculum";

export async function POST(req: Request) {
  try {
    const { unitId, language = "en", description = "", count = 3 } = (await req.json()) as {
      unitId: string;
      language?: SupportedLanguage;
      description?: string;
      count?: number;
    };

    let unit = null;
    for (const ch of chapters) {
      const found = ch.units.find((u) => u.id === unitId);
      if (found) { unit = found; break; }
    }
    if (!unit) {
      return NextResponse.json({ error: "Unit not found" }, { status: 404 });
    }

    // Extract weak concept IDs from description or default to all
    const weakConceptIds = unit.keyConcepts?.map((c) => c.id) ?? [];

    const provider = getAIProvider();
    const prompt = generateTargetedPracticePrompt({
      unit,
      language,
      weakConceptIds,
      count: Math.min(count, 10),
    });

    // Prepend user description if provided
    const userMessage = description
      ? `The student says: "${description}"\n\n${prompt}`
      : prompt;

    const result = await provider.generate({
      system: SYSTEM_TUTOR(language),
      messages: [{ role: "user", content: userMessage }],
      temperature: 0.5,
      maxTokens: 4096,
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
