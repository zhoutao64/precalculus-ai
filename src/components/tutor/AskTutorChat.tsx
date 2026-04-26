"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import type { SupportedLanguage } from "@/types/curriculum";

const T = {
  title: { en: "🤖 Ask AI Tutor", zh: "🤖 AI 导师问答" },
  placeholder: {
    en: "Ask about this topic... e.g. Why does SSA have two solutions?",
    zh: "问关于这个主题的问题... 例如：为什么 SSA 有两个解？",
  },
  ask: { en: "Ask", zh: "提问" },
  thinking: { en: "Thinking…", zh: "思考中…" },
  error: { en: "Failed to get answer. Please try again.", zh: "获取回答失败，请重试。" },
  answer: { en: "Answer", zh: "回答" },
};

type Props = {
  unitId: string;
  language: SupportedLanguage;
};

export function AskTutorChat({ unitId, language }: Props) {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const handleAsk = async () => {
    if (!question.trim()) return;
    setLoading(true);
    setError(false);
    setAnswer("");

    try {
      const res = await fetch("/api/ask-tutor", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ question: question.trim(), unitId, language }),
      });
      if (!res.ok) throw new Error();
      const data = await res.json();
      setAnswer(data.answer ?? "");
    } catch {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg">{T.title[language]}</CardTitle>
      </CardHeader>
      <CardContent className="space-y-3">
        <div className="flex gap-2">
          <input
            type="text"
            className="flex-1 rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
            placeholder={T.placeholder[language]}
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && !loading && handleAsk()}
          />
          <Button
            onClick={handleAsk}
            disabled={loading || !question.trim()}
            className="bg-blue-600 hover:bg-blue-700"
          >
            {loading ? T.thinking[language] : T.ask[language]}
          </Button>
        </div>

        {error && <p className="text-sm text-red-500">{T.error[language]}</p>}

        {answer && (
          <div className="rounded-lg bg-blue-50 p-4">
            <p className="text-xs font-medium text-blue-600 mb-1">{T.answer[language]}</p>
            <div className="text-sm text-gray-800 whitespace-pre-wrap">{answer}</div>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
