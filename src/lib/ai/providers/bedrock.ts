import "server-only";

import AnthropicBedrock from "@anthropic-ai/bedrock-sdk";
import type { AIGenerateOptions, AIProvider, AIResponse } from "../types";

const DEFAULT_MODEL = "anthropic.claude-sonnet-4-6-v1";
const DEFAULT_MAX_TOKENS = 2048;

export class BedrockProvider implements AIProvider {
  readonly name = "bedrock" as const;

  private client: AnthropicBedrock;
  private model: string;

  constructor(
    accessKeyId: string,
    secretAccessKey: string,
    region: string = "us-east-1",
    model?: string,
  ) {
    this.model = model || DEFAULT_MODEL;
    this.client = new AnthropicBedrock({
      awsAccessKey: accessKeyId,
      awsSecretKey: secretAccessKey,
      awsRegion: region,
    });
  }

  async generate(options: AIGenerateOptions): Promise<AIResponse> {
    const response = await this.client.messages.create({
      model: this.model,
      max_tokens: options.maxTokens ?? DEFAULT_MAX_TOKENS,
      temperature: options.temperature,
      system: options.system,
      messages: options.messages.map((m) => ({
        role: m.role as "user" | "assistant",
        content: m.content,
      })),
    });

    const text = response.content
      .filter((b) => b.type === "text")
      .map((b) => (b as unknown as { text: string }).text)
      .join("");

    return {
      text,
      model: response.model,
      usage: response.usage
        ? {
            inputTokens: response.usage.input_tokens,
            outputTokens: response.usage.output_tokens,
          }
        : undefined,
    };
  }
}
