import "server-only";

import {
  BedrockRuntimeClient,
  InvokeModelCommand,
} from "@aws-sdk/client-bedrock-runtime";
import type { AIGenerateOptions, AIProvider, AIResponse } from "../types";

const DEFAULT_MODEL = "anthropic.claude-sonnet-4-6-v1";
const DEFAULT_MAX_TOKENS = 2048;

type BedrockAnthropicResponse = {
  id: string;
  model: string;
  content: { type: string; text?: string }[];
  usage?: { input_tokens: number; output_tokens: number };
};

export class BedrockProvider implements AIProvider {
  readonly name = "bedrock" as const;

  private client: BedrockRuntimeClient;
  private model: string;

  constructor(
    accessKeyId: string,
    secretAccessKey: string,
    region: string = "us-east-1",
    model?: string,
  ) {
    this.model = model || DEFAULT_MODEL;
    this.client = new BedrockRuntimeClient({
      region,
      credentials: {
        accessKeyId,
        secretAccessKey,
      },
    });
  }

  async generate(options: AIGenerateOptions): Promise<AIResponse> {
    const body = {
      anthropic_version: "bedrock-2023-05-31",
      max_tokens: options.maxTokens ?? DEFAULT_MAX_TOKENS,
      temperature: options.temperature,
      system: options.system,
      messages: options.messages.map((m) => ({
        role: m.role,
        content: m.content,
      })),
    };

    const command = new InvokeModelCommand({
      modelId: this.model,
      contentType: "application/json",
      accept: "application/json",
      body: JSON.stringify(body),
    });

    const response = await this.client.send(command);
    const raw = new TextDecoder().decode(response.body);
    const data = JSON.parse(raw) as BedrockAnthropicResponse;

    const text = data.content
      .filter((b) => b.type === "text" && typeof b.text === "string")
      .map((b) => b.text!)
      .join("");

    return {
      text,
      model: data.model ?? this.model,
      usage: data.usage
        ? {
            inputTokens: data.usage.input_tokens,
            outputTokens: data.usage.output_tokens,
          }
        : undefined,
    };
  }
}
