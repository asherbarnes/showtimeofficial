import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";
import { LegalDocument, LegalLink, type LegalSection } from "@/components/sections/LegalDocument";
import { pageMetadata } from "@/lib/metadata";
import { business, links } from "@/lib/site";

export const metadata: Metadata = pageMetadata({
  title: "Terms of Use",
  description: "The terms for using the Showtime Basketball Academy website.",
  path: "/terms",
});

/*
 * Pending owner and attorney approval (CONTENT_NEEDED B9). Covers the website only. Program policies
 * (cancellation, make-ups, refunds) are NOT restated here: they stay verbatim
 * on /memberships#policies and /faqs (PRODUCT 6.4–6.5), and this page points
 * to them. Sections 7–9 need attorney review.
 */
const sections: LegalSection[] = [
  {
    id: "agreement",
    title: "About these terms",
    body: (
      <p>
        This website is run by {business.legalName}, trading as {business.name} (&ldquo;Showtime&rdquo;,
        &ldquo;we&rdquo;, &ldquo;us&rdquo;). These terms apply to your use of this website. By using it, you agree to
        them. If you don&rsquo;t agree, please don&rsquo;t use the site.
      </p>
    ),
  },
  {
    id: "programs",
    title: "Programs, bookings and payments",
    body: (
      <>
        <p>
          This website describes our programs. It does not take registrations or payments. Inquiries, registration,
          memberships, session booking and payments happen on our booking platform,{" "}
          <LegalLink href={links.minosHome}>Minos Rec</LegalLink>, under that platform&rsquo;s terms and our program
          policies.
        </p>
        <ul>
          <li>You must be accepted into the program before purchasing a membership.</li>
          <li>
            The <LegalLink href="/waiver">waiver</LegalLink> is required before any athlete participates in training. A
            parent or legal guardian must complete it for any participant under 18.
          </li>
          <li>
            Our cancellation, make-up and refund policies are published on the{" "}
            <LegalLink href="/memberships#policies">Memberships page</LegalLink> and in our{" "}
            <LegalLink href="/faqs">FAQs</LegalLink>. Those policies apply to memberships and sessions; nothing on this
            page changes them.
          </li>
        </ul>
      </>
    ),
  },
  {
    id: "accuracy",
    title: "Information on this site",
    body: (
      <p>
        We work to keep program details, prices and schedules accurate, but they can change. Session times and
        availability on the booking platform are the current ones. If something on this site differs from what you are
        told when you book or enroll, please ask us before you pay.
      </p>
    ),
  },
  {
    id: "acceptable-use",
    title: "Using the site",
    body: (
      <>
        <p>Please use this website lawfully. Don&rsquo;t:</p>
        <ul>
          <li>Try to disrupt the site or gain access to parts of it that aren&rsquo;t public</li>
          <li>
            Copy, download or reuse photos or videos of athletes, or information about players, for any purpose other
            than viewing them here
          </li>
          <li>Use the site to harass, impersonate or harm anyone</li>
        </ul>
      </>
    ),
  },
  {
    id: "intellectual-property",
    title: "Our name, logo and content",
    body: (
      <>
        <p>
          The Showtime name and logo, and the text, photos and design of this website, are protected by intellectual
          property laws. They belong to Showtime or to the people who created them. You may view the site and share links
          to it, but you may not copy or reuse its content without permission.
        </p>
      </>
    ),
  },
  {
    id: "other-sites",
    title: "Links to other websites",
    body: (
      <p>
        This website links to sites we don&rsquo;t run, including the booking platform, {business.venue}, Instagram,
        TikTok and Google Maps. Their own terms and privacy policies apply there, and we aren&rsquo;t responsible for
        their content.
      </p>
    ),
  },
  {
    id: "disclaimer",
    title: "No guarantees",
    body: (
      <p>
        This website is provided &ldquo;as is&rdquo;. To the extent the law allows, we don&rsquo;t promise that it will
        always be available or free of errors. Information on the site is general and isn&rsquo;t medical or training
        advice for any individual athlete. Participation in our programs is covered by the{" "}
        <LegalLink href="/waiver">waiver</LegalLink>, not by these terms.
      </p>
    ),
  },
  {
    id: "liability",
    title: "Limitation of liability",
    body: (
      <>
        <p>
          To the extent the law allows, Showtime is not liable for indirect or consequential loss arising from your use of
          this website or of sites it links to. Nothing in these terms limits liability that cannot be limited by law.
        </p>
      </>
    ),
  },
  {
    id: "governing-law",
    title: "Governing law",
    body: (
      <p>
        These terms are governed by the laws of the State of California. Any dispute about them will be handled in the
        courts located in Santa Clara County, California.
      </p>
    ),
  },
  {
    id: "changes",
    title: "Changes and contact",
    body: (
      <>
        <p>
          We may update these terms. The version on this page is the current one. Questions about these terms can
          be sent through our <LegalLink href={links.inquiry}>inquiry form</LegalLink>. Our{" "}
          <LegalLink href="/privacy">Privacy Policy</LegalLink> explains how we handle personal information.
        </p>
      </>
    ),
  },
];

export default function TermsPage() {
  return (
    <>
      <PageHero
        title="Terms of Use"
        eyebrow="Legal"
        lead="The terms for using this website. Program policies and the waiver are separate and are linked below."
      />
      <Section labelledBy="legal-toc-heading">
        <LegalDocument sections={sections} />
      </Section>
    </>
  );
}
