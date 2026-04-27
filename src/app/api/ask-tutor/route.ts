import { NextResponse } from "next/server";
import { chapters } from "@/data/curriculum";
import { getAIProvider } from "@/lib/ai";
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

    const systemPrompt = `You are a precise and patient precalculus tutor. Respond in ${language === "zh" ? "Chinese" : "English"}. Use LaTeX (delimited by $...$ inline and $$...$$ block) for all math formulas. Use Markdown formatting (headers, lists, bold) for clear structure. Do NOT wrap your response in JSON — reply with the answer directly as formatted text.`;
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

    // If AI accidentally returns JSON-wrapped answer, extract it
    let answerText = result.text;
    try {
      const parsed = JSON.parse(answerText);
      if (parsed.answer) answerText = parsed.answer;
    } catch {
      // Not JSON, use as-is (expected)
    }
    return NextResponse.json({ answer: answerText });
  } catch (err) {
    const message = err instanceof Error ? err.message : "Unknown error";
    if (message.includes("AI_API_KEY")) {
      return NextResponse.json({ error: "AI not configured" }, { status: 503 });
    }
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
