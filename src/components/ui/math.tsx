"use client";

import { useMemo } from "react";
import katex from "katex";
import "katex/dist/katex.min.css";

/**
 * Renders text with inline LaTeX math.
 * Wraps content between $ ... $ in KaTeX rendered HTML.
 * Double $$ ... $$ renders as display (block) math.
 */
export function MathText({ text, className }: { text: string; className?: string }) {
  const html = useMemo(() => renderMathInText(text), [text]);
  return <span className={className} dangerouslySetInnerHTML={{ __html: html }} />;
}

/** Block-level math display */
export function MathBlock({ latex, className }: { latex: string; className?: string }) {
  const html = useMemo(() => {
    try {
      return katex.renderToString(latex, { displayMode: true, throwOnError: false });
    } catch {
      return latex;
    }
  }, [latex]);
  return <div className={className} dangerouslySetInnerHTML={{ __html: html }} />;
}

function renderMathInText(text: string): string {
  // Handle display math $$...$$ first, then inline $...$
  let result = text;

  // Display math: $$...$$
  result = result.replace(/\$\$([\s\S]*?)\$\$/g, (_, latex: string) => {
    try {
      return katex.renderToString(latex.trim(), { displayMode: true, throwOnError: false });
    } catch {
      return `$$${latex}$$`;
    }
  });

  // Inline math: $...$  (not preceded/followed by $)
  result = result.replace(/(?<!\$)\$(?!\$)((?:[^$\\]|\\.)+?)\$(?!\$)/g, (_, latex: string) => {
    try {
      return katex.renderToString(latex.trim(), { displayMode: false, throwOnError: false });
    } catch {
      return `$${latex}$`;
    }
  });

  return result;
}
