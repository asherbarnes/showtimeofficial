import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/ui/PageHero";
import { Button } from "@/components/ui/Button";
import { Section, SectionHeading } from "@/components/ui/Section";
import { StepRail } from "@/components/sections/StepRail";
import { academyPlacementLine, academySteps, startLead, startSteps } from "@/lib/enrollment";
import { programs } from "@/lib/programs";
import { links } from "@/lib/site";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata({
  title: "Get Started",
  description:
    "How to start at Showtime Basketball Academy: send an inquiry, attend a free small-group session, then find your program. Academy placement is by evaluation.",
  path: "/get-started",
});

export default function GetStartedPage() {
  return (
    <>
      <PageHero
        title="Get started"
        eyebrow="Your first step"
        lead={`${startLead} ${academyPlacementLine}`}
      />

      {/* Universal path, shared with the homepage (lib/enrollment.ts). */}
      <Section surface="amber" labelledBy="steps-heading">
        <SectionHeading id="steps-heading" title="How it works" />
        <StepRail steps={startSteps} />
        <div className="mt-8 lg:mt-10">
          <Button href={links.inquiry} surface="amber" size="lg" fullWidthMobile>
            Send an inquiry
          </Button>
        </div>
        <p className="mt-6 text-small">
          Individual Training is 1-on-1 and booked separately.{" "}
          <Link href="/programs/individual-training" className="font-semibold underline underline-offset-4">
            About Individual Training
          </Link>
        </p>
      </Section>

      {/* The official five-step Academy process (S6, S7). */}
      <Section id="academy-steps" labelledBy="academy-steps-heading">
        <SectionHeading
          id="academy-steps-heading"
          eyebrow="Academy"
          title="The Academy path"
          lead="Five steps from inquiry to enrollment. You must be accepted into the program before purchasing a membership."
        />
        <StepRail steps={academySteps} />
      </Section>

      <Section surface="neutral" labelledBy="waiver-heading" compact>
        <h2 id="waiver-heading" className="type-h3">
          Before the first session
        </h2>
        <p className="mt-3 max-w-(--container-prose)">
          The waiver is required before any athlete participates in training.{" "}
          <Link href="/waiver#complete-waiver" className="font-semibold underline underline-offset-4">
            About the waiver
          </Link>
        </p>
      </Section>

      <Section labelledBy="choose-heading">
        <SectionHeading id="choose-heading" eyebrow="Programs" title="Which program?" />
        <ul className="border-t-2 border-black">
          {programs.map((program) => (
            <li key={program.slug} className="grid gap-2 border-b border-neutral-300 py-5 md:grid-cols-12 md:items-center">
              <Link href={program.href} className="type-h3 underline-offset-4 hover:underline md:col-span-4">
                {program.name}
              </Link>
              <p className="text-neutral-600 md:col-span-8">{program.whoFor}</p>
            </li>
          ))}
        </ul>
      </Section>
    </>
  );
}
