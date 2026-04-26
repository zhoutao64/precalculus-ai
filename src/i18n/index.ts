import { en } from "./en";
import { zh } from "./zh";

export type Language = "en" | "zh";

export const dictionaries = { en, zh } as const;

export const LANGUAGE_STORAGE_KEY = "precalc-app-language";

export { en, zh };
export type { Translations } from "./en";
