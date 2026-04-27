"use client";

import { useState } from "react";
import type { HistoryRecord, HistoryRecordType } from "@/types/history";
import { useTranslation } from "@/i18n/useTranslation";
import { HistoryFilters } from "./HistoryFilters";
import { HistoryRecordCard } from "./HistoryRecordCard";
import { HistoryDetail } from "./HistoryDetail";

export function HistoryList({ records }: { records: HistoryRecord[] }) {
  const { t } = useTranslation();
  const [filter, setFilter] = useState<HistoryRecordType | "all">("all");
  const [selectedRecord, setSelectedRecord] = useState<HistoryRecord | null>(null);

  const filtered =
    filter === "all" ? records : records.filter((r) => r.type === filter);

  return (
    <div className="space-y-4">
      <HistoryFilters active={filter} onChange={setFilter} />

      {filtered.length === 0 ? (
        <div className="rounded-xl border border-dashed border-gray-300 p-8 text-center text-sm text-gray-500">
          {t.history.empty}
        </div>
      ) : (
        <div className="space-y-3">
          {filtered.map((record) => (
            <HistoryRecordCard
              key={record.id}
              record={record}
              onClick={() => setSelectedRecord(record)}
            />
          ))}
        </div>
      )}

      {selectedRecord && (
        <HistoryDetail
          record={selectedRecord}
          onClose={() => setSelectedRecord(null)}
        />
      )}
    </div>
  );
}
