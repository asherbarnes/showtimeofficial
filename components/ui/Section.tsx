import type { ReactNode } from "react";
import { Container } from "./Container";

type Surface = "white" | "neutral" | "dark" | "black" | "amber";

const surfaces: Record<Surface, { className: string; data: "light" | "dark" | "amber" }> = {
  white: { className: "bg-white text-charcoal", data: "light" },
  neutral: { className: "bg-neutral-100 text-charcoal", data: "light" },
  dark: { className: "bg-charcoal text-white", data: "dark" },
  black: { className: "bg-black text-white", data: "dark" },
  amber: { className: "bg-amber-500 text-black", data: "amber" },
};

type SectionProps = {
  children: ReactNode;
  surface?: Surface;
  id?: string;
  labelledBy?: string;
  compact?: boolean;
  className?: string;
};

/** A full-width page section. `data-surface` drives focus-ring and link contrast. */
export function Section({ children, surface = "white", id, labelledBy, compact = false, className = "" }: SectionProps) {
  const s = surfaces[surface];
  return (
    <section
      id={id}
      aria-labelledby={labelledBy}
      data-surface={s.data}
      className={`${s.className} ${compact ? "py-10 md:py-14" : "section-y"} ${className}`}
    >
      <Container>{children}</Container>
    </section>
  );
}

type SectionHeadingProps = {
  id: string;
  eyebrow?: string;
  title: string;
  lead?: ReactNode;
  dark?: boolean;
};

/** Eyebrow → H2 → lead stack (DESIGN 7.2 heading stack). */
export function SectionHeading({ id, eyebrow, title, lead, dark = false }: SectionHeadingProps) {
  return (
    <div className="mb-8 max-w-(--container-lead) md:mb-10">
      {eyebrow && (
        <p className={`type-label mb-3 ${dark ? "text-amber-500" : "text-amber-700"}`}>{eyebrow}</p>
      )}
      <h2 id={id} className="type-h2">
        {title}
      </h2>
      {lead && <p className={`mt-4 text-lead ${dark ? "text-muted-dark" : "text-neutral-600"}`}>{lead}</p>}
    </div>
  );
}
