/**
 * Business facts and external destinations.
 *
 * Since 2026-10-19 the original repo (asherbarnes/Showtimebasketball, commit
 * 3bfcb18) is the source of truth for site content, at the agency's direction.
 * The mission, phone, hours and YouTube channel below come from it and are
 * still unconfirmed by the client (CONTENT_NEEDED B8, I2, O3).
 */

export const business = {
  name: "Showtime Basketball Academy",
  shortName: "Showtime",
  legalName: "Showtime Basketball LLC",
  established: 2017,
  /** Official positioning line (PRODUCT 3.1, S1). */
  positioning:
    "Developing complete basketball players through intentional coaching, small-group training, and a foundation-first approach.",
  /** "Our Mission" (original repo, every page). */
  mission:
    "Showtime Basketball builds athletes through a culture of hard work, discipline, and leadership, using basketball as a platform for intentional coaching and mentorship that develops character, skill, and success beyond the court.",
  phone: { display: "(408) 888-6739", href: "tel:+14088886739" },
  hours: [
    { days: "Monday to Thursday", time: "5:00 PM to 7:30 PM" },
    { days: "Friday", time: "Closed" },
    { days: "Saturday", time: "9:00 AM to 11:30 AM" },
    { days: "Sunday", time: "Closed" },
  ],
  hoursNote: "Hours may vary with training schedules. Confirm when you inquire.",
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
  /** Google Maps embed on /contact. It loads from Google: see the Privacy Policy's cookies section. */
  mapEmbed:
    "https://www.google.com/maps?q=Showtime+Basketball+Academy,+2099+S+10th+St+Unit+90,+San+Jose,+CA+95112&output=embed",
  instagramAcademyPost: "https://www.instagram.com/p/DVhbzSeD7V_/",
  instagramFundamentalsPost: "https://www.instagram.com/p/DVe4-qSj-Sh/",
} as const;

/** YouTube is from the original repo; the channel is unconfirmed (CONTENT_NEEDED O3). */
export const socials = [
  { name: "Instagram", handle: "@showtimebasketball", href: "https://www.instagram.com/showtimebasketball/" },
  { name: "YouTube", handle: "@Showtimebasketballacademy", href: "https://www.youtube.com/@Showtimebasketballacademy" },
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
 * The one generic enrollment CTA. Label from the original repo; it still
 * leads to the /get-started explainer, which links to the inquiry form.
 */
export const primaryCta: NavLink = { label: "Get Your Free Session", href: "/get-started" };
