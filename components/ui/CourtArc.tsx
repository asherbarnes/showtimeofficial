/**
 * The single thin quarter-arc court line (DESIGN 4.1). Decorative, at most once
 * per page, behind a dark band and never over faces. The parent must be
 * `relative overflow-hidden`; position and size it with `className`.
 */
export function CourtArc({ className = "" }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      focusable="false"
      viewBox="0 0 400 400"
      fill="none"
      className={`pointer-events-none absolute text-line-dark ${className}`}
    >
      <path d="M0 400A400 400 0 0 1 400 0" stroke="currentColor" strokeWidth="1.5" vectorEffect="non-scaling-stroke" />
    </svg>
  );
}
