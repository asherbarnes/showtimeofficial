import { links, primaryCta } from "./site";
import type { ImageKey } from "./images";

/**
 * Program content from the original repo (index.html "Pathways" cards and
 * programs.html), the content source of truth since 2026-10-19. The repo's
 * mis-encoded dashes ("2.5?3+") are restored; nothing else is reworded.
 */

export type ProgramSlug = "academy" | "fundamentalists" | "individual-training";

export type OverviewItem = { label: string; text: string };

export type Program = {
  slug: ProgramSlug;
  number: string;
  name: string;
  href: string;
  /** Home "Pathways" card text. */
  whoFor: string;
  /** Tag from programs.html. */
  requirement: string;
  image: ImageKey;
  cta: { label: string; href: string };
  /** programs.html body paragraphs. */
  description: string[];
  /** programs.html four-part overview. */
  overview: OverviewItem[];
  instagramPost?: string;
};

export const programs: Program[] = [
  {
    slug: "academy",
    number: "01",
    name: "Academy",
    href: "/programs/academy",
    whoFor: "Small-group training for athletes with 2.5+ years of basketball experience.",
    requirement: "2.5+ years experience",
    image: "defensiveDrill",
    cta: primaryCta,
    description: [
      "The Academy is specifically designed to help players make the transition to competitive basketball, equipping them with the skills and confidence to excel in more challenging environments. This pathway is intended for athletes with roughly 2.5–3+ years of playing experience who are ready to take their game to the next level.",
      "Players refine individual skills such as shooting mechanics, ball handling, and footwork while developing team dynamics, positioning, and game awareness. Scrimmages and competitive scenarios simulate real-game conditions to prepare athletes mentally and physically for Junior Varsity-level play and beyond.",
    ],
    overview: [
      { label: "Who it's for", text: "Athletes with 2.5+ years of experience, often already participating on a club or school team." },
      {
        label: "Development focus",
        text: "Finishing from multiple angles, perimeter and mid-range shooting, physicality, defensive fundamentals from closeouts to box outs, leadership, and communication.",
      },
      { label: "Training format", text: "Small-group sessions with intentional coaching, advanced drills, and competitive game-situation training." },
      { label: "What to expect", text: "Rigorous skill work, accountability to L.E.A.D. standards, and coaching that connects mechanics to live play." },
    ],
    instagramPost: links.instagramAcademyPost,
  },
  {
    slug: "fundamentalists",
    number: "02",
    name: "Fundamentalists",
    href: "/programs/fundamentalists",
    whoFor: "An entry point for newer athletes learning the foundations of basketball.",
    requirement: "Newer athletes",
    image: "ballhandlingDrill",
    cta: primaryCta,
    description: [
      "Our Fundamentalist class cultivates young basketball players by focusing on essential skills while fostering a deep love for the game. It is tailored for players with at least one year of playing experience, with age-appropriate instruction that builds confidence and competence on the court.",
      "Athletes work through drills emphasizing dribbling, passing, shooting, and defensive positioning. Coaches provide personalized feedback while emphasizing teamwork, sportsmanship, and a positive mindset.",
    ],
    overview: [
      { label: "Who it's for", text: "Entry-level and developing athletes, typically with at least one year of playing experience." },
      {
        label: "Development focus",
        text: "Ambidextrous ball handling, a consistent mid-range jump shot, on-ball and help defense, footwork, and communication.",
      },
      { label: "Training format", text: "Age-appropriate instruction with personalized feedback inside a supportive small-group setting." },
      {
        label: "What to expect",
        text: "Stronger technical foundations, greater appreciation for the game, and a pathway into higher levels of Showtime development.",
      },
    ],
    instagramPost: links.instagramFundamentalsPost,
  },
  {
    slug: "individual-training",
    number: "03",
    name: "Individual Training",
    href: "/programs/individual-training",
    whoFor: "Focused 1:1 work for athletes refining specific mechanics, habits, or areas of their game.",
    requirement: "1:1",
    image: "individualForm",
    cta: { label: "Book Individual Training", href: "/programs/individual-training#book" },
    description: [
      "Individual training gives players the opportunity to work on specific mechanics, habits, or areas of refinement at their own pace. This may include shooting mechanics, footwork, ball-handling details, finishing technique, movement patterns, or other skills that need focused correction.",
      "Showtime offers 1-on-1 individual training.",
    ],
    overview: [
      { label: "Who it's for", text: "Athletes who need targeted work on shooting, footwork, ball handling, finishing, or movement patterns." },
      { label: "Development focus", text: "Detail-oriented correction and habit building that transfers into team and Academy training." },
      { label: "Training format", text: "1-on-1 individual training." },
      { label: "What to expect", text: "A focused plan around specific skills, not a generic workout." },
    ],
  },
];

/**
 * Athletic Development: "Coming Soon" in the original repo. It has no route
 * (no enrollment exists); it renders as a fourth, unlinked row and as a section
 * on /programs.
 */
export const athleticDevelopment = {
  number: "04",
  name: "Athletic Development",
  status: "Coming Soon",
  whoFor: "Strength, balance, coordination, stability, body control, and athletic foundations.",
  image: "ladderCoach" as ImageKey,
  description:
    "A future pathway focused on developing strength, balance, stability, body control, coordination, injury-prevention habits, and overall athletic foundation that supports on-court performance.",
  overview: [
    { label: "Who it's for", text: "Athletes looking to build physical foundations that support skill development and long-term durability." },
    { label: "Development focus", text: "Strength, balance, stability, coordination, body control, and injury-prevention habits." },
    { label: "Training format", text: "Details will be published when the program launches. This offering is not currently available." },
    { label: "Status", text: "Coming soon. Inquire to be notified when enrollment opens." },
  ] satisfies OverviewItem[],
};

export function getProgram(slug: ProgramSlug): Program {
  const program = programs.find((p) => p.slug === slug);
  if (!program) throw new Error(`Unknown program: ${slug}`);
  return program;
}
