import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { Button } from "@/components/ui/Button";
import { Section, SectionHeading } from "@/components/ui/Section";
import { NumberedList } from "@/components/sections/NumberedList";
import { StepRail } from "@/components/sections/StepRail";
import { academySteps } from "@/lib/enrollment";
import { CtaBand } from "@/components/sections/CtaBand";
import { images } from "@/lib/images";
import { flags } from "@/lib/flags";
import { tiers } from "@/lib/memberships";
import { getProgram } from "@/lib/programs";
import { links } from "@/lib/site";
import { pageMetadata } from "@/lib/metadata";

const program = getProgram("academy");

export const metadata: Metadata = pageMetadata({
  title: "Academy | Youth Basketball Training in San Jose",
  description:
    "Showtime Academy prepares experienced players on school or club teams for Junior Varsity-level play and beyond. Placement is by evaluation.",
  path: program.href,
});

// Key performance indicators (S3, PRODUCT 5.1).
const kpis = [
  "Finishing at the rim from various angles",
  "Perimeter and mid-range shooting off the dribble",
  "Physicality on protection and drives",
  "Defensive fundamentals: closeouts, box outs, gap and rotation",
  "Leadership and concise communication",
];

// Evaluation criteria (S6, PRODUCT 4).
const criteria: { title: string; text?: string }[] = [
  { title: "Coachability" },
  { title: "Response to adversity and feedback" },
  { title: "Cultural fit", text: "Effort, attitude and team mindset" },
];

export default function AcademyPage() {
  const facts = [
    { label: "Team", value: "Currently on a school or club team" },
    // CONTENT_NEEDED B4: 2.5+ vs 3+ years is unresolved.
    { label: "Experience", value: "Confirmed at evaluation" },
    { label: "Format", value: "60-minute group sessions" },
    ...(flags.showPricing ? [{ label: "Membership", value: `From $${tiers[0].academy}/month` }] : []),
  ];

  return (
    <>
      <PageHero
        variant="program"
        breadcrumb={{ label: "Programs", href: "/programs" }}
        title="Academy"
        lead="Helps experienced players make the transition to competitive basketball, with advanced techniques, rigorous drills, team concepts and scrimmages that prepare them for Junior Varsity-level play and beyond."
        facts={facts}
        image={images.academySession}
        actions={
          <>
            <Button href={program.cta.href} surface="dark" size="lg" fullWidthMobile>
              {program.cta.label}
            </Button>
            <Button href={links.academyClass} variant="secondary" surface="dark" size="lg" fullWidthMobile>
              View the schedule
            </Button>
          </>
        }
      />

      <Section labelledBy="kpi-heading">
        <SectionHeading id="kpi-heading" eyebrow="What players work on" title="Key performance indicators" />
        <NumberedList items={kpis} />
      </Section>

      <Section surface="neutral" labelledBy="evaluation-heading">
        <SectionHeading
          id="evaluation-heading"
          eyebrow="Placement"
          title="How the evaluation works"
          lead="Academy is selective. Athletes are placed after an evaluation that looks at three things."
        />
        <ul className="grid gap-8 md:grid-cols-3">
          {criteria.map((item) => (
            <li key={item.title} className="border-t-2 border-black pt-5">
              <h3 className="type-h3">{item.title}</h3>
              {item.text && <p className="mt-2 text-neutral-600">{item.text}</p>}
            </li>
          ))}
        </ul>
      </Section>

      {/* The official five-step process (S6, S7); white-surface rail on program pages (DESIGN 10.5). */}
      <Section id="academy-steps" labelledBy="academy-steps-heading">
        <SectionHeading
          id="academy-steps-heading"
          eyebrow="Enrollment"
          title="The Academy path"
          lead="Five steps from inquiry to enrollment. You must be accepted into the program before purchasing a membership."
        />
        <StepRail steps={academySteps} />
      </Section>

      <CtaBand
        title="Ready for Academy?"
        text="Apply for an evaluation through our inquiry form."
        actions={
          <Button href={program.cta.href} surface="dark" size="lg" fullWidthMobile>
            {program.cta.label}
          </Button>
        }
      />
    </>
  );
}
