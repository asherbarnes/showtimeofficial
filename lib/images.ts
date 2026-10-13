/**
 * Image manifest (DESIGN.md 11.4). Files were converted to WebP from the
 * original repo's assets/img. Rights and minors' consent are unconfirmed for
 * every photo (CONTENT_NEEDED I8): treat all of them as placeholders.
 */

export type ImageEntry = {
  src: string;
  width: number;
  height: number;
  alt: string;
  /** CSS object-position focal point. */
  focal?: string;
  rightsConfirmed: boolean;
  minorsConsent: boolean;
};

const photo = (
  file: string,
  width: number,
  height: number,
  alt: string,
  focal = "50% 50%",
): ImageEntry => ({
  src: `/images/photos/${file}.webp`,
  width,
  height,
  alt,
  focal,
  rightsConfirmed: false,
  minorsConsent: false,
});

export const images = {
  defensiveDrill: photo(
    "defensive-drill",
    950,
    878,
    "Coach watching players hold a defensive stance during a training session",
  ),
  shootingForm: photo("shooting-form", 680, 1020, "Coach adjusting a young player's shooting form", "50% 35%"),
  groveSession: photo(
    "grove-session",
    950,
    983,
    "Training session on the court at The Grove, with the Showtime badge on the wall",
  ),
  academySession: photo("academy-session", 1024, 576, "Group training session on the court at The Grove"),
  ladderCoach: photo("ladder-coach", 707, 1024, "Players working through an agility ladder while a coach watches"),
  youthCoaching: photo("youth-coaching", 1024, 682, "Coach working with young players at the hoop"),
  individualForm: photo("individual-form", 574, 1020, "Player shooting on the court at The Grove", "50% 30%"),
  coachingStrength: photo("coaching-strength", 1024, 682, "Coach talking with seated athletes in the weight room"),
  ballhandlingDrill: photo("ballhandling-drill", 1024, 468, "Players running a ball-handling drill"),
} satisfies Record<string, ImageEntry>;

export type ImageKey = keyof typeof images;

export const badge = {
  src: "/images/brand/showtime-badge.png",
  width: 278,
  height: 290,
} as const;

export type Coach = {
  name: string;
  title: string;
  image: ImageEntry;
  /**
   * Condensed from the official bio (S2, read 2026-10-10) without changing its
   * claims. Credentials are as stated by Showtime and not
   * independently verified. The NBA "trained alongside" claim is omitted (U5).
   */
  summary?: string;
};

const headshot = (file: string, width: number, height: number, name: string): ImageEntry => ({
  src: `/images/coaches/${file}.webp`,
  width,
  height,
  alt: `Headshot of ${name}`,
  focal: "50% 20%",
  rightsConfirmed: false,
  minorsConsent: true, // adult staff
});

/** Leadership names and titles are VERIFIED on the official About page (S2). */
export const leadership: Coach[] = [
  {
    name: "Coach Derrick Nguyen",
    title: "Founder & Director",
    image: headshot("derrick", 640, 774, "Coach Derrick Nguyen"),
    summary:
      "A player development specialist with over a decade of coaching experience at Caroline Davis Intermediate School and Oak Grove High School. ACSM Certified Personal Trainer and Licensed Skills Coach with Pure Sweat Basketball.",
  },
  {
    name: "Coach Anthony “Ant” Gardner",
    title: "Co-Director",
    image: headshot("anthony", 640, 612, "Coach Anthony Gardner"),
    // CONTENT_NEEDED I6 asks the client to confirm the SJCC role.
    summary:
      "Nearly 14 years of competitive basketball experience and almost a decade of coaching. Co-Director & Head Trainer for Showtime and Head of Player Development at San Jose City College.",
  },
  {
    name: "Coach Kimo",
    title: "Athletic Director",
    image: headshot("kimo", 640, 594, "Coach Kimo"),
    summary:
      "A high-performance athletic development specialist training athletes since 2007. NASM Certified Personal Trainer (CPT), Corrective Exercise Specialist (CES) and Nutrition Coach (CNC).",
  },
];
