import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { Button } from "@/components/ui/Button";
import { Section, SectionHeading } from "@/components/ui/Section";
import { business, fullAddress, links } from "@/lib/site";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata({
  title: "Contact",
  description: `Find Showtime Basketball Academy at The Grove, ${fullAddress}, or send an inquiry.`,
  path: "/contact",
});

// Phone, email and hours are omitted until confirmed (CONTENT_NEEDED B8).
export default function ContactPage() {
  return (
    <>
      <PageHero title="Contact" eyebrow="Get in touch" lead="Questions about programs, sessions or the waiver? Send us an inquiry." />

      <Section labelledBy="location-heading">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <SectionHeading id="location-heading" eyebrow="Location" title="Where we train" />
            <address className="not-italic">
              <p className="type-h3">
                {business.shortName} at {business.venue}
              </p>
              <p className="mt-2 text-lead">
                {business.address.street}
                <br />
                {business.address.city}, {business.address.region} {business.address.postalCode}
              </p>
            </address>
            <div className="mt-6">
              <Button href={links.maps} fullWidthMobile>
                Get directions
              </Button>
            </div>
          </div>
          <div>
            <h2 className="type-h2">Send an inquiry</h2>
            <p className="mt-4 max-w-(--container-lead) text-lead text-neutral-600">
              Our inquiry form is on our booking site. Use it to ask about a free small-group session, an Academy evaluation or any other
              question.
            </p>
            <div className="mt-6">
              <Button href={links.inquiry} variant="secondary" fullWidthMobile>
                Send an inquiry
              </Button>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
