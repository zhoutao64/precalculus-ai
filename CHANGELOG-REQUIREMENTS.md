# Precalculus AI — 需求变更记录

> 记录所有需求修改、设计决策和功能变更，便于长期维护追溯。
> 基线文档：`precalculus_requirements_v5.md`

---

## 2026-04-26

### [CR-001] AI Provider 改为 AWS Bedrock
- **原需求**：使用 Anthropic 原生 API（`api.anthropic.com`）
- **变更**：改为 AWS Bedrock 调用 Claude，使用 `@anthropic-ai/bedrock-sdk`
- **原因**：用户提供的是 AWS AK/SK，不是 Anthropic 原生 key
- **环境变量**：`AI_PROVIDER=bedrock`, `AWS_ACCESS_KEY_ID`, `AWS_SECRET_ACCESS_KEY`, `AWS_REGION=us-east-1`
- **当前模型**：`us.anthropic.claude-3-7-sonnet-20250219-v1:0`（Claude Sonnet 4 在该账号未开通）

### [CR-002] 题型数量从 3 种扩展到 20 种（6.1 Law of Sines）
- **原需求**：MVP 示范单元 6.1 仅写 3 种核心题型
- **变更**：正式版需完整覆盖所有常见题型（参考 Larson/Sullivan/Stewart 三大教材）
- **详情**：Easy×4 / Medium×11 / Hard×5，共 20 种
- **状态**：⏳ 数据待写入 `curriculum.ts`

### [CR-003] Problem Types 页面交互改为手风琴展开
- **原需求**：所有题型平铺展示
- **变更**：按难度分组（📗基础/📙中等/📕困难），默认只显示标题和描述，点击展开详情
- **原因**：20种题型平铺太长，分组+折叠更易浏览
- **状态**：✅ 已实现

### [CR-004] 所有公式使用 KaTeX 数学渲染
- **原需求**：公式以纯文本显示（如 `a/sin(A) = b/sin(B)`）
- **变更**：集成 KaTeX，所有包含公式的文本使用 LaTeX 格式渲染
- **范围**：Formulas Tab（`MathBlock`）、概念说明/例题/步骤/题型中的行内公式（`MathText`，`$...$` 包裹）
- **影响**：`curriculum.ts` 中的公式数据需改为 LaTeX 格式
- **状态**：✅ 组件已实现，⏳ 现有数据部分待转换为 LaTeX

### [CR-005] maxTokens 从 2048 提升到 4096/8192
- **原需求**：默认 `max_tokens = 2048`
- **变更**：Mock Test 提升到 8192，其他 API 提升到 4096
- **原因**：10 道题的 JSON 输出超过 2048 tokens 导致截断和解析失败
- **状态**：✅ 已修复

### [CR-006] 数据存储方式讨论
- **当前方案**：静态数据写在 `curriculum.ts`（TypeScript 文件）
- **未来考虑**：迁移到数据库（Supabase/PlanetScale），支持后台管理增删改
- **决策**：MVP 阶段先用静态数据，后续再迁移
- **状态**：📌 记录备忘

---

## 待定需求

- [ ] 6.1 的 20 种题型数据写入（CR-002）
- [ ] 所有现有数据中的公式文本转为 LaTeX 格式（CR-004）
- [ ] 其他 37 个单元内容补全
- [ ] 数据库迁移方案（CR-006）
- [ ] Vercel 配置 AI_API_KEY 后的完整功能验证

---

## 格式说明

每条变更记录包含：
- **编号**：`[CR-xxx]`
- **原需求**：基线文档中的原始要求
- **变更**：修改后的需求
- **原因**：为什么改
- **影响**：涉及哪些文件/模块
- **状态**：✅ 已完成 / ⏳ 进行中 / 📌 备忘
