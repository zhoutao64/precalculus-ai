# Precalculus AI Study App

An AI-powered precalculus study companion that combines a structured 6-chapter curriculum with adaptive practice, full-length mock tests, a Study Coach, and an on-demand AI Tutor. The app is bilingual (English / 中文) and runs entirely on Next.js with serverless AI routes.

## Features

- **6-chapter curriculum** — 38 units covering trigonometry, vectors, polar coordinates, complex numbers, conic sections, and more, starting from Chapter 6 (Law of Sines) with full bilingual notes.
- **Bilingual interface (EN / 中文)** — every page, problem, and explanation can be toggled between English and Simplified Chinese.
- **AI-generated practice** — per-unit practice problems and targeted practice based on weaknesses, generated on-demand and graded with worked solutions.
- **Mock tests** — timed, full-length tests with automatic grading, item-level review, and a final score breakdown.
- **Study Coach** — analyzes your learning memory and recommends what to study next, what to review, and what to drill.
- **AI Tutor** — chat-style tutor that answers conceptual questions in context of the unit you are studying.
- **Diagnostic check** — quick placement check that updates your learning memory with strengths and gaps.
- **Local learning memory** — progress, mastery scores, and weak topics are persisted in the browser so the experience is personalized without an account.

## Tech Stack

- **Next.js 16** (App Router, React 19)
- **TypeScript 5**
- **Tailwind CSS 4** with `tw-animate-css`
- **shadcn/ui** components on top of `@base-ui/react`
- **lucide-react** icons
- **Anthropic SDK** as the default AI provider (pluggable provider layer in `src/lib/ai/`)

## Quick Start

```bash
# 1. Clone
git clone <your-repo-url> precalculus-ai
cd precalculus-ai

# 2. Install
npm install

# 3. Configure environment
cp .env.example .env.local   # then edit .env.local with your keys

# 4. Run the dev server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to use the app.

Other scripts:

```bash
npm run build   # production build
npm run start   # start the production server
npm run lint    # run ESLint
```

## Environment Variables

Configure these in `.env.local` (never commit this file):

| Variable      | Required | Description                                                                                  |
| ------------- | -------- | -------------------------------------------------------------------------------------------- |
| `AI_PROVIDER` | yes      | AI provider key. Currently supported: `anthropic`.                                           |
| `AI_API_KEY`  | yes      | API key for the selected provider (e.g. an Anthropic API key starting with `sk-ant-...`).    |
| `AI_MODEL`    | yes      | Model ID to use, e.g. `claude-opus-4-7` or `claude-sonnet-4-6`.                              |

Example `.env.local`:

```env
AI_PROVIDER=anthropic
AI_API_KEY=sk-ant-...
AI_MODEL=claude-sonnet-4-6
```

## Deploy on Vercel

1. Push this repository to GitHub / GitLab / Bitbucket.
2. Go to [vercel.com/new](https://vercel.com/new) and import the repo.
3. Framework preset is auto-detected as **Next.js** — no overrides needed.
4. Under **Environment Variables**, add `AI_PROVIDER`, `AI_API_KEY`, and `AI_MODEL` for the Production (and Preview) environments.
5. Click **Deploy**. Subsequent pushes to the default branch will redeploy automatically.

## Project Structure

```
src/
├── app/                       # Next.js App Router
│   ├── api/                   # Serverless AI routes
│   │   ├── generate-practice/
│   │   ├── generate-targeted-practice/
│   │   ├── generate-mock-test/
│   │   ├── generate-unit-summary/
│   │   ├── grade-answer/
│   │   ├── study-coach/
│   │   ├── diagnostic-check/
│   │   └── ask-tutor/
│   ├── dashboard/             # Progress dashboard
│   ├── unit/[unitId]/         # Per-unit study page
│   ├── layout.tsx
│   └── page.tsx               # Home / chapter overview
├── components/
│   ├── coach/                 # Study Coach UI
│   ├── layout/                # Header, MainLayout
│   ├── mocktest/              # Builder, Runner, Result
│   ├── practice/              # Practice generator + cards
│   ├── tutor/                 # AI Tutor chat
│   └── ui/                    # shadcn/ui primitives
├── data/curriculum.ts         # 6-chapter / 38-unit catalog
├── hooks/useLearningMemory.ts # Local-storage learning memory
├── i18n/                      # EN / 中文 translations + provider
├── lib/ai/                    # Provider-agnostic AI service layer
│   └── providers/anthropic.ts
└── types/curriculum.ts
```

## License

MIT
