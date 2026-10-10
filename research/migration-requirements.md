# Next.js Migration Requirements — Showtime Basketball Academy

> Requirements the Next.js rebuild must meet. **Planning only; nothing here has been implemented.**
> **Stack (final):** Next.js App Router · TypeScript · Tailwind CSS.
> **Inputs:** [`PRODUCT.md`](../PRODUCT.md) (facts), [`CONTENT_NEEDED.md`](../CONTENT_NEEDED.md) (decisions), [`site-audit.md`](site-audit.md) (defects to avoid repeating).
> _2026-10-10._

---

## 1. Hosting constraints

The current host is **GitHub Pages**, serving the repo root (`.nojekyll`). The project URL is `https://asherbarnes.github.io/Showtimebasketball/`. There is no `CNAME`, so it is not on the production domain.

**No new host is chosen here; that needs client approval (CONTENT_NEEDED B7).** Build so the site works on GitHub Pages:

| Requirement | Detail |
|---|---|
| Static export | `output: 'export'` in `next.config`. All pages are prerendered at build time. |
| Not available | `redirects()`, `rewrites()` and `headers()` in `next.config`; Middleware; Route Handlers that need a request; Server Actions; ISR/`revalidate`; runtime `cookies()`/`headers()`; `next/image` default optimization; dynamic routes without `generateStaticParams` (set `dynamicParams = false`) |
| Images | `images: { unoptimized: true }`. Pre-optimise images in the repo instead: resized WebP/AVIF plus explicit `width`/`height`. No request-time optimisation exists. |
| Metadata files | `app/sitemap.ts`, `app/robots.ts` and static OG images are fine; they are generated at build time. |
| `basePath` | Required (`/Showtimebasketball`) **only** while serving from the project URL. Remove it when a custom domain is attached through `public/CNAME`. Keep internal links on `next/link` so `basePath` is applied automatically. |
| `trailingSlash` | **Keep `false`.** Export then emits `about.html`, `programs.html`, etc., which matches the current repo URLs. GitHub Pages also serves `/about` for `about.html`. This preserves every existing GitHub Pages URL without redirects (see 4.2). |
| `.nojekyll` | **Must ship in the export** (`public/.nojekyll`). Without it, Jekyll ignores the `_next/` folder and every asset 404s. |
| 404 | `app/not-found.tsx` exports `404.html`, which GitHub Pages serves automatically. |
| Deploy | Build `out/` and publish it. This probably means switching Pages to a GitHub Actions workflow. **Confirm with the repo owner before changing Pages settings.** |
| Staging indexing | A project URL on `github.io` is publicly indexable. Until launch, add a `robots` noindex driven by an environment flag, and canonicalise to the final domain. |

### Features that need something beyond static hosting

None of these require a database or CMS.

| Feature | Static site alone? | Needs |
|---|---|---|
| Waiver signing and storage | **No** | An approved **external** waiver or e-sign service, or Minos Rec if it supports waivers (B6). The site only links or embeds. |
| Individual Training inquiry (the Wix form is lost) | No | Use the Minos general inquiry or direct Minos booking (I5), or an approved external form service |
| Event RSVPs (Wix Events is lost) | No | Minos session/event, or an external RSVP tool per event |
| True HTTP 301 redirects for Wix URLs | No | A server-capable host or a DNS/CDN rule layer. On GitHub Pages, use redirect stubs (section 4.3). |
| Contact form | No | Not recommended; use the Minos inquiry form, which already exists |
| Analytics | Client-side script only | A privacy notice may be required (O4) |
| Athletic Development "notify me" | No | Minos inquiry until it launches |
| Events and pricing updates | **Yes** | Typed data files in the repo, edited and redeployed. No CMS needed at this volume. |

---

## 2. Content that must survive the migration

All of these come from `PRODUCT.md`. The status labels apply.

1. **Positioning** (PRODUCT section 3.1): development-first, "not AAU-first", "foundation before exposure", small-group, "Your first session is free".
2. **Programs** (section 5): Academy, Fundamentalists and Individual Training descriptions, KPIs and skills lists, experience requirements (with C1 flagged), and the coach levels and prices for Individual Training. Athletic Development appears only as "coming soon". Select is **not** published.
3. **Membership tiers, drop-ins and policies** (section 6). Policy text stays **verbatim** until the client changes it. Pricing sits behind the publish decision (B5).
4. **Enrollment process** (section 7.1): the 5 evaluation steps and criteria, as **HTML text**, not an image.
5. **L.E.A.D. standards** (provisional, I1).
6. **Leadership and coach roster** (section 8): official titles; omit unverified claims (U5).
7. **Location**: The Grove, 2099 S 10th St, Unit 90, San Jose, CA 95112, with a correct Maps link.
8. **Past events** (section 10), as structured data.
9. **Waiver** (section 3 below).
10. **Hall of Fame** content and restrictions (section 3 below).

