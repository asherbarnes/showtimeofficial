import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { Button } from "@/components/ui/Button";
import { Section, SectionHeading } from "@/components/ui/Section";
import { NumberedList } from "@/components/sections/NumberedList";
import { CtaBand } from "@/components/sections/CtaBand";
import { images } from "@/lib/images";
import { flags } from "@/lib/flags";
import { tiers } from "@/lib/memberships";
import { getProgram } from "@/lib/programs";
import { freeSessionLine } from "@/lib/enrollment";
import { links, primaryCta } from "@/lib/site";
import { pageMetadata } from "@/lib/metadata";

const program = getProgram("fundamentalists");

export const metadata: Metadata = pageMetadata({
  title: "Fundamentalists | Youth Basketball Fundamentals in San Jose",
  description:
    "Fundamentalists builds the essential skills of basketball for players with at least one year of experience, at The Grove in San Jose.",
  path: program.href,
});

// Skills (S4, PRODUCT 5.2).
const skills = [
  "Two-handed ball handling and finishing",
  "A reliable stationary mid-range jump shot",
  "On-ball and help defense",
  "Low and mid-post footwork",
  "Communication",
];

export default function FundamentalistsPage() {
  const facts = [
    { label: "Experience", value: "At least 1 year" },
    { label: "Format", value: "60-minute group class" },
    ...(flags.showPricing ? [{ label: "Membership", value: `From $${tiers[0].fundamentalists}/month` }] : []),
  ];

  return (
    <>
      <PageHero
        variant="program"
        breadcrumb={{ label: "Programs", href: "/programs" }}
        title="Fundamentalists"
        lead="Builds the essential skills of the game while fostering a deep love for it, through age-appropriate instruction, personalized feedback, teamwork, sportsmanship and a positive mindset."
        facts={facts}
        image={images.shootingForm}
        actions={
          <>
            <Button href={program.cta.href} surface="dark" size="lg" fullWidthMobile arrow>
              {program.cta.label}
            </Button>
            <Button href={links.fundamentalsClass} variant="secondary" surface="dark" size="lg" fullWidthMobile>
              View the schedule
            </Button>
          </>
        }
      />

      <Section labelledBy="skills-heading">
        <SectionHeading id="skills-heading" eyebrow="What players work on" title="Core skills" />
        <NumberedList items={skills} />
      </Section>

      <CtaBand
        title="Try a session"
        text={freeSessionLine}
        actions={
          <Button href={primaryCta.href} surface="dark" size="lg" fullWidthMobile arrow>
            {primaryCta.label}
          </Button>
        }
      />
    </>
  );
}
