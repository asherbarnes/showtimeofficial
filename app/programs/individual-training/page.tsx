import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { Button } from "@/components/ui/Button";
import { Section, SectionHeading } from "@/components/ui/Section";
import { CtaBand } from "@/components/sections/CtaBand";
import { ProgramAbout } from "@/components/sections/ProgramAbout";
import { images } from "@/lib/images";
import { flags } from "@/lib/flags";
import { individualTraining } from "@/lib/memberships";
import { getProgram } from "@/lib/programs";
import { links, primaryCta } from "@/lib/site";
import { pageMetadata } from "@/lib/metadata";

const program = getProgram("individual-training");

export const metadata: Metadata = pageMetadata({
  title: "Individual Training | 1-on-1 Basketball Training in San Jose",
  description:
    "Focused 1:1 and small-group individual training in San Jose for athletes refining specific mechanics, habits, or areas of their game.",
  path: program.href,
});

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
        lead={program.description[0]}
        facts={[
          { label: "Format", value: "1:1 & small group" },
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

      <ProgramAbout program={program} />

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
        actions={
          <>
            <Button href={primaryCta.href} surface="dark" size="lg" fullWidthMobile arrow>
              {primaryCta.label}
            </Button>
            <Button href={links.sessions} variant="secondary" surface="dark" size="lg" fullWidthMobile>
              Book Sessions
            </Button>
            <Button href="/contact" variant="secondary" surface="dark" size="lg" fullWidthMobile>
              Ask About Availability
            </Button>
          </>
        }
      />
    </>
  );
}
