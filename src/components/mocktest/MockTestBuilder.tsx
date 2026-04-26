"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MockTestRunner, type MockTestQuestion } from "./MockTestRunner";
import type { SupportedLanguage } from "@/types/curriculum";

const T = {
  title: { en: "Mock Test", zh: "模拟测试" },
  description: {
    en: "Take a timed mock test on this unit's material.",
    zh: "对本单元内容进行限时模拟测试。",
  },
  count: { en: "Number of questions", zh: "题目数量" },
  start: { en: "Start Test", zh: "开始测试" },
  generating: { en: "Generating test…", zh: "生成测试中…" },
  errorPrefix: { en: "Failed to generate", zh: "生成失败" },
};

const COUNT_OPTIONS = [5, 10, 15, 20] as const;

type Props = {
  unitId: string;
  language: SupportedLanguage;
};

export function MockTestBuilder({ unitId, language }: Props) {
  const [questionCount, setQuestionCount] = useState<number>(10);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [questions, setQuestions] = useState<MockTestQuestion[] | null>(null);
  const [timeLimit, setTimeLimit] = useState<number>(0);

  const handleStart = async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch("/api/generate-mock-test", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ unitId, language, questionCount }),
      });
      const data = await res.json();
      if (!res.ok) {
        throw new Error(data?.error ?? `HTTP ${res.status}`);
      }
      const qs = Array.isArray(data?.questions) ? (data.questions as MockTestQuestion[]) : [];
      if (qs.length === 0) {
        throw new Error("No questions returned");
      }
      setQuestions(qs);
      setTimeLimit(typeof data?.timeLimit === "number" ? data.timeLimit : qs.length * 2);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Unknown error");
    } finally {
      setLoading(false);
    }
  };

  const handleExit = () => {
    setQuestions(null);
    setTimeLimit(0);
    setError(null);
  };

  if (questions) {
    return (
      <MockTestRunner
        questions={questions}
        timeLimitMinutes={timeLimit}
        language={language}
        onExit={handleExit}
      />
    );
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>{T.title[language]}</CardTitle>
        <p className="text-sm text-gray-600">{T.description[language]}</p>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-1.5">
          <label className="text-sm font-medium text-gray-700">
            {T.count[language]}
          </label>
          <div className="flex flex-wrap gap-2">
            {COUNT_OPTIONS.map((n) => {
              const active = n === questionCount;
              return (
                <button
                  key={n}
                  type="button"
                  disabled={loading}
                  onClick={() => setQuestionCount(n)}
                  className={`rounded-lg border px-4 py-2 text-sm font-medium transition ${
                    active
                      ? "border-blue-500 bg-blue-50 text-blue-700"
                      : "border-gray-200 bg-white text-gray-700 hover:border-gray-300 hover:bg-gray-50"
                  } disabled:cursor-not-allowed disabled:opacity-50`}
                >
                  {n}
                </button>
              );
            })}
          </div>
        </div>

        <div className="flex items-center gap-3">
          <Button onClick={handleStart} disabled={loading}>
            {loading ? T.generating[language] : T.start[language]}
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
  );
}
