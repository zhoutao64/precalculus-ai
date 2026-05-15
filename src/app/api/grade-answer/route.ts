import { NextResponse } from "next/server";

function normalize(value: string): string {
  return value.trim().toLowerCase();
}

export const maxDuration = 60;
export async function POST(req: Request) {
  try {
    const {
      userAnswer = "",
      correctAnswer = "",
      explanation = "",
    } = (await req.json()) as {
      questionId?: string;
      userAnswer?: string;
      correctAnswer?: string;
      prompt?: string;
      explanation?: string;
    };

    const correct = normalize(userAnswer) === normalize(correctAnswer);

    return NextResponse.json({ correct, explanation });
  } catch (err) {
    const message = err instanceof Error ? err.message : "Unknown error";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
