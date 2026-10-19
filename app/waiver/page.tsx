import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { Button } from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";
import { WaiverText } from "@/components/sections/WaiverText";
import { links } from "@/lib/site";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata({
  title: "Waiver",
  description:
    "The Showtime Basketball Academy and The Grove waiver and release of liability, required before participating in training.",
  path: "/waiver",
});

/*
 * Interim (P0) behaviour: no form fields, signature capture, storage or
 * email scripts until an approved collection and retention solution exists
 * (CONTENT_NEEDED B6). The #complete-waiver id is linked from elsewhere.
 */
export default function WaiverPage() {
  return (
    <>
      <PageHero
        title="Waiver"
        eyebrow="Memberships"
        lead="Showtime Basketball Academy & The Grove Waiver & Release of Liability Form. Families must complete this before participating in training."
      />

      <Section surface="amber" id="complete-waiver" labelledBy="complete-waiver-heading" compact>
        <div className="max-w-(--container-prose)">
          <h2 id="complete-waiver-heading" className="type-h2">
            How to Complete the Waiver
          </h2>
          <p className="mt-4">
            The waiver is still required before any athlete participates in training. Online signing is temporarily
            unavailable on this website, and this page does not collect signatures or personal information.
          </p>
          <p className="mt-4">
            To get waiver instructions, send an inquiry through Showtime&rsquo;s inquiry form and mention that you need
            to complete the waiver. The waiver text is below for you to review.
          </p>
          <div className="mt-6">
            <Button href={links.inquiry} surface="amber" fullWidthMobile>
              Send an Inquiry
            </Button>
          </div>
        </div>
      </Section>

      <Section labelledBy="waiver-doc-heading">
        <article className="max-w-(--container-prose)">
          <header className="border-b-2 border-black pb-6">
            <h2 id="waiver-doc-heading" className="type-h2">
              Waiver and Release of Liability
            </h2>
            <p className="mt-3 font-semibold text-neutral-600">
              Showtime Basketball LLC &amp; The Grove Community Collective
            </p>
          </header>
          <div
            data-waiver-text
            className="mt-8 [&_blockquote]:my-4 [&_blockquote]:border-l-2 [&_blockquote]:border-black [&_blockquote]:pl-4 [&_blockquote]:italic [&_h3]:mt-10 [&_h3]:type-h4 [&_li]:mt-1 [&_p]:mt-4 [&_ul]:mt-3 [&_ul]:list-disc [&_ul]:pl-6"
          >
            <WaiverText />
          </div>
        </article>
      </Section>
    </>
  );
}
