import type { Metadata } from "next";
import { business } from "./site";

/**
 * The production domain is not decided (CONTENT_NEEDED B7), so canonical URLs,
 * metadataBase and the sitemap only exist when SITE_URL is set. Indexing also
 * requires ALLOW_INDEXING=true, so staging and local builds stay noindex.
 */
export const siteUrl: URL | undefined = process.env.SITE_URL ? new URL(process.env.SITE_URL) : undefined;

export const allowIndexing = Boolean(siteUrl) && process.env.ALLOW_INDEXING === "true";

type PageMetaInput = {
  title: string;
  description: string;
  path: string;
};

export function pageMetadata({ title, description, path }: PageMetaInput): Metadata {
  return {
    title,
    description,
    alternates: siteUrl ? { canonical: path } : undefined,
    openGraph: {
      title: `${title} | ${business.name}`,
      description,
      url: siteUrl ? path : undefined,
    },
  };
}
