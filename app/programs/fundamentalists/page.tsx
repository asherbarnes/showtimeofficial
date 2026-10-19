import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { Button } from "@/components/ui/Button";
import { ProgramAbout } from "@/components/sections/ProgramAbout";
import { CtaBand } from "@/components/sections/CtaBand";
import { images } from "@/lib/images";
import { flags } from "@/lib/flags";
import { tiers } from "@/lib/memberships";
import { getProgram } from "@/lib/programs";
import { links, primaryCta } from "@/lib/site";
import { pageMetadata } from "@/lib/metadata";

const program = getProgram("fundamentalists");

export const metadata: Metadata = pageMetadata({
  title: "Fundamentalists | Youth Basketball Fundamentals in San Jose",
  description:
    "An entry point for newer athletes learning the foundations of basketball, for players with at least one year of playing experience.",
  path: program.href,
});

export default function FundamentalistsPage() {
  const facts = [
    { label: "Pathway", value: "Entry pathway" },
    { label: "Experience", value: "At least 1 year" },
    ...(flags.showPricing ? [{ label: "Membership", value: `From $${tiers[0].fundamentalists}/month` }] : []),
  ];

  return (
    <>
      <PageHero
        variant="program"
        breadcrumb={{ label: "Programs", href: "/programs" }}
        title="Fundamentalists"
        lead={program.description[0]}
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

      <ProgramAbout program={program} />

      <CtaBand
        title="Try a session"
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
