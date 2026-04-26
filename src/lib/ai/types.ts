import type {
  Difficulty,
  LocalizedString,
  SupportedLanguage,
  Unit,
} from "@/types/curriculum";

export type AIProviderName = "anthropic" | "openai" | "gemini";

export type AIMessage = {
  role: "user" | "assistant";
  content: string;
};

export type AIGenerateOptions = {
  system?: string;
  messages: AIMessage[];
  maxTokens?: number;
  temperature?: number;
};

export type AIResponse = {
  text: string;
  model: string;
  usage?: {
    inputTokens: number;
    outputTokens: number;
  };
};

export interface AIProvider {
  readonly name: AIProviderName;
  generate(options: AIGenerateOptions): Promise<AIResponse>;
}

export type UnitSummary = {
  unitId: string;
  language: SupportedLanguage;
  overview: LocalizedString | string;
  keyPoints: string[];
  studyTips: string[];
};

export type PracticeChoice = {
  id: string;
  text: string;
};

export type PracticeQuestion = {
  id: string;
  unitId: string;
  language: SupportedLanguage;
  difficulty: Difficulty;
  prompt: string;
  choices?: PracticeChoice[];
  answer: string;
  explanation: string;
  hints?: string[];
};

export type GenerateUnitSummaryInput = {
  unit: Unit;
  language: SupportedLanguage;
};

export type GeneratePracticeInput = {
  unit: Unit;
  language: SupportedLanguage;
  difficulty: Difficulty;
  count: number;
};

export type GenerateTargetedPracticeInput = {
  unit: Unit;
  language: SupportedLanguage;
  weakConceptIds: string[];
  count: number;
};
