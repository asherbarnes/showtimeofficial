import type { Metadata } from "next";
import Image from "next/image";
import { PageHero } from "@/components/ui/PageHero";
import { Button } from "@/components/ui/Button";
import { Section, SectionHeading } from "@/components/ui/Section";
import { ProgramIndex } from "@/components/sections/ProgramIndex";
import { StepRail } from "@/components/sections/StepRail";
import { CtaBand } from "@/components/sections/CtaBand";
import { Testimonials, type Testimonial } from "@/components/sections/Testimonials";
import { StickyCta } from "@/components/layout/StickyCta";
import { startLead, startSteps } from "@/lib/enrollment";
import { images, leadership } from "@/lib/images";
import { business, fullAddress, links, primaryCta } from "@/lib/site";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = {
  ...pageMetadata({
    title: "Youth Training in San Jose",
    description: business.mission,
    path: "/",
  }),
  title: { absolute: `${business.name} | Youth Training in San Jose` },
};

// Section order and surfaces follow DESIGN 12.1.
const proof = [
  { label: "Established", value: String(business.established) },
  { label: "Format", value: "Small-group training" },
  { label: "Location", value: "The Grove, San Jose" },
];

// Home content below is from the original repo's index.html (source of truth since 2026-10-19).
const pillars = [
  {
    title: "Progressive Skill Development",
    text: "Structured development that builds skills progressively instead of chasing shortcuts.",
  },
  {
    title: "Experienced Coaches",
    text: "Intentional coaching focused on teaching athletes how to understand and play the game.",
  },
  {
    title: "Building Life Skills",
    text: "Discipline, communication, confidence, accountability, and habits that extend beyond basketball.",
  },
];

// Quoted exactly as the source shows them; the first is truncated there. Source and approval: CONTENT_NEEDED I7.
const testimonials: Testimonial[] = [
  {
    quote:
      "The coaches at Showtime Basketball Academy are awesome and take the time to understand each athlete’s strengths, weaknesses, and potential. They tailor their training and push players…",
    name: "JustAmes V.",
    role: "Parent",
  },
  {
    quote:
      "My son has been coming here since they opened. Great place to work on his conditioning and his basketball skills. We’ve definitely seen improvements in his game.",
    name: "Steven T.",
    role: "Parent",
  },
  {
    quote:
      "This company is top notch. The coaches are great and the training is individualized and professional. We will be returning and recommending to friends.",
    role: "Parent",
  },
  {
    quote:
      "I love this place. We first met the coaches during a Viva Calle where they had a shooting challenge and we won a shirt. My wife learned more about them and we started bringing the kids here.",
    name: "Tony A.",
    role: "Parent",
  },
];

export default function HomePage() {
  return (
    <>
      <PageHero
        variant="split"
        eyebrow="San Jose / South Bay"
        title="It’s Showtime"
        lead={
          <>
            <p className="font-semibold text-white">South Bay’s Premier Training Program</p>
            <p className="mt-4">{business.mission}</p>
          </>
        }
        image={images.heroJump}
        actions={
          <>
            <Button href={primaryCta.href} surface="dark" size="lg" fullWidthMobile arrow>
              {primaryCta.label}
            </Button>
            <Button href="/programs" variant="secondary" surface="dark" size="lg" fullWidthMobile arrow>
              View Programs
            </Button>
          </>
        }
        note={
          <span className="flex flex-col gap-1 sm:flex-row sm:gap-8">
            <Button href={links.memberships} variant="text" surface="dark">
              Book Memberships
            </Button>
            <Button href={links.sessions} variant="text" surface="dark">
              Book Sessions
            </Button>
          </span>
        }
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

      {/* Philosophy (DESIGN 10.4), with the three pillars where L.E.A.D. sat (L.E.A.D. is on /about). */}
      <Section surface="black" labelledBy="philosophy-heading">
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <p className="type-label mb-3 text-amber-500">Our Mission</p>
            <h2 id="philosophy-heading" className="type-h2">
              Development Before <span className="text-amber-500">Exposure.</span>
            </h2>
          </div>
          <div className="max-w-(--container-prose) space-y-5 text-muted-dark lg:col-span-7">
            <p className="text-lead text-white">{business.mission}</p>
            <p>
              We are a development-first academy built around long-term athlete growth, not an AAU-first program, and
              more than a training gym. Athletes train in small groups of up to six players, with individual attention
              while learning to communicate, compete, and succeed in any team setting.
            </p>
            <p className="font-semibold text-white">Foundation before exposure.</p>
          </div>
        </div>
        <ol className="mt-14 grid gap-8 border-t border-line-dark pt-10 md:grid-cols-3">
          {pillars.map((pillar, index) => (
            <li key={pillar.title} className="border-l-2 border-amber-500 pl-4">
              <span aria-hidden="true" className="type-stat block text-amber-500">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-2 type-h4">{pillar.title}</h3>
              <p className="mt-2 text-muted-dark">{pillar.text}</p>
            </li>
          ))}
        </ol>
      </Section>

      <Section labelledBy="programs-heading">
        <SectionHeading
          id="programs-heading"
          eyebrow="Programs"
          title="Pathways"
          lead="Built for newer athletes and experienced players, always small-group, always long-term."
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
                </div>
              </li>
            ))}
          </ul>
        </div>
      </Section>

      {/* Facility photo split (DESIGN 16). Text first on mobile. Facility claims are The Grove's (I9). */}
      <section aria-labelledby="facility-heading" data-surface="light" className="bg-white">
        <div className="mx-auto grid max-w-[1920px] lg:grid-cols-12">
          <div className="section-y px-[clamp(1.25rem,4vw,3rem)] lg:col-span-6 lg:pr-16 xl:pl-[max(3rem,calc((100vw-80rem)/2+3rem))]">
            <SectionHeading
              id="facility-heading"
              eyebrow="Train at The Grove"
              title="The Place To Put In The Work."
              lead="Located in the heart of San Jose, The Grove offers a premier 10,000-square-foot training facility with a professional-grade basketball court with FIBA-certified hardwood and hoops, plus a fully equipped weight room. Showtime trains here year-round. Visit The Grove’s site for complete facility details."
            />
            <address className="font-semibold not-italic">{fullAddress}</address>
            <div className="mt-6 flex flex-col gap-1 sm:flex-row sm:gap-8">
              <Button href={links.grove} variant="text">
                See The Grove
              </Button>
              <Button href={links.maps} variant="text">
                Get Directions
              </Button>
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

      <Section surface="neutral" labelledBy="testimonials-heading">
        <SectionHeading
          id="testimonials-heading"
          eyebrow="Families"
          title="What Parents Say"
          lead="Real reviews from families training with Showtime at The Grove."
        />
        <Testimonials items={testimonials} />
      </Section>

      <CtaBand
        title="Come Train With Us."
        text="Choose the path that fits. Inquire for a free session, book a membership, or reserve a training session online."
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

      <StickyCta label={primaryCta.label} href={primaryCta.href} />
    </>
  );
}