**Do not migrate as fact:**
- the repo "Our Mission" paragraph (U1)
- testimonials (U3)
- the phone number (U2)
- the repo hours
- the repo-only FAQs (I16)
- "Premier" superlatives (U4)
- H.E.L.D. (I1)
- Mindbody click-paths (B3)
- `scripts/waiver-form.js` and EmailJS
- placeholder SVGs
- Instagram embeds as primary media

### Registration destinations (verified 2026-10-10)

Keep all external URLs in **one constants module** so a platform change is a single edit.

| Key | URL | Used for |
|---|---|---|
| `inquiry` | `https://minosrec.com/showtime-basketball-academy/general-inquiry` | Free session, Academy evaluation, general and waiver questions |
| `minosHome` | `https://minosrec.com/showtime-basketball-academy/home` | Member portal entry |
| `sessions` | `https://minosrec.com/showtime-basketball-academy/sessions` | Members: book, drop-in, login |
| `memberships` | `https://minosrec.com/showtime-basketball-academy/memberships` | Member-facing only (B2) |
| `academyClass` | `https://minosrec.com/showtime-basketball-academy/group-lesson/lesson/100` | Academy schedule |
| `fundamentalsClass` | `https://minosrec.com/showtime-basketball-academy/group-lesson/lesson/98` | Fundamentalists schedule |
| `itAcademyCoach` | `https://minosrec.com/showtime-basketball-academy/lesson/99` | 1:1, $80 |
| `itMasterCoach` | `https://minosrec.com/showtime-basketball-academy/lesson/101` | 1:1, $100 |
| `grove` | `https://www.thegrove.work/` | Facility |
| `maps` | `https://maps.google.com/?q=2099%20S%2010th%20St%2C%20San%20Jose%2C%20CA%2095112` | Directions; replaces `share.google/iwF509Id1Iis388Qe` |
| `instagram` | `https://www.instagram.com/showtimebasketball/` | Social |
| `tiktok` | `https://www.tiktok.com/@showtimeba` | Social |
| `youtube` | `https://www.youtube.com/@Showtimebasketballacademy` | Social, pending confirmation (O3) |

The Minos URLs contain lesson IDs (98–101). These can change when Showtime edits its catalogue. **Re-verify them before launch** and keep them in the constants module.

---

## 3. Features with restrictions

### Waiver (`/waiver`): must survive with the P0 behaviour
- Keep the full legal text **unchanged**, including the "Providers" definition and the §6910 and §1542 references.
- Keep the statement that the waiver is required before training.
- Keep the interim block "How to Complete the Waiver" at `#complete-waiver`, with the inquiry CTA, placed **above** the legal text.
- **No form fields, signature capture, client-side storage or email-sending scripts** until B6 is resolved.
- When a solution is approved, integrate it by link or embed only, and document it.

### Hall of Fame (`/hall-of-fame`)
- Not in the nav, footer or `sitemap.ts`. Use `robots: { index: false }`.
- Render only the 5 existing entries (unverified) or, later, verified and consented entries. **Never add players, statistics or awards without confirmation.**
- Build it inside the shared layout so it has normal navigation. That removes the current page's separate design system.
- Use real table semantics: no `display: flex` on `<td>`, a scrollable wrapper on narrow screens, and no clipped columns.
- Store entries as a data array. Relisting means removing `noindex`, adding the nav entry and adding the route to the sitemap.

---

## 4. URL mapping and redirects

### 4.1 Proposed routes

| Route | Exported file (`trailingSlash: false`) |
|---|---|
| `/` | `index.html` |
| `/programs` | `programs.html` |
| `/programs/academy` | `programs/academy.html` |
| `/programs/fundamentalists` | `programs/fundamentalists.html` |
| `/programs/individual-training` | `programs/individual-training.html` |
| `/get-started` | `get-started.html` |
| `/memberships` | `memberships.html` |
| `/about` | `about.html` |
| `/faqs` | `faqs.html` |
| `/waiver` | `waiver.html` |
| `/contact` | `contact.html` |
| `/events` | `events.html` |
| `/members` | `members.html` (or a section in `/faqs`) |
| `/hall-of-fame` | `hall-of-fame.html` (noindex) |
| Not found | `404.html` |

`/programs/athletic-development` is **deferred**.

### 4.2 Current GitHub Pages (repo) URLs

