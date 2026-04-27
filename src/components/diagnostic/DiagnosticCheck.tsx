"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MarkdownMath } from "@/components/ui/markdown-math";
import { useLearningHistory } from "@/hooks/useLearningHistory";
import type { SupportedLanguage } from "@/types/curriculum";
import type {
  DiagnosticHistoryPayload,
  StudentAnswer,
} from "@/types/history";

const T = {
  title: { en: "Diagnostic Check", zh: "诊断测试" },
  description: {
    en: "Quick check to assess what you already know in this unit.",
    zh: "快速检测你在本单元已经掌握的知识。",
  },
  start: { en: "Start Diagnostic", zh: "开始诊断" },
  generating: { en: "Generating questions…", zh: "生成题目中…" },
  errorPrefix: { en: "Failed to generate", zh: "生成失败" },
  question: { en: "Question", zh: "题目" },
  of: { en: "of", zh: "/" },
  yourAnswer: { en: "Your answer", zh: "你的答案" },
  enterAnswer: { en: "Type your answer…", zh: "输入你的答案…" },
  previous: { en: "Previous", zh: "上一题" },
  next: { en: "Next", zh: "下一题" },
  submit: { en: "Submit", zh: "提交" },
  analyzing: { en: "Analyzing…", zh: "分析中…" },
  unanswered: { en: "unanswered", zh: "未答" },
  results: { en: "Diagnostic Results", zh: "诊断结果" },
  score: { en: "Score", zh: "得分" },
  weakConcepts: { en: "Weak Areas", zh: "薄弱知识点" },
  masteredConcepts: { en: "Mastered", zh: "已掌握" },
  recommendations: { en: "Recommendations", zh: "建议" },
  nextSteps: { en: "Next Steps", zh: "下一步" },
  retake: { en: "Retake Diagnostic", zh: "重新诊断" },
  noAnswer: { en: "(no answer)", zh: "（未作答）" },
  correct: { en: "Correct", zh: "正确" },
  incorrect: { en: "Incorrect", zh: "错误" },
};

type DiagnosticQuestion = {
  id: string;
  difficulty: "easy" | "medium" | "hard";
  prompt: string;
  choices?: { id: string; text: string }[] | null;
  answer: string;
  conceptId?: string;
};

type AnalysisResult = {
  score: number;
  weakConcepts: string[];
  recommendations: string[];
  nextSteps: string[];
};

const DIFFICULTY_COLORS: Record<string, string> = {
  easy: "bg-green-100 text-green-700",
  medium: "bg-yellow-100 text-yellow-700",
  hard: "bg-red-100 text-red-700",
};

type Props = {
  unitId: string;
  language: SupportedLanguage;
};

type Phase = "idle" | "generating" | "quiz" | "analyzing" | "results";

