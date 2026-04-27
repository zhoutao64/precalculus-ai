import type {
  HistoryRecord,
  HistoryRecordType,
  NewHistoryRecord,
} from "@/types/history";

const STORAGE_KEY = "precalc-learning-history";
const MAX_RECORDS = 100;

// ---------------------------------------------------------------------------
// ID generation
// ---------------------------------------------------------------------------

function generateId(): string {
  return `${Date.now()}-${Math.random().toString(36).slice(2, 9)}`;
}

// ---------------------------------------------------------------------------
// localStorage helpers (safe for SSR & quota errors)
// ---------------------------------------------------------------------------

export function loadRecords(): HistoryRecord[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    if (!Array.isArray(parsed)) return [];
    return parsed;
  } catch {
    return [];
  }
}

function persistRecords(records: HistoryRecord[]): boolean {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(records));
    return true;
  } catch {
    return false;
  }
}

// ---------------------------------------------------------------------------
// CRUD operations
// ---------------------------------------------------------------------------

export function addRecord(record: NewHistoryRecord): HistoryRecord | null {
  const records = loadRecords();
  const newRecord: HistoryRecord = {
    ...record,
    id: generateId(),
    createdAt: new Date().toISOString(),
  };
  const updated = [newRecord, ...records].slice(0, MAX_RECORDS);
  const ok = persistRecords(updated);
  return ok ? newRecord : null;
}

export function updateRecord(
  id: string,
  updates: Partial<Omit<HistoryRecord, "id" | "createdAt">>
): HistoryRecord | null {
  const records = loadRecords();
  const idx = records.findIndex((r) => r.id === id);
  if (idx === -1) return null;
  const updated = {
    ...records[idx],
    ...updates,
    updatedAt: new Date().toISOString(),
  };
  records[idx] = updated;
  const ok = persistRecords(records);
  return ok ? updated : null;
}

export function deleteRecord(id: string): boolean {
  const records = loadRecords();
  const filtered = records.filter((r) => r.id !== id);
  if (filtered.length === records.length) return false;
  return persistRecords(filtered);
}

export function clearAllRecords(): boolean {
  return persistRecords([]);
}

// ---------------------------------------------------------------------------
// Query helpers
// ---------------------------------------------------------------------------

export function getRecordById(id: string): HistoryRecord | undefined {
  return loadRecords().find((r) => r.id === id);
}

export function getRecentRecords(limit = 5): HistoryRecord[] {
  return loadRecords().slice(0, limit);
}

export function getRecordsByType(type: HistoryRecordType): HistoryRecord[] {
  return loadRecords().filter((r) => r.type === type);
}
