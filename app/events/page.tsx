import type { Metadata } from "next";
import Image from "next/image";
import { PageHero } from "@/components/ui/PageHero";
import { Button } from "@/components/ui/Button";
import { Section, SectionHeading } from "@/components/ui/Section";
import { CtaBand } from "@/components/sections/CtaBand";
import { images } from "@/lib/images";
import { pastEvents, upcomingEvents, type ShowtimeEvent } from "@/lib/events";
import { links, primaryCta } from "@/lib/site";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = {
  ...pageMetadata({
    title: "Events",
    description:
      "Occasional clinics and special sessions that share Showtime's culture of hard work, discipline, and leadership with South Bay athletes and families.",
    path: "/events",
  }),
  title: { absolute: "Events | Showtime Basketball Academy San Jose" },
};

function EventRow({ event, past = false }: { event: ShowtimeEvent; past?: boolean }) {
  const date = new Date(`${event.date}T12:00:00`);
  const month = date.toLocaleString("en-US", { month: "short" });
  const day = date.getDate();
  const year = date.getFullYear();
  const image = event.image ? images[event.image] : undefined;
  return (
    <li className="grid gap-5 border-b border-neutral-300 py-8 sm:grid-cols-[6rem_1fr] sm:gap-8">
      <p aria-hidden="true" className="flex w-24 flex-col items-center bg-charcoal-800 py-3 text-white">
        <span className="type-label">{month}</span>
        <span className="type-stat text-amber-500">{day}</span>
        <span className="text-small text-muted-dark">{year}</span>
      </p>
      <div>
        <h3 className={`type-h3 ${past ? "text-neutral-600" : ""}`}>{event.title}</h3>
        <p className="mt-1 text-neutral-600">
          <time dateTime={event.date}>{date.toLocaleDateString("en-US", { dateStyle: "long" })}</time> · {event.time} ·{" "}
          {event.location}
        </p>
        <ul className="mt-3 flex flex-wrap gap-2">
          {event.tags.map((tag) => (
            <li key={tag} className="type-label rounded-sm border border-neutral-500 px-2.5 py-1.5">
              {tag}
            </li>
          ))}
        </ul>
        <div className="mt-4 max-w-(--container-prose) space-y-4">
          {event.details.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
          {event.highlights && (
            <ul className="list-disc space-y-1 pl-6">
              {event.highlights.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          )}
        </div>
        {image && (
          <Image
            src={image.src}
            width={image.width}
            height={image.height}
            alt={image.alt}
            sizes="(min-width: 1280px) 60rem, (min-width: 640px) 75vw, 100vw"
            className="mt-6 w-full max-w-4xl object-cover"
            style={{ objectPosition: image.focal }}
          />
        )}
        {!past && event.rsvpHref && (
          <div className="mt-4">
            <Button href={event.rsvpHref}>RSVP</Button>
          </div>
        )}
      </div>
    </li>
  );
}

export default function EventsPage() {
  return (
    <>
      <PageHero
        title="Clinics & Community"
        eyebrow="Events"
        lead="Occasional clinics and special sessions that share Showtime's culture of hard work, discipline, and leadership with South Bay athletes and families."
      />

      <Section labelledBy="upcoming-heading">
        <SectionHeading
          id="upcoming-heading"
          eyebrow="Upcoming"
          title="What's Next"
          lead="No upcoming events are scheduled right now. When new clinics are announced, they'll appear here."
        />
        {upcomingEvents.length > 0 ? (
          <ul className="border-t-2 border-black">
            {upcomingEvents.map((event) => (
              <EventRow key={event.title} event={event} />
            ))}
          </ul>
        ) : (
          <div className="max-w-(--container-prose) border-t-2 border-black pt-6">
            <h3 className="type-h3">No upcoming events right now</h3>
            <p className="mt-3">
              Check back soon, follow Showtime on social, or inquire to be notified about the next clinic.
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <Button href={primaryCta.href} fullWidthMobile arrow>
                {primaryCta.label}
              </Button>
              <Button href={links.sessions} variant="secondary" fullWidthMobile arrow>
                Book Sessions
              </Button>
              <Button href="/contact" variant="secondary" fullWidthMobile arrow>
                Contact Us
              </Button>
            </div>
          </div>
        )}
      </Section>

      <Section surface="neutral" labelledBy="past-heading">
        <SectionHeading
          id="past-heading"
          eyebrow="Past events"
          title="Look Back"
          lead="A look at recent clinics and the growth of Showtime Basketball: skill development, strong habits, and our standards of Hard Work, Energy, Leadership, and Discipline."
        />
        <ul className="border-t-2 border-black">
          {pastEvents.map((event) => (
            <EventRow key={event.title} event={event} past />
          ))}
        </ul>
      </Section>

      <CtaBand
        title="Don't wait for the next clinic"
        text="Ongoing development starts with a free session at Showtime."
        actions={
          <>
            <Button href={primaryCta.href} surface="dark" size="lg" fullWidthMobile arrow>
              {primaryCta.label}
            </Button>
            <Button href={links.minosHome} variant="secondary" surface="dark" size="lg" fullWidthMobile arrow>
              Book Online
            </Button>
            <Button href={links.memberships} variant="secondary" surface="dark" size="lg" fullWidthMobile arrow>
              Book Memberships
            </Button>
          </>
        }
      />
    </>
  );
}
