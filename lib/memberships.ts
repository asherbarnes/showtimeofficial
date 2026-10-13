/**
 * Membership tiers and session prices (PRODUCT.md section 6, verified
 * 2026-10-10). Only prices that agree across current official sources are
 * here. Conflicting prices are `null` and must not be displayed (CONTENT_NEEDED B5).
 *
 * Sources: Wix /memberships (S5) and Minos Rec memberships/sessions (M2–M7).
 * The Wix /pricing-plans/list page (S15) shows a different, unlinked catalogue
 * and is not used here (PRODUCT 6.2).
 */

export type Tier = {
  /** Minos/FAQ spelling. Wix /memberships says "ESSENTIAL" (C9). */
  name: string;
  perWeek: number;
  perMonth: number;
  academy: number;
  fundamentalists: number;
};

export const tiers: Tier[] = [
  { name: "Basic", perWeek: 1, perMonth: 4, academy: 240, fundamentalists: 200 },
  { name: "Essentials", perWeek: 2, perMonth: 8, academy: 440, fundamentalists: 330 },
  { name: "Plus", perWeek: 3, perMonth: 12, academy: 600, fundamentalists: 400 },
];

export type DropIn = {
  program: string;
  /** `null` while official sources disagree. */
  price: number | null;
};

export const dropIns: DropIn[] = [
  { program: "Academy", price: 65 }, // S5 "members only" = M4 $65/player
  { program: "Fundamentalists", price: null }, // $55 (S5, S15) vs $60 (M5, Mindbody): C8
];

export const individualTraining = [
  { level: "Academy Coach", withLevel: "an Academy Coach", price: 80 },
  { level: "Master Coach", withLevel: "a Master Coach", price: 100 },
] as const;

/** Official policy statement (S5), quoted verbatim. */
export const acceptanceRule = "You must be accepted into the program before purchasing a membership.";
