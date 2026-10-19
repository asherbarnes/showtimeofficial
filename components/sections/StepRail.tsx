import type { ReactNode } from "react";

export type Step = { title: string; text: ReactNode };

const columns = { 3: "lg:grid-cols-3", 4: "lg:grid-cols-4", 5: "lg:grid-cols-5" } as const;

/**
 * Numbered steps as real text (DESIGN 10.5): a vertical court-line rule on
 * mobile with the number beside the title, a horizontal rule from `lg`. Ink is
 * black, so it works on the amber band and on white.
 */
export function StepRail({ steps }: { steps: Step[] }) {
  const cols = columns[steps.length as keyof typeof columns] ?? columns[5];
  return (
    <ol className={`grid lg:gap-8 ${cols}`}>
      {steps.map((step, index) => (
        <li key={step.title} className="border-l-2 border-black pb-6 pl-5 last:pb-0 lg:border-t-2 lg:pb-0 lg:border-l-0 lg:pt-6 lg:pl-0">
          <div className="flex items-baseline gap-4 lg:block">
            <span aria-hidden="true" className="type-stat block shrink-0">
              {String(index + 1).padStart(2, "0")}
            </span>
            <h3 className="type-h4 lg:mt-3">{step.title}</h3>
          </div>
          <p className="mt-2">{step.text}</p>
        </li>
      ))}
    </ol>
  );
}
