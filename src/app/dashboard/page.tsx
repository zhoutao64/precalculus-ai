"use client";

import { useTranslation } from "@/i18n/useTranslation";

export default function DashboardPage() {
  const { t } = useTranslation();

  return (
    <div className="space-y-4">
      <h1 className="text-3xl font-bold text-gray-900">{t.dashboard.title}</h1>
      <p className="text-gray-600">{t.dashboard.subtitle}</p>
      <div className="rounded-lg border border-dashed border-gray-300 p-12 text-center text-gray-400">
        {t.dashboard.placeholder}
      </div>
    </div>
  );
}
