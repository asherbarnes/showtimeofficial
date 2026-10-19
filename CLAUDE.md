# Showtime Basketball Academy — project instructions

@AGENTS.md

Agency standards live in `~/webdesign/CLAUDE.md` and still apply. This file covers only what is specific to this project.

## Read before working

- **Content source of truth (since 2026-10-19, agency direction):** the original repo `asherbarnes/Showtimebasketball` (commit 3bfcb18). Page copy, bios, FAQs, events, contact details and images follow it verbatim, mapped into this site's structure. `PRODUCT.md` still records which of those facts the client hasn't confirmed; CONTENT_NEEDED tracks them.
- `DESIGN.md`: the visual spec ("Court Lines"). Sections 5–10 and 17 map directly to the code.
- `CONTENT_NEEDED.md`: open client decisions. Code comments cite their IDs (B1–B8, I1–I16, O1–O7).
- `research/migration-requirements.md`: routes, content that must survive, and SEO/a11y acceptance criteria. Ignore its GitHub Pages mechanics (basePath, `.nojekyll`, redirect stubs) unless that host is chosen.
- `docs/redirects.md` and `docs/assets.md`: deferred redirects; asset rights status.

## Commands

`npm run dev` · `npm run lint` · `npm run build`. A build must show every route as `○ (Static)`. If `tsc` complains about `src/app` paths, delete the stale `.next/`.

## Architecture

- App Router at the repo root (`app/`, `components/`, `lib/`, `public/`; no `src/`). Path alias `@/*` → `./*`.
- Server Components by default. Client components exist **only** for `DesktopNav` (Programs disclosure, `aria-current`) `MobileNav` (native `<dialog>` drawer) and `StickyCta` (mobile bottom CTA bar; one IntersectionObserver over `[data-sticky-cta-hide]` zones, currently on Home only). Keep it that way unless interactivity requires otherwise.
- Header and footer render once, in `app/layout.tsx`.
- **Content is data:** external URLs, address and nav are in `lib/site.ts`; programs, tiers, events and images each have a typed module. Change a fact in one place, never inline in a page.
- Enrollment content is in `lib/enrollment.ts`: `startSteps` (universal 3 steps: Home, Get Started), `academySteps` (official 5 steps: Academy, Get Started) and `freeSessionOffer`. The free session is verified only for **small-group sessions**; never extend it to Individual Training or name a program it covers (B1). Leadership bios and the coaching staff are in `lib/images.ts` (`leadership[].bio`, `coachingStaff`). Program copy (descriptions, four-part overviews, Athletic Development) is in `lib/programs.ts`; mission, phone and hours in `lib/site.ts` (`business`).
- Pending decisions are switched in `lib/flags.ts` (`showPricing`, `showLeadStandards`, `hallOfFameIndexable`).
- Indexing is off unless `SITE_URL` and `ALLOW_INDEXING=true` are set (`lib/metadata.ts`). Never hard-code a domain.

## Design-system conventions

- Only the colours in `app/globals.css` exist (Tailwind's defaults are reset). **Amber is a fill under black text, or text on dark. Never white on amber, never amber text on light** (use `amber-700`).
- Headings: `type-display-xl` (home H1 only), `type-display-lg` (inner H1), `type-h2` (Anton); `type-h3`/`type-h4`/`type-label` (Figtree). Anton is never below 28px. One H1 per page.
- Wrap page sections in `<Section surface=…>`. It sets `data-surface`, which drives focus-ring colour; don't hand-pick contrast pairs.
- Use `<Button href surface variant>` for every CTA. External `https://` links automatically open in a new tab with an icon and screen-reader text.
- Corners: `rounded-sm` (2px) or none. No shadows except the dropdown. No icon-card grids, gradients, emoji icons or scroll animations.
- **Exception: `/hall-of-fame`** is the client-approved vintage NBA 2K board ported from the original repo (leather gradient, wood frame, shadows, Oswald). Its styles live only in `app/hall-of-fame/hall-of-fame.css` under `.hof-*` classes; don't reuse them elsewhere or "fix" them toward the system. CSS modules don't work in this project (the Tailwind Turbopack loader in `next.config.ts` strips module class names), so page-scoped CSS uses prefixed plain classes.
- Images: add them to `lib/images.ts` with `rightsConfirmed`/`minorsConsent` set to `false`. Pre-compress to WebP. Never name minors in alt text.

## Content rules (non-negotiable)

- Content comes from the original repo, verbatim (see "Read before working"). That includes items PRODUCT.md marks UNVERIFIED (mission, phone, hours, testimonials, "Premier", "up to six", Select coach title, 2.5+ years): they are published at the agency's direction and stay listed in CONTENT_NEEDED until the client confirms them. Never add content that isn't in the original repo or confirmed by the client. The NBA "trained alongside" claim isn't in the original repo and stays out.
- The primary CTA is "Get Your Free Session" → `/get-started` (`primaryCta`). Booking links ("Book Memberships", "Book Sessions", "Book Online") appear where the original repo has them.
- Prices come only from `lib/memberships.ts`. A price set to `null` is conflicting and must not render. Never use Wix `/pricing-plans/list` or Mindbody as a price source (PRODUCT 6.2–6.3).
- FAQs come only from the original repo's faqs.html, verbatim, in `lib/faqs.tsx` (12 questions, including its Mindbody cancel steps). Never add questions. Use `FaqAccordion` (native `<details>`) for any FAQ or policy list.
- `components/sections/WaiverText.tsx` is legal text copied verbatim. Don't edit it. The waiver page must have **no** form controls (B6): the original repo's signature form was never configured (EmailJS placeholders) and is not ported. Keep the `#complete-waiver` id.
- Athletic Development is shown as "Coming Soon" (a fourth unlinked row in `ProgramIndex` and a section on `/programs`) but has no route or nav entry. Hall of Fame (`/hall-of-fame`, data in `lib/hall-of-fame.ts`) is in the main nav: the client confirmed the records on 2026-10-12. It stays noindex and out of the sitemap until `flags.hallOfFameIndexable` is set on publication approval (player consent, CONTENT_NEEDED I11).
- `/privacy` and `/terms` (built with `LegalDocument`) are published without draft markers but are still pending owner and attorney approval (CONTENT_NEEDED B9). Their claims about this site (no cookies, tracking or forms; the Google Maps embed on `/contact` is the only third-party content) must stay true: adding analytics, another embed or any form means updating the Privacy Policy first. Never restate program policies there; link to `/memberships#policies` and `/faqs`. Don't add unconfirmed practices (retention, sharing, sale of data).
- No visible placeholder markers: the `Placeholder` component was removed (2026-10-19). Record missing client content in CONTENT_NEEDED.md instead, and omit it from the page until it's supplied.

## Workflow

- The user runs this rebuild in tightly scoped phases. Stay inside the phase you were asked for.
- Don't commit, push or deploy unless asked.
- Verify UI changes in a real browser at 320, 390, 768 and 1440px (overflow, console, keyboard, axe).
