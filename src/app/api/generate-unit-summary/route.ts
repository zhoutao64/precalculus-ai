import { parseAIJson } from "@/lib/ai/parse-json";
import { NextResponse } from "next/server";
import { chapters } from "@/data/curriculum";
import { getAIProvider, generateUnitSummaryPrompt, SYSTEM_TUTOR } from "@/lib/ai";
import type { SupportedLanguage } from "@/types/curriculum";

export async function POST(req: Request) {
  try {
    const { unitId, language = "en" } = (await req.json()) as {
      unitId: string;
      language?: SupportedLanguage;
    };

    // Find unit
    let unit = null;
    for (const ch of chapters) {
      const found = ch.units.find((u) => u.id === unitId);
      if (found) { unit = found; break; }
    }
    if (!unit) {
      return NextResponse.json({ error: "Unit not found" }, { status: 404 });
    }

    const provider = getAIProvider();
    const prompt = generateUnitSummaryPrompt({ unit, language });

    const result = await provider.generate({
      system: SYSTEM_TUTOR(language),
      messages: [{ role: "user", content: prompt }],
      temperature: 0.3,
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
