import type { Metadata } from "next";
import Image from "next/image";
import { PageHero } from "@/components/ui/PageHero";
import { Button } from "@/components/ui/Button";
import { Placeholder } from "@/components/ui/Notice";
import { Section, SectionHeading } from "@/components/ui/Section";
import { ProgramIndex } from "@/components/sections/ProgramIndex";
import { LeadStandards } from "@/components/sections/LeadStandards";
import { StepRail } from "@/components/sections/StepRail";
import { CtaBand } from "@/components/sections/CtaBand";
import { StickyCta } from "@/components/layout/StickyCta";
import { freeSessionLine, freeSessionOffer, startLead, startSteps } from "@/lib/enrollment";
import { images, leadership } from "@/lib/images";
import { business, fullAddress, links, primaryCta } from "@/lib/site";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = {
  ...pageMetadata({
    title: "Youth Basketball Training in San Jose",
    description: `${business.positioning} Training at The Grove in San Jose since ${business.established}.`,
    path: "/",
  }),
  title: { absolute: `${business.name} | Youth Basketball Training in San Jose` },
};

// Section order and surfaces follow DESIGN 12.1.
const proof = [
  { label: "Established", value: String(business.established) },
  { label: "Format", value: "Small-group training" },
  { label: "Location", value: "The Grove, San Jose" },
];

export default function HomePage() {
  return (
    <>
      <PageHero
        variant="split"
        title="Developing complete basketball players"
        lead="Intentional coaching, small-group training and a foundation-first approach for young athletes in San Jose."
        image={images.defensiveDrill}
        actions={
          <>
            <Button href={primaryCta.href} surface="dark" size="lg" fullWidthMobile arrow>
              {primaryCta.label}
            </Button>
            <Button href="/programs" variant="secondary" surface="dark" size="lg" fullWidthMobile>
              Compare programs
            </Button>
          </>
        }
        note={freeSessionLine}
      />

      <section aria-label="At a glance" data-surface="light" className="border-b border-neutral-300 bg-white py-8 md:py-10">
        <dl className="container-site grid grid-cols-3 gap-4 sm:gap-6">
          {proof.map((item) => (
            <div key={item.label} className="border-l-2 border-black pl-3 sm:pl-4">
              <dt className="type-label text-amber-700">{item.label}</dt>
              <dd className="mt-1 font-semibold leading-snug sm:type-h4">{item.value}</dd>
            </div>
          ))}
        </dl>
      </section>

      {/* Philosophy (DESIGN 10.4). Official homepage text (S1), first two paragraphs;
          the full statement is on /about. "Up to six" stays out until confirmed (I4). */}
      <Section surface="black" labelledBy="philosophy-heading">
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <h2 id="philosophy-heading" className="type-h2">
              Foundation before <span className="text-amber-500">exposure</span>
            </h2>
          </div>
          <div className="max-w-(--container-prose) space-y-5 text-muted-dark lg:col-span-7">
            <p className="text-lead text-white">
              Showtime Basketball Academy is a development-first basketball academy built around long-term athlete
              growth. We are not an AAU-first program, and we&rsquo;re more than just a training gym.
            </p>
            <p>
              Our focus is on developing complete players through skill development, basketball IQ, foundational
              habits, and character.
            </p>
          </div>
        </div>
        <LeadStandards />
      </Section>

      <Section labelledBy="programs-heading">
        <SectionHeading
          id="programs-heading"
          title="Find the right fit"
          lead="Three ways to train with Showtime, from developing players to athletes competing on school and club teams."
        />
        <ProgramIndex showImages={false} />
      </Section>

      {/* The page's one amber band (DESIGN 4.2, 10.5). The universal path only;
          the five-step Academy process lives on /programs/academy and /get-started. */}
      <Section surface="amber" labelledBy="steps-heading">
        <div className="mb-8 max-w-(--container-lead) md:mb-10">
          <h2 id="steps-heading" className="type-h2">
            How to get started
          </h2>
          <p className="mt-4 text-lead">{startLead}</p>
        </div>
        <StepRail steps={startSteps} />
        <div data-sticky-cta-hide className="mt-8 lg:mt-10">
          <Button href={primaryCta.href} surface="amber" size="lg" fullWidthMobile arrow>
            {primaryCta.label}
          </Button>
        </div>
      </Section>

      {/* Leadership only: titles and credentials as stated on S2 (I6). */}
      <Section surface="neutral" labelledBy="coaches-heading">
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <SectionHeading
              id="coaches-heading"
              title="Meet the coaches"
              lead="The leadership team behind every Showtime program."
            />
            <Button href="/about" variant="text">
              Meet the full coaching staff
            </Button>
          </div>
          <ul className="border-t-2 border-black lg:col-span-8">
            {leadership.map((coach) => (
              <li
                key={coach.name}
                className="grid grid-cols-[4.5rem_1fr] items-center gap-4 border-b border-neutral-300 py-4 sm:grid-cols-[9rem_1fr] sm:items-start sm:gap-8 sm:py-6"
              >
                <Image
                  src={coach.image.src}
                  width={coach.image.width}
                  height={coach.image.height}
                  alt={coach.image.alt}
                  sizes="(min-width: 640px) 9rem, 4.5rem"
                  className="aspect-4/5 w-full bg-white object-cover"
                  style={{ objectPosition: coach.image.focal }}
                />
                <div>
                  <h3 className="type-h3">{coach.name}</h3>
                  <p className="type-label mt-2 text-amber-700">{coach.title}</p>
                  {/* Bios from sm up; on phones the teaser is names and titles only, bios are on /about. */}
                  {coach.summary && (
                    <p className="mt-3 hidden max-w-(--container-lead) text-neutral-600 sm:block">{coach.summary}</p>
                  )}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </Section>

      {/* Facility photo split (DESIGN 16). Text first on mobile. No ownership language (I9). */}
      <section aria-labelledby="facility-heading" data-surface="light" className="bg-white">
        <div className="mx-auto grid max-w-[1920px] lg:grid-cols-12">
          <div className="section-y px-[clamp(1.25rem,4vw,3rem)] lg:col-span-6 lg:pr-16 xl:pl-[max(3rem,calc((100vw-80rem)/2+3rem))]">
            <SectionHeading id="facility-heading" title="Training at The Grove" />
            <address className="font-semibold not-italic">{fullAddress}</address>
            <div className="mt-6 flex flex-col gap-1 sm:flex-row sm:gap-8">
              <Button href={links.maps} variant="text">
                Get directions
              </Button>
              <Button href={links.grove} variant="text">
                Visit The Grove
              </Button>
            </div>
            <div className="mt-8 max-w-(--container-lead)">
              <Placeholder>
                Facility details (size, flooring, weight room) appear on the official site but need client approval,
                as does how to describe Showtime&rsquo;s relationship with The Grove (CONTENT_NEEDED I9, PRODUCT U4).
              </Placeholder>
            </div>
          </div>
          <div className="relative aspect-4/3 lg:col-span-6 lg:aspect-auto lg:min-h-[34rem]">
            <Image
              src={images.groveSession.src}
              alt={images.groveSession.alt}
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
              style={{ objectPosition: images.groveSession.focal }}
            />
          </div>
        </div>
      </section>

      <CtaBand
        title="Start with a free session"
        text={`${freeSessionLine} ${freeSessionOffer.text}`}
        actions={
          <Button href={primaryCta.href} surface="dark" size="lg" fullWidthMobile arrow>
            {primaryCta.label}
          </Button>
        }
      />

      <StickyCta label={primaryCta.label} href={primaryCta.href} />
    </>
  );
}
