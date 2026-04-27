"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MockTestResult } from "./MockTestResult";
import { MarkdownMath } from "@/components/ui/markdown-math";
import type { Difficulty, SupportedLanguage } from "@/types/curriculum";

export type MockTestChoice = {
  id: string;
  text: string;
};

export type MockTestQuestion = {
  id: string;
  prompt: string;
  choices: MockTestChoice[] | null;
  answer: string;
  explanation: string;
  difficulty: Difficulty;
  conceptTag: string;
};

const T = {
  question: { en: "Question", zh: "题目" },
  of: { en: "of", zh: "/" },
  yourAnswer: { en: "Your answer", zh: "你的答案" },
  enterAnswer: { en: "Type your answer…", zh: "输入你的答案…" },
  previous: { en: "Previous", zh: "上一题" },
  next: { en: "Next", zh: "下一题" },
  submit: { en: "Submit Test", zh: "提交测试" },
  submitting: { en: "Submitting…", zh: "提交中…" },
  unanswered: { en: "unanswered", zh: "未答" },
  timeLeft: { en: "Time left", zh: "剩余时间" },
  timeUp: { en: "Time's up — submitting…", zh: "时间到，正在提交…" },
};

const DIFFICULTY_COLORS: Record<string, string> = {
  easy: "bg-green-100 text-green-700",
  medium: "bg-yellow-100 text-yellow-700",
  hard: "bg-red-100 text-red-700",
};

function formatTime(seconds: number): string {
  const safe = Math.max(0, Math.floor(seconds));
  const m = Math.floor(safe / 60);
  const s = safe % 60;
  return `${m}:${s.toString().padStart(2, "0")}`;
}

type Props = {
  questions: MockTestQuestion[];
  timeLimitMinutes: number;
  unitId: string;
  language: SupportedLanguage;
  onExit: () => void;
};

export function MockTestRunner({
  questions,
  timeLimitMinutes,
  unitId,
  language,
  onExit,
}: Props) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);
  const [secondsLeft, setSecondsLeft] = useState(
    Math.max(60, Math.floor(timeLimitMinutes * 60)),
  );

  const submittedRef = useRef(false);

  useEffect(() => {
    if (submitted) return;
    const id = setInterval(() => {
      setSecondsLeft((s) => {
        if (s <= 1) {
          clearInterval(id);
          if (!submittedRef.current) {
            submittedRef.current = true;
            setSubmitted(true);
          }
          return 0;
        }
        return s - 1;
      });
    }, 1000);
    return () => clearInterval(id);
  }, [submitted]);

  const answeredCount = useMemo(
    () => questions.filter((q) => (answers[q.id] ?? "").trim().length > 0).length,
    [answers, questions],
  );
  const allAnswered = answeredCount === questions.length;

  if (submitted) {
    return (
      <MockTestResult
        questions={questions}
        answers={answers}
        unitId={unitId}
        language={language}
        onRestart={onExit}
      />
    );
  }

  const current = questions[currentIndex];
  const userAnswer = answers[current.id] ?? "";
  const isMultipleChoice = !!current.choices && current.choices.length > 0;

  const setAnswer = (value: string) => {
    setAnswers((prev) => ({ ...prev, [current.id]: value }));
  };

  const goToNext = () => {
    if (currentIndex < questions.length - 1) {
      setCurrentIndex((i) => i + 1);
    }
  };

  const goToPrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((i) => i - 1);
    }
  };

  const handleChoice = (choiceId: string) => {
    setAnswer(choiceId);
    if (currentIndex < questions.length - 1) {
      setTimeout(() => setCurrentIndex((i) => i + 1), 150);
    }
  };

  const handleSubmit = () => {
    if (submittedRef.current) return;
    submittedRef.current = true;
    setSubmitted(true);
  };

  const timerWarning = secondsLeft <= 60;

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between gap-3">
          <div className="text-sm font-medium text-gray-700">
            {T.question[language]} {currentIndex + 1} {T.of[language]}{" "}
            {questions.length}
          </div>
          <div
            className={`rounded-full px-3 py-1 font-mono text-sm font-semibold ${
              timerWarning
                ? "bg-red-100 text-red-700"
                : "bg-gray-100 text-gray-800"
            }`}
            aria-label={T.timeLeft[language]}
          >
            ⏱ {formatTime(secondsLeft)}
          </div>
        </div>
        <div className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-gray-100">
          <div
            className="h-full bg-blue-500 transition-all"
            style={{
              width: `${((currentIndex + 1) / questions.length) * 100}%`,
            }}
          />
        </div>
        <div className="mt-2 flex items-center gap-2 text-xs text-gray-500">
          <span>
            {answeredCount}/{questions.length}
          </span>
          <span
            className={`rounded-full px-2 py-0.5 text-xs font-medium ${
              DIFFICULTY_COLORS[current.difficulty] ?? "bg-gray-100 text-gray-700"
            }`}
          >
            {current.difficulty}
          </span>
        </div>
      </CardHeader>

      <CardContent className="space-y-4">
        <MarkdownMath content={current.prompt} className="text-gray-800" />

        {isMultipleChoice ? (
          <div className="grid gap-2">
            {current.choices!.map((c) => {
              const selected = userAnswer === c.id;
              return (
                <button
                  key={c.id}
                  type="button"
                  onClick={() => handleChoice(c.id)}
                  className={`flex items-start gap-3 rounded-lg border px-3 py-2 text-left text-sm transition ${
                    selected
                      ? "border-blue-500 bg-blue-50"
                      : "border-gray-200 hover:border-gray-300 hover:bg-gray-50"
                  }`}
                >
                  <span className="font-mono font-semibold">{c.id}.</span>
                  <span className="flex-1">{c.text}</span>
                </button>
              );
            })}
          </div>
        ) : (
          <div className="space-y-1">
            <label className="text-sm font-medium text-gray-600">
              {T.yourAnswer[language]}
            </label>
            <input
              type="text"
              value={userAnswer}
              onChange={(e) => setAnswer(e.target.value)}
              placeholder={T.enterAnswer[language]}
              className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
            />
          </div>
        )}

        <div className="flex flex-wrap items-center justify-between gap-2 pt-2">
          <div className="flex gap-2">
            <Button
              onClick={goToPrev}
              disabled={currentIndex === 0}
              variant="outline"
              size="sm"
            >
              ← {T.previous[language]}
            </Button>
            <Button
              onClick={goToNext}
              disabled={currentIndex === questions.length - 1}
              variant="outline"
              size="sm"
            >
              {T.next[language]} →
            </Button>
          </div>

          <Button
            onClick={handleSubmit}
            disabled={!allAnswered}
            size="sm"
            title={
              allAnswered
                ? undefined
                : `${questions.length - answeredCount} ${T.unanswered[language]}`
            }
          >
            {T.submit[language]} ({answeredCount}/{questions.length})
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
