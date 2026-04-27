"use client";

import type { HistoryRecordType } from "@/types/history";
import { useTranslation } from "@/i18n/useTranslation";

const FILTER_OPTIONS: Array<HistoryRecordType | "all"> = [
  "all",
  "study-coach",
  "ai-tutor",
  "practice-session",
  "targeted-practice",
  "mock-test",
  "diagnostic-check",
  "mistake-review",
];

export function HistoryFilters({
  active,
  onChange,
}: {
  active: HistoryRecordType | "all";
  onChange: (filter: HistoryRecordType | "all") => void;
}) {
  const { t } = useTranslation();
  const labels = t.history.filters as Record<string, string>;

  return (
    <div className="flex flex-wrap gap-2">
      {FILTER_OPTIONS.map((key) => {
        const isActive = active === key;
        return (
          <button
            key={key}
            onClick={() => onChange(key)}
            className={`rounded-full px-3 py-1 text-xs font-medium transition-colors ${
              isActive
                ? "bg-blue-600 text-white"
                : "bg-gray-100 text-gray-600 hover:bg-gray-200"
            }`}
          >
            {labels[key]}
          </button>
        );
      })}
    </div>
  );
}
