import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";
import { LegalDocument, LegalLink, type LegalSection } from "@/components/sections/LegalDocument";
import { pageMetadata } from "@/lib/metadata";
import { business, fullAddress, links } from "@/lib/site";

export const metadata: Metadata = pageMetadata({
  title: "Privacy Policy",
  description:
    "How Showtime Basketball Academy handles personal information, including children's information, photos and the booking platform.",
  path: "/privacy",
});

/*
 * Pending owner and attorney approval (CONTENT_NEEDED B9). Every statement about this website was checked
 * against the code on 2026-10-19: no forms, cookies, browser storage or
 * analytics; the only third-party content is the Google Maps embed on
 * /contact. Re-check this page whenever that changes (analytics O4, a waiver
 * form B6, an inquiry form, another embed). Statements about what
 * Showtime does with information come from the waiver's verbatim text
 * (components/sections/WaiverText.tsx) and PRODUCT.md. Unconfirmed practices
 * (retention, The Grove, sale of data, hosting) are left out until B9 is answered.
 */
const sections: LegalSection[] = [
  {
    id: "who-we-are",
    title: "Who we are",
    body: (
      <>
        <p>
          This policy is from {business.legalName}, trading as {business.name} (&ldquo;Showtime&rdquo;,
          &ldquo;we&rdquo;, &ldquo;us&rdquo;). Showtime trains at {business.venue}, {fullAddress}.
        </p>
        <p>
          It explains what information this website collects, how Showtime handles the information families give us when
          they inquire about or join our programs, and the choices you have.
        </p>
      </>
    ),
  },
  {
    id: "this-website",
    title: "What this website collects",
    body: (
      <>
        <p>
          This website does not ask you for personal information. It has no forms, no accounts and no sign-in. It does not
          use analytics, advertising or tracking tools.
        </p>
        <p>
          Like most websites, the company that hosts this site may automatically record basic technical details when you
          visit, such as your IP address, browser type, the page you asked for and the time. Hosting providers use these
          records to deliver the site and keep it secure.
        </p>
      </>
    ),
  },
  {
    id: "cookies",
    title: "Cookies and tracking",
    body: (
      <>
        <p>
          This website does not set cookies and does not store information in your browser. The fonts and images are
          served from this website itself, not from third-party services.
        </p>
        <p>
          The one exception is the map on our <LegalLink href="/contact">Contact page</LegalLink>, which is embedded from
          Google Maps. When you open that page, your browser loads the map from Google, which receives technical details
          such as your IP address and may set or read its own cookies. Google&rsquo;s privacy policy applies to that
          content.
        </p>
        <p>
          Showtime does not use the map, or anything else on this site, to track visitors over time or across other
          websites, and the site does not respond differently to browser &ldquo;Do Not Track&rdquo; signals.
        </p>
        <p>
          The booking platform, social media sites and maps service we link to may use their own cookies once you visit
          them. Their policies apply there.
        </p>
      </>
    ),
  },
  {
    id: "booking-platform",
    title: "Inquiries, registration and payments",
    body: (
      <>
        <p>
          Inquiries, program registration, memberships, session booking, payments and member accounts all happen on our
          booking platform, <LegalLink href={links.minosHome}>Minos Rec</LegalLink>, which a separate company operates.
          When you use it, you give information to that platform, and Showtime receives it. This can include details about
          the parent or guardian, the family and the athlete.
        </p>
        <p>
          This website does not process payments. Payment details are entered on the booking platform and handled under
          its terms and privacy policy.
        </p>
      </>
    ),
  },
  {
    id: "how-we-use",
    title: "How Showtime uses information",
    body: (
      <>
        <p>As our waiver describes, Showtime uses personal information for:</p>
        <ul>
          <li>Program registration</li>
          <li>Communication about programs</li>
          <li>Tracking participation and development</li>
          <li>Publishing athletic achievements or recognition related to participation</li>
        </ul>
        <p>
          We also use it to respond to inquiries, arrange evaluations and free small-group sessions, manage memberships and
          bookings, and keep the waiver on record.
        </p>
        <p>The information may include names, photos, videos, performance metrics and participation records.</p>
      </>
    ),
  },
  {
    id: "photos-recognition",
    title: "Photos, video and recognition",
    body: (
      <>
        <p>
          Our <LegalLink href="/waiver">waiver</LegalLink> includes a photo and video release and a website and social
          media release. With those permissions, Showtime may photograph or film athletes during programs and use names,
          images and athletic content on this website, social media and promotional materials. Our{" "}
          <LegalLink href="/hall-of-fame">Hall of Fame</LegalLink> lists players with the teams they went on to play for.
        </p>
        <p>
          A parent, guardian or adult participant can say no to publication, or ask us to remove a photo, video, name or
          other personal information we control. Tell us in writing (see{" "}
          <a href="#contact" className="prose-link">
            Contact us
          </a>
          ). Once something has been shared online, other people may have copied or reposted it, and we can&rsquo;t
          control those copies.
        </p>
        <p>We do not name children in the descriptive text of photos on this website.</p>
      </>
    ),
  },
  {
    id: "sharing",
    title: "Who we share information with",
    body: (
      <>
        <p>Showtime may share personal information with:</p>
        <ul>
          <li>The booking platform and other service providers that work on our behalf</li>
          <li>Medical providers in an emergency, as described in the waiver&rsquo;s medical release</li>
          <li>Authorities, when the law requires it</li>
        </ul>
      </>
    ),
  },
  {
    id: "children",
    title: "Children's privacy",
    body: (
      <>
        <p>
          Showtime trains youth basketball players. This website is written for parents and guardians, and it does not
          collect personal information from anyone, including children under 13.
        </p>
        <p>
          A parent or legal guardian must handle registration for any athlete under 18 and must complete the waiver on
          the athlete&rsquo;s behalf. Information about a child reaches Showtime from the parent or guardian, through the
          booking platform and the waiver.
        </p>
        <p>
          A parent or guardian may contact us at any time to review the information we hold about their child, to correct
          it, or to restrict or remove an online profile, publicity or personal information that Showtime controls. If a
          child has taken part without a parent or guardian&rsquo;s knowledge, the parent or guardian should contact us
          right away.
        </p>
      </>
    ),
  },
  {
    id: "your-choices",
    title: "Your choices and rights",
    body: (
      <>
        <p>You can ask us to:</p>
        <ul>
          <li>Tell you what personal information we hold about you or your child</li>
          <li>Correct information that is wrong</li>
          <li>Delete information we no longer need</li>
          <li>Stop publishing a photo, video, name or other content (see section 6)</li>
        </ul>
        <p>
          Depending on where you live, privacy law may give you further rights. We will respond to requests as the law
          requires. We may need to confirm your identity, or that you are the child&rsquo;s parent or guardian, before we act
          on a request.
        </p>
      </>
    ),
  },
  {
    id: "other-sites",
    title: "Other websites",
    body: (
      <p>
        This website links to the booking platform, {business.venue}, Instagram, YouTube, TikTok and Google Maps. We don&rsquo;t
        control those sites. Their own privacy policies apply when you use them.
      </p>
    ),
  },
  {
    id: "changes",
    title: "Changes to this policy",
    body: (
      <>
        <p>If we change how we handle personal information, we will update this page.</p>
      </>
    ),
  },
  {
    id: "contact",
    title: "Contact us",
    body: (
      <>
        <p>
          For privacy questions or requests, including requests about your child&rsquo;s information or photos, send us a
          message through our <LegalLink href={links.inquiry}>inquiry form</LegalLink> and say that it is a privacy
          request. You can also call us at <LegalLink href={business.phone.href}>{business.phone.display}</LegalLink>.
        </p>
      </>
    ),
  },
];

export default function PrivacyPage() {
  return (
    <>
      <PageHero
        title="Privacy Policy"
        eyebrow="Legal"
        lead="What this website collects (very little), how Showtime handles family and athlete information, and how to ask us to change or remove it."
      />
      <Section labelledBy="legal-toc-heading">
        <LegalDocument sections={sections} />
      </Section>
    </>
  );
}
