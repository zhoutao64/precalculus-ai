"use client";

import Link from "next/link";
import { useTranslation } from "@/i18n/useTranslation";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

const FEATURE_KEYS = [
  "unitSummary",
  "formulaReview",
  "practiceGenerator",
  "mockTest",
  "solutions",
] as const;

const FEATURE_ICONS = ["📚", "📐", "✏️", "📝", "💡"];

export default function HomePage() {
  const { t } = useTranslation();

  return (
    <div className="space-y-12">
      {/* Hero */}
      <section className="py-12 text-center">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
          {t.home.heroTitle}
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
          {t.home.heroSubtitle}
        </p>
        <Link href="/dashboard">
          <Button size="lg" className="mt-8 bg-blue-600 hover:bg-blue-700">
            {t.home.startStudying}
          </Button>
        </Link>
      </section>

      {/* Features */}
      <section>
        <h2 className="mb-6 text-center text-2xl font-semibold text-gray-800">
          {t.home.featuresHeading}
        </h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURE_KEYS.map((key, i) => (
            <Card key={key} className="hover:shadow-md transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-lg">
                  <span className="text-2xl">{FEATURE_ICONS[i]}</span>
                  {t.home.features[key].title}
                </CardTitle>
                <CardDescription>{t.home.features[key].description}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}
