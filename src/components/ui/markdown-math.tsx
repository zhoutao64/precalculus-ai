"use client";

import ReactMarkdown from "react-markdown";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import "katex/dist/katex.min.css";

/**
 * Renders markdown text with LaTeX math support.
 * Inline math: $...$ or \(...\)
 * Display math: $$...$$ or \[...\]
 */
export function MarkdownMath({
  content,
  className,
}: {
  content: string;
  className?: string;
}) {
  return (
    <div className={`markdown-math ${className ?? ""}`}>
      <ReactMarkdown
        remarkPlugins={[remarkMath]}
        rehypePlugins={[rehypeKatex]}
        components={{
          p: ({ children }) => <p className="mb-2 last:mb-0 leading-relaxed">{children}</p>,
          ul: ({ children }) => <ul className="list-disc list-inside mb-2 space-y-1">{children}</ul>,
          ol: ({ children }) => <ol className="list-decimal list-inside mb-2 space-y-1">{children}</ol>,
          li: ({ children }) => <li className="ml-2">{children}</li>,
          h1: ({ children }) => <h1 className="text-xl font-bold mb-2">{children}</h1>,
          h2: ({ children }) => <h2 className="text-lg font-bold mb-2">{children}</h2>,
          h3: ({ children }) => <h3 className="text-base font-bold mb-1">{children}</h3>,
          strong: ({ children }) => <strong className="font-semibold">{children}</strong>,
          code: ({ children, className: codeClass }) => {
            const isBlock = codeClass?.includes("language-");
            if (isBlock) {
              return (
                <pre className="bg-gray-100 rounded-md p-3 mb-2 overflow-x-auto text-sm">
                  <code>{children}</code>
                </pre>
              );
            }
            return <code className="bg-gray-100 rounded px-1 py-0.5 text-sm font-mono">{children}</code>;
          },
          blockquote: ({ children }) => (
            <blockquote className="border-l-4 border-blue-300 pl-3 italic text-gray-600 mb-2">{children}</blockquote>
          ),
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
}
