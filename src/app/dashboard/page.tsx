"use client";

import { useState } from "react";
import Link from "next/link";
import { useTranslation } from "@/i18n/useTranslation";
import { chapters } from "@/data/curriculum";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { RecentActivity } from "@/components/history/RecentActivity";

export default function DashboardPage() {
  const { language, t } = useTranslation();
  const [expandedChapter, setExpandedChapter] = useState<string | null>(null);

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">{t.dashboard.title}</h1>
        <p className="mt-1 text-gray-600">{t.dashboard.subtitle}</p>
      </div>

      <RecentActivity />

      <div className="space-y-3">
        {chapters.map((chapter) => (
          <Card key={chapter.id}>
            <CardHeader className="pb-3">
              <button
                className="flex w-full items-center justify-between text-left"
                onClick={() =>
                  setExpandedChapter(expandedChapter === chapter.id ? null : chapter.id)
                }
              >
                <CardTitle className="text-lg">
                  <span className="text-blue-600">Ch {chapter.number}</span>{" "}
                  {chapter.title[language]}
                </CardTitle>
                <span className="text-gray-400 text-xl">
                  {expandedChapter === chapter.id ? "−" : "+"}
                </span>
              </button>
            </CardHeader>

            {expandedChapter === chapter.id && (
              <div className="px-6 pb-4 space-y-2">
                {chapter.units.map((unit) => {
                  const hasContent = unit.keyConcepts && unit.keyConcepts.length > 0;
                  return (
                    <Link
                      key={unit.id}
                      href={`/unit/${unit.id}`}
                      className="flex items-center gap-3 rounded-lg border p-3 hover:bg-gray-50 transition-colors"
                    >
                      <span className="text-sm font-medium text-blue-600 w-8">
                        {unit.number}
                      </span>
                      <div className="flex-1 min-w-0">
                        <p className="font-medium text-gray-900 text-sm">
                          {unit.title[language]}
                        </p>
                        <p className="text-xs text-gray-500 truncate">
                          {unit.description[language]}
                        </p>
                      </div>
                      {hasContent && (
                        <span className="shrink-0 rounded-full bg-green-100 px-2 py-0.5 text-xs text-green-700">
                          {language === "en" ? "Ready" : "可学习"}
                        </span>
                      )}
                    </Link>
                  );
                })}
              </div>
            )}
          </Card>
        ))}
      </div>
    </div>
  );
}
