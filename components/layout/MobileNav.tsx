"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { membersLink, primaryCta, primaryNav, programLinks } from "@/lib/site";
import { Button } from "@/components/ui/Button";
import { CloseIcon, MenuIcon } from "@/components/ui/icons";

/**
 * Full-screen mobile menu (<1024px, DESIGN 8.2), built on a native modal
 * <dialog>: the rest of the page is inert while it is open, focus stays
 * inside, and Escape closes it. Focus returns to the Menu button on close.
 */
export function MobileNav() {
  const pathname = usePathname();
  const dialogRef = useRef<HTMLDialogElement>(null);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const firstLinkRef = useRef<HTMLAnchorElement>(null);
  const [open, setOpen] = useState(false);

  // Close when the route changes (a link inside the drawer was followed).
  const [lastPath, setLastPath] = useState(pathname);
  if (lastPath !== pathname) {
    setLastPath(pathname);
    setOpen(false);
  }

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    if (open && !dialog.open) {
      dialog.showModal();
      firstLinkRef.current?.focus();
      document.documentElement.style.overflow = "hidden";
    } else if (!open && dialog.open) {
      dialog.close();
    }
  }, [open]);

  // Also covers Escape, which closes the dialog natively.
  function handleClose() {
    setOpen(false);
    document.documentElement.style.overflow = "";
    menuButtonRef.current?.focus();
  }

  // Don't leave the drawer open (and the page locked) when resizing to desktop.
  useEffect(() => {
    const query = window.matchMedia("(min-width: 64rem)");
    const onChange = () => query.matches && setOpen(false);
    query.addEventListener("change", onChange);
    return () => query.removeEventListener("change", onChange);
  }, []);

  const current = (href: string) => (pathname === href ? "page" : undefined);
  const rowLink =
    "flex min-h-14 items-center border-b border-line-dark text-2xl font-bold text-white aria-[current=page]:text-amber-500";

  return (
    <div className="lg:hidden">
      <button
        ref={menuButtonRef}
        type="button"
        onClick={() => setOpen(true)}
        aria-haspopup="dialog"
        className="-mr-2 inline-flex min-h-11 min-w-11 items-center gap-2 px-2 font-semibold text-white"
      >
        <MenuIcon />
        Menu
      </button>

      <dialog
        ref={dialogRef}
        aria-label="Site menu"
        onClose={handleClose}
        data-surface="dark"
        className="m-0 h-dvh max-h-none w-full max-w-none bg-black p-0 text-white backdrop:bg-black"
      >
        {/* Any followed link closes the menu, including a link to the current page. */}
        <div
          className="flex min-h-full flex-col"
          onClick={(event) => {
            if ((event.target as HTMLElement).closest("a")) setOpen(false);
          }}
        >
          <div className="container-site flex h-16 shrink-0 items-center justify-end">
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="-mr-2 inline-flex min-h-11 min-w-11 items-center gap-2 px-2 font-semibold"
            >
              <CloseIcon />
              Close
            </button>
          </div>

          <nav aria-label="Main" className="container-site flex-1 pb-6">
            <ul>
              <li>
                <Link ref={firstLinkRef} href="/" aria-current={current("/")} className={rowLink}>
                  Home
                </Link>
              </li>
              <li>
                <p className="type-label pt-6 pb-2 text-amber-500" id="mobile-programs-heading">
                  Programs
                </p>
                <ul aria-labelledby="mobile-programs-heading" className="border-t border-line-dark">
                  {programLinks.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        aria-current={current(link.href)}
                        className="flex min-h-12 items-center border-b border-line-dark pl-4 text-lg font-semibold text-white aria-[current=page]:text-amber-500"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </li>
              {[...primaryNav, membersLink].map((link) => (
                <li key={link.href}>
                  <Link href={link.href} aria-current={current(link.href)} className={rowLink}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="sticky bottom-0 border-t border-line-dark bg-black pt-4 pb-[max(1rem,env(safe-area-inset-bottom))]">
            <div className="container-site">
              <Button href={primaryCta.href} surface="dark" size="lg" className="w-full">
                {primaryCta.label}
              </Button>
            </div>
          </div>
        </div>
      </dialog>
    </div>
  );
}
