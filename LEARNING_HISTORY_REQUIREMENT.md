# 独立补充需求文档：Learning History 学习历史记录功能

> 本文档是对现有 Precalculus AI Study Web App 的独立补充需求。  
> 适用于已经在 Claude Code 开发过程中产生多个需求文档、但希望将“历史记录功能”单独整理成一份可复制、可追踪的 Markdown 文档的场景。  
> 默认语言：English。  
> 支持语言：English / 简体中文。  
> MVP 阶段存储方式：localStorage。  
> 后续可迁移到：Supabase 或其他数据库。

---

# 1. 功能名称

Learning History 学习历史记录

---

# 2. 功能目标

应用需要记录用户所有重要学习行为，让学生可以回看自己问过的问题、做过的练习、参加过的模考、诊断结果、AI 反馈和学习建议。

这个功能对于 AI Native 学习产品非常重要，因为 AI 需要基于历史记录理解学生的学习过程，而不是每次都从零开始。

Learning History 的目标是：

1. 帮助学生回顾过去的学习过程。
2. 帮助学生查看自己问过的问题和 AI 的回答。
3. 帮助学生复盘做过的练习、模考和诊断。
4. 帮助 AI Study Coach 根据最近历史给出更个性化建议。
5. 为后续用户系统、错题本、学习报告和长期学习画像打基础。

---

# 3. MVP 范围

MVP 阶段使用 `localStorage` 保存历史记录，不需要用户登录和数据库。

MVP 需要支持：

- 保存 AI Study Coach 问题和 AI 推荐学习路径
- 保存 AI Tutor 对话
- 保存 Practice Generator 练习记录
- 保存 Targeted Practice 专项训练记录
- 保存 Mock Test 模考记录
- 保存 Diagnostic Check 诊断测试记录
- 保存 Mistake Pattern Analysis 错因分析记录
- 新增 `/history` 页面查看历史记录
- Dashboard 显示 Recent Activity
- 最多保存最近 100 条历史记录
- 刷新页面后历史仍然保留
- localStorage 异常时应用不崩溃

---

# 4. 需要记录的历史内容

应用至少需要记录以下内容：

1. 用户问过 AI Study Coach 的问题
2. 用户问过 Ask AI Tutor 的问题
3. 用户做过的 Practice Generator 练习
4. 用户做过的 Targeted Practice 专项训练
5. 用户参加过的 Mock Test 模考
6. 用户完成过的 Diagnostic Check 诊断测试
7. 每次练习或模考的结果
8. 每次 AI 生成的 mistake pattern analysis
9. 每次 AI 给出的 study recommendation
10. 用户最近访问过的 unit

---

# 5. History 页面

需要新增一个 History 页面：

| 页面 | 路径 | 功能 |
|---|---|---|
| History Page | `/history` | 查看学习历史、问答记录、练习记录、模考记录和诊断结果 |

---

# 6. History 页面分类

History 页面需要支持以下分类筛选：

英文：

- All
- AI Coach Questions
- AI Tutor Questions
- Practice Sessions
- Targeted Practice
- Mock Tests
- Diagnostic Checks
- Mistake Reviews

中文：

- 全部
- AI 学习教练问题
- AI Tutor 问题
- 练习记录
- 专项训练
- 模考记录
- 诊断测试
- 错因回顾

---

# 7. 历史记录列表展示要求

每条历史记录至少显示：

- 类型
- 标题
- 所属 unit 或 chapter
- 创建时间
- 语言
- 简短摘要
- 分数或正确率，如适用
- 主要薄弱点，如适用
- 点击后查看详情

英文示例：

```text
Mock Test · 6.1 Law of Sines
Score: 7/10
Weak areas: SSA ambiguous case, angle-side pairing
Created: 2026-04-27 15:30
```

中文示例：

```text
模考 · 6.1 Law of Sines（正弦定理）
得分：7/10
薄弱点：SSA ambiguous case（SSA 不确定情况）、角和对边配对
创建时间：2026-04-27 15:30
```

---

# 8. 历史详情页或弹窗

点击某条历史记录后，应能查看详情。

可以使用：

- 独立详情页
- Dialog / Drawer 弹窗
- 右侧详情面板

MVP 阶段建议使用 Dialog 或 Drawer，开发成本较低。

---

## 8.1 AI Study Coach History

详情需要包含：

- 用户原始输入
- AI 识别出的学习范围
- AI 推荐学习路径
- 推荐步骤
- 后续操作入口

后续操作入口可以包括：

- Open Unit Page
- Start Diagnostic
- Start Practice
- Generate Mock Test

---

## 8.2 AI Tutor History

详情需要包含：

- 用户问题
- AI 回答
- 所属单元
- 相关题目，如有
- 当前语言
- 继续追问入口

---

## 8.3 Practice Session History

详情需要包含：

- 练习题列表
- 学生答案
- 正确答案
- 解题步骤
- 正确率
- 错因分析
- 再练类似题入口

