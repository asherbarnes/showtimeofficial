import Image from "next/image";
import Link from "next/link";
import { badge } from "@/lib/images";
import { business } from "@/lib/site";

type LogoProps = {
  /** Display width in px. Pass `[mobile, desktop]` to switch at the `lg` breakpoint. */
  size: number | [number, number];
  priority?: boolean;
};

/**
 * Interim raster badge (white on black, 278×290). Only use it on black
 * surfaces. Replace with an inline currentColor SVG once a vector master
 * arrives (DESIGN D3).
 */
export function Logo({ size, priority = false }: LogoProps) {
  const sizes = Array.isArray(size) ? size : [size];
  const alt = `${business.name} — home`;
  return (
    <Link href="/" className="inline-flex shrink-0 rounded-full">
      {sizes.map((width, index) => {
        const height = Math.round((width * badge.height) / badge.width);
        return (
          <Image
            key={width}
            src={badge.src}
            width={width}
            height={height}
            // Preflight's height:auto would re-derive the ratio from the optimised file and drift by 1px.
            style={{ height }}
            alt={alt}
            loading={priority ? "eager" : "lazy"}
            // With two sizes, display:none removes the inactive one from the accessibility tree.
            className={sizes.length === 1 ? "block" : index === 0 ? "block lg:hidden" : "hidden lg:block"}
          />
        );
      })}
    </Link>
  );
}
