import "server-only";

import { AnthropicProvider } from "./providers/anthropic";
import type { AIProvider, AIProviderName } from "./types";

export type { AIProvider, AIProviderName, AIResponse } from "./types";
export {
  generatePracticePrompt,
  generateTargetedPracticePrompt,
  generateUnitSummaryPrompt,
  SYSTEM_TUTOR,
} from "./prompts";

export function getAIProvider(name: AIProviderName = "anthropic"): AIProvider {
  const apiKey = process.env.AI_API_KEY;
  const model = process.env.AI_MODEL;

  if (!apiKey) {
    throw new Error(
      "AI_API_KEY is not set. Add it to .env.local to enable AI features.",
    );
  }

  switch (name) {
    case "anthropic":
      return new AnthropicProvider(apiKey, model);
    case "openai":
    case "gemini":
      throw new Error(`AI provider "${name}" is not implemented yet.`);
    default: {
      const exhaustive: never = name;
      throw new Error(`Unknown AI provider: ${exhaustive as string}`);
    }
  }
}
