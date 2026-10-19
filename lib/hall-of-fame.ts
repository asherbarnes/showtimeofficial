/**
 * Hall of Fame entries (PRODUCT.md U6, CONTENT_NEEDED I11).
 *
 * The five entries come from the original repo's `hall-of-fame.html`, in its
 * order. The client confirmed they are accurate on 2026-10-12 (none appear on
 * the official Wix site). Consent to feature each player is still pending. A field the source left blank
 * ("—") is left undefined, not stored as "none"; the page shows it as "—" like the source.
 *
 * To add or update a player, edit this array only. Never add players,
 * statistics, years or awards without client confirmation and consent.
 */

export type VerificationStatus = "unverified" | "verified";

export type HallOfFamePlayer = {
  name: string;
  highSchool?: string;
  college?: string;
  professional?: string;
  /** Where the record came from. */
  source: string;
  verificationStatus: VerificationStatus;
  /** Permission from the player, or a parent or guardian, to be featured publicly. */
  consent: "pending" | "confirmed";
};

/** The pathway stages, in display order. Rendering is driven by this list. */
export const pathwayFields = [
  { key: "highSchool", label: "High School" },
  { key: "college", label: "College" },
  { key: "professional", label: "Pro" },
] as const satisfies readonly { key: keyof HallOfFamePlayer; label: string }[];

const originalRepo = "Original repo hall-of-fame.html (asherbarnes/Showtimebasketball); accuracy confirmed by the client 2026-10-12";

export const hallOfFame: HallOfFamePlayer[] = [
  {
    name: "Jaden Sweeney",
    highSchool: "Oak Grove",
    college: "San Jose City College",
    source: originalRepo,
    verificationStatus: "verified",
    consent: "pending",
  },
  {
    name: "Brandon Boyd",
    college: "Cal Baptist University",
    professional: "Mets de Guaynabo",
    source: originalRepo,
    verificationStatus: "verified",
    consent: "pending",
  },
  {
    name: "Dylan Galvan",
    highSchool: "Orangewood Academy",
    college: "UMary",
    source: originalRepo,
    verificationStatus: "verified",
    consent: "pending",
  },
  {
    name: "Shaade Williams",
    highSchool: "Oak Grove",
    college: "Pacific University",
    source: originalRepo,
    verificationStatus: "verified",
    consent: "pending",
  },
  {
    name: "Emilie Ngo",
    highSchool: "Oak Grove",
    college: "UC Santa Cruz",
    source: originalRepo,
    verificationStatus: "verified",
    consent: "pending",
  },
];