| Old | New | Handling |
|---|---|---|
| `/index.html` | `/` | Same file. No action. |
| `/about.html` | `/about` | Same file name. No action. |
| `/programs.html` | `/programs` | Same file. Hash links (`#academy`, `#fundamentalists`, `#individual`, `#athletic`) need a small **client-side hash handler** on `/programs` that sends them to the new sub-pages. Servers never see hashes. |
| `/memberships.html` (`#how-to-become-a-member`, `#waiver`, `#pricing`) | `/memberships`; how-to moves to `/get-started` | Keep an `id="how-to-become-a-member"` section on `/memberships` that links to `/get-started`, or handle it with the hash handler |
| `/waiver.html` (`#complete-waiver`) | `/waiver` | Same file. **Keep the `complete-waiver` id.** The old `#waiver-sign-title` is gone and harmless. |
| `/events.html`, `/faqs.html`, `/contact.html`, `/hall-of-fame.html` | Same names | No action |
| `/assets/img/*`, `/images/showtime-logo.png` | `/images/...` (new) | Not linked externally; no stubs needed. Check that nothing external hotlinks them. |

### 4.3 Wix URLs (production domain, indexed)

These need redirect **stubs** on GitHub Pages, or real 301s on a server-capable host.

| Wix URL | New | Notes |
|---|---|---|
| `/` | `/` | No action |
| `/aboutus` | `/about` | Stub |
| `/academy` | `/programs/academy` | Stub |
| `/fundamentalists` | `/programs/fundamentalists` | Stub |
| `/individualtraining` | `/programs/individual-training` | Stub |
| `/individualtraininginquiries` | `/programs/individual-training` (booking section) | Stub. The **form is lost**; see I5. |
| `/athleticdevelopment`, `/coming-soon-01` | `/programs` | Stub |
| `/memberships` | `/memberships` | Same path. On GitHub Pages `memberships.html` serves `/memberships`. |
| `/how-to` | `/get-started` | Stub |
| `/waiver` | `/waiver` | Same path |
| `/event-list` | `/events` | Stub |
| `/event-details/playmakers-clinic-2025-03-01-13-00` | `/events` | Stub |
| `/event-details/showtime-basketball-x-cys-elevate-your-game` | `/events` | Stub |
| `/showtime-faqs` | `/faqs` | Stub |
| `/paywall`, `/pricing-plans/do-not-go-here` | none | Let them 404; they are Wix artefacts |

**Stub mechanism (static-export-safe):**
- Keep a typed `legacyRedirects` map.
- Add a root dynamic route, e.g. `app/[legacy]/page.tsx` with `generateStaticParams()` from the map and `dynamicParams = false`.
- Event detail paths need a nested route such as `app/event-details/[slug]`.
- Each stub renders:
  - `<meta httpEquiv="refresh" content="0; url=…">` rendered in the page component (React hoists `<meta>` into `<head>`; the Metadata API's `other` field can't emit `http-equiv`)
  - `<link rel="canonical">` to the target
  - `robots` noindex
  - a visible fallback link
- Static routes take precedence, so the map can't shadow real pages.
- This is the most a static host can do. Google treats an instant meta refresh much like a permanent redirect, but a real 301 is still better if the client approves a host that supports it.

### 4.4 Redirect and domain risks

1. **No 301s on GitHub Pages.** Stubs keep users safe, and SEO equity transfers less reliably than with 301s.
2. **DNS cutover from Wix.** The Wix-only forms (waiver, IT inquiry) and Wix Events stop working. **Both need replacements decided before cutover** (B6, I5, O2).
3. **www vs apex domain.** Wix serves `www.showtimebasketballacademy.com`. Pick one canonical host and set `metadataBase` to it. GitHub Pages handles the www↔apex redirect when the DNS is configured correctly.
4. **`basePath` switch.** Links hard-coded with `/Showtimebasketball/` break when the custom domain is attached. Use `next/link` and relative asset helpers only.
5. **Old Google results for Wix URLs.** Submit the new `sitemap.xml` in Search Console (needs client access, O6) after cutover.

---

## 5. Imagery and branding

- Migrate the useful photos and the 11 headshots (PRODUCT section 12.4) to `public/images/`. Pre-generate 2–3 widths as WebP or AVIF, and record intrinsic dimensions in a typed image manifest. Correct the alt text (the current hero alt is wrong).
- Don't migrate the placeholder SVGs or the duplicate logo.
- The logo is a 278×290 raster. Request a **vector**. Generate the favicon, Apple touch icon and OG image from it.
- Treat all photos as **placeholders pending rights and consent** (I8). Flag photos that are probably from other venues.
- Visual identity (palette, type, logo treatment) is decided in **Phase 3 (DESIGN.md)**. Don't carry the repo's palette over by default.

