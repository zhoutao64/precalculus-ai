import { parseAIJson } from "@/lib/ai/parse-json";
import { NextResponse } from "next/server";
import { chapters } from "@/data/curriculum";
import { getAIProvider, SYSTEM_TUTOR } from "@/lib/ai";
import type { SupportedLanguage } from "@/types/curriculum";

const LANG_LABEL: Record<SupportedLanguage, string> = {
  en: "English",
  zh: "Simplified Chinese (简体中文)",
};

function buildUnitCatalog(language: SupportedLanguage): string {
  return chapters
    .map((ch) => {
      const heading = `Chapter ${ch.number}: ${ch.title[language]}`;
      const units = ch.units
        .map((u) => `  - ${u.id} | ${u.number} ${u.title[language]}`)
        .join("\n");
      return `${heading}\n${units}`;
    })
    .join("\n\n");
}

function buildPrompt(query: string, language: SupportedLanguage): string {
  return [
    `You are a Precalculus learning coach. The student described their study need or problem below. Produce a focused study plan that addresses it.`,
    ``,
    `Student message:`,
    `"""`,
    query,
    `"""`,
    ``,
    `Available units (use the leftmost id verbatim if you choose to link a step to a unit):`,
    buildUnitCatalog(language),
    ``,
    `Guidelines:`,
    `- Produce 3 to 5 steps, ordered from foundational to advanced.`,
    `- Each step must be specific and actionable, not generic advice.`,
    `- Only set "unitId" when the step maps cleanly to one of the unit ids above; otherwise omit the field.`,
    `- Respond in ${LANG_LABEL[language]}.`,
    ``,
    `Return strict JSON with this shape:`,
    `{`,
    `  "summary": string,                    // 1-2 sentence overview of the recommended approach`,
    `  "steps": [`,
    `    {`,
    `      "title": string,                  // short imperative title`,
    `      "description": string,            // 1-3 sentences explaining what to do and why`,
    `      "unitId": string                  // optional, must match a unit id from the catalog`,
    `    }`,
    `  ]`,
    `}`,
  ].join("\n");
}

export const maxDuration = 60;
export async function POST(req: Request) {
  try {
    const { query, language = "en" } = (await req.json()) as {
      query: string;
      language?: SupportedLanguage;
    };

    if (!query || !query.trim()) {
      return NextResponse.json({ error: "Query is required" }, { status: 400 });
    }

    const provider = getAIProvider();
    const prompt = buildPrompt(query.trim(), language);

    const result = await provider.generate({
      system: SYSTEM_TUTOR(language),
      messages: [{ role: "user", content: prompt }],
      temperature: 0.4,
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
