import { pathwayFields, type HallOfFamePlayer } from "@/lib/hall-of-fame";

/**
 * Hall of Fame record board (DESIGN 10.13). Each player is a list item with an
 * H3 name and a <dl> of the pathway stages the source actually lists, in order,
 * each with a visible label. There are no fixed columns, so a stage the source
 * didn't list leaves no empty cell that could read as "didn't reach that level".
 *
 * Below `md` the stages stack under the name; from `md` they run left to right,
 * joined by a 2px court-line connector; from `lg` they share the name's row and
 * the connector stretches so each path spans the row.
 */
export function PlayerRoster({ players }: { players: readonly HallOfFamePlayer[] }) {
  return (
    // role="list": Safari drops list semantics from unstyled lists, losing "list, 5 items" in VoiceOver.
    <ol role="list">
      {players.map((player, index) => {
        const stages = pathwayFields.flatMap((field) => {
          const value = player[field.key];
          return value ? [{ label: field.label, value }] : [];
        });
        return (
          <li
            // Names can repeat; the position in the source list can't.
            key={`${index}-${player.name}`}
            className="grid grid-cols-[2.25rem_minmax(0,1fr)] items-baseline gap-x-3 border-b border-neutral-300 py-6 sm:gap-x-5 md:grid-cols-[3rem_minmax(0,1fr)] lg:grid-cols-[3rem_minmax(0,20rem)_minmax(0,1fr)] lg:gap-x-10 lg:py-8"
          >
            {/* Source order, not a ranking: a quiet numeral, never a filled block (DESIGN 10.13). */}
            <span aria-hidden="true" className="font-display text-[1.75rem] leading-none text-neutral-500 tabular-nums md:text-[2rem]">
              {String(index + 1).padStart(2, "0")}
            </span>

            <h3 className="font-display text-[clamp(1.75rem,1.35rem+1.5vw,2.625rem)] leading-none tracking-[0.01em] text-balance uppercase">
              {player.name}
            </h3>

            {stages.length > 0 && (
              <dl className="col-start-2 mt-5 grid gap-4 md:flex md:flex-wrap md:items-end md:gap-y-4 lg:col-start-3 lg:mt-0 lg:flex-nowrap lg:self-center">
                {stages.map((stage) => (
                  <div
                    key={stage.label}
                    className={[
                      // 768–1023: a fixed 24px court line between stages.
                      "md:relative md:not-first:pl-16 md:not-first:before:absolute md:not-first:before:bottom-[0.6875rem] md:not-first:before:left-5 md:not-first:before:h-0.5 md:not-first:before:w-6 md:not-first:before:bg-black",
                      // ≥1024: the line stretches (min 24px) so the path runs to the row's right edge.
                      // The ::before is a grid item in column 1, so the <dl> keeps only <dt>/<dd> children.
                      "lg:not-first:grid lg:not-first:flex-1 lg:not-first:grid-cols-[minmax(1.5rem,1fr)_auto] lg:not-first:gap-x-5 lg:not-first:pl-5 lg:not-first:before:static lg:not-first:before:col-start-1 lg:not-first:before:row-start-2 lg:not-first:before:w-auto lg:not-first:before:self-center",
                    ].join(" ")}
                  >
                    <dt className="type-label text-neutral-600 lg:col-start-2 lg:row-start-1">{stage.label}</dt>
                    <dd className="type-h4 mt-1.5 lg:col-start-2 lg:row-start-2">{stage.value}</dd>
                  </div>
                ))}
              </dl>
            )}
          </li>
        );
      })}
    </ol>
  );
}
