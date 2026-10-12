import Link from "next/link";
import type { ReactNode } from "react";
import { ArrowRight, ExternalIcon } from "./icons";

type Variant = "primary" | "secondary" | "text";
type Surface = "light" | "dark" | "amber";

type ButtonProps = {
  href: string;
  children: ReactNode;
  variant?: Variant;
  /** The surface the button sits on; picks the contrast-safe colour pair (DESIGN 5.2, 9.1). */
  surface?: Surface;
  size?: "md" | "lg";
  /** Stretch to full width below the `sm` breakpoint. */
  fullWidthMobile?: boolean;
  arrow?: boolean;
  className?: string;
};

const boxBase =
  "inline-flex items-center justify-center gap-2 rounded-sm border-2 px-6 text-button font-bold uppercase tracking-[0.06em] transition-colors duration-150 active:translate-y-px";

const boxStyles: Record<"primary" | "secondary", Record<Surface, string>> = {
  primary: {
    light: "border-amber-500 bg-amber-500 text-black hover:border-amber-600 hover:bg-amber-600",
    dark: "border-amber-500 bg-amber-500 text-black hover:border-amber-600 hover:bg-amber-600",
    // On an amber band the primary inverts to black (DESIGN 9.1).
    amber: "border-black bg-black text-white hover:bg-charcoal",
  },
  secondary: {
    light: "border-black text-black hover:bg-black hover:text-white",
    dark: "border-white text-white hover:bg-white hover:text-black",
    amber: "border-black text-black hover:bg-black hover:text-white",
  },
};

const textStyles: Record<Surface, string> = {
  light: "text-charcoal decoration-black",
  dark: "text-white decoration-white",
  amber: "text-black decoration-black",
};

export function isExternal(href: string) {
  return /^https?:\/\//.test(href);
}

export function Button({
  href,
  children,
  variant = "primary",
  surface = "light",
  size = "md",
  fullWidthMobile = false,
  arrow = false,
  className = "",
}: ButtonProps) {
  const external = isExternal(href);

  const classes =
    variant === "text"
      ? `group inline-flex min-h-11 items-center gap-2 font-bold underline decoration-2 underline-offset-4 ${textStyles[surface]}`
      : [
          boxBase,
          boxStyles[variant][surface],
          size === "lg" ? "min-h-13" : "min-h-12",
          fullWidthMobile ? "w-full sm:w-auto" : "",
        ].join(" ");

  const content = (
    <>
      <span>{children}</span>
      {external ? (
        <>
          <ExternalIcon />
          <span className="sr-only"> (opens in a new tab)</span>
        </>
      ) : (
        (arrow || variant === "text") && (
          <ArrowRight className="size-4 transition-transform duration-150 group-hover:translate-x-0.5" />
        )
      )}
    </>
  );

  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={`group ${classes} ${className}`}>
        {content}
      </a>
    );
  }

  return (
    <Link href={href} className={`group ${classes} ${className}`}>
      {content}
    </Link>
  );
}
