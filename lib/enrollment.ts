/**
 * Enrollment content. Two paths, deliberately separate (CONTENT_NEEDED B1):
 * - `startSteps`: the universal first steps, shown on Home and Get Started.
 * - `academySteps`: the official five-step Academy process, shown on the
 *   Academy and Get Started pages.
 */
export type EnrollmentStep = { title: string; text: string };

/**
 * The free-session offer, scoped to what the official sources support.
 * S1: "Your first session is free! Get a feel of our program before
 * committing. Try one of our small group sessions." S7 (referral FAQ): "one
 * free trial session". Nothing extends it to Individual Training (1-on-1), and
 * nothing says which group program it applies to (checked 2026-10-10).
 */
export const freeSessionOffer = {
  headline: "Your first small-group session is free",
  text: "Get a feel of our program before committing.",
} as const;

/** The standard one-line offer. Use it instead of writing the offer inline. */
export const freeSessionLine = `${freeSessionOffer.headline}.`;

/** The universal first step, for leads. */
export const startLead = "Start with an inquiry and a free small-group session.";

/** The Academy requirement that accompanies the offer (S5–S7; B1 interim wording). */
export const academyPlacementLine = "Academy placement is confirmed through an evaluation.";

export const startSteps: EnrollmentStep[] = [
  { title: "Get in touch", text: "Send an inquiry through our booking site." },
  {
    title: "Attend your introductory session",
    text: `${freeSessionLine} ${freeSessionOffer.text}`,
  },
  {
    title: "Find your program",
    text: "Academy athletes are evaluated and must be accepted before purchasing a membership.",
  },
];

/**
 * The official five-step process (S6 step image, S7 "How do I sign up?",
 * PRODUCT 7.1). It is the Academy process; whether Fundamentalists also needs
 * an evaluation is open (PRODUCT 5.2).
 *
 * Wording deliberately differs from the source in two places:
 * - Step 1: the "Academy Evaluation Form" is assumed to be the Minos general
 *   inquiry, which the official homepage and FAQ use (C15, B1).
 * - Step 4: "placement into one of the Academy tiers" drops "tiers" until the
 *   client explains them (CONTENT_NEEDED I3).
 */
export const academySteps: EnrollmentStep[] = [
  { title: "Apply for an evaluation", text: "Fill out the inquiry form on our booking site." },
  { title: "We reach out", text: "A team member contacts you to schedule an evaluation." },
  {
    title: "Attend the evaluation",
    text: "Coaches look for coachability, response to adversity and feedback, and cultural fit: effort, attitude and team mindset.",
  },
  { title: "Get your results", text: "A team member shares the results and your athlete's placement." },
  { title: "Enroll", text: "Once accepted, your family chooses a membership and enrolls." },
];
