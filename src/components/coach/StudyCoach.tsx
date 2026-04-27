"use client";

import { useState } from "react";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useLearningHistory } from "@/hooks/useLearningHistory";
import type { SupportedLanguage } from "@/types/curriculum";
import type { StudyCoachHistoryPayload } from "@/types/history";

const T = {
  title: { en: "Study Coach", zh: "学习教练" },
  description: {
    en: "Tell us what you want to study and we'll build you a step-by-step plan.",
    zh: "告诉我们你想学习什么，我们会为你制定分步学习计划。",
  },
  placeholder: {
    en: "What do you want to study? e.g. I need to prepare for a test on trigonometry...",
    zh: "你想学习什么？例如：我需要准备一场三角学考试……",
  },
  submit: { en: "Get Study Plan", zh: "获取学习计划" },
  loading: { en: "Building your plan…", zh: "正在生成你的计划……" },
  planTitle: { en: "Your Plan", zh: "你的学习计划" },
  stepsTitle: { en: "Steps", zh: "步骤" },
  goToUnit: { en: "Go to unit →", zh: "前往单元 →" },
  errorPrefix: { en: "Failed to generate plan", zh: "生成失败" },
};

type Step = {
  title: string;
  description: string;
  unitId?: string;
};

type CoachResult = {
  summary: string;
  steps: Step[];
};

type Props = {
  language?: SupportedLanguage;
};

export function StudyCoach({ language = "en" }: Props) {
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [result, setResult] = useState<CoachResult | null>(null);
  const { addRecord } = useLearningHistory();

  const handleSubmit = async () => {
    if (!query.trim()) return;
    setLoading(true);
    setError(null);
    setResult(null);

    try {
      const res = await fetch("/api/study-coach", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ query: query.trim(), language }),
      });
      const data = await res.json();
      if (!res.ok) {
        throw new Error(data?.error ?? `HTTP ${res.status}`);
      }
      const coachResult: CoachResult = {
        summary: typeof data?.summary === "string" ? data.summary : "",
        steps: Array.isArray(data?.steps) ? data.steps : [],
      };
      setResult(coachResult);

      // Save to learning history
      const unitIds = coachResult.steps
        .map((s) => s.unitId)
        .filter((id): id is string => !!id);
      const payload: StudyCoachHistoryPayload = {
        userInput: query.trim(),
        coachPlan: {
          identifiedScope: coachResult.summary,
          steps: coachResult.steps.map((s) => s.title),
          recommendedUnits: unitIds,
        },
      };
      addRecord({
        type: "study-coach",
        title: query.trim().slice(0, 80),
        summary: coachResult.summary,
        unitId: unitIds[0],
        language,
        payload,
      });
    } catch (err) {
      setError(err instanceof Error ? err.message : "Unknown error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="text-xl">{T.title[language]}</CardTitle>
          <p className="text-sm text-gray-600">{T.description[language]}</p>
        </CardHeader>
        <CardContent className="space-y-3">
          <textarea
            className="w-full rounded-md border border-gray-300 p-3 text-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
            rows={5}
            placeholder={T.placeholder[language]}
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            disabled={loading}
          />
          <div className="flex items-center gap-3">
            <Button
              onClick={handleSubmit}
              disabled={loading || !query.trim()}
              className="bg-blue-600 hover:bg-blue-700"
            >
              {loading ? T.loading[language] : T.submit[language]}
            </Button>
            {loading && (
              <span className="inline-flex items-center gap-2 text-sm text-gray-500">
                <span className="inline-block size-3 animate-spin rounded-full border-2 border-gray-300 border-t-blue-500" />
                {T.loading[language]}
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

      {result && (
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">{T.planTitle[language]}</CardTitle>
            {result.summary && (
              <p className="text-sm text-gray-700">{result.summary}</p>
            )}
          </CardHeader>
          <CardContent className="space-y-3">
            {result.steps.map((step, i) => (
              <div
                key={i}
                className="flex gap-3 rounded-lg border border-gray-200 bg-white p-4"
              >
                <div className="flex size-8 shrink-0 items-center justify-center rounded-full bg-blue-600 text-sm font-semibold text-white">
                  {i + 1}
                </div>
                <div className="flex-1 space-y-1">
                  <h3 className="text-sm font-semibold text-gray-900">
                    {step.title}
                  </h3>
                  <p className="text-sm text-gray-700">{step.description}</p>
                  {step.unitId && (
                    <Link
                      href={`/unit/${step.unitId}`}
                      className="inline-block text-sm font-medium text-blue-600 hover:underline"
                    >
                      {T.goToUnit[language]}
                    </Link>
                  )}
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      )}
    </div>
  );
}
