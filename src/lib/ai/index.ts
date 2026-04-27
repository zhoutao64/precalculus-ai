import "server-only";

import { AnthropicProvider } from "./providers/anthropic";
import { BedrockProvider } from "./providers/bedrock";
import type { AIProvider, AIProviderName } from "./types";

export type { AIProvider, AIProviderName, AIResponse } from "./types";
export {
  generatePracticePrompt,
  generateTargetedPracticePrompt,
  generateUnitSummaryPrompt,
  SYSTEM_TUTOR,
} from "./prompts";

export function getAIProvider(name?: AIProviderName): AIProvider {
  const provider = name || (process.env.AI_PROVIDER as AIProviderName) || "bedrock";

  switch (provider) {
    case "bedrock": {
      const accessKeyId = process.env.AWS_ACCESS_KEY_ID;
      const secretAccessKey = process.env.AWS_SECRET_ACCESS_KEY;
      const region = process.env.AWS_REGION || "ap-northeast-1";
      const model = process.env.AI_MODEL;

      if (!accessKeyId || !secretAccessKey) {
        throw new Error(
          "AWS_ACCESS_KEY_ID and AWS_SECRET_ACCESS_KEY are required for Bedrock provider.",
        );
      }

      return new BedrockProvider(accessKeyId, secretAccessKey, region, model);
    }
    case "anthropic": {
      const apiKey = process.env.AI_API_KEY;
      const model = process.env.AI_MODEL;

      if (!apiKey) {
        throw new Error(
          "AI_API_KEY is not set. Add it to .env.local to enable AI features.",
        );
      }

      return new AnthropicProvider(apiKey, model);
    }
    case "openai":
    case "gemini":
      throw new Error(`AI provider "${provider}" is not implemented yet.`);
    default:
      throw new Error(`Unknown AI provider: ${provider}`);
  }
}
