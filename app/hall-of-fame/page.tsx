import type { Metadata } from "next";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { CourtArc } from "@/components/ui/CourtArc";
import { Section } from "@/components/ui/Section";
import { CtaBand } from "@/components/sections/CtaBand";
import { PlayerRoster } from "@/components/sections/PlayerRoster";
import { freeSessionLine } from "@/lib/enrollment";
import { hallOfFame } from "@/lib/hall-of-fame";
import { flags } from "@/lib/flags";
import { pageMetadata } from "@/lib/metadata";
import { primaryCta } from "@/lib/site";

/**
 * Linked from the main nav (records confirmed by the client, CONTENT_NEEDED I11).
 * Stays noindex, and out of the sitemap, until `flags.hallOfFameIndexable` is
 * set on publication approval. Once set, the site-wide indexing rules in
 * app/layout.tsx apply like any other page.
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
  const total = hallOfFame.length;
  const countLabel = total === 1 ? "Player featured" : "Players featured";

  return (
    <>
      <section
        aria-labelledby="hof-title"
        data-surface="dark"
        className="relative overflow-hidden border-b-2 border-amber-500 bg-black text-white"
      >
        <CourtArc className="-right-24 -bottom-36 size-[20rem] sm:-bottom-44 sm:size-[30rem] lg:-right-16 lg:-bottom-64 lg:size-[44rem]" />
        <Container className="relative grid gap-8 py-12 md:gap-10 md:py-20 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-8">
            <h1 id="hof-title" className="type-display-lg">
              Hall of Fame
            </h1>
            <p className="mt-5 max-w-(--container-lead) text-lead text-muted-dark md:mt-6">
              Recognizing the players featured in Showtime&rsquo;s Hall of Fame and their basketball paths beyond the
              academy.
            </p>
          </div>
          {/* Stat-sized, no leading zero: the names are the peak, not the count (DESIGN 10.1 D). */}
          {total > 0 && (
            <p className="flex items-end gap-3 border-t border-line-dark pt-6 lg:col-span-4 lg:justify-end lg:border-t-0 lg:pt-0">
              <span aria-hidden="true" className="type-stat leading-[0.85] text-amber-500 tabular-nums">
                {total}
              </span>
              <span aria-hidden="true" className="type-label max-w-[9ch] text-white">
                {countLabel}
              </span>
              <span className="sr-only">
                {total} {countLabel.toLowerCase()}
              </span>
            </p>
          )}
        </Container>
      </section>

      {total > 0 && (
        <Section labelledBy="pathways-heading" compact>
          <h2 id="pathways-heading" className="type-label border-b-2 border-black pb-3">
            Player pathways
          </h2>
          <PlayerRoster players={hallOfFame} />
        </Section>
      )}

      {/* Charcoal, not black: the hero above and the footer below are both black (DESIGN 4.2, 10.10). */}
      <CtaBand
        surface="charcoal"
        compact
        title="Come train with us"
        text={freeSessionLine}
        actions={
          <>
            <Button href={primaryCta.href} surface="dark" size="lg" fullWidthMobile arrow>
              {primaryCta.label}
            </Button>
            <Button href="/programs" variant="secondary" surface="dark" size="lg" fullWidthMobile>
              Explore programs
            </Button>
          </>
        }
      />
    </>
  );
}
