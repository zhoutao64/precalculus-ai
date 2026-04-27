"use client";

import type {
  HistoryRecord,
  StudyCoachHistoryPayload,
  TutorHistoryPayload,
  PracticeSessionHistoryPayload,
  TargetedPracticeHistoryPayload,
  MockTestHistoryPayload,
  DiagnosticHistoryPayload,
  MistakeReviewHistoryPayload,
  MistakePattern,
  StudentAnswer,
} from "@/types/history";
import type { PracticeQuestion } from "@/lib/ai/types";
import { useTranslation } from "@/i18n/useTranslation";
import { Button } from "@/components/ui/button";
import { MathText } from "@/components/ui/math";

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="space-y-1">
      <h4 className="text-xs font-semibold uppercase tracking-wide text-gray-400">
        {title}
      </h4>
      <div>{children}</div>
    </div>
  );
}

function AnswerList({
  questions,
  answers,
  d,
}: {
  questions: PracticeQuestion[];
  answers: StudentAnswer[];
  d: Record<string, string>;
}) {
  return (
    <ol className="list-decimal space-y-3 pl-4 text-sm">
      {questions.map((q, i) => {
        const sa = answers.find((a) => a.questionId === q.id) ?? answers[i];
        return (
          <li key={q.id ?? i} className="space-y-0.5">
            <MathText text={q.prompt} className="block font-medium text-gray-800" />
            {sa && (
              <>
                <MathText
                  text={`${d.yourAnswer}: ${sa.answer} ${sa.isCorrect ? `✓ ${d.correct}` : `✗ ${d.incorrect}`}`}
                  className={`block ${sa.isCorrect ? "text-green-600" : "text-red-600"}`}
                />
                {!sa.isCorrect && q.answer && (
                  <MathText
                    text={`${d.correctAnswer}: ${q.answer}`}
                    className="block text-gray-600"
                  />
                )}
              </>
            )}
            {q.explanation && (
              <MathText
                text={`${d.explanation}: ${q.explanation}`}
                className="block text-xs text-gray-500"
              />
            )}
          </li>
        );
      })}
    </ol>
  );
}

function MistakePatternList({
  patterns,
  d,
}: {
  patterns: MistakePattern[];
  d: Record<string, string>;
}) {
  return (
    <ul className="space-y-2 text-sm">
      {patterns.map((mp, i) => (
        <li key={i} className="rounded-lg bg-orange-50 p-2">
          <MathText text={mp.pattern} className="block font-medium text-orange-800" />
          <p className="text-xs text-orange-600">
            {d.frequency}: {mp.frequency}
          </p>
          {mp.examples.length > 0 && (
            <p className="text-xs text-orange-600">
              {d.examples}: {mp.examples.join(", ")}
            </p>
          )}
        </li>
      ))}
    </ul>
  );
}

function FeedbackSection({
  feedback,
  d,
}: {
  feedback: { summary: string; weakConcepts: string[]; mistakePatterns: MistakePattern[]; recommendations: string[] };
  d: Record<string, string>;
}) {
  return (
    <div className="space-y-3">
      <Section title={d.summary}>
        <MathText text={feedback.summary} className="block text-sm text-gray-700" />
      </Section>
      {feedback.weakConcepts.length > 0 && (
        <Section title={d.weakConcepts}>
          <div className="flex flex-wrap gap-1">
            {feedback.weakConcepts.map((c) => (
              <span
                key={c}
                className="rounded-full bg-red-50 px-2 py-0.5 text-xs text-red-700"
              >
                {c}
              </span>
            ))}
          </div>
        </Section>
      )}
      {feedback.mistakePatterns.length > 0 && (
        <Section title={d.mistakePatterns}>
          <MistakePatternList patterns={feedback.mistakePatterns} d={d} />
        </Section>
      )}
      {feedback.recommendations.length > 0 && (
        <Section title={d.recommendations}>
          <ul className="list-disc pl-4 text-sm text-gray-700">
            {feedback.recommendations.map((r, i) => (
              <li key={i}><MathText text={r} /></li>
            ))}
          </ul>
        </Section>
      )}
    </div>
  );
}

// ---------------------------------------------------------------------------
// Per-type detail renderers
// ---------------------------------------------------------------------------

