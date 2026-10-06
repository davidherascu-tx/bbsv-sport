// Wandelt einfachen Text aus dem Studio in Absätze und Listen um:
//   "1. Punkt" / "2) Punkt"  -> nummerierte Liste
//   "- Punkt" / "* Punkt" / "• Punkt" -> Aufzählung
//   Leerzeile -> neuer Absatz

type Block = { type: "p"; lines: string[] } | { type: "ol" | "ul"; items: string[] };

const OL = /^\s*\d+[.)]\s+(.*)$/;
const UL = /^\s*[-*•–]\s+(.*)$/;

function parse(text: string): Block[] {
  const blocks: Block[] = [];
  let gap = false; // Leerzeile seit dem letzten Inhalt
  for (const raw of text.replace(/\r\n?/g, "\n").split("\n")) {
    const line = raw.trimEnd();
    if (!line.trim()) {
      gap = true;
      continue;
    }
    const ol = OL.exec(line);
    const ul = ol ? null : UL.exec(line);
    const kind = ol ? "ol" : ul ? "ul" : "p";
    const last = blocks[blocks.length - 1];

    if (kind === "p") {
      if (last?.type === "p" && !gap) last.lines.push(line.trim());
      else blocks.push({ type: "p", lines: [line.trim()] });
    } else {
      const item = (ol ?? ul)![1].trim();
      if (last?.type === kind) last.items.push(item);
      else blocks.push({ type: kind, items: [item] });
    }
    gap = false;
  }
  return blocks;
}

export default function FormattedText({ text, className = "" }: { text: string; className?: string }) {
  return (
    <div className={`space-y-4 ${className}`}>
      {parse(text).map((b, i) => {
        if (b.type === "p")
          return (
            <p key={i} className="whitespace-pre-line">
              {b.lines.join("\n")}
            </p>
          );
        const Tag = b.type;
        return (
          <Tag key={i} className={`space-y-2 pl-6 marker:font-semibold marker:text-brand ${b.type === "ol" ? "list-decimal" : "list-disc"}`}>
            {b.items.map((it, j) => (
              <li key={j} className="pl-1">
                {it}
              </li>
            ))}
          </Tag>
        );
      })}
    </div>
  );
}
