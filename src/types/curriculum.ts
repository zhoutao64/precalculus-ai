export type SupportedLanguage = "en" | "zh";

export type LocalizedString = {
  en: string;
  zh: string;
};

export type Difficulty = "easy" | "medium" | "hard";

export type KeyConcept = {
  id: string;
  title: LocalizedString;
  explanation: LocalizedString;
  whenToUse: LocalizedString;
  commonMistake: LocalizedString;
  example: LocalizedString;
};

export type Formula = {
  id: string;
  name: LocalizedString;
  formula: string;
  variables: LocalizedString[];
  whenToUse: LocalizedString;
  commonProblemTypes: LocalizedString[];
  example?: LocalizedString;
};

export type ProblemType = {
  id: string;
  title: LocalizedString;
  description: LocalizedString;
  howToRecognize: LocalizedString;
  steps: LocalizedString[];
  difficulty: Difficulty;
  exampleProblem: LocalizedString;
  commonTraps: LocalizedString[];
};

export type Unit = {
  id: string;
  chapterId: string;
  number: string;
  title: LocalizedString;
  description: LocalizedString;
  learningGoals?: LocalizedString[];
  keyConcepts?: KeyConcept[];
  formulas?: Formula[];
  problemTypes?: ProblemType[];
};

export type Chapter = {
  id: string;
  number: string;
  title: LocalizedString;
  units: Unit[];
};
