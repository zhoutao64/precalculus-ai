"use client";

import { use, useState } from "react";
import Link from "next/link";
import { useTranslation } from "@/i18n/useTranslation";
import { chapters } from "@/data/curriculum";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { PracticeGenerator } from "@/components/practice/PracticeGenerator";
import { TargetedPracticeBox } from "@/components/practice/TargetedPracticeBox";
import { MockTestBuilder } from "@/components/mocktest/MockTestBuilder";
import { AskTutorChat } from "@/components/tutor/AskTutorChat";
import { MathText, MathBlock } from "@/components/ui/math";
import type { LocalizedString, SupportedLanguage, ProblemType, Difficulty } from "@/types/curriculum";

function L({ s, lang }: { s: LocalizedString; lang: SupportedLanguage }) {
  return <MathText text={s[lang]} />;
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

const DIFFICULTY_ORDER: Difficulty[] = ["easy", "medium", "hard"];
const DIFFICULTY_LABELS: Record<Difficulty, { en: string; zh: string; emoji: string }> = {
  easy: { en: "Easy", zh: "基础", emoji: "📗" },
  medium: { en: "Medium", zh: "中等", emoji: "📙" },
  hard: { en: "Hard", zh: "困难", emoji: "📕" },
};

function ProblemTypesSection({ problemTypes, lang }: { problemTypes: ProblemType[]; lang: SupportedLanguage }) {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  // Group by difficulty
  const grouped = DIFFICULTY_ORDER.map((d) => ({
    difficulty: d,
    label: DIFFICULTY_LABELS[d],
    items: problemTypes.filter((pt) => pt.difficulty === d),
  })).filter((g) => g.items.length > 0);

  const toggle = (id: string) => setExpandedId((prev) => (prev === id ? null : id));

  return (
    <div className="space-y-6">
      {grouped.map((group) => (
        <div key={group.difficulty}>
          <h3 className="text-lg font-semibold mb-3">
            {group.label.emoji} {group.label[lang]}
            <span className="ml-2 text-sm font-normal text-gray-500">
              ({group.items.length} {lang === "en" ? "types" : "种"})
            </span>
          </h3>
          <div className="space-y-2">
            {group.items.map((pt) => {
              const isOpen = expandedId === pt.id;
              return (
                <Card key={pt.id} className={isOpen ? "border-blue-300 shadow-md" : "hover:border-gray-300 cursor-pointer"}>
                  <div
                    className="flex items-center justify-between px-4 py-3 cursor-pointer"
                    onClick={() => toggle(pt.id)}
                  >
                    <div className="flex-1">
                      <p className="font-medium text-gray-800">{pt.title[lang]}</p>
                      <p className="text-sm text-gray-500 mt-0.5">{pt.description[lang]}</p>
                    </div>
                    <span className="text-gray-400 ml-3 text-lg">{isOpen ? "▾" : "▸"}</span>
                  </div>
                  {isOpen && (
                    <CardContent className="pt-0 space-y-3 border-t">
                      <div className="mt-3">
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
                  )}
                </Card>
              );
            })}
          </div>
        </div>
      ))}
    </div>
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
        <>
        <Tabs defaultValue="overview">
          <TabsList>
            <TabsTrigger value="overview">{lang === "en" ? "Overview" : "概览"}</TabsTrigger>
            <TabsTrigger value="concepts">{lang === "en" ? "Key Concepts" : "核心概念"}</TabsTrigger>
            <TabsTrigger value="formulas">{lang === "en" ? "Formulas" : "公式"}</TabsTrigger>
            <TabsTrigger value="problems">{lang === "en" ? "Problem Types" : "题型"}</TabsTrigger>
            <TabsTrigger value="practice">{lang === "en" ? "Practice" : "练习"}</TabsTrigger>
            <TabsTrigger value="mocktest">{lang === "en" ? "Mock Test" : "模考"}</TabsTrigger>
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
                    <MathText text={concept.explanation[lang]} className="text-gray-700" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-500">
                      {lang === "en" ? "When to Use" : "使用时机"}
                    </p>
                    <MathText text={concept.whenToUse[lang]} className="text-gray-700" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-red-500">
                      ⚠️ {lang === "en" ? "Common Mistake" : "常见错误"}
                    </p>
                    <MathText text={concept.commonMistake[lang]} className="text-gray-700" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-blue-500">
                      💡 {lang === "en" ? "Example" : "例子"}
                    </p>
                    <MathText text={concept.example[lang]} className="text-gray-700 text-sm" />
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
                    <MathBlock latex={formula.formula} className="text-xl text-blue-900" />
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
          <TabsContent value="problems" className="space-y-6">
            <ProblemTypesSection problemTypes={unit.problemTypes ?? []} lang={lang} />
          </TabsContent>
          {/* Practice Tab */}
          <TabsContent value="practice" className="space-y-6">
            <PracticeGenerator unitId={unit.id} language={lang} />
            <TargetedPracticeBox unitId={unit.id} language={lang} />
          </TabsContent>

          {/* Mock Test Tab */}
          <TabsContent value="mocktest">
            <MockTestBuilder unitId={unit.id} language={lang} />
          </TabsContent>

          {/* AI Tutor - shown below all tabs */}
        </Tabs>
        <div className="mt-6">
          <AskTutorChat unitId={unit.id} language={lang} />
        </div>
        </>
      )}
    </div>
  );
}
