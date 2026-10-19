import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { Button } from "@/components/ui/Button";
import { Section, SectionHeading } from "@/components/ui/Section";
import { ProgramAbout } from "@/components/sections/ProgramAbout";
import { StepRail } from "@/components/sections/StepRail";
import { academySteps } from "@/lib/enrollment";
import { CtaBand } from "@/components/sections/CtaBand";
import { images } from "@/lib/images";
import { flags } from "@/lib/flags";
import { tiers } from "@/lib/memberships";
import { getProgram } from "@/lib/programs";
import { links, primaryCta } from "@/lib/site";
import { pageMetadata } from "@/lib/metadata";

const program = getProgram("academy");

export const metadata: Metadata = pageMetadata({
  title: "Academy | Youth Basketball Training in San Jose",
  description:
    "Small-group training for athletes with 2.5+ years of basketball experience, preparing players for Junior Varsity-level play and beyond.",
  path: program.href,
});

// Evaluation criteria (S6, PRODUCT 4).
const criteria: { title: string; text?: string }[] = [
  { title: "Coachability" },
  { title: "Response to adversity and feedback" },
  { title: "Cultural fit", text: "Effort, attitude and team mindset" },
];

export default function AcademyPage() {
  const facts = [
    { label: "Format", value: "Small group" },
    { label: "Experience", value: "2.5+ years" },
    ...(flags.showPricing ? [{ label: "Membership", value: `From $${tiers[0].academy}/month` }] : []),
  ];

  return (
    <>
      <PageHero
        variant="program"
        breadcrumb={{ label: "Programs", href: "/programs" }}
        title="Academy"
        lead={program.description[0]}
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

      <ProgramAbout program={program} />

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
        actions={
          <>
            <Button href={primaryCta.href} surface="dark" size="lg" fullWidthMobile arrow>
              {primaryCta.label}
            </Button>
            <Button href={links.memberships} variant="secondary" surface="dark" size="lg" fullWidthMobile>
              Book Memberships
            </Button>
            <Button href={links.sessions} variant="secondary" surface="dark" size="lg" fullWidthMobile>
              Book Sessions
            </Button>
          </>
        }
      />
    </>
  );
}
