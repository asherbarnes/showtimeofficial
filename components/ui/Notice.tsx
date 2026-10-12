import type { ReactNode } from "react";
import { InfoIcon } from "./icons";

/** Amber-tint notice with icon + text label, so colour is never the only signal (DESIGN 10.12). */
export function Notice({ label = "Note", children }: { label?: string; children: ReactNode }) {
  return (
    <div className="flex gap-3 border-l-2 border-amber-700 bg-amber-100 px-4 py-4 text-charcoal sm:px-5">
      <InfoIcon className="mt-0.5 size-5 shrink-0 text-amber-700" />
      <p>
        <strong className="font-bold">{label}: </strong>
        {children}
      </p>
    </div>
  );
}

/**
 * Development marker for content awaiting the client (DESIGN 10.12).
 * Must never ship to production; a build-time check is planned for Phase 5–8.
 */
export function Placeholder({ children }: { children: ReactNode }) {
  return (
    <div className="border-2 border-dashed border-error px-4 py-4 text-small text-error">
      <p className="font-bold">[PLACEHOLDER — CLIENT INPUT NEEDED]</p>
      <p className="mt-1 text-charcoal">{children}</p>
    </div>
  );
}
