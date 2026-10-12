import { Fragment, ReactNode } from "react";

const HIGHLIGHT_TERMS = [
  "React Native",
  "React.js",
  "Node.js",
  "Next.js",
  "TypeScript",
  "GitHub Copilot",
  "GitHub",
  "GraphQL",
  "gRPC",
  "PostgreSQL",
  "Kubernetes",
  "Docker",
  "Claude Code",
  "MongoDB",
  "MySQL",
  "Clojure",
  "Bootstrap",
  "Middleman",
  "AWS",
  "Jest",
  "PHP",
  "Go",
  "HTML",
  "CSS",
];

function escapeRegExp(value: string) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

const sortedTerms = [...HIGHLIGHT_TERMS].sort((a, b) => b.length - a.length);
const termSet = new Set(HIGHLIGHT_TERMS);
const highlightRegex = new RegExp(`\\b(${sortedTerms.map(escapeRegExp).join("|")})\\b`, "g");

export function highlightSkills(text: string): ReactNode {
  return text.split(highlightRegex).map((part, i) =>
    termSet.has(part) ? (
      <span key={i} className="text-accent">
        {part}
      </span>
    ) : (
      <Fragment key={i}>{part}</Fragment>
    ),
  );
}
