import type { Faq } from "@/lib/faqs";

/**
 * FAQ accordion on native <details>/<summary> (DESIGN 10.12): keyboard
 * operable (Tab, Enter/Space), expanded state exposed by the browser, works
 * without JavaScript, and opens with no height animation (DESIGN 15).
 */
export function FaqAccordion({ faqs }: { faqs: Faq[] }) {
  return (
    <div className="border-t-2 border-black">
      {faqs.map((faq) => (
        <details key={faq.id} id={faq.id} className="group scroll-mt-4 border-b border-neutral-300">
          <summary className="flex min-h-14 cursor-pointer list-none items-center justify-between gap-6 py-4 type-h4 marker:hidden [&::-webkit-details-marker]:hidden hover:underline hover:underline-offset-4">
            <span>{faq.question}</span>
            <span
              aria-hidden="true"
              className="flex size-8 shrink-0 items-center justify-center border-2 border-black"
            >
              <svg viewBox="0 0 16 16" className="size-3.5" fill="none" stroke="currentColor" strokeWidth="2.5" focusable="false">
                <path d="M1 8h14" />
                <path d="M8 1v14" className="group-open:hidden" />
              </svg>
            </span>
          </summary>
          <div className="max-w-(--container-prose) space-y-4 pb-8 pr-0 sm:pr-14">{faq.answer}</div>
        </details>
      ))}
    </div>
  );
}
