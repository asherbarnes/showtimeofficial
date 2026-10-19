import type { Metadata } from "next";
import Image from "next/image";
import { PageHero } from "@/components/ui/PageHero";
import { Button } from "@/components/ui/Button";
import { Section, SectionHeading } from "@/components/ui/Section";
import { ProgramIndex } from "@/components/sections/ProgramIndex";
import { ProgramOverview } from "@/components/sections/ProgramOverview";
import { CtaBand } from "@/components/sections/CtaBand";
import { images } from "@/lib/images";
import { athleticDevelopment } from "@/lib/programs";
import { pageMetadata } from "@/lib/metadata";
import { links, primaryCta } from "@/lib/site";

export const metadata: Metadata = pageMetadata({
  title: "Programs",
  description:
    "Clear pathways for newer athletes and experienced players: Academy, Fundamentalists, Individual Training and, coming soon, Athletic Development.",
  path: "/programs",
});

// Content from the original repo's programs.html (source of truth since 2026-10-19).
export default function ProgramsPage() {
  const adImage = images[athleticDevelopment.image];
  return (
    <>
      <PageHero
        title="Train the Right Way"
        eyebrow="Programs"
        lead="Clear pathways for newer athletes and experienced players, always development-first, always small-group focused, and always rooted in hard work, discipline, and leadership."
      />

      <Section labelledBy="program-list-heading">
        <h2 id="program-list-heading" className="sr-only">
          Our programs
        </h2>
        <ProgramIndex />
      </Section>

      <Section surface="neutral" id="athletic-development" labelledBy="ad-heading">
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <SectionHeading id="ad-heading" eyebrow={athleticDevelopment.status} title={athleticDevelopment.name} lead={athleticDevelopment.description} />
            <ProgramOverview items={athleticDevelopment.overview} />
            <div className="mt-8">
              <Button href={links.inquiry} variant="secondary" fullWidthMobile>
                Learn More / Inquire
              </Button>
            </div>
          </div>
          <div className="lg:col-span-5">
            <Image
              src={adImage.src}
              width={adImage.width}
              height={adImage.height}
              alt={adImage.alt}
              sizes="(min-width: 1024px) 38vw, 100vw"
              className="aspect-4/3 w-full object-cover lg:aspect-4/5"
              style={{ objectPosition: adImage.focal }}
            />
          </div>
        </div>
      </Section>

      <CtaBand
        title="Not sure which program fits?"
        text="Start with a free session. We'll help match your athlete to the right development path."
        actions={
          <>
            <Button href={primaryCta.href} surface="dark" size="lg" fullWidthMobile arrow>
              {primaryCta.label}
            </Button>
            <Button href={links.minosHome} variant="secondary" surface="dark" size="lg" fullWidthMobile>
              Book Online
            </Button>
          </>
        }
      />
    </>
  );
}
