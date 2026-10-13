import type { MetadataRoute } from "next";
import { allowIndexing, siteUrl } from "@/lib/metadata";

/** Blocks all crawling unless SITE_URL is set and ALLOW_INDEXING=true. */
export default function robots(): MetadataRoute.Robots {
  if (!allowIndexing || !siteUrl) {
    return { rules: { userAgent: "*", disallow: "/" } };
  }
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: new URL("/sitemap.xml", siteUrl).toString(),
  };
}
