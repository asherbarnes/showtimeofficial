/**
 * Content flags for pending client decisions (DESIGN.md 17.2).
 * Flipping one is the whole change once the client answers.
 */
export const flags = {
  /**
   * CONTENT_NEEDED B5: turned on 2026-10-10 at the agency's direction. Only
   * prices that agree across current official sources are shown.
   */
  showPricing: true,
  /** CONTENT_NEEDED I1: L.E.A.D. is used provisionally (3 standing official pages). */
  showLeadStandards: true,
  /**
   * CONTENT_NEEDED I11: the client confirmed the player records are accurate
   * (2026-10-12), so the page is in the nav. Publication approval, including
   * consent from each player, is still pending. Until then the page stays
   * noindex and out of the sitemap; flipping this lifts both together.
   */
  hallOfFameIndexable: false,
} as const;
