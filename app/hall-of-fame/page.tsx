import type { Metadata } from "next";
import Image from "next/image";
import { Oswald } from "next/font/google";
import { badge } from "@/lib/images";
import { hallOfFame, pathwayFields } from "@/lib/hall-of-fame";
import { flags } from "@/lib/flags";
import { pageMetadata } from "@/lib/metadata";
import "./hall-of-fame.css";

// SIL OFL, self-hosted by next/font. Used on this page only.
const oswald = Oswald({
  weight: ["600", "700"],
  subsets: ["latin"],
  variable: "--font-oswald",
  display: "swap",
});

/**
 * Linked from the main nav (records confirmed by the client, CONTENT_NEEDED I11).
 * Stays noindex, and out of the sitemap, until `flags.hallOfFameIndexable` is
 * set on publication approval. Once set, the site-wide indexing rules in
 * app/layout.tsx apply like any other page.
 *
 * Design: the vintage NBA 2K-style board from the original repo's
 * hall-of-fame.html, the client's approved direction (2026-10-19). The repo's
 * template-only rows ("Add player name") and editor note are not ported.
 */
export const metadata: Metadata = {
  ...pageMetadata({
    title: "Hall of Fame",
    description:
      "Players featured in the Showtime Basketball Academy Hall of Fame, with the high school, college and professional teams listed for each.",
    path: "/hall-of-fame",
  }),
  robots: flags.hallOfFameIndexable ? undefined : { index: false, follow: true },
};

export default function HallOfFamePage() {
  return (
    <div className={`${oswald.variable} hof-page`}>
      <div className="hof-wrap">
        <div className="hof-titlebar">
          <div className="hof-logo">
            <Image src={badge.src} width={badge.width} height={badge.height} alt="Showtime Basketball logo" />
          </div>
          <div>
            <h1 className="hof-title">Hall of Fame</h1>
            <p className="hof-subtitle">Player Pathways</p>
          </div>
          <div aria-hidden="true" className="hof-ribbon">
            Showtime Basketball
          </div>
        </div>

        <div className="hof-panel">
          {/* Scrolls sideways if a long name ever outgrows a small phone; focusable so keyboards can scroll it. */}
          <div className="hof-panel-inner" tabIndex={0} role="region" aria-label="Hall of Fame players">
            <table className="hof-table">
              <thead>
                <tr>
                  <th scope="col">Name</th>
                  {pathwayFields.map((field) => (
                    <th key={field.key} scope="col">
                      {field.label}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {hallOfFame.map((player, index) => (
                  <tr key={`${index}-${player.name}`}>
                    <th scope="row" className="hof-name-cell">
                      <span className="hof-name">
                        <span aria-hidden="true" className="hof-marker" />
                        {player.name}
                      </span>
                    </th>
                    {pathwayFields.map((field) => (
                      <td key={field.key}>
                        {player[field.key] ?? (
                          <>
                            <span aria-hidden="true">—</span>
                            <span className="sr-only">Not listed</span>
                          </>
                        )}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