---

## 8.4 Targeted Practice History

详情需要包含：

- 用户专项训练请求
- 生成的练习题
- 学生答案
- 正确答案
- 解题步骤
- 相关知识点标签
- 推荐下一步练习

---

## 8.5 Mock Test History

详情需要包含：

- 模考标题
- 模考范围
- 模考题目
- 学生答案
- 分数
- 答案解析
- 弱点分析
- 推荐下一步复习
- 重新生成类似模考入口

---

## 8.6 Diagnostic Check History

详情需要包含：

- 诊断题
- 学生答案
- 诊断结果
- weak concepts
- mastered concepts
- mistake patterns
- recommended next steps

---

## 8.7 Mistake Review History

详情需要包含：

- 来源记录，如来自某次模考或练习
- 薄弱知识点
- 错因模式
- 高频错误
- 推荐复习内容
- 下一步练习建议

---

# 9. 数据结构建议

## 9.1 HistoryRecordType

```ts
type HistoryRecordType =
  | "study-coach"
  | "ai-tutor"
  | "practice-session"
  | "targeted-practice"
  | "mock-test"
  | "diagnostic-check"
  | "mistake-review";
```

---

## 9.2 HistoryRecord

```ts
interface HistoryRecord {
  id: string;
  type: HistoryRecordType;
  title: string;
  summary: string;
  unitId?: string;
  chapterId?: string;
  language: SupportedLanguage;
  createdAt: string;
  updatedAt?: string;
  score?: number;
  totalQuestions?: number;
  weakConcepts?: string[];
  mistakePatterns?: MistakePattern[];
  payload: HistoryRecordPayload;
}
```

---

## 9.3 HistoryRecordPayload

```ts
type HistoryRecordPayload =
  | StudyCoachHistoryPayload
  | TutorHistoryPayload
  | PracticeSessionHistoryPayload
  | TargetedPracticeHistoryPayload
  | MockTestHistoryPayload
  | DiagnosticHistoryPayload
  | MistakeReviewHistoryPayload;
```

---

## 9.4 StudyCoachHistoryPayload

```ts
interface StudyCoachHistoryPayload {
  userInput: string;
  coachPlan: StudyCoachPlan;
}
```

---

## 9.5 TutorHistoryPayload

```ts
interface TutorHistoryPayload {
  messages: TutorChatMessage[];
  context?: TutorContext;
}
```

---

## 9.6 PracticeSessionHistoryPayload

```ts
interface PracticeSessionHistoryPayload {
  questions: PracticeProblem[];
  studentAnswers: StudentAnswer[];
  feedback?: StudyFeedback;
}
```

---

## 9.7 TargetedPracticeHistoryPayload

```ts
interface TargetedPracticeHistoryPayload {
  userRequest: string;
  questions: PracticeProblem[];
  studentAnswers?: StudentAnswer[];
  feedback?: StudyFeedback;
}
```

---

## 9.8 MockTestHistoryPayload

```ts
interface MockTestHistoryPayload {
  mockTest: MockTest;
  studentAnswers: StudentAnswer[];
  feedback?: StudyFeedback;
}
```

---

## 9.9 DiagnosticHistoryPayload

```ts
interface DiagnosticHistoryPayload {
  diagnosticCheck: DiagnosticCheck;
  studentAnswers: StudentAnswer[];
  result: DiagnosticResult;
}
```

---

## 9.10 MistakeReviewHistoryPayload

```ts
interface MistakeReviewHistoryPayload {
  sourceRecordId?: string;
  weakConcepts: string[];
  mistakePatterns: MistakePattern[];
  recommendedReview: string[];
  nextPracticeSuggestions: string[];
}
```

---

# 10. localStorage 要求

MVP 阶段使用 localStorage 保存历史记录。

建议 key：

```text
precalc-learning-history
```

要求：

- 每次 AI Study Coach 生成计划后保存记录。
- 每次 AI Tutor 对话后保存或更新记录。
- 每次练习完成后保存记录。
- 每次专项训练完成后保存记录。
- 每次模考提交后保存记录。
- 每次诊断完成后保存记录。
- 每次错因分析生成后保存记录。
- 如果 localStorage 读取失败，需要显示友好提示。
- 如果 localStorage 数据损坏，需要安全回退为空数组。
- MVP 阶段最多保存最近 100 条记录，避免 localStorage 过大。

---

# 11. History 与 Learning Memory 的关系

History 是完整学习过程记录。  
Learning Memory 是从 History 中提炼出的长期学习画像。

区别：

```text
History = 用户做过什么、问过什么、结果是什么
Learning Memory = 用户长期薄弱点、已掌握内容、错因模式、偏好
```

当用户完成练习、模考或诊断后：

1. 保存一条 HistoryRecord。
2. 更新 LearningMemory。
3. 在 Dashboard 中显示 Recent Activity 和 Recommended Next Steps。
4. AI Study Coach 可以参考 LearningMemory 和最近 HistoryRecord 给出更个性化建议。

