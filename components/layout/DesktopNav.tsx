"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useId, useRef, useState } from "react";
import { membersLink, primaryCta, primaryNav, programLinks } from "@/lib/site";
import { Button } from "@/components/ui/Button";
import { ChevronDown } from "@/components/ui/icons";

export function isCurrent(pathname: string, href: string) {
  return pathname === href;
}

const linkBase =
  "relative inline-flex min-h-11 items-center font-semibold tracking-[0.02em] after:absolute after:inset-x-0 after:bottom-1.5 after:h-0.5 after:bg-amber-500 after:transition-opacity after:duration-150";

function underline(active: boolean) {
  return active ? "after:opacity-100" : "after:opacity-0 hover:after:opacity-100";
}

/** Desktop navigation (≥1024px). Programs is a click/keyboard disclosure, never hover-only (DESIGN 8.1). */
export function DesktopNav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const panelId = useId();
  const inPrograms = pathname.startsWith("/programs");

  // Close when the route changes.
  const [lastPath, setLastPath] = useState(pathname);
  if (lastPath !== pathname) {
    setLastPath(pathname);
    setOpen(false);
  }

  useEffect(() => {
    if (!open) return;
    function onPointerDown(event: PointerEvent) {
      if (!wrapperRef.current?.contains(event.target as Node)) setOpen(false);
    }
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setOpen(false);
        buttonRef.current?.focus();
      }
    }
    document.addEventListener("pointerdown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("pointerdown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  return (
    <nav aria-label="Main" className="hidden flex-1 items-center justify-end gap-8 lg:flex">
      <ul className="flex items-center gap-7">
        <li>
          <div
            ref={wrapperRef}
            className="relative"
            onBlur={(event) => {
              if (!event.currentTarget.contains(event.relatedTarget as Node | null)) setOpen(false);
            }}
          >
            <button
              ref={buttonRef}
              type="button"
              aria-expanded={open}
              aria-controls={panelId}
              onClick={() => setOpen((value) => !value)}
              className={`${linkBase} ${underline(inPrograms)} gap-1.5 text-nav text-white`}
            >
              Programs
              <ChevronDown className={`size-4 transition-transform duration-150 ${open ? "rotate-180" : ""}`} />
            </button>
            <div
              id={panelId}
              hidden={!open}
              className="absolute top-full left-0 z-50 mt-3 w-80 border border-line-dark bg-charcoal-800 py-2 shadow-[0_8px_24px_rgb(0_0_0/0.12)]"
            >
              <ul>
                {programLinks.map((link) => {
                  const active = isCurrent(pathname, link.href);
                  return (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        aria-current={active ? "page" : undefined}
                        className="block border-l-2 border-transparent px-5 py-3 hover:border-amber-500 aria-[current=page]:border-amber-500"
                      >
                        <span className="block font-semibold text-white">{link.label}</span>
                        {link.description && (
                          <span className="mt-0.5 block text-small text-muted-dark">{link.description}</span>
                        )}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </li>
        {primaryNav.map((link) => {
          const active = isCurrent(pathname, link.href);
          return (
            <li key={link.href}>
              <Link href={link.href} aria-current={active ? "page" : undefined} className={`${linkBase} ${underline(active)} text-nav text-white`}>
                {link.label}
              </Link>
            </li>
          );
        })}
      </ul>
      <div className="flex items-center gap-6">
        <Link
          href={membersLink.href}
          aria-current={isCurrent(pathname, membersLink.href) ? "page" : undefined}
          className={`${linkBase} ${underline(isCurrent(pathname, membersLink.href))} text-small text-muted-dark hover:text-white`}
        >
          {membersLink.label}
        </Link>
        <Button href={primaryCta.href} surface="dark">
          {primaryCta.label}
        </Button>
      </div>
    </nav>
  );
}
