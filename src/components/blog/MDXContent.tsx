"use client";

import React from "react";

interface MDXContentProps {
  content: string;
}

export function MDXContent({ content }: MDXContentProps) {
  const lines = content.split("\n");
  const elements: React.ReactNode[] = [];
  let inCodeBlock = false;
  let codeBuffer: string[] = [];
  let codeLang = "";
  const listBuffer: string[] = [];

  const renderCodeBlock = (code: string, lang: string, key: number) => {
    return (
      <div
        key={key}
        className="border-border/80 my-6 overflow-x-auto rounded-xl border bg-zinc-950 p-4 font-mono text-xs text-zinc-100 shadow-lg"
      >
        <div className="mb-3 flex items-center justify-between border-b border-zinc-800 pb-2 text-[10px] font-bold tracking-wider text-zinc-400 uppercase">
          <span>{lang || "code"}</span>
          <span className="text-emerald-400">MDX Snippet</span>
        </div>
        <pre className="leading-relaxed">
          <code>{code}</code>
        </pre>
      </div>
    );
  };

  const flushList = (key: string) => {
    if (listBuffer.length === 0) return null;
    const items = listBuffer.map((item, i) => (
      <li
        key={i}
        className="text-muted-foreground mb-2 text-sm leading-relaxed"
      >
        {item}
      </li>
    ));
    listBuffer.splice(0, listBuffer.length);
    return (
      <ul key={key} className="my-4 list-disc space-y-1 pl-6">
        {items}
      </ul>
    );
  };

  let elementKey = 0;

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];

    // Code block check
    if (line.startsWith("```")) {
      if (inCodeBlock) {
        elements.push(
          renderCodeBlock(codeBuffer.join("\n"), codeLang, elementKey++)
        );
        codeBuffer = [];
        codeLang = "";
        inCodeBlock = false;
      } else {
        const listEl = flushList(`list-${elementKey++}`);
        if (listEl) elements.push(listEl);
        inCodeBlock = true;
        codeLang = line.replace("```", "").trim();
      }
      continue;
    }

    if (inCodeBlock) {
      codeBuffer.push(line);
      continue;
    }

    // List items check
    if (line.startsWith("* ") || line.startsWith("- ")) {
      listBuffer.push(line.substring(2));
      continue;
    } else {
      const listEl = flushList(`list-${elementKey++}`);
      if (listEl) elements.push(listEl);
    }

    // Headings
    if (line.startsWith("## ")) {
      const text = line.substring(3);
      const id = text
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/(^-|-$)/g, "");
      elements.push(
        <h2
          key={elementKey++}
          id={id}
          className="text-foreground border-border/20 mt-8 mb-4 scroll-mt-28 border-b pb-2 text-2xl font-bold tracking-tight"
        >
          {text}
        </h2>
      );
      continue;
    }

    if (line.startsWith("### ")) {
      const text = line.substring(4);
      const id = text
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/(^-|-$)/g, "");
      elements.push(
        <h3
          key={elementKey++}
          id={id}
          className="text-foreground mt-6 mb-3 scroll-mt-28 text-xl font-bold tracking-tight"
        >
          {text}
        </h3>
      );
      continue;
    }

    // Paragraph
    if (line.trim().length > 0) {
      const parts = line.split(/(\*\*.*?\*\*)/g);
      const formattedLine = parts.map((part, pIdx) => {
        if (part.startsWith("**") && part.endsWith("**")) {
          return (
            <strong key={pIdx} className="text-foreground font-semibold">
              {part.slice(2, -2)}
            </strong>
          );
        }
        return part;
      });

      elements.push(
        <p
          key={elementKey++}
          className="text-muted-foreground mb-4 text-sm leading-relaxed md:text-base"
        >
          {formattedLine}
        </p>
      );
    }
  }

  const listEl = flushList(`list-${elementKey++}`);
  if (listEl) elements.push(listEl);

  return (
    <article className="prose dark:prose-invert max-w-none text-left">
      {elements}
    </article>
  );
}
