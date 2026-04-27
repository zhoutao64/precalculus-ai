"use client";

import type { HistoryRecord } from "@/types/history";
import { useTranslation } from "@/i18n/useTranslation";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

const TYPE_COLORS: Record<string, string> = {
  "study-coach": "bg-purple-100 text-purple-700",
  "ai-tutor": "bg-blue-100 text-blue-700",
  "practice-session": "bg-green-100 text-green-700",
  "targeted-practice": "bg-amber-100 text-amber-700",
  "mock-test": "bg-red-100 text-red-700",
  "diagnostic-check": "bg-cyan-100 text-cyan-700",
  "mistake-review": "bg-orange-100 text-orange-700",
};

function formatDate(iso: string, lang: string): string {
  const d = new Date(iso);
  if (isNaN(d.getTime())) return iso;
  return d.toLocaleString(lang === "zh" ? "zh-CN" : "en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });
}

export function HistoryRecordCard({
  record,
  onClick,
}: {
  record: HistoryRecord;
  onClick: () => void;
}) {
  const { language, t } = useTranslation();
  const h = t.history;

  return (
    <Card
      size="sm"
      className="cursor-pointer transition-shadow hover:shadow-md"
      onClick={onClick}
    >
      <CardHeader>
        <div className="flex items-start justify-between gap-2">
          <div className="flex items-center gap-2 flex-wrap">
            <span
              className={`inline-block rounded-full px-2 py-0.5 text-xs font-medium ${TYPE_COLORS[record.type] ?? "bg-gray-100 text-gray-700"}`}
            >
              {h.recordType[record.type]}
            </span>
            {record.unitId && (
              <span className="text-xs text-gray-500">{record.unitId}</span>
            )}
            {record.chapterId && !record.unitId && (
              <span className="text-xs text-gray-500">{record.chapterId}</span>
            )}
          </div>
          <span className="shrink-0 text-xs text-gray-400">
            {formatDate(record.createdAt, language)}
          </span>
        </div>
        <CardTitle className="text-sm">{record.title}</CardTitle>
      </CardHeader>
      <CardContent className="space-y-1">
        {record.summary && (
          <p className="text-xs text-gray-600 line-clamp-2">{record.summary}</p>
        )}
        <div className="flex flex-wrap items-center gap-3 text-xs">
          {record.score != null && record.totalQuestions != null && (
            <span className="font-medium text-gray-700">
              {h.score}: {record.score}/{record.totalQuestions}
            </span>
          )}
          {record.weakConcepts && record.weakConcepts.length > 0 && (
            <span className="text-gray-500">
              {h.weakAreas}: {record.weakConcepts.slice(0, 3).join(", ")}
              {record.weakConcepts.length > 3 && "…"}
            </span>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
