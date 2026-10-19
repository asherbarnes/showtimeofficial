/** Inline SVG icons (DESIGN 17.2: no icon library, no emoji). All decorative. */

type IconProps = { className?: string };

const base = {
  "aria-hidden": true,
  focusable: false,
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "square",
} as const;

export function ArrowRight({ className = "size-4" }: IconProps) {
  return (
    <svg {...base} viewBox="0 0 24 24" className={className}>
      <path d="M4 12h15M13 6l6 6-6 6" />
    </svg>
  );
}

export function ExternalIcon({ className = "size-3.5" }: IconProps) {
  return (
    <svg {...base} viewBox="0 0 24 24" className={className}>
      <path d="M14 4h6v6M20 4l-9 9M18 14v6H4V6h6" />
    </svg>
  );
}

export function ChevronDown({ className = "size-4" }: IconProps) {
  return (
    <svg {...base} viewBox="0 0 24 24" className={className}>
      <path d="m6 9 6 6 6-6" />
    </svg>
  );
}

export function MenuIcon({ className = "size-6" }: IconProps) {
  return (
    <svg {...base} viewBox="0 0 24 24" className={className}>
      <path d="M3 6h18M3 12h18M3 18h18" />
    </svg>
  );
}

export function CloseIcon({ className = "size-6" }: IconProps) {
  return (
    <svg {...base} viewBox="0 0 24 24" className={className}>
      <path d="M5 5l14 14M19 5 5 19" />
    </svg>
  );
}

export function InfoIcon({ className = "size-5" }: IconProps) {
  return (
    <svg {...base} viewBox="0 0 24 24" className={className}>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 11v6M12 7.5v.01" />
    </svg>
  );
}

export function InstagramIcon({ className = "size-5" }: IconProps) {
  return (
    <svg {...base} viewBox="0 0 24 24" className={className}>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <path d="M17.5 6.5v.01" />
    </svg>
  );
}

export function YouTubeIcon({ className = "size-5" }: IconProps) {
  return (
    <svg aria-hidden focusable={false} viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M21.6 7.2a2.5 2.5 0 0 0-1.77-1.77C18.27 5 12 5 12 5s-6.27 0-7.83.43A2.5 2.5 0 0 0 2.4 7.2 26 26 0 0 0 2 12a26 26 0 0 0 .4 4.8 2.5 2.5 0 0 0 1.77 1.77C5.73 19 12 19 12 19s6.27 0 7.83-.43a2.5 2.5 0 0 0 1.77-1.77A26 26 0 0 0 22 12a26 26 0 0 0-.4-4.8ZM10 15V9l5.2 3Z" />
    </svg>
  );
}

export function TikTokIcon({ className = "size-5" }: IconProps) {
  return (
    <svg aria-hidden focusable={false} viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M16.6 5.82A4.28 4.28 0 0 1 15.54 3h-3.09v12.4a2.59 2.59 0 0 1-2.59 2.5 2.59 2.59 0 0 1-2.59-2.59 2.59 2.59 0 0 1 3.37-2.47V9.67a5.73 5.73 0 0 0-.78-.05A5.69 5.69 0 0 0 4.17 15.3 5.69 5.69 0 0 0 9.86 21a5.69 5.69 0 0 0 5.69-5.69V9.01a7.35 7.35 0 0 0 4.28 1.37V7.32a4.28 4.28 0 0 1-3.23-1.5Z" />
    </svg>
  );
}
