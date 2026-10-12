import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { Button } from "@/components/ui/Button";
import { Section, SectionHeading } from "@/components/ui/Section";
import { pastEvents, upcomingEvents, type ShowtimeEvent } from "@/lib/events";
import { primaryCta, socials } from "@/lib/site";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata({
  title: "Events",
  description: "Clinics and events from Showtime Basketball Academy at The Grove in San Jose.",
  path: "/events",
});

const instagram = socials.find((s) => s.name === "Instagram")!;

function EventRow({ event, past = false }: { event: ShowtimeEvent; past?: boolean }) {
  const date = new Date(`${event.date}T12:00:00`);
  const month = date.toLocaleString("en-US", { month: "short" });
  const day = date.getDate();
  const year = date.getFullYear();
  return (
    <li className="grid gap-5 border-b border-neutral-300 py-6 sm:grid-cols-[6rem_1fr] sm:gap-8">
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
        <p className="mt-2">{event.details}</p>
        <ul className="mt-3 flex flex-wrap gap-2">
          {event.tags.map((tag) => (
            <li key={tag} className="type-label rounded-sm border border-neutral-500 px-2.5 py-1.5">
              {tag}
            </li>
          ))}
        </ul>
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
      <PageHero title="Events" eyebrow="Clinics and community" lead="Clinics and events at The Grove." />

      <Section labelledBy="upcoming-heading">
        <SectionHeading id="upcoming-heading" title="Upcoming" />
        {upcomingEvents.length > 0 ? (
          <ul className="border-t-2 border-black">
            {upcomingEvents.map((event) => (
              <EventRow key={event.title} event={event} />
            ))}
          </ul>
        ) : (
          <div className="max-w-(--container-prose) border-t-2 border-black pt-6">
            <p className="type-h3">No upcoming events right now.</p>
            <p className="mt-3">
              Follow us on Instagram for announcements, or start training any time.
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <Button href={primaryCta.href} fullWidthMobile arrow>
                {primaryCta.label}
              </Button>
              <Button href={instagram.href} variant="secondary" fullWidthMobile>
                Instagram {instagram.handle}
              </Button>
            </div>
          </div>
        )}
      </Section>

      <Section surface="neutral" labelledBy="past-heading">
        <SectionHeading id="past-heading" title="Past events" />
        <ul className="border-t-2 border-black">
          {pastEvents.map((event) => (
            <EventRow key={event.title} event={event} past />
          ))}
        </ul>
      </Section>
    </>
  );
}
