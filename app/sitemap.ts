import type { MetadataRoute } from "next";
import { flags } from "@/lib/flags";
import { siteUrl } from "@/lib/metadata";

/** Core and secondary public routes. /members is a utility page and stays out. */
export const indexedRoutes = [
  "/",
  "/programs",
  "/programs/academy",
  "/programs/fundamentalists",
  "/programs/individual-training",
  "/get-started",
  "/memberships",
  "/about",
  "/faqs",
  "/events",
  "/contact",
  "/waiver",
  // Listed only once it may be indexed; a noindex URL in a sitemap is a Search Console error.
  ...(flags.hallOfFameIndexable ? ["/hall-of-fame"] : []),
];

/**
 * Sitemaps need absolute URLs, and the production domain is not decided
 * (CONTENT_NEEDED B7), so the sitemap is empty until SITE_URL is set.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  if (!siteUrl) return [];
  return indexedRoutes.map((path) => ({ url: new URL(path, siteUrl).toString() }));
}