function StudyCoachDetail({
  payload,
  d,
}: {
  payload: StudyCoachHistoryPayload;
  d: Record<string, string>;
}) {
  return (
    <div className="space-y-4">
      <Section title={d.userInput}>
        <MathText text={payload.userInput} className="block text-sm text-gray-700" />
      </Section>
      <Section title={d.identifiedScope}>
        <MathText text={payload.coachPlan.identifiedScope} className="block text-sm text-gray-700" />
      </Section>
      <Section title={d.recommendedPath}>
        <ol className="list-decimal pl-4 text-sm text-gray-700">
          {payload.coachPlan.steps.map((s, i) => (
            <li key={i}><MathText text={s} /></li>
          ))}
        </ol>
      </Section>
      {payload.coachPlan.recommendedUnits.length > 0 && (
        <Section title={d.recommendedUnits}>
          <div className="flex flex-wrap gap-1">
            {payload.coachPlan.recommendedUnits.map((u) => (
              <span
                key={u}
                className="rounded-full bg-purple-50 px-2 py-0.5 text-xs text-purple-700"
              >
                {u}
              </span>
            ))}
          </div>
        </Section>
      )}
    </div>
  );
}

function TutorDetail({
  payload,
  d,
}: {
  payload: TutorHistoryPayload;
  d: Record<string, string>;
}) {
  return (
    <div className="space-y-4">
      {payload.context?.topicHint && (
        <Section title={d.topic}>
          <MathText text={payload.context.topicHint} className="block text-sm text-gray-700" />
        </Section>
      )}
      <Section title={d.messages}>
        <div className="space-y-2 max-h-80 overflow-y-auto">
          {payload.messages.map((msg, i) => (
            <div
              key={i}
              className={`rounded-lg p-2 text-sm ${
                msg.role === "user"
                  ? "bg-blue-50 text-blue-900"
                  : "bg-gray-50 text-gray-800"
              }`}
            >
              <span className="text-xs font-medium uppercase text-gray-400">
                {msg.role}
              </span>
              <MathText text={msg.content} className="block mt-0.5" />
            </div>
          ))}
        </div>
      </Section>
    </div>
  );
}

function PracticeDetail({
  payload,
  d,
}: {
  payload: PracticeSessionHistoryPayload;
  d: Record<string, string>;
}) {
  return (
    <div className="space-y-4">
      <Section title={d.questions}>
        <AnswerList
          questions={payload.questions}
          answers={payload.studentAnswers}
          d={d}
        />
      </Section>
      {payload.feedback && (
        <FeedbackSection feedback={payload.feedback} d={d} />
      )}
    </div>
  );
}

function TargetedPracticeDetail({
  payload,
  d,
}: {
  payload: TargetedPracticeHistoryPayload;
  d: Record<string, string>;
}) {
  return (
    <div className="space-y-4">
      <Section title={d.userRequest}>
        <MathText text={payload.userRequest} className="block text-sm text-gray-700" />
      </Section>
      <Section title={d.questions}>
        <AnswerList
          questions={payload.questions}
          answers={payload.studentAnswers ?? []}
          d={d}
        />
      </Section>
      {payload.feedback && (
        <FeedbackSection feedback={payload.feedback} d={d} />
      )}
    </div>
  );
}

function MockTestDetail({
  payload,
  d,
}: {
  payload: MockTestHistoryPayload;
  d: Record<string, string>;
}) {
  return (
    <div className="space-y-4">
      <Section title={d.testTitle}>
        <MathText text={payload.mockTest.title} className="block text-sm text-gray-700" />
      </Section>
      {payload.mockTest.unitIds.length > 0 && (
        <Section title={d.testScope}>
          <div className="flex flex-wrap gap-1">
            {payload.mockTest.unitIds.map((u) => (
              <span
                key={u}
                className="rounded-full bg-gray-100 px-2 py-0.5 text-xs text-gray-700"
              >
                {u}
              </span>
            ))}
          </div>
        </Section>
      )}
      <Section title={d.questions}>
        <AnswerList
          questions={payload.mockTest.questions}
          answers={payload.studentAnswers}
          d={d}
        />
      </Section>
      {payload.feedback && (
        <FeedbackSection feedback={payload.feedback} d={d} />
      )}
    </div>
  );
}