---

# 12. 页面入口要求

需要在以下位置提供 History 入口：

- 顶部导航栏
- Dashboard
- Learning Profile 页面
- Results Page 完成练习或模考后

Dashboard 应显示 Recent Activity 模块，展示最近 3–5 条历史记录。

---

# 13. 建议文件结构

```txt
src/
  app/
    history/
      page.tsx

  components/
    history/
      HistoryList.tsx
      HistoryFilters.tsx
      HistoryDetail.tsx
      RecentActivity.tsx
      HistoryRecordCard.tsx

  hooks/
    useLearningHistory.ts

  lib/
    history.ts

  types/
    history.ts
```

---

# 14. useLearningHistory Hook 要求

建议实现一个 hook：

```ts
function useLearningHistory() {
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
```

功能要求：

- `records`：当前历史记录数组
- `addRecord(record)`：新增历史
- `updateRecord(id, updates)`：更新历史
- `deleteRecord(id)`：删除单条历史
- `clearHistory()`：清空历史
- `getRecordById(id)`：根据 id 获取历史
- `getRecentRecords(limit)`：获取最近记录
- `getRecordsByType(type)`：按类型筛选

MVP 阶段可以只实现：

- records
- addRecord
- getRecentRecords
- getRecordsByType
- clearHistory

---

# 15. UI 要求

History 页面风格应与现有应用保持一致：

- 使用卡片式列表
- 左侧或顶部分类筛选
- 支持搜索，MVP 可选
- 每条记录显示类型 badge
- 显示时间
- 显示 unit / chapter
- 显示 score，如适用
- 显示 weak concepts，如适用
- 点击后打开详情
- 空状态文案清晰

英文空状态：

```text
No learning history yet. Start a practice session or ask the AI Study Coach to create your first record.
```

中文空状态：

```text
还没有学习历史。你可以先开始一次练习，或向 AI 学习教练提问。
```

---

# 16. 多语言要求

History 功能所有 UI 文案需要支持 English 和 简体中文。

包括：

- 页面标题
- 筛选标签
- 历史类型
- 空状态
- 按钮
- 详情区标题
- 错误提示

默认语言仍然是 English。

历史记录本身应保存创建时的 language 字段。  
查看历史时，记录内容可以保留原生成语言，UI 外壳跟随当前应用语言。

---

# 17. Dashboard Recent Activity

Dashboard 需要新增 Recent Activity 模块。

显示最近 3–5 条历史记录。

每条显示：

- 类型
- 标题
- 时间
- 分数，如适用
- 主要薄弱点，如适用

点击记录进入 History 详情。

英文标题：

```text
Recent Activity
```

中文标题：

```text
最近学习记录
```

---

# 18. 安全和异常处理

需要处理：

- localStorage 不可用
- localStorage 数据损坏
- 历史记录 payload 缺失
- record id 不存在
- 旧版本历史数据结构不兼容
- 历史记录过多

要求：

- 应用不能因为历史记录异常而崩溃。
- 读取失败时回退为空数组。
- 写入失败时显示友好提示。
- 最多保留最近 100 条记录。
- 如果未来接入数据库，需要支持迁移。

---

# 19. 验收标准

Learning History 功能完成后必须满足：

- 用户问过 AI Study Coach 的问题会被保存。
- 用户问过 AI Tutor 的问题会被保存。
- 用户完成的练习会被保存。
- 用户完成的专项训练会被保存。
- 用户完成的模考会被保存。
- 用户完成的诊断测试会被保存。
- 用户可以在 `/history` 页面查看历史列表。
- 用户可以按类型筛选历史记录。
- 用户可以点击历史记录查看详情。
- Dashboard 可以显示 Recent Activity。
- 刷新页面后历史记录仍然存在。
- 中文和英文模式下 History 页面 UI 文案跟随当前语言。
- MVP 阶段最多保存最近 100 条记录。
- localStorage 异常时应用不崩溃。
- History 可以和 Learning Memory 协同工作。
- AI Study Coach 可以在后续版本参考最近历史记录生成更个性化建议。

---

# 20. Claude Code 执行要求

请根据本文档为当前项目新增 Learning History 功能。

执行方式：

1. 先阅读现有项目结构。
2. 不要破坏已有功能。
3. 先创建类型定义和 localStorage 工具。
4. 再创建 `useLearningHistory` hook。
5. 然后创建 `/history` 页面。
6. 再把历史保存逻辑接入 AI Study Coach、AI Tutor、Practice、Targeted Practice、Mock Test 和 Diagnostic。
7. 最后在 Dashboard 添加 Recent Activity。
8. 保持双语支持。
9. 保证项目可以正常运行。
10. 不要引入数据库；MVP 阶段使用 localStorage。
11. 代码结构要方便未来迁移到 Supabase。
