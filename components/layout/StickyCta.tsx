"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/Button";

/**
 * Mobile bottom CTA bar (DESIGN 8.2), below `lg` only. It appears once the user
 * has scrolled past the hero and hides while any `[data-sticky-cta-hide]`
 * element (hero actions, the closing band, the footer) is on screen, so it
 * never doubles a visible CTA or covers the end of the page. Without JS it
 * simply never shows.
 */
export function StickyCta({ label, href }: { label: string; href: string }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const targets = Array.from(document.querySelectorAll("[data-sticky-cta-hide]"));
    if (targets.length === 0) return;
    const onScreen = new Set<Element>();
    const observer = new IntersectionObserver((entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) onScreen.add(entry.target);
        else onScreen.delete(entry.target);
      }
      // Hidden above the first target too: the hero CTA hasn't scrolled away yet.
      const pastFirst = targets[0].getBoundingClientRect().bottom <= 0;
      setVisible(pastFirst && onScreen.size === 0);
    });
    targets.forEach((target) => observer.observe(target));
    return () => observer.disconnect();
  }, []);

  return (
    <div
      data-surface="dark"
      hidden={!visible}
      className="fixed inset-x-0 bottom-0 z-40 bg-black px-[clamp(1.25rem,4vw,3rem)] pt-2 pb-[max(0.5rem,env(safe-area-inset-bottom))] shadow-[0_-8px_24px_rgb(0_0_0/0.12)] lg:hidden"
    >
      <Button href={href} surface="dark" className="w-full">
        {label}
      </Button>
    </div>
  );
}
