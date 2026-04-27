import type { SupportedLanguage } from "@/types/curriculum";
import type { PracticeQuestion, AIMessage } from "@/lib/ai/types";

// ---------------------------------------------------------------------------
// Shared domain types used by history payloads
// These will evolve as the app grows; defined here to keep history self-contained
// and easy to migrate to Supabase later.
// ---------------------------------------------------------------------------

export type MistakePattern = {
  pattern: string;
  frequency: number;
  examples: string[];
};

export type StudentAnswer = {
  questionId: string;
  answer: string;
  isCorrect: boolean;
};

export type StudyFeedback = {
  summary: string;
  weakConcepts: string[];
  mistakePatterns: MistakePattern[];
  recommendations: string[];
};

export type StudyCoachPlan = {
  identifiedScope: string;
  steps: string[];
  recommendedUnits: string[];
};

export type TutorChatMessage = AIMessage & {
  timestamp: string;
};

export type TutorContext = {
  unitId?: string;
  topicHint?: string;
};

export type MockTest = {
  title: string;
  unitIds: string[];
  questions: PracticeQuestion[];
};

export type DiagnosticCheck = {
  unitId: string;
  questions: PracticeQuestion[];
};

export type DiagnosticResult = {
  weakConcepts: string[];
  masteredConcepts: string[];
  mistakePatterns: MistakePattern[];
  recommendedNextSteps: string[];
};

// ---------------------------------------------------------------------------
// History record types (Section 9 of requirement doc)
// ---------------------------------------------------------------------------

export type HistoryRecordType =
  | "study-coach"
  | "ai-tutor"
  | "practice-session"
  | "targeted-practice"
  | "mock-test"
  | "diagnostic-check"
  | "mistake-review";

// --- Payload variants ---

export type StudyCoachHistoryPayload = {
  userInput: string;
  coachPlan: StudyCoachPlan;
};

export type TutorHistoryPayload = {
  messages: TutorChatMessage[];
  context?: TutorContext;
};

export type PracticeSessionHistoryPayload = {
  questions: PracticeQuestion[];
  studentAnswers: StudentAnswer[];
  feedback?: StudyFeedback;
};

export type TargetedPracticeHistoryPayload = {
  userRequest: string;
  questions: PracticeQuestion[];
  studentAnswers?: StudentAnswer[];
  feedback?: StudyFeedback;
};

export type MockTestHistoryPayload = {
  mockTest: MockTest;
  studentAnswers: StudentAnswer[];
  feedback?: StudyFeedback;
};

export type DiagnosticHistoryPayload = {
  diagnosticCheck: DiagnosticCheck;
  studentAnswers: StudentAnswer[];
  result: DiagnosticResult;
};

export type MistakeReviewHistoryPayload = {
  sourceRecordId?: string;
  weakConcepts: string[];
  mistakePatterns: MistakePattern[];
  recommendedReview: string[];
  nextPracticeSuggestions: string[];
};

export type HistoryRecordPayload =
  | StudyCoachHistoryPayload
  | TutorHistoryPayload
  | PracticeSessionHistoryPayload
  | TargetedPracticeHistoryPayload
  | MockTestHistoryPayload
  | DiagnosticHistoryPayload
  | MistakeReviewHistoryPayload;

// --- Main record ---

export type HistoryRecord = {
  id: string;
  type: HistoryRecordType;
  title: string;
  summary: string;
  unitId?: string;
  chapterId?: string;
  language: SupportedLanguage;
  createdAt: string;
  updatedAt?: string;
  score?: number;
  totalQuestions?: number;
  weakConcepts?: string[];
  mistakePatterns?: MistakePattern[];
  payload: HistoryRecordPayload;
};

// --- Helper type for creating a new record (id & timestamps auto-generated) ---

export type NewHistoryRecord = Omit<HistoryRecord, "id" | "createdAt">;
