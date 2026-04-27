"use client";

import { useCallback, useRef, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { PracticeProblemCard } from "./PracticeProblemCard";
import { useLearningHistory } from "@/hooks/useLearningHistory";
import type { PracticeQuestion } from "@/lib/ai/types";
import type { Difficulty, SupportedLanguage } from "@/types/curriculum";
import type { PracticeSessionHistoryPayload, StudentAnswer } from "@/types/history";

const T = {
  title: { en: "Practice Problems", zh: "练习题" },
  description: {
    en: "Generate AI-powered practice questions for this unit.",
    zh: "为本单元生成 AI 练习题。",
  },
  count: { en: "Number of questions", zh: "题目数量" },
  difficulty: { en: "Difficulty", zh: "难度" },
  generate: { en: "Generate", zh: "生成" },
  generating: { en: "Generating…", zh: "生成中…" },
  regenerate: { en: "Regenerate", zh: "重新生成" },
  empty: {
    en: "Click Generate to create new practice questions.",
    zh: "点击「生成」以创建新练习题。",
  },
  errorPrefix: { en: "Failed to generate", zh: "生成失败" },
};

const DIFFICULTY_LABELS: Record<Difficulty, { en: string; zh: string }> = {
  easy: { en: "Easy", zh: "简单" },
  medium: { en: "Medium", zh: "中等" },
  hard: { en: "Hard", zh: "困难" },
};

type Props = {
  unitId: string;
  language: SupportedLanguage;
};

export function PracticeGenerator({ unitId, language }: Props) {
  const [count, setCount] = useState(3);
  const [difficulty, setDifficulty] = useState<Difficulty>("medium");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [questions, setQuestions] = useState<PracticeQuestion[]>([]);
  const answersRef = useRef<Map<string, StudentAnswer>>(new Map());
  const savedRef = useRef(false);
  const { addRecord } = useLearningHistory();

  const handleAnswerChecked = useCallback(
    (questionId: string, answer: string, isCorrect: boolean) => {
      answersRef.current.set(questionId, { questionId, answer, isCorrect });

      // Save history once all questions are answered
      if (answersRef.current.size === questions.length && !savedRef.current) {
        savedRef.current = true;
        const studentAnswers = Array.from(answersRef.current.values());
        const correctCount = studentAnswers.filter((a) => a.isCorrect).length;
        const payload: PracticeSessionHistoryPayload = {
          questions,
          studentAnswers,
        };
        addRecord({
          type: "practice-session",
          title: `${language === "en" ? "Practice" : "练习"}: ${unitId}`,
          summary:
            language === "en"
              ? `${correctCount}/${questions.length} correct (${difficulty})`
              : `${correctCount}/${questions.length} 正确 (${difficulty})`,
          unitId,
          language,
          score: correctCount,
          totalQuestions: questions.length,
          payload,
        });
      }
    },
    [questions, difficulty, unitId, language, addRecord]
  );

  const handleGenerate = async () => {
    setLoading(true);
    setError(null);
    answersRef.current = new Map();
    savedRef.current = false;
    try {
      const res = await fetch("/api/generate-practice", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ unitId, language, difficulty, count }),
      });
      const data = await res.json();
      if (!res.ok) {
        throw new Error(data?.error ?? `HTTP ${res.status}`);
      }
      setQuestions(Array.isArray(data?.questions) ? data.questions : []);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Unknown error");
      setQuestions([]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-4">
      <Card>
        <CardHeader>
          <CardTitle>{T.title[language]}</CardTitle>
          <p className="text-sm text-gray-600">{T.description[language]}</p>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="space-y-1.5">
              <label className="text-sm font-medium text-gray-700">
                {T.count[language]}
              </label>
              <select
                value={count}
                onChange={(e) => setCount(Number(e.target.value))}
                disabled={loading}
                className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 disabled:bg-gray-50"
              >
                {[1, 2, 3, 4, 5].map((n) => (
                  <option key={n} value={n}>
                    {n}
                  </option>
                ))}
              </select>
            </div>

            <div className="space-y-1.5">
              <label className="text-sm font-medium text-gray-700">
                {T.difficulty[language]}
              </label>
              <select
                value={difficulty}
                onChange={(e) => setDifficulty(e.target.value as Difficulty)}
                disabled={loading}
                className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 disabled:bg-gray-50"
              >
                {(["easy", "medium", "hard"] as const).map((d) => (
                  <option key={d} value={d}>
                    {DIFFICULTY_LABELS[d][language]}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <Button onClick={handleGenerate} disabled={loading}>
              {loading
                ? T.generating[language]
                : questions.length > 0
                ? T.regenerate[language]
                : T.generate[language]}
            </Button>
            {loading && (
              <span className="inline-flex items-center gap-2 text-sm text-gray-500">
                <span className="inline-block size-3 animate-spin rounded-full border-2 border-gray-300 border-t-blue-500" />
                {T.generating[language]}
              </span>
            )}
          </div>

          {error && (
            <div className="rounded-lg border border-red-200 bg-red-50 px-3 py-2 text-sm text-red-700">
              {T.errorPrefix[language]}: {error}
            </div>
          )}
        </CardContent>
      </Card>

      {!loading && questions.length === 0 && !error && (
        <Card>
          <CardContent className="py-8 text-center text-sm text-gray-500">
            {T.empty[language]}
          </CardContent>
        </Card>
      )}

      {questions.map((q, i) => (
        <PracticeProblemCard
          key={q.id ?? i}
          question={q}
          language={language}
          index={i}
          onAnswerChecked={handleAnswerChecked}
        />
      ))}
    </div>
  );
}
