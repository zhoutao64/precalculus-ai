"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { PracticeProblemCard } from "./PracticeProblemCard";
import type { PracticeQuestion } from "@/lib/ai/types";
import type { SupportedLanguage } from "@/types/curriculum";

const T = {
  title: { en: "Targeted Practice", zh: "针对性练习" },
  description: {
    en: "Describe what you're struggling with and get targeted questions.",
    zh: "描述你的薄弱环节，获取针对性练习题。",
  },
  placeholder: {
    en: "e.g. I struggle with the ambiguous case SSA...",
    zh: "例如：我对 SSA 模糊情形不太理解...",
  },
  generate: { en: "Generate Targeted Practice", zh: "生成针对性练习" },
  generating: { en: "Generating…", zh: "生成中…" },
  error: { en: "Failed to generate. Please try again.", zh: "生成失败，请重试。" },
};

type Props = {
  unitId: string;
  language: SupportedLanguage;
};

export function TargetedPracticeBox({ unitId, language }: Props) {
  const [description, setDescription] = useState("");
  const [questions, setQuestions] = useState<PracticeQuestion[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const handleGenerate = async () => {
    if (!description.trim()) return;
    setLoading(true);
    setError(false);
    setQuestions([]);

    try {
      const res = await fetch("/api/generate-targeted-practice", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ unitId, language, description: description.trim(), count: 3 }),
      });
      if (!res.ok) throw new Error();
      const data = await res.json();
      setQuestions(data.questions ?? []);
    } catch {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-4">
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">{T.title[language]}</CardTitle>
          <p className="text-sm text-gray-600">{T.description[language]}</p>
        </CardHeader>
        <CardContent className="space-y-3">
          <textarea
            className="w-full rounded-md border border-gray-300 p-3 text-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
            rows={3}
            placeholder={T.placeholder[language]}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <Button
            onClick={handleGenerate}
            disabled={loading || !description.trim()}
            className="bg-blue-600 hover:bg-blue-700"
          >
            {loading ? T.generating[language] : T.generate[language]}
          </Button>
          {error && <p className="text-sm text-red-500">{T.error[language]}</p>}
        </CardContent>
      </Card>

      {questions.map((q, i) => (
        <PracticeProblemCard key={q.id ?? i} question={q} language={language} index={i + 1} />
      ))}
    </div>
  );
}
