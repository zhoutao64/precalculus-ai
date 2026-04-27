"use client";

import { useState } from "react";
import Link from "next/link";
import type { HistoryRecord } from "@/types/history";
import { useTranslation } from "@/i18n/useTranslation";
import { useLearningHistory } from "@/hooks/useLearningHistory";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { HistoryDetail } from "./HistoryDetail";

const TYPE_COLORS: Record<string, string> = {
  "study-coach": "bg-purple-100 text-purple-700",
  "ai-tutor": "bg-blue-100 text-blue-700",
  "practice-session": "bg-green-100 text-green-700",
  "targeted-practice": "bg-amber-100 text-amber-700",
  "mock-test": "bg-red-100 text-red-700",
  "diagnostic-check": "bg-cyan-100 text-cyan-700",
  "mistake-review": "bg-orange-100 text-orange-700",
};

function formatShortDate(iso: string, lang: string): string {
  const d = new Date(iso);
  if (isNaN(d.getTime())) return iso;
  return d.toLocaleString(lang === "zh" ? "zh-CN" : "en-US", {
    month: "short",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });
}

export function RecentActivity() {
  const { language, t } = useTranslation();
  const { records } = useLearningHistory();
  const [selectedRecord, setSelectedRecord] = useState<HistoryRecord | null>(null);

  const recent = records.slice(0, 5);
  const h = t.history;

  if (recent.length === 0) return null;

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle>{h.recentActivity}</CardTitle>
          <Link
            href="/history"
            className="text-xs font-medium text-blue-600 hover:underline"
          >
            {h.viewAll}
          </Link>
        </div>
      </CardHeader>
      <CardContent className="space-y-2">
        {recent.map((record) => (
          <button
            key={record.id}
            onClick={() => setSelectedRecord(record)}
            className="flex w-full items-center gap-3 rounded-lg border p-2 text-left transition-colors hover:bg-gray-50"
          >
            <span
              className={`shrink-0 rounded-full px-2 py-0.5 text-xs font-medium ${TYPE_COLORS[record.type] ?? "bg-gray-100 text-gray-700"}`}
            >
              {h.recordType[record.type]}
            </span>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-gray-900 truncate">
                {record.title}
              </p>
              <div className="flex items-center gap-2 text-xs text-gray-500">
                <span>{formatShortDate(record.createdAt, language)}</span>
                {record.score != null && record.totalQuestions != null && (
                  <span>
                    {h.score}: {record.score}/{record.totalQuestions}
                  </span>
                )}
              </div>
            </div>
            {record.weakConcepts && record.weakConcepts.length > 0 && (
              <span className="hidden sm:block shrink-0 text-xs text-gray-400 max-w-32 truncate">
                {record.weakConcepts[0]}
              </span>
            )}
          </button>
        ))}
      </CardContent>

      {selectedRecord && (
        <HistoryDetail
          record={selectedRecord}
          onClose={() => setSelectedRecord(null)}
        />
      )}
    </Card>
  );
}
