import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/ui/PageHero";
import { Button } from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";
import { FaqAccordion } from "@/components/sections/FaqAccordion";
import { faqGroups } from "@/lib/faqs";
import { links } from "@/lib/site";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata({
  title: "FAQs",
  description:
    "How to sign up, the cancellation and make-up policy, drop-ins, membership cancellations and refunds at Showtime Basketball Academy.",
  path: "/faqs",
});

export default function FaqsPage() {
  return (
    <>
      <PageHero
        title="FAQs"
        eyebrow="Help"
        lead="Can't find what you need? Send us an inquiry."
        actions={
          <Button href={links.inquiry} variant="secondary" fullWidthMobile>
            Send an inquiry
          </Button>
        }
      />

      <Section>
        <nav aria-labelledby="faq-topics-heading" className="mb-12 md:mb-16">
          <h2 id="faq-topics-heading" className="type-label mb-3 text-amber-700">
            Topics
          </h2>
          <ul className="flex flex-wrap gap-x-6 gap-y-1">
            {faqGroups.map((group) => (
              <li key={group.id}>
                <Link href={`#${group.id}`} className="inline-flex min-h-11 items-center font-semibold underline underline-offset-4">
                  {group.title}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="space-y-14 md:space-y-20">
          {faqGroups.map((group) => (
            <section
              key={group.id}
              id={group.id}
              aria-labelledby={`${group.id}-heading`}
              className="grid scroll-mt-4 gap-6 lg:grid-cols-12 lg:gap-12"
            >
              <h2 id={`${group.id}-heading`} className="type-h2 lg:col-span-4">
                {group.title}
              </h2>
              <div className="lg:col-span-8">
                <FaqAccordion faqs={group.faqs} />
              </div>
            </section>
          ))}
        </div>
      </Section>
    </>
  );
}
