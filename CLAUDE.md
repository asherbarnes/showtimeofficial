# Showtime Basketball Academy — project instructions

@AGENTS.md

Agency standards live in `~/webdesign/CLAUDE.md` and still apply. This file covers only what is specific to this project.

## Read before working

- `PRODUCT.md`: **the only source for business facts.** Respect its VERIFIED / CONFLICTING / UNVERIFIED labels.
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
- Enrollment content is in `lib/enrollment.ts`: `startSteps` (universal 3 steps: Home, Get Started), `academySteps` (official 5 steps: Academy, Get Started) and `freeSessionOffer`. The free session is verified only for **small-group sessions**; never extend it to Individual Training or name a program it covers (B1). leadership bios are in `lib/images.ts` (`leadership[].summary`).
- Pending decisions are switched in `lib/flags.ts` (`showPricing`, `showLeadStandards`, `hallOfFameIndexable`).
- Indexing is off unless `SITE_URL` and `ALLOW_INDEXING=true` are set (`lib/metadata.ts`). Never hard-code a domain.

## Design-system conventions

- Only the colours in `app/globals.css` exist (Tailwind's defaults are reset). **Amber is a fill under black text, or text on dark. Never white on amber, never amber text on light** (use `amber-700`).
- Headings: `type-display-xl` (home H1 only), `type-display-lg` (inner H1), `type-h2` (Anton); `type-h3`/`type-h4`/`type-label` (Figtree). Anton is never below 28px. One H1 per page.
- Wrap page sections in `<Section surface=…>`. It sets `data-surface`, which drives focus-ring colour; don't hand-pick contrast pairs.
- Use `<Button href surface variant>` for every CTA. External `https://` links automatically open in a new tab with an icon and screen-reader text.
- Corners: `rounded-sm` (2px) or none. No shadows except the dropdown. No icon-card grids, gradients, emoji icons or scroll animations.
- Images: add them to `lib/images.ts` with `rightsConfirmed`/`minorsConsent` set to `false`. Pre-compress to WebP. Never name minors in alt text.

## Content rules (non-negotiable)

- Never publish UNVERIFIED items: mission paragraph, phone, email, hours, testimonials, "Premier", NBA "trained alongside", anything about Select/AAU, Academy "tiers".
- Conflicting facts use CONTENT_NEEDED's interim wording (e.g. Academy experience is "Confirmed at evaluation").
- Prospects never see Minos membership purchase links (B2). The one exception is the "Already accepted into a program?" block on `/memberships`. The primary CTA is "Get Started" → `/get-started` (`primaryCta`). Never use "Book a Free Session" as a button label: the free offer is stated in text only, scoped to small-group sessions (B1).
- Prices come only from `lib/memberships.ts`. A price set to `null` is conflicting and must not render. Never use Wix `/pricing-plans/list` or Mindbody as a price source (PRODUCT 6.2–6.3).
- FAQs come only from the official FAQ page (PRODUCT 6.5), verbatim, in `lib/faqs.tsx`. Never add questions. Never publish Mindbody click-paths. Use `FaqAccordion` (native `<details>`) for any FAQ or policy list.
- `components/sections/WaiverText.tsx` is legal text copied verbatim. Don't edit it. The waiver page must have **no** form controls (B6). Keep the `#complete-waiver` id.
- Athletic Development stays out of routes and navigation until the client confirms it. Hall of Fame (`/hall-of-fame`, data in `lib/hall-of-fame.ts`) is in the main nav: the client confirmed the records on 2026-10-12. It stays noindex and out of the sitemap until `flags.hallOfFameIndexable` is set on publication approval (player consent, CONTENT_NEEDED I11).
- `/privacy` and `/terms` (built with `LegalDocument`) are published without draft markers but are still pending owner and attorney approval (CONTENT_NEEDED B9). Their claims about this site ("no cookies, no tracking, no forms") must stay true: adding analytics, embeds or any form means updating the Privacy Policy first. Never restate program policies there; link to `/memberships#policies` and `/faqs`. Don't add unconfirmed practices (retention, sharing, sale of data).
- Missing client content uses `<Placeholder>`. Every one must be gone before launch.

## Workflow

- The user runs this rebuild in tightly scoped phases. Stay inside the phase you were asked for.
- Don't commit, push or deploy unless asked.
- Verify UI changes in a real browser at 320, 390, 768 and 1440px (overflow, console, keyboard, axe).
