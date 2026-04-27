"use client";

import { useCallback, useEffect, useState } from "react";
import type {
  HistoryRecord,
  HistoryRecordType,
  NewHistoryRecord,
} from "@/types/history";
import {
  loadRecords,
  addRecord as addRecordToStorage,
  updateRecord as updateRecordInStorage,
  deleteRecord as deleteRecordFromStorage,
  clearAllRecords,
  getRecordById as findRecordById,
  getRecentRecords as queryRecentRecords,
  getRecordsByType as queryRecordsByType,
} from "@/lib/history";

export function useLearningHistory() {
  const [records, setRecords] = useState<HistoryRecord[]>([]);

  useEffect(() => {
    setRecords(loadRecords());
  }, []);

  const addRecord = useCallback((record: NewHistoryRecord) => {
    const created = addRecordToStorage(record);
    if (created) {
      setRecords(loadRecords());
    }
    return created;
  }, []);

  const updateRecord = useCallback(
    (id: string, updates: Partial<Omit<HistoryRecord, "id" | "createdAt">>) => {
      const updated = updateRecordInStorage(id, updates);
      if (updated) {
        setRecords(loadRecords());
      }
      return updated;
    },
    []
  );

  const deleteRecord = useCallback((id: string) => {
    const ok = deleteRecordFromStorage(id);
    if (ok) {
      setRecords(loadRecords());
    }
    return ok;
  }, []);

  const clearHistory = useCallback(() => {
    const ok = clearAllRecords();
    if (ok) {
      setRecords([]);
    }
    return ok;
  }, []);

  const getRecordById = useCallback(
    (id: string) => findRecordById(id),
    []
  );

  const getRecentRecords = useCallback(
    (limit?: number) => queryRecentRecords(limit),
    []
  );

  const getRecordsByType = useCallback(
    (type: HistoryRecordType) => queryRecordsByType(type),
    []
  );

  return {
    records,
    addRecord,
    updateRecord,
    deleteRecord,
    clearHistory,
    getRecordById,
    getRecentRecords,
    getRecordsByType,
  };
}
