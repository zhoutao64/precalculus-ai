import "server-only";

import type {
  AIGenerateOptions,
  AIProvider,
  AIResponse,
} from "../types";

const ANTHROPIC_API_URL = "https://api.anthropic.com/v1/messages";
const ANTHROPIC_VERSION = "2023-06-01";
const DEFAULT_MODEL = "claude-sonnet-4-6";
const DEFAULT_MAX_TOKENS = 2048;

type AnthropicContentBlock = { type: string; text?: string };

type AnthropicResponse = {
  id: string;
  model: string;
  content: AnthropicContentBlock[];
  usage?: { input_tokens: number; output_tokens: number };
};

type AnthropicErrorBody = {
  error?: { type?: string; message?: string };
};

export class AnthropicProvider implements AIProvider {
  readonly name = "anthropic" as const;

  constructor(
    private readonly apiKey: string,
    private readonly model: string = DEFAULT_MODEL,
  ) {}

  async generate(options: AIGenerateOptions): Promise<AIResponse> {
    const body = {
      model: this.model,
      max_tokens: options.maxTokens ?? DEFAULT_MAX_TOKENS,
      temperature: options.temperature,
      system: options.system,
      messages: options.messages.map((m) => ({
        role: m.role,
        content: m.content,
      })),
    };

    const res = await fetch(ANTHROPIC_API_URL, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        "x-api-key": this.apiKey,
        "anthropic-version": ANTHROPIC_VERSION,
      },
      body: JSON.stringify(body),
    });

    if (!res.ok) {
      const errBody = (await res.json().catch(() => null)) as
        | AnthropicErrorBody
        | null;
      const message =
        errBody?.error?.message ?? `Anthropic API error (${res.status})`;
      throw new Error(`[anthropic] ${message}`);
    }

    const data = (await res.json()) as AnthropicResponse;
    const text = data.content
      .filter((b) => b.type === "text" && typeof b.text === "string")
      .map((b) => b.text!)
      .join("");

    return {
      text,
      model: data.model,
      usage: data.usage
        ? {
            inputTokens: data.usage.input_tokens,
            outputTokens: data.usage.output_tokens,
          }
        : undefined,
    };
  }
}
