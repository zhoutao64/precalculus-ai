"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import type { PracticeQuestion } from "@/lib/ai/types";
import { MarkdownMath } from "@/components/ui/markdown-math";
import { MathText } from "@/components/ui/math";
import type { SupportedLanguage } from "@/types/curriculum";

const T = {
  yourAnswer: { en: "Your Answer", zh: "你的答案" },
  enterAnswer: { en: "Enter your answer…", zh: "输入你的答案…" },
  check: { en: "Check Answer", zh: "检查答案" },
  tryAgain: { en: "Try Again", zh: "再试一次" },
  correct: { en: "Correct!", zh: "正确！" },
  incorrect: { en: "Not quite — the answer was", zh: "不太对——正确答案是" },
  showExplanation: { en: "Show Explanation", zh: "查看解析" },
  hideExplanation: { en: "Hide Explanation", zh: "隐藏解析" },
  showHint: { en: "Show Hint", zh: "查看提示" },
  hint: { en: "Hint", zh: "提示" },
  difficulty: { en: "Difficulty", zh: "难度" },
};

const DIFFICULTY_COLORS: Record<string, string> = {
  easy: "bg-green-100 text-green-700",
  medium: "bg-yellow-100 text-yellow-700",
  hard: "bg-red-100 text-red-700",
};

type Props = {
  question: PracticeQuestion;
  language: SupportedLanguage;
  index?: number;
  onAnswerChecked?: (questionId: string, answer: string, isCorrect: boolean) => void;
};

function normalize(s: string): string {
  return s.trim().toLowerCase().replace(/\s+/g, "");
}

export function PracticeProblemCard({ question, language, index, onAnswerChecked }: Props) {
  const [selectedChoice, setSelectedChoice] = useState<string | null>(null);
  const [freeResponse, setFreeResponse] = useState("");
  const [checked, setChecked] = useState(false);
  const [showExplanation, setShowExplanation] = useState(false);
  const [hintsShown, setHintsShown] = useState(0);

  const isMultipleChoice = !!question.choices && question.choices.length > 0;
  const userAnswer = isMultipleChoice ? selectedChoice ?? "" : freeResponse;
  const isCorrect =
    checked && normalize(userAnswer) === normalize(question.answer);

  const reset = () => {
    setSelectedChoice(null);
    setFreeResponse("");
    setChecked(false);
    setShowExplanation(false);
    setHintsShown(0);
  };

  const canCheck = isMultipleChoice ? !!selectedChoice : freeResponse.trim().length > 0;
  const hints = question.hints ?? [];

  return (
    <Card>
      <CardHeader>
        <div className="flex items-start justify-between gap-3">
          <CardTitle className="text-base">
            {typeof index === "number" ? `${index + 1}. ` : ""}
            {language === "en" ? "Question" : "题目"}
          </CardTitle>
          <span
            className={`rounded-full px-2 py-0.5 text-xs font-medium ${
              DIFFICULTY_COLORS[question.difficulty] ?? "bg-gray-100 text-gray-700"
            }`}
          >
            {question.difficulty}
          </span>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <MarkdownMath content={question.prompt} className="text-gray-800" />

        {isMultipleChoice ? (
          <div className="grid gap-2">
            {question.choices!.map((c) => {
              const selected = selectedChoice === c.id;
              const isAnswer = checked && c.id === question.answer;
              const isWrongPick = checked && selected && c.id !== question.answer;
              return (
                <button
                  key={c.id}
                  type="button"
                  disabled={checked}
                  onClick={() => setSelectedChoice(c.id)}
                  className={`flex items-start gap-3 rounded-lg border px-3 py-2 text-left text-sm transition ${
                    isAnswer
                      ? "border-green-500 bg-green-50 text-green-900"
                      : isWrongPick
                      ? "border-red-500 bg-red-50 text-red-900"
                      : selected
                      ? "border-blue-500 bg-blue-50"
                      : "border-gray-200 hover:border-gray-300 hover:bg-gray-50"
                  } ${checked ? "cursor-default" : "cursor-pointer"}`}
                >
                  <span className="font-mono font-semibold">{c.id}.</span>
                  <span className="flex-1"><MathText text={c.text} /></span>
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
              value={freeResponse}
              disabled={checked}
              onChange={(e) => setFreeResponse(e.target.value)}
              placeholder={T.enterAnswer[language]}
              className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 disabled:bg-gray-50"
            />
          </div>
        )}

        {checked && (
          <div
            className={`rounded-lg px-3 py-2 text-sm font-medium ${
              isCorrect
                ? "bg-green-50 text-green-700"
                : "bg-red-50 text-red-700"
            }`}
          >
            {isCorrect ? (
              <span>✅ {T.correct[language]}</span>
            ) : (
              <span>
                ❌ {T.incorrect[language]}{" "}
                <span className="font-mono">{question.answer}</span>
              </span>
            )}
          </div>
        )}

        <div className="flex flex-wrap gap-2">
          {!checked ? (
            <Button onClick={() => {
              setChecked(true);
              const answer = isMultipleChoice ? selectedChoice ?? "" : freeResponse;
              const correct = normalize(answer) === normalize(question.answer);
              onAnswerChecked?.(question.id, answer, correct);
            }} disabled={!canCheck} size="sm">
              {T.check[language]}
            </Button>
          ) : (
            <Button onClick={reset} variant="outline" size="sm">
              {T.tryAgain[language]}
            </Button>
          )}

          {hints.length > 0 && hintsShown < hints.length && !checked && (
            <Button
              onClick={() => setHintsShown((n) => n + 1)}
              variant="ghost"
              size="sm"
            >
              💡 {T.showHint[language]} ({hintsShown + 1}/{hints.length})
            </Button>
          )}

          {(checked || hintsShown > 0) && (
            <Button
              onClick={() => setShowExplanation((s) => !s)}
              variant="ghost"
              size="sm"
            >
              {showExplanation
                ? T.hideExplanation[language]
                : T.showExplanation[language]}
            </Button>
          )}
        </div>

        {hintsShown > 0 && (
          <div className="space-y-1.5">
            {hints.slice(0, hintsShown).map((h, i) => (
              <div
                key={i}
                className="rounded-lg border border-amber-200 bg-amber-50 px-3 py-2 text-sm text-amber-900"
              >
                <span className="font-medium">
                  {T.hint[language]} {i + 1}:
                </span>{" "}
                <MathText text={h} />
              </div>
            ))}
          </div>
        )}

        {showExplanation && (
          <div className="rounded-lg border border-blue-200 bg-blue-50 px-3 py-2 text-sm text-gray-800">
            <p className="mb-1 font-medium text-blue-900">
              {language === "en" ? "Solution" : "解题步骤"}
            </p>
            <MarkdownMath content={question.explanation} />
          </div>
        )}
      </CardContent>
    </Card>
  );
}
