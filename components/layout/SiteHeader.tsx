import { Logo } from "./Logo";
import { DesktopNav } from "./DesktopNav";
import { MobileNav } from "./MobileNav";

/** One black bar: badge, nav, Members utility link, primary CTA (DESIGN 8.1, 8.2). */
export function SiteHeader() {
  return (
    <header data-surface="dark" className="bg-black text-white">
      <div className="container-site flex h-16 items-center justify-between gap-6 lg:h-20">
        <Logo size={[44, 56]} priority />
        <DesktopNav />
        <MobileNav />
      </div>
    </header>
  );
}
