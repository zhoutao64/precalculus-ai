import { NextResponse } from "next/server";
import { chapters } from "@/data/curriculum";
import { getAIProvider, SYSTEM_TUTOR } from "@/lib/ai";
import type { SupportedLanguage } from "@/types/curriculum";

export async function POST(req: Request) {
  try {
    const { question, unitId, language = "en", context } = (await req.json()) as {
      question: string;
      unitId?: string;
      language?: SupportedLanguage;
      context?: string;
    };

    if (!question?.trim()) {
      return NextResponse.json({ error: "Question is required" }, { status: 400 });
    }

    // Build context from unit if provided
    let unitContext = "";
    if (unitId) {
      for (const ch of chapters) {
        const found = ch.units.find((u) => u.id === unitId);
        if (found) {
          unitContext = `The student is studying Unit ${found.number}: ${found.title[language]}. ${found.description[language]}`;
          break;
        }
      }
    }

    const systemPrompt = SYSTEM_TUTOR(language);
    const userMessage = [
      unitContext && `Context: ${unitContext}`,
      context && `Additional context: ${context}`,
      `Student's question: ${question}`,
      "",
      "Give a clear, educational answer. Use examples if helpful. Keep it concise but thorough.",
    ]
      .filter(Boolean)
      .join("\n");

    const provider = getAIProvider();
    const result = await provider.generate({
      system: systemPrompt,
      messages: [{ role: "user", content: userMessage }],
      temperature: 0.4,
    });

    return NextResponse.json({ answer: result.text });
  } catch (err) {
    const message = err instanceof Error ? err.message : "Unknown error";
    if (message.includes("AI_API_KEY")) {
      return NextResponse.json({ error: "AI not configured" }, { status: 503 });
    }
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
