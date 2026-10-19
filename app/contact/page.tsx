import type { Metadata } from "next";
import Image from "next/image";
import { PageHero } from "@/components/ui/PageHero";
import { Button } from "@/components/ui/Button";
import { Section, SectionHeading } from "@/components/ui/Section";
import { CtaBand } from "@/components/sections/CtaBand";
import { images } from "@/lib/images";
import { business, links, primaryCta } from "@/lib/site";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = {
  ...pageMetadata({
    title: "Contact",
    description: "Reach out to learn which pathway fits your athlete, and book your free first session.",
    path: "/contact",
  }),
  title: { absolute: "Contact | Showtime Basketball Academy San Jose" },
};

const linkClass = "font-semibold underline underline-offset-4 hover:text-amber-700";

// Content from the original repo's contact.html (source of truth since 2026-10-19).
export default function ContactPage() {
  return (
    <>
      <PageHero
        title="Let's Talk Training"
        eyebrow="Contact"
        lead="Reach out to learn which pathway fits your athlete, and book your free first session."
      />

      <Section labelledBy="location-heading">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <SectionHeading id="location-heading" eyebrow={business.name} title="San Jose — South Bay" />
            <dl className="grid gap-x-8 border-t-2 border-black sm:grid-cols-2">
              <div className="border-b border-neutral-300 py-5">
                <dt className="type-label text-amber-700">Address</dt>
                <dd className="mt-2">
                  <address className="not-italic">
                    {business.venue}
                    <br />
                    {business.address.street}
                    <br />
                    {business.address.city}, {business.address.region} {business.address.postalCode}
                  </address>
                  <a href={links.maps} target="_blank" rel="noopener noreferrer" className={`mt-2 inline-flex min-h-11 items-center ${linkClass}`}>
                    Open in Google Maps<span className="sr-only"> (opens in a new tab)</span>
                  </a>
                </dd>
              </div>
              <div className="border-b border-neutral-300 py-5">
                <dt className="type-label text-amber-700">Hours</dt>
                <dd className="mt-2">
                  <ul>
                    {business.hours.map((row) => (
                      <li key={row.days}>
                        {row.days}: {row.time}
                      </li>
                    ))}
                  </ul>
                  <p className="mt-2 text-small text-neutral-600">{business.hoursNote}</p>
                </dd>
              </div>
              <div className="border-b border-neutral-300 py-5">
                <dt className="type-label text-amber-700">Phone</dt>
                <dd className="mt-2">
                  <a href={business.phone.href} className={`inline-flex min-h-11 items-center ${linkClass}`}>
                    {business.phone.display}
                  </a>
                </dd>
              </div>
              <div className="border-b border-neutral-300 py-5">
                <dt className="type-label text-amber-700">Email</dt>
                <dd className="mt-2">
                  <p>Prefer the inquiry form for the fastest response.</p>
                  <p className="mt-2 text-small text-neutral-600">
                    Public email not listed. Use{" "}
                    <a href={links.inquiry} target="_blank" rel="noopener noreferrer" className={linkClass}>
                      Get Your Free Session<span className="sr-only"> (opens in a new tab)</span>
                    </a>{" "}
                    or{" "}
                    <a href={links.minosHome} target="_blank" rel="noopener noreferrer" className={linkClass}>
                      Book Online<span className="sr-only"> (opens in a new tab)</span>
                    </a>
                    .
                  </p>
                </dd>
              </div>
              <div className="border-b border-neutral-300 py-5 sm:col-span-2">
                <dt className="type-label text-amber-700">Facility partner</dt>
                <dd className="mt-2">
                  <a href={links.grove} target="_blank" rel="noopener noreferrer" className={linkClass}>
                    thegrove.work<span className="sr-only"> (opens in a new tab)</span>
                  </a>
                </dd>
              </div>
            </dl>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <Button href={primaryCta.href} fullWidthMobile arrow>
                {primaryCta.label}
              </Button>
              <Button href={links.memberships} variant="secondary" fullWidthMobile arrow>
                Book Memberships
              </Button>
              <Button href={links.sessions} variant="secondary" fullWidthMobile arrow>
                Book Sessions
              </Button>
              <Button href={links.maps} variant="text">
                Get Directions
              </Button>
            </div>
          </div>
          <div className="flex flex-col gap-6">
            {/* Loads from Google when the page is viewed (Privacy Policy, "Cookies and tracking"). */}
            <iframe
              src={links.mapEmbed}
              title={`Map of ${business.name} at ${business.venue}`}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="aspect-4/3 w-full border-2 border-black"
            />
            <Button href={links.maps} variant="text">
              View Showtime Basketball Academy on Google
            </Button>
            <Image
              src={images.groveSession.src}
              width={images.groveSession.width}
              height={images.groveSession.height}
              alt={images.groveSession.alt}
              sizes="(min-width: 1024px) 45vw, 100vw"
              className="aspect-4/3 w-full object-cover"
              style={{ objectPosition: images.groveSession.focal }}
            />
          </div>
        </div>
      </Section>

      <CtaBand
        title="Your First Session Is Free"
        text="The fastest way to connect with Showtime is through the free session inquiry form."
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
