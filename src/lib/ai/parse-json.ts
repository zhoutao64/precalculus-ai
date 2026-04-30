/**
 * Extract and parse JSON from AI response text that may be wrapped
 * in markdown code fences (```json ... ```).
 */
export function parseAIJson<T = unknown>(text: string): T {
  let cleaned = text.trim();
  // Strip markdown code fences
  if (cleaned.startsWith("```")) {
    cleaned = cleaned.replace(/^```(?:json)?\s*\n?/, "").replace(/\n?```\s*$/, "");
  }
  return JSON.parse(cleaned) as T;
}