export function DiagnosticCheck({ unitId, language }: Props) {
  const [phase, setPhase] = useState<Phase>("idle");
  const [error, setError] = useState<string | null>(null);
  const [questions, setQuestions] = useState<DiagnosticQuestion[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [analysis, setAnalysis] = useState<AnalysisResult | null>(null);
  const savedRef = useRef(false);
  const { addRecord } = useLearningHistory();

  const answeredCount = useMemo(
    () => questions.filter((q) => (answers[q.id] ?? "").trim().length > 0).length,
    [answers, questions],
  );

  const handleStart = async () => {
    setPhase("generating");
    setError(null);
    setQuestions([]);
    setAnswers({});
    setCurrentIndex(0);
    setAnalysis(null);
    savedRef.current = false;
    try {
      const res = await fetch("/api/diagnostic-check", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ unitId, language }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data?.error ?? `HTTP ${res.status}`);
      const qs = Array.isArray(data?.questions) ? (data.questions as DiagnosticQuestion[]) : [];
      if (qs.length === 0) throw new Error("No questions returned");
      setQuestions(qs);
      setPhase("quiz");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Unknown error");
      setPhase("idle");
    }
  };

  const handleSubmit = async () => {
    setPhase("analyzing");
    setError(null);
    try {
      const submittedAnswers = questions.map((q) => ({
        questionId: q.id,
        answer: (answers[q.id] ?? "").trim(),
      }));
      const res = await fetch("/api/diagnostic-check", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ unitId, language, answers: submittedAnswers, questions }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data?.error ?? `HTTP ${res.status}`);
      setAnalysis(data as AnalysisResult);
      setPhase("results");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Unknown error");
      setPhase("quiz");
    }
  };

  // Compute graded results for the results phase
  const gradedResults = useMemo(() => {
    return questions.map((q) => {
      const userAnswer = (answers[q.id] ?? "").trim().toLowerCase();
      const correctAnswer = q.answer.trim().toLowerCase();
      const isCorrect = userAnswer === correctAnswer;
      return { ...q, userAnswer: answers[q.id] ?? "", isCorrect };
    });
  }, [questions, answers]);

  const correctCount = gradedResults.filter((r) => r.isCorrect).length;

  // Save history once analysis is available
  useEffect(() => {
    if (phase !== "results" || !analysis || savedRef.current) return;
    savedRef.current = true;

    const studentAnswers: StudentAnswer[] = gradedResults.map((r) => ({
      questionId: r.id,
      answer: r.userAnswer,
      isCorrect: r.isCorrect,
    }));

    // Mastered = concepts from correct answers
    const masteredSet = new Set<string>();
    for (const r of gradedResults) {
      if (r.isCorrect && r.conceptId) masteredSet.add(r.conceptId);
    }

    const payload: DiagnosticHistoryPayload = {
      diagnosticCheck: {
        unitId,
        questions: questions.map((q) => ({
          id: q.id,
          unitId,
          language,
          prompt: q.prompt,
          answer: q.answer,
          explanation: "",
          difficulty: q.difficulty,
          choices: q.choices ?? undefined,
          conceptTag: q.conceptId,
        })),
      },
      studentAnswers,
      result: {
        weakConcepts: analysis.weakConcepts,
        masteredConcepts: Array.from(masteredSet),
        mistakePatterns: [],
        recommendedNextSteps: analysis.nextSteps,
      },
    };

    addRecord({
      type: "diagnostic-check",
      title: language === "en" ? `Diagnostic: ${unitId}` : `诊断测试: ${unitId}`,
      summary:
        language === "en"
          ? `Score ${analysis.score}% — ${correctCount}/${questions.length} correct`
          : `得分 ${analysis.score}% — ${correctCount}/${questions.length} 正确`,
      unitId,
      language,
      score: correctCount,
      totalQuestions: questions.length,
      weakConcepts: analysis.weakConcepts.length > 0 ? analysis.weakConcepts : undefined,
      payload,
    });
  }, [phase, analysis]); // eslint-disable-line react-hooks/exhaustive-deps

  // --- Idle phase ---
  if (phase === "idle" || phase === "generating") {
    return (
      <Card>
        <CardHeader>
          <CardTitle>{T.title[language]}</CardTitle>
          <p className="text-sm text-gray-600">{T.description[language]}</p>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center gap-3">
            <Button onClick={handleStart} disabled={phase === "generating"}>
              {phase === "generating" ? T.generating[language] : T.start[language]}
            </Button>
            {phase === "generating" && (
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

  // --- Quiz phase ---
  if (phase === "quiz" || phase === "analyzing") {
    const current = questions[currentIndex];
    const userAnswer = answers[current.id] ?? "";
    const isMultipleChoice = !!current.choices && current.choices.length > 0;
    const allAnswered = answeredCount === questions.length;
    const isAnalyzing = phase === "analyzing";

    return (
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between gap-3">
            <div className="text-sm font-medium text-gray-700">
              {T.question[language]} {currentIndex + 1} {T.of[language]} {questions.length}
            </div>
            <span
              className={`rounded-full px-2 py-0.5 text-xs font-medium ${
                DIFFICULTY_COLORS[current.difficulty] ?? "bg-gray-100 text-gray-700"
              }`}
            >
              {current.difficulty}
            </span>
          </div>
          <div className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-gray-100">
            <div
              className="h-full bg-cyan-500 transition-all"
              style={{ width: `${((currentIndex + 1) / questions.length) * 100}%` }}
            />
          </div>
          <div className="mt-2 text-xs text-gray-500">
            {answeredCount}/{questions.length}
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
                    disabled={isAnalyzing}
                    onClick={() => {
                      setAnswers((prev) => ({ ...prev, [current.id]: c.id }));
                      if (currentIndex < questions.length - 1) {
                        setTimeout(() => setCurrentIndex((i) => i + 1), 150);
                      }
                    }}
                    className={`flex items-start gap-3 rounded-lg border px-3 py-2 text-left text-sm transition ${
                      selected
                        ? "border-cyan-500 bg-cyan-50"
                        : "border-gray-200 hover:border-gray-300 hover:bg-gray-50"
                    } disabled:cursor-not-allowed disabled:opacity-50`}
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
                onChange={(e) =>
                  setAnswers((prev) => ({ ...prev, [current.id]: e.target.value }))
                }
                disabled={isAnalyzing}
                placeholder={T.enterAnswer[language]}
                className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-200 disabled:bg-gray-50"
              />
            </div>
          )}

          <div className="flex flex-wrap items-center justify-between gap-2 pt-2">
            <div className="flex gap-2">
              <Button
                onClick={() => setCurrentIndex((i) => i - 1)}
                disabled={currentIndex === 0 || isAnalyzing}
                variant="outline"
                size="sm"
              >
                {"\u2190"} {T.previous[language]}
              </Button>
              <Button
                onClick={() => setCurrentIndex((i) => i + 1)}
                disabled={currentIndex === questions.length - 1 || isAnalyzing}
                variant="outline"
                size="sm"
              >
                {T.next[language]} {"\u2192"}
              </Button>
            </div>

            <Button
              onClick={handleSubmit}
              disabled={!allAnswered || isAnalyzing}
              size="sm"
              title={
                allAnswered
                  ? undefined
                  : `${questions.length - answeredCount} ${T.unanswered[language]}`
              }
            >
              {isAnalyzing ? T.analyzing[language] : T.submit[language]} ({answeredCount}/
              {questions.length})
            </Button>
          </div>

          {error && (
            <div className="rounded-lg border border-red-200 bg-red-50 px-3 py-2 text-sm text-red-700">
              {error}
            </div>
          )}
        </CardContent>
      </Card>
    );
  }

  // --- Results phase ---
  const scoreColor =
    (analysis?.score ?? 0) >= 80
      ? "text-green-600"
      : (analysis?.score ?? 0) >= 60
      ? "text-yellow-600"
      : "text-red-600";

  return (
    <div className="space-y-4">
      {/* Score */}
      <Card>
        <CardHeader>
          <CardTitle className="text-xl">{T.results[language]}</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-center gap-6">
            <div className={`text-5xl font-bold ${scoreColor}`}>{analysis?.score ?? 0}%</div>
            <div className="text-gray-600">
              <p className="text-lg">
                {correctCount} / {questions.length} {T.correct[language]}
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Weak Concepts */}
      {analysis && analysis.weakConcepts.length > 0 && (
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">{T.weakConcepts[language]}</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-1">
              {analysis.weakConcepts.map((concept) => (
                <li key={concept} className="flex items-center gap-2 text-sm">
                  <span className="rounded bg-red-100 px-2 py-0.5 text-red-700">!</span>
                  <span className="text-gray-700">{concept}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      )}

      {/* Recommendations */}
      {analysis && analysis.recommendations.length > 0 && (
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">{T.recommendations[language]}</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              {analysis.recommendations.map((rec, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
                  <span className="mt-0.5 text-blue-500">*</span>
                  <span>{rec}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      )}

      {/* Next Steps */}
      {analysis && analysis.nextSteps.length > 0 && (
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">{T.nextSteps[language]}</CardTitle>
          </CardHeader>
          <CardContent>
            <ol className="space-y-2">
              {analysis.nextSteps.map((step, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
                  <span className="font-semibold text-cyan-600">{i + 1}.</span>
                  <span>{step}</span>
                </li>
              ))}
            </ol>
          </CardContent>
        </Card>
      )}

      {/* Question Review */}
      {gradedResults.map((r, i) => (
        <Card key={r.id} className={r.isCorrect ? "border-green-200" : "border-red-200"}>
          <CardHeader className="pb-2">
            <div className="flex items-center justify-between">
              <CardTitle className="text-base">
                {T.question[language]} {i + 1}
              </CardTitle>
              <span className={`text-lg ${r.isCorrect ? "text-green-600" : "text-red-600"}`}>
                {r.isCorrect ? "\u2705" : "\u274C"}
              </span>
            </div>
          </CardHeader>
          <CardContent className="space-y-2">
            <MarkdownMath content={r.prompt} className="text-sm text-gray-800" />
            <div className="flex gap-4 text-sm">
              <p>
                <span className="font-medium text-gray-500">{T.yourAnswer[language]}:</span>{" "}
                <span className={r.isCorrect ? "text-green-700" : "text-red-700"}>
                  {r.userAnswer || T.noAnswer[language]}
                </span>
              </p>
              {!r.isCorrect && (
                <p>
                  <span className="font-medium text-gray-500">
                    {language === "en" ? "Correct" : "正确答案"}:
                  </span>{" "}
                  <span className="text-green-700">{r.answer}</span>
                </p>
              )}
            </div>
          </CardContent>
        </Card>
      ))}

      {/* Retake */}
      <div className="text-center">
        <Button onClick={handleStart} className="bg-cyan-600 hover:bg-cyan-700">
          {T.retake[language]}
        </Button>
      </div>
    </div>
  );
}
