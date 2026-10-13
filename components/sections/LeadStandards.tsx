import { flags } from "@/lib/flags";

// Provisional (CONTENT_NEEDED I1). No per-word definitions: none are published.
const standards = ["Leadership", "Effort", "Attitude", "Discipline"];

/** L.E.A.D. as four Anton letters on a dark band (DESIGN 10.4). Hidden by `flags.showLeadStandards`. */
export function LeadStandards() {
  if (!flags.showLeadStandards) return null;
  return (
    <div className="mt-14 border-t border-line-dark pt-10">
      <h3 className="type-h4">The L.E.A.D. Standards</h3>
      <p className="mt-2 max-w-(--container-lead) text-muted-dark">
        The foundation for every athlete in the Showtime Basketball program.
      </p>
      <ul className="mt-8 grid grid-cols-2 gap-6 md:grid-cols-4">
        {standards.map((word) => (
          <li key={word} className="border-l-2 border-amber-500 pl-4">
            <span aria-hidden="true" className="type-stat block text-amber-500">
              {word[0]}
            </span>
            <span className="mt-1 block font-semibold">{word}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
