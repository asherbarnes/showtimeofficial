export type Testimonial = { quote: string; name?: string; role: string };

/**
 * Parent quotes as a ruled list: no cards, no stars (DESIGN 3). Quotes are
 * shown exactly as the source has them, including truncation.
 */
export function Testimonials({ items }: { items: readonly Testimonial[] }) {
  return (
    <ul className="grid gap-x-10 border-t-2 border-black md:grid-cols-2">
      {items.map((item) => (
        <li key={item.quote} className="border-b border-neutral-300 py-8">
          <figure>
            <blockquote className="text-lead">
              <p>&ldquo;{item.quote}&rdquo;</p>
            </blockquote>
            <figcaption className="mt-4">
              {item.name && <span className="block font-bold">{item.name}</span>}
              <span className="type-label text-amber-700">{item.role}</span>
            </figcaption>
          </figure>
        </li>
      ))}
    </ul>
  );
}
