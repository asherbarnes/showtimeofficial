import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { Button } from "@/components/ui/Button";
import { Section, SectionHeading } from "@/components/ui/Section";
import { links } from "@/lib/site";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata({
  title: "Members",
  description: "Member login, session booking and the waiver for current Showtime Basketball Academy families.",
  path: "/members",
});

export default function MembersPage() {
  return (
    <>
      <PageHero
        title="Members"
        eyebrow="Current families"
        lead="Log in to book sessions and manage your account on our booking site."
        actions={
          <Button href={links.sessions} size="lg" fullWidthMobile>
            Member Login & Booking
          </Button>
        }
      />

      <Section labelledBy="member-links-heading">
        <SectionHeading id="member-links-heading" title="Member resources" />
        <ul className="max-w-(--container-prose) border-t-2 border-black">
          <li className="border-b border-neutral-300 py-2">
            <Button href="/waiver" variant="text">
              Waiver
            </Button>
          </li>
          <li className="border-b border-neutral-300 py-2">
            <Button href="/memberships" variant="text">
              Membership plans
            </Button>
          </li>
          <li className="border-b border-neutral-300 py-2">
            <Button href="/faqs" variant="text">
              FAQs
            </Button>
          </li>
        </ul>
      </Section>
    </>
  );
}
