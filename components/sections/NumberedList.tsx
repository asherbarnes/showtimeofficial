/** Anton-numbered rows joined by court-line rules (DESIGN 4.1, 12.4). */
export function NumberedList({ items }: { items: readonly string[] }) {
  return (
    <ol className="border-t-2 border-black">
      {items.map((item, index) => (
        <li key={item} className="flex gap-5 border-b border-neutral-300 py-5 md:gap-8">
          <span aria-hidden="true" className="type-stat w-14 shrink-0 text-charcoal md:w-20">
            {String(index + 1).padStart(2, "0")}
          </span>
          <span className="self-center type-h4">{item}</span>
        </li>
      ))}
    </ol>
  );
}
