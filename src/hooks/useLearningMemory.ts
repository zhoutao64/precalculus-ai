"use client";

import { useCallback, useEffect, useState } from "react";

const STORAGE_KEY = "precalc-learning-memory";

export type LearningMemory = {
  weakConcepts: string[];
  mastered: string[];
  mistakePatterns: string[];
  recentUnits: string[];
  practiceHistory: { unitId: string; score: number; date: string }[];
};

const DEFAULT_MEMORY: LearningMemory = {
  weakConcepts: [],
  mastered: [],
  mistakePatterns: [],
  recentUnits: [],
  practiceHistory: [],
};

function load(): LearningMemory {
  if (typeof window === "undefined") return DEFAULT_MEMORY;
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return DEFAULT_MEMORY;
    return { ...DEFAULT_MEMORY, ...JSON.parse(raw) };
  } catch {
    return DEFAULT_MEMORY;
  }
}

function save(memory: LearningMemory) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(memory));
}

export function useLearningMemory() {
  const [memory, setMemoryState] = useState<LearningMemory>(DEFAULT_MEMORY);

  useEffect(() => {
    setMemoryState(load());
  }, []);

  const update = useCallback((partial: Partial<LearningMemory>) => {
    setMemoryState((prev) => {
      const next = { ...prev, ...partial };
      save(next);
      return next;
    });
  }, []);

  const addRecentUnit = useCallback((unitId: string) => {
    setMemoryState((prev) => {
      const recent = [unitId, ...prev.recentUnits.filter((id) => id !== unitId)].slice(0, 10);
      const next = { ...prev, recentUnits: recent };
      save(next);
      return next;
    });
  }, []);

  const addPracticeResult = useCallback((unitId: string, score: number) => {
    setMemoryState((prev) => {
      const entry = { unitId, score, date: new Date().toISOString() };
      const history = [entry, ...prev.practiceHistory].slice(0, 50);
      const next = { ...prev, practiceHistory: history };
      save(next);
      return next;
    });
  }, []);

  const addWeakConcept = useCallback((concept: string) => {
    setMemoryState((prev) => {
      if (prev.weakConcepts.includes(concept)) return prev;
      const next = { ...prev, weakConcepts: [...prev.weakConcepts, concept] };
      save(next);
      return next;
    });
  }, []);

  const markMastered = useCallback((concept: string) => {
    setMemoryState((prev) => {
      const next = {
        ...prev,
        mastered: [...new Set([...prev.mastered, concept])],
        weakConcepts: prev.weakConcepts.filter((c) => c !== concept),
      };
      save(next);
      return next;
    });
  }, []);

  return { memory, update, addRecentUnit, addPracticeResult, addWeakConcept, markMastered };
}
