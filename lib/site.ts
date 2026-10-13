/**
 * Business facts and external destinations.
 *
 * Every value here must trace to PRODUCT.md. Anything UNVERIFIED there
 * (phone, email, hours, mission paragraph) is deliberately absent.
 */

export const business = {
  name: "Showtime Basketball Academy",
  shortName: "Showtime",
  legalName: "Showtime Basketball LLC",
  established: 2017,
  /** Official positioning line (PRODUCT 3.1, S1). */
  positioning:
    "Developing complete basketball players through intentional coaching, small-group training, and a foundation-first approach.",
  venue: "The Grove",
  address: {
    street: "2099 S 10th St, Unit 90",
    city: "San Jose",
    region: "CA",
    postalCode: "95112",
  },
} as const;

export const fullAddress = `${business.address.street}, ${business.address.city}, ${business.address.region} ${business.address.postalCode}`;

/**
 * External URLs (migration-requirements 2). Minos lesson IDs can change when
 * Showtime edits its catalogue: re-verify before launch.
 */
export const links = {
  inquiry: "https://minosrec.com/showtime-basketball-academy/general-inquiry",
  minosHome: "https://minosrec.com/showtime-basketball-academy/home",
  sessions: "https://minosrec.com/showtime-basketball-academy/sessions",
  /** Member-facing only: never link prospects here (CONTENT_NEEDED B2). */
  memberships: "https://minosrec.com/showtime-basketball-academy/memberships",
  academyClass: "https://minosrec.com/showtime-basketball-academy/group-lesson/lesson/100",
  fundamentalsClass: "https://minosrec.com/showtime-basketball-academy/group-lesson/lesson/98",
  itAcademyCoach: "https://minosrec.com/showtime-basketball-academy/lesson/99",
  itMasterCoach: "https://minosrec.com/showtime-basketball-academy/lesson/101",
  grove: "https://www.thegrove.work/",
  maps: "https://maps.google.com/?q=2099%20S%2010th%20St%2C%20San%20Jose%2C%20CA%2095112",
} as const;

/** YouTube is omitted until the channel is confirmed (CONTENT_NEEDED O3). */
export const socials = [
  { name: "Instagram", handle: "@showtimebasketball", href: "https://www.instagram.com/showtimebasketball/" },
  { name: "TikTok", handle: "@showtimeba", href: "https://www.tiktok.com/@showtimeba" },
] as const;

export type NavLink = { label: string; href: string; description?: string };

export const programLinks: NavLink[] = [
  { label: "All programs", href: "/programs", description: "Compare and choose" },
  { label: "Academy", href: "/programs/academy", description: "Experienced players on a school or club team" },
  { label: "Fundamentalists", href: "/programs/fundamentalists", description: "Players with at least one year of experience" },
  { label: "Individual Training", href: "/programs/individual-training", description: "1-on-1 sessions with a Showtime coach" },
];

export const primaryNav: NavLink[] = [
  { label: "Memberships", href: "/memberships" },
  { label: "About", href: "/about" },
  { label: "Hall of Fame", href: "/hall-of-fame" },
  { label: "Events", href: "/events" },
  { label: "FAQs", href: "/faqs" },
];

export const membersLink: NavLink = { label: "Members", href: "/members" };

/**
 * The one generic enrollment CTA. "Get Started" rather than "Book a Free
 * Session": the free-session offer is verified only for small-group sessions,
 * and which programs qualify is unconfirmed (CONTENT_NEEDED B1). The offer
 * itself is stated, with its qualification, on Home and Get Started.
 */
export const primaryCta: NavLink = { label: "Get Started", href: "/get-started" };
