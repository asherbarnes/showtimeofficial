import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { Button } from "@/components/ui/Button";
import { Section, SectionHeading } from "@/components/ui/Section";
import { CtaBand } from "@/components/sections/CtaBand";
import { images } from "@/lib/images";
import { flags } from "@/lib/flags";
import { individualTraining } from "@/lib/memberships";
import { getProgram } from "@/lib/programs";
import { links } from "@/lib/site";
import { pageMetadata } from "@/lib/metadata";

const program = getProgram("individual-training");

export const metadata: Metadata = pageMetadata({
  title: "Individual Training | 1-on-1 Basketball Training in San Jose",
  description:
    "1-on-1 basketball training with a Showtime coach in San Jose. Work on shooting mechanics, footwork, ball-handling, finishing and movement.",
  path: program.href,
});

// Focus areas (S8, PRODUCT 5.3).
const focusAreas = ["Shooting mechanics", "Footwork", "Ball-handling details", "Finishing", "Movement patterns"];

const bookingLinks = {
  "Academy Coach": links.itAcademyCoach,
  "Master Coach": links.itMasterCoach,
} as const;

export default function IndividualTrainingPage() {
  return (
    <>
      <PageHero
        variant="program"
        breadcrumb={{ label: "Programs", href: "/programs" }}
        title="Individual Training"
        lead="Work on specific mechanics, habits or areas of refinement at the athlete's own pace."
        facts={[
          { label: "Format", value: "1-on-1" },
          { label: "Length", value: "60 minutes" },
          { label: "Coach levels", value: "Academy Coach or Master Coach" },
        ]}
        image={images.individualForm}
        actions={
          <Button href="#book" surface="dark" size="lg" fullWidthMobile>
            {program.cta.label}
          </Button>
        }
      />

      <Section labelledBy="focus-heading">
        <SectionHeading id="focus-heading" eyebrow="Focus areas" title="What sessions cover" />
        <ul className="grid border-t-2 border-black sm:grid-cols-2">
          {focusAreas.map((area) => (
            <li key={area} className="border-b border-neutral-300 py-4 type-h4 sm:odd:pr-6">
              {area}
            </li>
          ))}
        </ul>
      </Section>

      <Section surface="neutral" id="book" labelledBy="book-heading">
        <SectionHeading id="book-heading" eyebrow="Book" title="Choose a coach level" />
        <ul className="grid gap-6 md:grid-cols-2">
          {individualTraining.map((option) => (
            <li key={option.level} className="flex flex-col gap-5 border-t-2 border-black bg-white p-6 md:p-8">
              <h3 className="type-h3">1-on-1 with {option.withLevel}</h3>
              {flags.showPricing && (
                <p>
                  <span className="type-stat">${option.price}</span>{" "}
                  <span className="text-neutral-600">per 60-minute session</span>
                </p>
              )}
              <div className="mt-auto">
                <Button href={bookingLinks[option.level]} fullWidthMobile>
                  Book with {option.withLevel}
                </Button>
              </div>
            </li>
          ))}
        </ul>
        <div className="mt-10 max-w-(--container-prose) space-y-3">
          <h3 className="type-h4">Cancellation</h3>
          {/* Verbatim from the Minos lesson pages (M6, M7). CONTENT_NEEDED B3 tracks the conflict with the FAQ rule. */}
          <p>&ldquo;Cancel or reschedule up to 1 day before your session for a full refund.&rdquo;</p>
          <p className="text-small text-neutral-600">Policy as listed on our booking site.</p>
        </div>
      </Section>

      <CtaBand
        title="Have a question first?"
        text="Send an inquiry and tell us what your athlete wants to work on."
        actions={
          <Button href={links.inquiry} surface="dark" size="lg" fullWidthMobile>
            Ask a question
          </Button>
        }
      />
    </>
  );
}
