import { flags } from "@/lib/flags";

// "Coaching approach" block from the original repo's about.html.
const standards = [
  { word: "Leadership", text: "Leadership is our foundation for success. Dedication sets the stage for achievement." },
  { word: "Effort", text: "Effort means doing things to your fullest ability. Everything you do, do it to the max." },
  {
    word: "Attitude",
    text: "Attitude can be vibrant enthusiasm or focused determination, but must always remain positive and constructive.",
  },
  {
    word: "Discipline",
    text: "Discipline is the ability to pursue your goals and complete tasks regardless of feelings or perceptions.",
  },
];

/** L.E.A.D. as four Anton letters on a dark band (DESIGN 10.4). Hidden by `flags.showLeadStandards`. */
export function LeadStandards() {
  if (!flags.showLeadStandards) return null;
  return (
    <div className="mt-14 border-t border-line-dark pt-10">
      <p className="type-label text-amber-500">Coaching approach</p>
      <h3 className="mt-3 type-h3">L.E.A.D. Standards</h3>
      <p className="mt-3 max-w-(--container-lead) text-muted-dark">
        The Academy is our basketball school. We teach game skills in game situations, and every athlete is held to the
        same four standards.
      </p>
      <ul className="mt-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {standards.map(({ word, text }) => (
          <li key={word} className="border-l-2 border-amber-500 pl-4">
            <span aria-hidden="true" className="type-stat block text-amber-500">
              {word[0]}
            </span>
            <span className="mt-1 block font-semibold">{word}</span>
            <p className="mt-2 text-muted-dark">{text}</p>
          </li>
        ))}
      </ul>
      <p className="mt-8 max-w-(--container-lead) text-muted-dark">
        We encourage every member and their families to embrace these standards and remain actively engaged in our
        Academy community.
      </p>
    </div>
  );
}
