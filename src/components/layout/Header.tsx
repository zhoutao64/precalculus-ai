"use client";

import Link from "next/link";
import { useTranslation } from "@/i18n/useTranslation";
import { Button } from "@/components/ui/button";

export function Header() {
  const { language, t, setLanguage } = useTranslation();

  return (
    <header className="sticky top-0 z-50 border-b bg-white/80 backdrop-blur">
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-4">
        <Link href="/" className="text-lg font-bold text-blue-600">
          {t.common.appName}
        </Link>

        <nav className="flex items-center gap-4">
          <Link href="/" className="text-sm text-gray-600 hover:text-gray-900">
            {t.nav.home}
          </Link>
          <Link href="/dashboard" className="text-sm text-gray-600 hover:text-gray-900">
            {t.nav.dashboard}
          </Link>
          <Link href="/history" className="text-sm text-gray-600 hover:text-gray-900">
            {t.nav.history}
          </Link>

          <Button
            variant="outline"
            size="sm"
            onClick={() => setLanguage(language === "en" ? "zh" : "en")}
          >
            {language === "en" ? "中文" : "English"}
          </Button>
        </nav>
      </div>
    </header>
  );
}
