"use client";

import { useEffect, useMemo, useRef } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import type { MockTestQuestion } from "./MockTestRunner";
import { MarkdownMath } from "@/components/ui/markdown-math";
import { MathText } from "@/components/ui/math";
import { useLearningHistory } from "@/hooks/useLearningHistory";
import type { SupportedLanguage } from "@/types/curriculum";
import type { MockTestHistoryPayload, StudentAnswer } from "@/types/history";

const T = {
  title: { en: "Test Results", zh: "测试结果" },
  score: { en: "Score", zh: "得分" },
  correct: { en: "Correct", zh: "正确" },
  incorrect: { en: "Incorrect", zh: "错误" },
  yourAnswer: { en: "Your answer", zh: "你的答案" },
  correctAnswer: { en: "Correct answer", zh: "正确答案" },
  explanation: { en: "Explanation", zh: "解析" },
  weakAreas: { en: "Weak Areas", zh: "薄弱知识点" },
  reviewQuestion: { en: "Question", zh: "第" },
  retake: { en: "Retake Test", zh: "重新测试" },
  noAnswer: { en: "(no answer)", zh: "（未作答）" },
};

type Props = {
  questions: MockTestQuestion[];
  answers: Record<string, string>;
  unitId: string;
  language: SupportedLanguage;
  onRestart: () => void;
};

export function MockTestResult({ questions, answers, unitId, language, onRestart }: Props) {
  const { addRecord } = useLearningHistory();
  const savedRef = useRef(false);

  const results = useMemo(() => {
    return questions.map((q) => {
      const userAnswer = (answers[q.id] ?? "").trim().toLowerCase();
      const correctAnswer = q.answer.trim().toLowerCase();
      const correct = userAnswer === correctAnswer;
      return { ...q, userAnswer: answers[q.id] ?? "", correct };
    });
  }, [questions, answers]);

  const correctCount = results.filter((r) => r.correct).length;
  const total = results.length;
  const percentage = Math.round((correctCount / total) * 100);

  // Weak areas: group incorrect by conceptTag
  const weakAreas = useMemo(() => {
    const map = new Map<string, number>();
    for (const r of results) {
      if (!r.correct && r.conceptTag) {
        map.set(r.conceptTag, (map.get(r.conceptTag) ?? 0) + 1);
      }
    }
    return Array.from(map.entries()).sort((a, b) => b[1] - a[1]);
  }, [results]);

  // Save history record once on mount
  useEffect(() => {
    if (savedRef.current) return;
    savedRef.current = true;

    const studentAnswers: StudentAnswer[] = results.map((r) => ({
      questionId: r.id,
      answer: r.userAnswer,
      isCorrect: r.correct,
    }));

    const weakConceptsList = weakAreas.map(([tag]) => tag);

    const payload: MockTestHistoryPayload = {
      mockTest: {
        title: language === "en" ? `Mock Test: ${unitId}` : `模拟测试: ${unitId}`,
        unitIds: [unitId],
        questions: questions.map((q) => ({
          id: q.id,
          unitId,
          language,
          prompt: q.prompt,
          answer: q.answer,
          explanation: q.explanation,
          difficulty: q.difficulty,
          choices: q.choices ?? undefined,
          conceptTag: q.conceptTag,
        })),
      },
      studentAnswers,
      feedback: {
        summary:
          language === "en"
            ? `Scored ${percentage}% (${correctCount}/${total})`
            : `得分 ${percentage}% (${correctCount}/${total})`,
        weakConcepts: weakConceptsList,
        mistakePatterns: [],
        recommendations: [],
      },
    };

    addRecord({
      type: "mock-test",
      title: language === "en" ? `Mock Test: ${unitId}` : `模拟测试: ${unitId}`,
      summary:
        language === "en"
          ? `${correctCount}/${total} correct (${percentage}%)`
          : `${correctCount}/${total} 正确 (${percentage}%)`,
      unitId,
      language,
      score: correctCount,
      totalQuestions: total,
      weakConcepts: weakConceptsList.length > 0 ? weakConceptsList : undefined,
      payload,
    });
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const scoreColor =
    percentage >= 80 ? "text-green-600" : percentage >= 60 ? "text-yellow-600" : "text-red-600";

  return (
    <div className="space-y-4">
      {/* Score Card */}
      <Card>
        <CardHeader>
          <CardTitle className="text-xl">{T.title[language]}</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-center gap-6">
            <div className={`text-5xl font-bold ${scoreColor}`}>{percentage}%</div>
            <div className="text-gray-600">
              <p className="text-lg">
                {correctCount} / {total} {T.correct[language]}
              </p>
              <p className="text-sm">
                {total - correctCount} {T.incorrect[language]}
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Weak Areas */}
      {weakAreas.length > 0 && (
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">⚠️ {T.weakAreas[language]}</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-1">
              {weakAreas.map(([tag, count]) => (
                <li key={tag} className="flex items-center gap-2 text-sm">
                  <span className="rounded bg-red-100 px-2 py-0.5 text-red-700">{count}×</span>
                  <span className="text-gray-700">{tag}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      )}

      {/* Question Review */}
      {results.map((r, i) => (
        <Card key={r.id} className={r.correct ? "border-green-200" : "border-red-200"}>
          <CardHeader className="pb-2">
            <div className="flex items-center justify-between">
              <CardTitle className="text-base">
                {T.reviewQuestion[language]} {language === "zh" ? `${i + 1} 题` : `${i + 1}`}
              </CardTitle>
              <span className={`text-lg ${r.correct ? "text-green-600" : "text-red-600"}`}>
                {r.correct ? "✅" : "❌"}
              </span>
            </div>
          </CardHeader>
          <CardContent className="space-y-2">
            <MarkdownMath content={r.prompt} className="text-sm text-gray-800" />
            <div className="flex gap-4 text-sm">
              <p>
                <span className="font-medium text-gray-500">{T.yourAnswer[language]}:</span>{" "}
                <span className={r.correct ? "text-green-700" : "text-red-700"}>
                  <MathText text={r.userAnswer || T.noAnswer[language]} />
                </span>
              </p>
              {!r.correct && (
                <p>
                  <span className="font-medium text-gray-500">{T.correctAnswer[language]}:</span>{" "}
                  <span className="text-green-700"><MathText text={r.answer} /></span>
                </p>
              )}
            </div>
            <div className="rounded bg-gray-50 p-3 text-sm text-gray-700">
              <p className="font-medium text-gray-500 mb-1">{T.explanation[language]}</p>
              <MarkdownMath content={r.explanation} />
            </div>
          </CardContent>
        </Card>
      ))}

      {/* Retake */}
      <div className="text-center">
        <Button onClick={onRestart} className="bg-blue-600 hover:bg-blue-700">
          {T.retake[language]}
        </Button>
      </div>
    </div>
  );
}
