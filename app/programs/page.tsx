import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { Button } from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";
import { Notice } from "@/components/ui/Notice";
import { ProgramIndex } from "@/components/sections/ProgramIndex";
import { CtaBand } from "@/components/sections/CtaBand";
import { academyPlacementLine, freeSessionLine } from "@/lib/enrollment";
import { pageMetadata } from "@/lib/metadata";
import { primaryCta } from "@/lib/site";

export const metadata: Metadata = pageMetadata({
  title: "Programs",
  description:
    "Compare Showtime Basketball Academy programs in San Jose: Academy, Fundamentalists and 1-on-1 Individual Training.",
  path: "/programs",
});

export default function ProgramsPage() {
  return (
    <>
      <PageHero
        title="Programs"
        eyebrow="Train with Showtime"
        lead="Group programs for developing and experienced players, plus 1-on-1 training with a Showtime coach."
      />

      <Section labelledBy="program-list-heading">
        <h2 id="program-list-heading" className="sr-only">
          Our programs
        </h2>
        <ProgramIndex />
        <div className="mt-10 max-w-(--container-prose)">
          <Notice label="Coming soon">Athletic Development is not open for enrollment yet.</Notice>
        </div>
      </Section>

      <CtaBand
        title="Not sure where to start?"
        text={`${freeSessionLine} ${academyPlacementLine}`}
        actions={
          <Button href={primaryCta.href} surface="dark" size="lg" fullWidthMobile arrow>
            {primaryCta.label}
          </Button>
        }
      />
    </>
  );
}