---

## 6. Accessibility requirements (WCAG 2.2 AA)

These are acceptance criteria that fix the audit findings:
- One `<h1>` per page; logical headings; landmarks (`header`, `nav`, `main`, `footer`); a skip link.
- The mobile nav is **removed from the tab order when closed** (`inert` or conditional render). Focus moves into it on open, and Escape closes it.
- Text contrast is at least 4.5:1, including button labels and small eyebrow text, and non-text contrast is at least 3:1. The audit failures (white on #E85D04 at 3.5:1; orange eyebrows at 2.9:1) must not recur.
- No horizontal overflow at 320, 390, 768 or 1440 px. Tables scroll inside a wrapper.
- Tap targets are at least 24×24 px (44 preferred for primary actions). Visible `:focus-visible` everywhere.
- `prefers-reduced-motion` respected. No meaning conveyed by motion or colour alone.
- External links that open new tabs say so (visually-hidden text).
- Accordion FAQs use native `<details>`/`<summary>`, or buttons with `aria-expanded`/`aria-controls`.
- Process steps (enrollment) are real text, never images.

---

## 7. SEO requirements

- A unique `title` and `description` per page via the Metadata API. Set `metadataBase` to the final canonical domain; canonical on every page.
- Open Graph and Twitter metadata, with a default OG image.
- `app/sitemap.ts` lists the core and secondary routes only (not Hall of Fame, legacy stubs or `/members` if it is utility-only). `app/robots.ts` uses noindex on staging.
- JSON-LD `SportsActivityLocation` (or `LocalBusiness`) with **verified fields only**: name, address, URL, `sameAs` socials. **Omit telephone, hours and price** until B8 and B5 are confirmed. No ratings or reviews.
- Program pages target local intent naturally, e.g. "Academy | Youth Basketball Training in San Jose".
- Fix the mojibake. The source files must be UTF-8 with no `?` substitutions.

---

## 8. Implementation priorities

### Must be decided before the related build work ships
- **B1** (free session vs evaluation) and **B2** (purchase eligibility): these set the CTA and `/get-started` content. Build with neutral interim copy and swap it in later.
- **B7** (hosting and domain): needed before configuring the deploy, `basePath` and redirects. Build as a static export regardless.
- **Phase 3 DESIGN.md**: needed before visual implementation.

### Can proceed while decisions are pending
- Scaffold: Next.js, TypeScript and Tailwind with the static-export config, `.nojekyll`, `not-found`, lint and type-check.
- Shared layout: header, nav, mobile drawer, footer, and a single nav config. **This removes the 8× duplicated chrome.**
- Typed data modules: `site.ts` (address, socials, external URLs), `programs.ts`, `memberships.ts` (with a `showPricing` flag), `coaches.ts`, `events.ts`, `faqs.ts`, `hallOfFame.ts`, `legacyRedirects.ts`. Mark unverified fields explicitly, e.g. `verified: false`.
- Page templates with `[PLACEHOLDER — CLIENT INPUT NEEDED]` for unresolved items.
- Waiver page port (P0 behaviour) and the Hall of Fame port (unlisted).
- Legacy redirect stubs and the programs hash handler.
- The image pipeline and manifest.

### Recommended order
1. Scaffold, static-export config, shared layout and nav, and the data modules (correct business information first).
2. Get Started, Home and the program pages (the enrollment journeys).
3. Memberships, FAQs, About, Contact and Waiver.
4. Events, Members and the Hall of Fame port.
5. Legacy redirects, SEO metadata, sitemap and robots, JSON-LD.
6. Accessibility, responsive and performance QA at 320/390/768/1440; link check of every Minos URL.

**Avoid:** a CMS, a database, auth, server features, or third-party UI kits without a concrete need.

---

## 9. Migration acceptance checklist

- [ ] Every page in the route table exists in the export. `404.html` and `.nojekyll` are present.
- [ ] All Minos and external URLs come from the constants module and return 200 at launch.
- [ ] No "Book Memberships" CTA on first-visit surfaces (unless the client confirms otherwise per B2).
- [ ] The waiver page has its unchanged legal text, the interim instructions at `#complete-waiver`, and **zero** form controls or signature/email scripts.
- [ ] Hall of Fame is noindex, absent from the nav and sitemap, and shows only the existing or verified entries.
- [ ] No UNVERIFIED claim from PRODUCT.md section 14 is published as fact.
- [ ] All legacy GitHub Pages and Wix URLs in section 4 resolve to the right page.
- [ ] The accessibility and SEO criteria in sections 6 and 7 pass.
