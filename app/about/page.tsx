import type { Metadata } from "next";
import Image from "next/image";
import type { ReactNode } from "react";
import { PageHero } from "@/components/ui/PageHero";
import { Button } from "@/components/ui/Button";
import { Section, SectionHeading } from "@/components/ui/Section";
import { CtaBand } from "@/components/sections/CtaBand";
import { LeadStandards } from "@/components/sections/LeadStandards";
import { coachingStaff, images, leadership, type ImageEntry } from "@/lib/images";
import { business, fullAddress, links, primaryCta } from "@/lib/site";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = {
  ...pageMetadata({
    title: "About",
    description:
      "A development-first academy in San Jose, building athletes through hard work, discipline, leadership, and mentoring that lasts beyond the court.",
    path: "/about",
  }),
  title: { absolute: "About Showtime Basketball Academy | San Jose Player Development" },
};

// Content from the original repo's about.html (source of truth since 2026-10-19).
const traits = [
  { title: "Confidence", text: "Built through preparation and repetition, not empty praise." },
  { title: "Accountability", text: "Owning effort, habits, and responses when training gets hard." },
  { title: "Communication", text: "Learning to talk the game with coaches and teammates under pressure." },
];

/** Text beside a photo; text comes first on mobile. */
function MediaSplit({
  id,
  eyebrow,
  title,
  image,
  reverse = false,
  children,
}: {
  id: string;
  eyebrow: string;
  title: string;
  image: ImageEntry;
  reverse?: boolean;
  children: ReactNode;
}) {
  return (
    <div className="grid gap-10 lg:grid-cols-12 lg:items-center">
      <div className={`lg:col-span-6 ${reverse ? "lg:order-2" : ""}`}>
        <SectionHeading id={id} eyebrow={eyebrow} title={title} />
        <div className="max-w-(--container-prose) space-y-4">{children}</div>
      </div>
      <div className="lg:col-span-6">
        <Image
          src={image.src}
          width={image.width}
          height={image.height}
          alt={image.alt}
          sizes="(min-width: 1024px) 45vw, 100vw"
          className="aspect-4/3 w-full object-cover"
          style={{ objectPosition: image.focal }}
        />
      </div>
    </div>
  );
}

export default function AboutPage() {
  return (
    <>
      <PageHero
        title="Built for Long-Term Development"
        eyebrow="About"
        lead="A development-first academy in San Jose, building athletes through hard work, discipline, leadership, and mentoring that lasts beyond the court."
      />

      <Section labelledBy="mission-heading">
        <MediaSplit id="mission-heading" eyebrow="Mission" title="Why We Coach" image={images.groupCircle}>
          <p className="text-lead">{business.mission}</p>
        </MediaSplit>
      </Section>

      <Section surface="neutral" labelledBy="story-heading">
        <MediaSplit id="story-heading" eyebrow="Our story" title="Why Showtime Exists" image={images.defensiveDrill} reverse>
          <p>
            Founded in San Jose and established as Showtime Basketball LLC in {business.established}, Showtime was built as
            a year-round player-development system, not a tournament pipeline.
          </p>
          <p>
            Through structured programming, small-group training, and game-based development, Showtime helps athletes
            maximize their potential and become impactful leaders both on and off the court, from beginner fundamentals
            through high school, collegiate, and beyond.
          </p>
        </MediaSplit>
      </Section>

      <Section surface="black" labelledBy="philosophy-heading">
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-6">
            <p className="type-label mb-3 text-amber-500">Philosophy</p>
            <h2 id="philosophy-heading" className="type-h2">
              Foundation Before <span className="text-amber-500">Exposure</span>
            </h2>
          </div>
          <div className="space-y-4 text-lead text-muted-dark lg:col-span-6">
            <p>
              Too many programs rush athletes toward exposure before the foundation is ready. Showtime takes the opposite
              approach.
            </p>
            <p>
              We prioritize skill development, decision-making, and sustainable habits so athletes can compete with
              confidence when the moment arrives on school teams, club teams, and beyond.
            </p>
            <p className="text-white">
              Hard work. Discipline. Leadership. Character, skill, and success beyond the court.
            </p>
            <p className="font-semibold text-amber-500">Foundation before exposure.</p>
          </div>
        </div>

        <LeadStandards />
      </Section>

      <Section labelledBy="expect-heading">
        <MediaSplit id="expect-heading" eyebrow="Training culture" title="What Athletes Should Expect" image={images.ladderCoach}>
          <p className="text-lead">
            Clear standards. Structured progressions. Coaching that explains the &ldquo;why,&rdquo; not only the
            &ldquo;what.&rdquo;
          </p>
          <p>
            Sessions are designed for learning in game-relevant situations, with individual attention inside small groups
            of up to six athletes.
          </p>
          <p>
            Athletes should arrive ready to work, communicate, compete, and improve habits that transfer into team play.
          </p>
        </MediaSplit>
      </Section>

      <Section surface="neutral" labelledBy="character-heading">
        <SectionHeading
          id="character-heading"
          eyebrow="Beyond basketball"
          title="Character That Travels"
          lead="We develop players who can thrive in any team environment through confidence, accountability, communication, and resilience."
        />
        <ul className="grid gap-8 md:grid-cols-3">
          {traits.map((item) => (
            <li key={item.title} className="border-t-2 border-black pt-5">
              <h3 className="type-h3">{item.title}</h3>
              <p className="mt-2 text-neutral-600">{item.text}</p>
            </li>
          ))}
        </ul>
      </Section>

      <Section labelledBy="leadership-heading">
        <SectionHeading
          id="leadership-heading"
          eyebrow="Leadership"
          title="Who Leads Showtime"
          lead="Program leadership focused on player development, coaching standards, and athletic growth."
        />
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
              {coach.bio && <p className="mt-3 text-neutral-600">{coach.bio}</p>}
            </li>
          ))}
        </ul>

        <h3 id="staff-heading" className="type-label mt-16 border-b-2 border-black pb-3">
          Coaching staff
        </h3>
        <ul aria-labelledby="staff-heading" className="mt-8 grid grid-cols-2 gap-x-6 gap-y-8 sm:grid-cols-3 lg:grid-cols-4">
          {coachingStaff.map((coach) => (
            <li key={coach.name}>
              <Image
                src={coach.image.src}
                width={coach.image.width}
                height={coach.image.height}
                alt={coach.image.alt}
                sizes="(min-width: 1024px) 22vw, (min-width: 640px) 30vw, 45vw"
                className="aspect-4/5 w-full bg-neutral-100 object-cover"
                style={{ objectPosition: coach.image.focal }}
              />
              <p className="mt-3 type-h4">{coach.name}</p>
              <p className="type-label mt-1 text-amber-700">{coach.title}</p>
            </li>
          ))}
        </ul>
      </Section>

      <Section surface="neutral" labelledBy="grove-heading">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-6">
            <SectionHeading id="grove-heading" eyebrow="Where we train" title="The Grove, San Jose" />
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
        title="See It for Yourself"
        text="The best way to understand Showtime is to train with us. Your first session is free."
        actions={
          <>
            <Button href={primaryCta.href} surface="dark" size="lg" fullWidthMobile arrow>
              {primaryCta.label}
            </Button>
            <Button href={links.minosHome} variant="secondary" surface="dark" size="lg" fullWidthMobile>
              Book Online
            </Button>
            <Button href={links.memberships} variant="secondary" surface="dark" size="lg" fullWidthMobile>
              Book Memberships
            </Button>
          </>
        }
      />
    </>
  );
}
