"use client";

import { createContext, useCallback, useEffect, useState, type ReactNode } from "react";
import { dictionaries, LANGUAGE_STORAGE_KEY, type Language } from "./index";

interface LanguageContextValue {
  language: Language;
  t: Record<string, any>;
  setLanguage: (lang: Language) => void;
}

export const LanguageContext = createContext<LanguageContextValue>({
  language: "en",
  t: dictionaries.en,
  setLanguage: () => {},
});

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>("en");

  useEffect(() => {
    const stored = localStorage.getItem(LANGUAGE_STORAGE_KEY);
    if (stored === "en" || stored === "zh") {
      setLanguageState(stored);
    }
  }, []);

  const setLanguage = useCallback((lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem(LANGUAGE_STORAGE_KEY, lang);
  }, []);

  return (
    <LanguageContext.Provider value={{ language, t: dictionaries[language], setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}
