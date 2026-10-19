import Link from "next/link";
import type { ReactNode } from "react";
import { ExternalIcon } from "@/components/ui/icons";

export type LegalSection = { id: string; title: string; body: ReactNode };

/** Inline link for legal prose. External links follow the site-wide new-tab convention. */
export function LegalLink({ href, children }: { href: string; children: ReactNode }) {
  if (href.startsWith("http")) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className="prose-link inline-flex items-center gap-1">
        {children}
        <ExternalIcon className="size-3.5" />
        <span className="sr-only"> (opens in a new tab)</span>
      </a>
    );
  }
  return (
    <Link href={href} className="prose-link">
      {children}
    </Link>
  );
}

/** Long-form legal page body: "On this page" index, then numbered sections. */
export function LegalDocument({ sections }: { sections: LegalSection[] }) {
  return (
    <article className="max-w-(--container-prose)">
      <nav aria-labelledby="legal-toc-heading" className="border-t-2 border-black pt-6">
        <h2 id="legal-toc-heading" className="type-label">
          On this page
        </h2>
        <ol className="mt-3 grid gap-1 sm:grid-cols-2">
          {sections.map((section, i) => (
            <li key={section.id}>
              <a href={`#${section.id}`} className="prose-link inline-flex min-h-11 items-center">
                {i + 1}. {section.title}
              </a>
            </li>
          ))}
        </ol>
      </nav>

      <div className="[&_li]:mt-1 [&_p]:mt-4 [&_ul]:mt-3 [&_ul]:list-disc [&_ul]:pl-6">
        {sections.map((section, i) => (
          <section key={section.id} aria-labelledby={section.id} className="mt-12">
            <h2 id={section.id} className="type-h3 scroll-mt-6">
              {i + 1}. {section.title}
            </h2>
            {section.body}
          </section>
        ))}
      </div>
    </article>
  );
}
