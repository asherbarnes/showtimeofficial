import type { ImageKey } from "./images";

/** Events from the original repo's events.html (source of truth since 2026-10-19). */

export type ShowtimeEvent = {
  title: string;
  /** ISO date, local to San Jose. */
  date: string;
  time: string;
  location: string;
  tags: string[];
  details: string[];
  highlights?: string[];
  image?: ImageKey;
  rsvpHref?: string;
};

export const upcomingEvents: ShowtimeEvent[] = [];

export const pastEvents: ShowtimeEvent[] = [
  {
    title: "Playmaker’s Clinic",
    date: "2025-03-01",
    time: "1:00 PM to 3:00 PM",
    location: "The Grove, San Jose",
    tags: ["Free", "5th–8th grade"],
    details: [
      "Our free Playmakers Clinic, “Play the Right Way,” was a huge success. We welcomed 5th to 8th grade athletes to The Grove for high-level skill training, game strategy, and competitive reps designed to elevate their game.",
      "The goal was to help students excel as efficient basketball players, from making decisions off two feet offensively to becoming lockdown defenders: qualities that create a winning impact on any team.",
    ],
    highlights: [
      "Skill work focused on efficiency and decision-making",
      "Defensive principles to become a stronger individual and team defender",
      "Competitive drills to apply skills in live game situations",
      "Emphasis on H.E.L.D. Standards: Hard Work, Energy, Leadership, and Discipline",
    ],
    image: "groupCircle",
  },
  {
    title: "Showtime × CYS: Elevate Your Game",
    date: "2025-03-16",
    time: "4:00 PM to 5:30 PM",
    location: "The Grove, San Jose",
    tags: ["Free", "CYS members only"],
    details: [
      "The Showtime × CYS Clinic brought together two community-driven organizations with a shared mission: to empower and develop youth through sports. In a family-oriented environment, the clinic focused on teamwork, discipline, and respect while providing opportunities for growth.",
      "Showtime’s commitment to basketball skills and character development was at the forefront, offering athletic training plus guidance in building confidence and leadership. Through this partnership, both organizations worked to equip young athletes with tools to succeed on and off the court.",
      "This free clinic introduced CYS athletes to Showtime’s training methods, focusing on skill development, game awareness, and competitive play. (Registration was limited to current CYS members.)",
    ],
    image: "youthCircle",
  },
];
