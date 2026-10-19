/**
 * Image manifest (DESIGN.md 11.4). Files were converted to WebP from the
 * original repo's assets/img. Rights and minors' consent are unconfirmed for
 * every photo (CONTENT_NEEDED I8); see docs/assets.md.
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
  // Added 2026-10-19 from the original repo; alt text is the repo's own.
  heroJump: photo("hero-jump", 574, 1020, "Showtime athlete mid-jump during an agility ladder drill", "50% 40%"),
  groupCircle: photo("group-circle", 1024, 397, "Athletes and coaches gathered on the court during a Showtime session"),
  youthCircle: photo(
    "youth-circle",
    1024,
    388,
    "Young athletes seated on the court with basketballs during a youth clinic",
  ),
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
  /** Full bio from the original repo's about.html. Credentials are as stated by Showtime. */
  bio?: string;
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

/** "Who Leads Showtime" (original repo about.html). */
export const leadership: Coach[] = [
  {
    name: "Coach Derrick Nguyen",
    title: "Founder & Director",
    image: headshot("derrick", 640, 774, "Coach Derrick Nguyen"),
    bio: "Player development specialist and game strategist dedicated to building complete athletes on and off the court. With over a decade of coaching experience at Caroline Davis Intermediate School and Oak Grove High School, Derrick blends skill development, basketball IQ, and mindset training. He is an ACSM Certified Personal Trainer and a Licensed Skills Coach with Pure Sweat Basketball. His philosophy is built on the L.E.A.D. Standards: Leadership, Effort, Attitude, and Discipline.",
  },
  {
    name: "Coach Anthony Gardner",
    title: "Co-Director & Head Trainer",
    image: headshot("anthony", 640, 612, "Coach Anthony Gardner"),
    bio: "Also known as Coach Ant, he brings nearly 14 years of competitive basketball experience and almost a decade of coaching, including work with top local prospects, collegiate athletes, and professionals overseas. He is Co-Director & Head Trainer for Showtime and Head of Player Development at San Jose City College, with a strong focus on community clinics and service.",
  },
  {
    name: "Coach Kimo",
    title: "Athletic Director",
    image: headshot("kimo", 640, 594, "Coach Kimo"),
    bio: "High-performance athletic development specialist with nearly two decades of experience training athletes since 2007. He holds advanced NASM certifications as a Certified Personal Trainer (CPT), Corrective Exercise Specialist (CES), and Nutrition Coach (CNC), delivering integrated performance training, injury prevention, and movement quality at The Grove.",
  },
];

/** "Coaching staff" (original repo about.html). */
export const coachingStaff: Coach[] = (
  [
    ["jorge", "Coach Jorge", "Head of Select Development"],
    ["lam", "Coach Lam", "Head of Fundamentalist Development"],
    ["ron", "Coach Ron", "Fundamentalist Development Lead"],
    ["don", "Coach Don", "Academy Coach"],
    ["dylan", "Coach Dylan", "Academy Coach"],
    ["jaden", "Coach Jaden", "Academy Coach"],
    ["kenneth", "Coach Kenneth", "Academy Coach"],
    ["aus", "Coach Aus", "Academy Coach"],
  ] as const
).map(([file, name, title]) => ({ name, title, image: headshot(file, 574, 646, name) }));
