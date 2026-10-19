import type { OverviewItem } from "@/lib/programs";

/** The four-part program summary (Who it's for, focus, format, expectations) as a labelled grid. */
export function ProgramOverview({ items }: { items: readonly OverviewItem[] }) {
  return (
    <dl className="grid gap-x-8 border-t-2 border-black sm:grid-cols-2">
      {items.map((item) => (
        <div key={item.label} className="border-b border-neutral-300 py-5">
          <dt className="type-label text-amber-700">{item.label}</dt>
          <dd className="mt-2">{item.text}</dd>
        </div>
      ))}
    </dl>
  );
}
