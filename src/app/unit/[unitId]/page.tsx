"use client";

import { use } from "react";
import Link from "next/link";
import { useTranslation } from "@/i18n/useTranslation";
import { chapters } from "@/data/curriculum";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import type { LocalizedString, SupportedLanguage } from "@/types/curriculum";

function L({ s, lang }: { s: LocalizedString; lang: SupportedLanguage }) {
  return <>{s[lang]}</>;
}

function DifficultyBadge({ d }: { d: string }) {
  const colors: Record<string, string> = {
    easy: "bg-green-100 text-green-700",
    medium: "bg-yellow-100 text-yellow-700",
    hard: "bg-red-100 text-red-700",
  };
  return (
    <span className={`rounded-full px-2 py-0.5 text-xs font-medium ${colors[d] || "bg-gray-100 text-gray-700"}`}>
      {d}
    </span>
  );
}

export default function UnitPage({ params }: { params: Promise<{ unitId: string }> }) {
  const { unitId } = use(params);
  const { language } = useTranslation();
  const lang = language as SupportedLanguage;

  // Find unit and chapter
  let unit = null;
  let chapter = null;
  for (const ch of chapters) {
    const found = ch.units.find((u) => u.id === unitId);
    if (found) {
      unit = found;
      chapter = ch;
      break;
    }
  }

  if (!unit || !chapter) {
    return (
      <div className="text-center py-12">
        <h1 className="text-2xl font-bold text-gray-900">Unit not found</h1>
        <Link href="/dashboard" className="text-blue-600 hover:underline mt-2 inline-block">
          ← Back to Dashboard
        </Link>
      </div>
    );
  }

  const hasContent = unit.keyConcepts && unit.keyConcepts.length > 0;

  return (
    <div className="space-y-6">
      {/* Breadcrumb */}
      <nav className="flex items-center gap-2 text-sm text-gray-500">
        <Link href="/dashboard" className="hover:text-blue-600">
          {lang === "en" ? "Dashboard" : "学习中心"}
        </Link>
        <span>/</span>
        <span>Ch {chapter.number} {chapter.title[lang]}</span>
        <span>/</span>
        <span className="text-gray-900 font-medium">{unit.number} {unit.title[lang]}</span>
      </nav>

      {/* Title */}
      <div>
        <h1 className="text-3xl font-bold text-gray-900">
          {unit.number} {unit.title[lang]}
        </h1>
        <p className="mt-2 text-gray-600">{unit.description[lang]}</p>
      </div>

      {!hasContent ? (
        <Card>
          <CardContent className="py-12 text-center text-gray-400">
            <p className="text-lg">{lang === "en" ? "📚 Content coming soon" : "📚 内容即将上线"}</p>
            <p className="mt-2 text-sm">
              {lang === "en"
                ? "This unit's detailed content will be available soon. Check back later!"
                : "该单元的详细内容即将可用，请稍后再来！"}
            </p>
          </CardContent>
        </Card>
      ) : (
        <Tabs defaultValue="overview">
          <TabsList>
            <TabsTrigger value="overview">{lang === "en" ? "Overview" : "概览"}</TabsTrigger>
            <TabsTrigger value="concepts">{lang === "en" ? "Key Concepts" : "核心概念"}</TabsTrigger>
            <TabsTrigger value="formulas">{lang === "en" ? "Formulas" : "公式"}</TabsTrigger>
            <TabsTrigger value="problems">{lang === "en" ? "Problem Types" : "题型"}</TabsTrigger>
          </TabsList>

          {/* Overview Tab */}
          <TabsContent value="overview" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>{lang === "en" ? "Learning Goals" : "学习目标"}</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside space-y-2">
                  {unit.learningGoals?.map((goal, i) => (
                    <li key={i} className="text-gray-700">
                      <L s={goal} lang={lang} />
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Key Concepts Tab */}
          <TabsContent value="concepts" className="space-y-4">
            {unit.keyConcepts?.map((concept) => (
              <Card key={concept.id}>
                <CardHeader>
                  <CardTitle className="text-lg">{concept.title[lang]}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div>
                    <p className="text-sm font-medium text-gray-500">
                      {lang === "en" ? "Explanation" : "说明"}
                    </p>
                    <p className="text-gray-700">{concept.explanation[lang]}</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-500">
                      {lang === "en" ? "When to Use" : "使用时机"}
                    </p>
                    <p className="text-gray-700">{concept.whenToUse[lang]}</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-red-500">
                      ⚠️ {lang === "en" ? "Common Mistake" : "常见错误"}
                    </p>
                    <p className="text-gray-700">{concept.commonMistake[lang]}</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-blue-500">
                      💡 {lang === "en" ? "Example" : "例子"}
                    </p>
                    <p className="text-gray-700 font-mono text-sm">{concept.example[lang]}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </TabsContent>

          {/* Formulas Tab */}
          <TabsContent value="formulas" className="space-y-4">
            {unit.formulas?.map((formula) => (
              <Card key={formula.id}>
                <CardHeader>
                  <CardTitle className="text-lg">{formula.name[lang]}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="rounded-lg bg-blue-50 p-4 text-center">
                    <p className="text-xl font-mono font-semibold text-blue-900">
                      {formula.formula}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-500">
                      {lang === "en" ? "Variables" : "变量"}
                    </p>
                    <ul className="list-disc list-inside text-gray-700">
                      {formula.variables.map((v, i) => (
                        <li key={i}><L s={v} lang={lang} /></li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-500">
                      {lang === "en" ? "When to Use" : "使用时机"}
                    </p>
                    <p className="text-gray-700">{formula.whenToUse[lang]}</p>
                  </div>
                  {formula.example && (
                    <div>
                      <p className="text-sm font-medium text-blue-500">
                        💡 {lang === "en" ? "Example" : "例子"}
                      </p>
                      <p className="text-gray-700 font-mono text-sm">{formula.example[lang]}</p>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </TabsContent>

          {/* Problem Types Tab */}
          <TabsContent value="problems" className="space-y-4">
            {unit.problemTypes?.map((pt) => (
              <Card key={pt.id}>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg">{pt.title[lang]}</CardTitle>
                    <DifficultyBadge d={pt.difficulty} />
                  </div>
                  <p className="text-sm text-gray-600">{pt.description[lang]}</p>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div>
                    <p className="text-sm font-medium text-gray-500">
                      {lang === "en" ? "How to Recognize" : "如何识别"}
                    </p>
                    <p className="text-gray-700">{pt.howToRecognize[lang]}</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-500">
                      {lang === "en" ? "Steps" : "解题步骤"}
                    </p>
                    <ol className="list-decimal list-inside space-y-1 text-gray-700">
                      {pt.steps.map((step, i) => (
                        <li key={i}><L s={step} lang={lang} /></li>
                      ))}
                    </ol>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-blue-500">
                      📝 {lang === "en" ? "Example Problem" : "例题"}
                    </p>
                    <p className="text-gray-700 font-mono text-sm">{pt.exampleProblem[lang]}</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-red-500">
                      ⚠️ {lang === "en" ? "Common Traps" : "常见陷阱"}
                    </p>
                    <ul className="list-disc list-inside text-gray-700">
                      {pt.commonTraps.map((trap, i) => (
                        <li key={i}><L s={trap} lang={lang} /></li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </TabsContent>
        </Tabs>
      )}
    </div>
  );
}
