import { links, primaryCta } from "./site";
import type { ImageKey } from "./images";

/**
 * Program facts from PRODUCT.md section 5. Conflicting facts use the interim
 * wording from CONTENT_NEEDED.md (B4) instead of choosing a side.
 */

export type ProgramSlug = "academy" | "fundamentalists" | "individual-training";

export type Program = {
  slug: ProgramSlug;
  number: string;
  name: string;
  href: string;
  whoFor: string;
  requirement: string;
  image: ImageKey;
  cta: { label: string; href: string };
};

export const programs: Program[] = [
  {
    slug: "academy",
    number: "01",
    name: "Academy",
    href: "/programs/academy",
    // B4 interim: no year count until 2.5+ vs 3+ is resolved (C1).
    whoFor: "Experienced players ready for a more competitive environment.",
    requirement: "Currently on a school or club team",
    image: "academySession",
    cta: { label: "Apply for an Academy Evaluation", href: links.inquiry },
  },
  {
    slug: "fundamentalists",
    number: "02",
    name: "Fundamentalists",
    href: "/programs/fundamentalists",
    whoFor: "Developing players building the essential skills of the game.",
    requirement: "At least one year of playing experience",
    image: "shootingForm",
    // Generic CTA until Fundamentalists eligibility for the free session is confirmed (B1).
    cta: primaryCta,
  },
  {
    slug: "individual-training",
    number: "03",
    name: "Individual Training",
    href: "/programs/individual-training",
    whoFor: "Athletes refining specific mechanics and habits at their own pace.",
    requirement: "1-on-1 sessions, 60 minutes",
    image: "youthCoaching",
    cta: { label: "Book Individual Training", href: "/programs/individual-training#book" },
  },
];

export function getProgram(slug: ProgramSlug): Program {
  const program = programs.find((p) => p.slug === slug);
  if (!program) throw new Error(`Unknown program: ${slug}`);
  return program;
}