function DiagnosticDetail({
  payload,
  d,
}: {
  payload: DiagnosticHistoryPayload;
  d: Record<string, string>;
}) {
  return (
    <div className="space-y-4">
      <Section title={d.questions}>
        <AnswerList
          questions={payload.diagnosticCheck.questions}
          answers={payload.studentAnswers}
          d={d}
        />
      </Section>

      <Section title={d.diagnosticResult}>
        <div className="space-y-3">
          {payload.result.weakConcepts.length > 0 && (
            <div>
              <p className="text-xs font-medium text-red-600 mb-1">{d.weakConcepts}</p>
              <div className="flex flex-wrap gap-1">
                {payload.result.weakConcepts.map((c) => (
                  <span key={c} className="rounded-full bg-red-50 px-2 py-0.5 text-xs text-red-700">{c}</span>
                ))}
              </div>
            </div>
          )}
          {payload.result.masteredConcepts.length > 0 && (
            <div>
              <p className="text-xs font-medium text-green-600 mb-1">{d.masteredConcepts}</p>
              <div className="flex flex-wrap gap-1">
                {payload.result.masteredConcepts.map((c) => (
                  <span key={c} className="rounded-full bg-green-50 px-2 py-0.5 text-xs text-green-700">{c}</span>
                ))}
              </div>
            </div>
          )}
          {payload.result.mistakePatterns.length > 0 && (
            <div>
              <p className="text-xs font-medium text-orange-600 mb-1">{d.mistakePatterns}</p>
              <MistakePatternList patterns={payload.result.mistakePatterns} d={d} />
            </div>
          )}
          {payload.result.recommendedNextSteps.length > 0 && (
            <div>
              <p className="text-xs font-medium text-blue-600 mb-1">{d.nextSteps}</p>
              <ul className="list-disc pl-4 text-sm text-gray-700">
                {payload.result.recommendedNextSteps.map((s, i) => (
                  <li key={i}><MathText text={s} /></li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </Section>
    </div>
  );
}

function MistakeReviewDetail({
  payload,
  d,
}: {
  payload: MistakeReviewHistoryPayload;
  d: Record<string, string>;
}) {
  return (
    <div className="space-y-4">
      {payload.sourceRecordId && (
        <Section title={d.sourceRecord}>
          <p className="text-sm text-gray-500">{payload.sourceRecordId}</p>
        </Section>
      )}
      {payload.weakConcepts.length > 0 && (
        <Section title={d.weakConcepts}>
          <div className="flex flex-wrap gap-1">
            {payload.weakConcepts.map((c) => (
              <span key={c} className="rounded-full bg-red-50 px-2 py-0.5 text-xs text-red-700">{c}</span>
            ))}
          </div>
        </Section>
      )}
      {payload.mistakePatterns.length > 0 && (
        <Section title={d.mistakePatterns}>
          <MistakePatternList patterns={payload.mistakePatterns} d={d} />
        </Section>
      )}
      {payload.recommendedReview.length > 0 && (
        <Section title={d.recommendedReview}>
          <ul className="list-disc pl-4 text-sm text-gray-700">
            {payload.recommendedReview.map((r, i) => (
              <li key={i}><MathText text={r} /></li>
            ))}
          </ul>
        </Section>
      )}
      {payload.nextPracticeSuggestions.length > 0 && (
        <Section title={d.nextPractice}>
          <ul className="list-disc pl-4 text-sm text-gray-700">
            {payload.nextPracticeSuggestions.map((s, i) => (
              <li key={i}><MathText text={s} /></li>
            ))}
          </ul>
        </Section>
      )}
    </div>
  );
}

// ---------------------------------------------------------------------------
// Main dialog component
// ---------------------------------------------------------------------------

export function HistoryDetail({
  record,
  onClose,
}: {
  record: HistoryRecord;
  onClose: () => void;
}) {
  const { t } = useTranslation();
  const d = t.history.detail as Record<string, string>;

  function renderPayload() {
    switch (record.type) {
      case "study-coach":
        return <StudyCoachDetail payload={record.payload as StudyCoachHistoryPayload} d={d} />;
      case "ai-tutor":
        return <TutorDetail payload={record.payload as TutorHistoryPayload} d={d} />;
      case "practice-session":
        return <PracticeDetail payload={record.payload as PracticeSessionHistoryPayload} d={d} />;
      case "targeted-practice":
        return <TargetedPracticeDetail payload={record.payload as TargetedPracticeHistoryPayload} d={d} />;
      case "mock-test":
        return <MockTestDetail payload={record.payload as MockTestHistoryPayload} d={d} />;
      case "diagnostic-check":
        return <DiagnosticDetail payload={record.payload as DiagnosticHistoryPayload} d={d} />;
      case "mistake-review":
        return <MistakeReviewDetail payload={record.payload as MistakeReviewHistoryPayload} d={d} />;
      default:
        return null;
    }
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/40"
      onClick={onClose}
    >
      <div
        className="relative mx-4 max-h-[85vh] w-full max-w-2xl overflow-y-auto rounded-2xl bg-white p-6 shadow-xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="mb-4 flex items-start justify-between">
          <div>
            <h3 className="text-lg font-semibold text-gray-900">
              {record.title}
            </h3>
            <p className="text-xs text-gray-500">{d.title}</p>
          </div>
          <Button variant="ghost" size="sm" onClick={onClose}>
            {d.close}
          </Button>
        </div>

        {renderPayload()}
      </div>
    </div>
  );
}
