/** Events (PRODUCT.md section 10). No upcoming events as of 2026-10-10 (S9). */

export type ShowtimeEvent = {
  title: string;
  /** ISO date, local to San Jose. */
  date: string;
  time: string;
  location: string;
  tags: string[];
  details: string;
  rsvpHref?: string;
};

export const upcomingEvents: ShowtimeEvent[] = [];

export const pastEvents: ShowtimeEvent[] = [
  {
    title: "Showtime Basketball x CYS: Elevate Your Game",
    date: "2025-03-16",
    time: "4:00–5:30 PM",
    location: "The Grove",
    tags: ["Free", "CYS members only"],
    details: "Free clinic for current CYS members.",
  },
  {
    title: "Playmakers Clinic — “Play the Right Way”",
    date: "2025-03-01",
    time: "1:00–3:00 PM",
    location: "The Grove",
    tags: ["Free", "5th–8th grade"],
    details: "Free clinic for players in 5th–8th grade.",
  },
];
