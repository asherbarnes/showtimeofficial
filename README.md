# Showtime Basketball Academy — Next.js rebuild

The replacement website for Showtime Basketball Academy, a youth basketball development academy in San Jose, CA. This repository is independent of the original static site ([asherbarnes/Showtimebasketball](https://github.com/asherbarnes/Showtimebasketball)), which stays unchanged for reference. The live official site is still on Wix.

**Status:** the technical foundation is built (Phase 4): design system, shared layout and navigation, all core routes with concise verified content, and SEO plumbing. Pages are not fully designed yet. Nothing is deployed.

## Stack

- Next.js 16 (App Router, Turbopack, `cacheComponents` on), React 19, TypeScript (strict)
- Tailwind CSS v4 (CSS-first tokens in `app/globals.css`, no config file)
- ESLint (`eslint-config-next`)
- npm
- No CMS, database, auth, UI kit or animation library. Content is typed data in `lib/`.

## Requirements

- Node.js 20.9 or later (developed on Node 24)
- npm 10 or later

## Commands

```bash
npm install        # install dependencies
npm run dev        # dev server at http://localhost:3000
npm run lint       # ESLint
npm run build      # production build (all routes prerender as static)
npm run start      # serve the production build
```

## Project structure

```
app/                     Routes (App Router)
  layout.tsx             Root layout: fonts, skip link, header, footer, default metadata
  globals.css            Design tokens and type utilities ("Court Lines", DESIGN.md)
  page.tsx               Home
  programs/              Overview + academy/, fundamentalists/, individual-training/
  get-started/ memberships/ about/ events/ faqs/ contact/ members/ waiver/
  not-found.tsx          404
  sitemap.ts robots.ts   SEO (driven by environment variables, see below)
  icon.png apple-icon.png
components/
  layout/                SiteHeader, DesktopNav (client), MobileNav (client), SiteFooter, Logo
  ui/                    Button, Container, Section, PageHero, Notice/Placeholder, icons
  sections/              ProgramIndex, CtaBand, NumberedList, WaiverText, FaqAccordion
lib/
  site.ts                Business facts, Minos/external URLs, navigation config
  programs.ts            Program data
  memberships.ts         Tiers and prices (rendered only when flags.showPricing is true)
  events.ts              Upcoming and past events
  faqs.tsx               Official FAQs (verbatim from the Wix FAQ page) and their grouping
  images.ts              Image manifest (dimensions, alt, focal point, rights flags)
  flags.ts               Content flags for pending client decisions
  metadata.ts            Per-page metadata helper and indexing switches
public/images/           Brand, photos and coach headshots (WebP)
docs/                    Redirect requirements and asset approvals
PRODUCT.md DESIGN.md CONTENT_NEEDED.md research/   Planning documents (see below)
```

## Environment variables

See `.env.example`. Both are optional.

| Variable | Effect |
| --- | --- |
| `SITE_URL` | Canonical origin. Enables `metadataBase`, canonical URLs and the sitemap. **The production domain is not decided**, so leave it unset. |
| `ALLOW_INDEXING` | `true` allows crawling. Anything else outputs `robots.txt` `Disallow: /` plus a `noindex` meta tag. It only takes effect when `SITE_URL` is also set. |

## Deployment considerations

- **Hosting is not chosen** (CONTENT_NEEDED B7). Nothing is configured for any host, including GitHub Pages.
- Every route currently prerenders as static. If a static-only host is chosen, add `output: "export"` and `images: { unoptimized: true }` to `next.config.ts`; the images are already pre-compressed WebP.
- On a server-capable host, legacy URLs should get real 301s; see `docs/redirects.md`.
- Before launch: set `SITE_URL`, set `ALLOW_INDEXING=true` for production only, re-verify every Minos URL in `lib/site.ts`, and remove every `Placeholder` marker.

## Known limitations

- Pages are the foundation only. The homepage and other page compositions (DESIGN.md section 12) come next.
- Placeholder markers (dashed red boxes) mark content waiting on the client (currently the member instructions on `/members`). They must not ship.
- Two official FAQ answers ("How do I cancel a session?", "How do I purchase a drop-in?") show interim text until the client supplies Minos steps (CONTENT_NEEDED B3).
- Prices show only where official sources agree (verified 2026-10-10, PRODUCT.md section 6). The Fundamentalists drop-in and everything only on Wix `/pricing-plans/list` are withheld pending the client (B5). Re-verify prices before launch.
- All photos are placeholders pending rights and minors' consent (`docs/assets.md`). The logo is raster only.
- Hall of Fame is in the nav but noindex until publication approval (`flags.hallOfFameIndexable`). No Athletic Development page, JSON-LD, OG image, sticky mobile CTA bar or legacy redirects yet.
- The waiver page shows the legal text and interim instructions only. It collects nothing by design (B6).

## Planning documents

| File | Role |
| --- | --- |
| `PRODUCT.md` | Factual source of truth (business facts, programs, journeys) |
| `DESIGN.md` | Visual design specification ("Court Lines") |
| `CONTENT_NEEDED.md` | Open client decisions (B = blocking, I = important, O = optional) |
| `research/migration-requirements.md` | Content, functionality and URL requirements |
| `research/site-audit.md` | Phase 1 audit of the original site |

These were copied byte-for-byte from the original project, where they were never committed, so there is no earlier Git history to carry over. Their verification notes and source references are intact. Keep them up to date here.
