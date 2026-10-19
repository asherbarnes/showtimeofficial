import Link from "next/link";
import { Logo } from "./Logo";
import { business, fullAddress, links, programLinks, socials } from "@/lib/site";
import { ExternalIcon, InstagramIcon, TikTokIcon } from "@/components/ui/icons";

const socialIcons = { Instagram: InstagramIcon, TikTok: TikTokIcon } as const;

type FooterLink = { label: string; href: string };

const columns: { heading: string; links: FooterLink[] }[] = [
  { heading: "Programs", links: programLinks },
  {
    heading: "Showtime",
    links: [
      { label: "Get Started", href: "/get-started" },
      { label: "Memberships", href: "/memberships" },
      { label: "About", href: "/about" },
      { label: "Events", href: "/events" },
      { label: "FAQs", href: "/faqs" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    heading: "Members",
    links: [
      { label: "Member Login & Booking", href: links.sessions },
      { label: "Members hub", href: "/members" },
      { label: "Waiver", href: "/waiver" },
    ],
  },
];

const legalLinks: FooterLink[] = [
  { label: "Privacy", href: "/privacy" },
  { label: "Terms", href: "/terms" },
  { label: "Waiver", href: "/waiver" },
  { label: "FAQs", href: "/faqs" },
];

function FooterLinkItem({ link }: { link: FooterLink }) {
  const className = "inline-flex min-h-11 items-center gap-1.5 py-1 text-muted-dark hover:text-white hover:underline";
  if (link.href.startsWith("http")) {
    return (
      <a href={link.href} target="_blank" rel="noopener noreferrer" className={className}>
        {link.label}
        <ExternalIcon />
        <span className="sr-only"> (opens in a new tab)</span>
      </a>
    );
  }
  return (
    <Link href={link.href} className={className}>
      {link.label}
    </Link>
  );
}

/**
 * Black body + amber legal bar (DESIGN 10.11). No phone, email or hours until
 * confirmed (CONTENT_NEEDED B8).
 */
export function SiteFooter() {
  return (
    <footer data-sticky-cta-hide>
      <div data-surface="dark" className="bg-black text-white">
        <div className="container-site grid gap-12 py-14 md:py-20 lg:grid-cols-12 lg:gap-8">
          <div className="flex flex-col gap-8 lg:col-span-4">
            <Logo size={64} />
            <p className="max-w-[36ch] text-muted-dark">{business.positioning}</p>
            <address className="not-italic">
              <p className="type-label mb-2 text-amber-500">Where we train</p>
              <p>
                Showtime trains at {business.venue}
                <br />
                {fullAddress}
              </p>
              <a
                href={links.maps}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 inline-flex min-h-11 items-center gap-1.5 font-bold underline underline-offset-4"
              >
                Get directions
                <ExternalIcon />
                <span className="sr-only"> (opens in a new tab)</span>
              </a>
            </address>
          </div>

          <div className="grid gap-10 sm:grid-cols-3 lg:col-span-8">
            {columns.map((column) => (
              <nav key={column.heading} aria-label={`Footer: ${column.heading}`}>
                <h2 className="type-label mb-3 text-amber-500">{column.heading}</h2>
                <ul>
                  {column.links.map((link) => (
                    <li key={link.href}>
                      <FooterLinkItem link={link} />
                    </li>
                  ))}
                </ul>
              </nav>
            ))}
          </div>

          <ul className="flex gap-2 lg:col-span-12" aria-label="Social media">
            {socials.map((social) => {
              const Icon = socialIcons[social.name];
              return (
                <li key={social.name}>
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex size-11 items-center justify-center border border-line-dark hover:border-amber-500 hover:text-amber-500"
                  >
                    <Icon />
                    <span className="sr-only">
                      {social.name} {social.handle} (opens in a new tab)
                    </span>
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>

      <div data-surface="amber" className="bg-amber-500 text-black">
        <div className="container-site flex flex-col items-center gap-2 py-4 text-center text-small font-semibold sm:flex-row sm:justify-between sm:text-left">
          <p>
            © {business.legalName} · Est. {business.established}
          </p>
          <ul className="flex flex-wrap justify-center gap-x-6">
            {legalLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="inline-flex min-h-11 items-center underline underline-offset-4">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
