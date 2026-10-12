import type { Metadata, Viewport } from "next";
import { Anton, Figtree } from "next/font/google";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { allowIndexing, siteUrl } from "@/lib/metadata";
import { business } from "@/lib/site";
import "./globals.css";

// Both families are SIL OFL (DESIGN 6.2). Anton is in the LCP heading, so it preloads.
const anton = Anton({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-anton",
  display: "swap",
});

const figtree = Figtree({
  weight: ["400", "600", "700"],
  subsets: ["latin"],
  variable: "--font-figtree",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: siteUrl,
  title: {
    default: `${business.name} | Youth Basketball Training in San Jose`,
    template: `%s | ${business.name}`,
  },
  description: business.positioning,
  applicationName: business.name,
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: business.name,
  },
  robots: allowIndexing ? undefined : { index: false, follow: false },
};

export const viewport: Viewport = {
  themeColor: "#000000",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${anton.variable} ${figtree.variable}`}>
      <body className="flex min-h-dvh flex-col">
        <a
          href="#main"
          className="sr-only z-50 bg-amber-500 px-4 py-3 font-bold text-black focus:not-sr-only focus:fixed focus:top-2 focus:left-2"
        >
          Skip to main content
        </a>
        <SiteHeader />
        <main id="main" tabIndex={-1} className="flex-1 focus:outline-none">
          {children}
        </main>
        <SiteFooter />
      </body>
    </html>
  );
}
