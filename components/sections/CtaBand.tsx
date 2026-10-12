import type { ReactNode } from "react";
import { Section } from "@/components/ui/Section";

type CtaBandProps = {
  title: string;
  text?: ReactNode;
  actions: ReactNode;
  /** `charcoal` separates the band from the black footer where the page above is also black-heavy. */
  surface?: "black" | "charcoal" | "amber";
  /** Tighter padding, for pages whose content above is short (Hall of Fame). */
  compact?: boolean;
};

/** The single closing conversion band per page (DESIGN 10.10). */
export function CtaBand({ title, text, actions, surface = "black", compact = false }: CtaBandProps) {
  const dark = surface !== "amber";
  return (
    <Section surface={surface === "charcoal" ? "dark" : surface} labelledBy="cta-band-title" compact={compact}>
      <div data-sticky-cta-hide className="grid gap-8 lg:grid-cols-12 lg:items-end">
        <div className="lg:col-span-7">
          <h2 id="cta-band-title" className="type-h2">
            {title}
          </h2>
          {text && <p className={`mt-4 max-w-(--container-lead) text-lead ${dark ? "text-muted-dark" : ""}`}>{text}</p>}
        </div>
        <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap lg:col-span-5 lg:justify-end">{actions}</div>
      </div>
    </Section>
  );
}
