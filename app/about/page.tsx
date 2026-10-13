import type { Metadata } from "next";
import Image from "next/image";
import { PageHero } from "@/components/ui/PageHero";
import { Button } from "@/components/ui/Button";
import { Section, SectionHeading } from "@/components/ui/Section";
import { CtaBand } from "@/components/sections/CtaBand";
import { LeadStandards } from "@/components/sections/LeadStandards";
import { freeSessionLine } from "@/lib/enrollment";
import { images, leadership } from "@/lib/images";
import { business, fullAddress, links, primaryCta } from "@/lib/site";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata({
  title: "About",
  description: `A development-first youth basketball academy in San Jose, established in ${business.established}. Meet the leadership team and learn where Showtime trains.`,
  path: "/about",
});

export default function AboutPage() {
  return (
    <>
      <PageHero
        title="About Showtime"
        eyebrow={`Est. ${business.established}`}
        lead="A development-first basketball academy built around long-term athlete growth. We are not an AAU-first program, and we're more than just a training gym."
      />

      <Section surface="black" labelledBy="philosophy-heading">
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-6">
            <p className="type-label mb-3 text-amber-500">Philosophy</p>
            <h2 id="philosophy-heading" className="type-h2">
              Foundation before <span className="text-amber-500">exposure</span>
            </h2>
          </div>
          <div className="space-y-4 text-lead text-muted-dark lg:col-span-6">
            <p>We prioritize fundamentals, basketball literacy and sustainable development.</p>
            <p>Our focus is skill development, basketball IQ, foundational habits and character.</p>
          </div>
        </div>

        <LeadStandards />
      </Section>

      <Section labelledBy="leadership-heading">
        <SectionHeading id="leadership-heading" eyebrow="Coaches" title="Leadership" />
        <ul className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {leadership.map((coach) => (
            <li key={coach.name}>
              <Image
                src={coach.image.src}
                width={coach.image.width}
                height={coach.image.height}
                alt={coach.image.alt}
                sizes="(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 100vw"
                className="aspect-4/5 w-full bg-neutral-100 object-cover"
                style={{ objectPosition: coach.image.focal }}
              />
              <h3 className="mt-4 type-h3">{coach.name}</h3>
              <p className="type-label mt-2 text-amber-700">{coach.title}</p>
            </li>
          ))}
        </ul>
      </Section>

      <Section surface="neutral" labelledBy="grove-heading">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-6">
            <SectionHeading id="grove-heading" eyebrow="Where we train" title="The Grove, San Jose" />
            {/* No ownership language until the relationship is confirmed (CONTENT_NEEDED I9). */}
            <p>Showtime trains at The Grove in San Jose.</p>
            <address className="mt-4 font-semibold not-italic">{fullAddress}</address>
            <div className="mt-6 flex flex-col gap-1 sm:flex-row sm:gap-8">
              <Button href={links.maps} variant="text">
                Get directions
              </Button>
              <Button href={links.grove} variant="text">
                Visit The Grove
              </Button>
            </div>
          </div>
          <div className="lg:col-span-6">
            <Image
              src={images.groveSession.src}
              width={images.groveSession.width}
              height={images.groveSession.height}
              alt={images.groveSession.alt}
              sizes="(min-width: 1024px) 45vw, 100vw"
              className="aspect-4/3 w-full object-cover"
            />
          </div>
        </div>
      </Section>

      <CtaBand
        title="Come train with us"
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
