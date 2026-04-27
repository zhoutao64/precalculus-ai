"use client";

import { useTranslation } from "@/i18n/useTranslation";
import { useLearningHistory } from "@/hooks/useLearningHistory";
import { HistoryList } from "@/components/history/HistoryList";

export default function HistoryPage() {
  const { t } = useTranslation();
  const { records } = useLearningHistory();

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">{t.history.title}</h1>
        <p className="mt-1 text-gray-600">{t.history.subtitle}</p>
      </div>

      <HistoryList records={records} />
    </div>
  );
}
