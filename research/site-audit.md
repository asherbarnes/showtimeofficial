# Showtime Basketball Academy — Initial Site Audit

**Date:** 2026-10-10 · **Scope:** Audit only. No application code was changed.
**Repo:** `asherbarnes/Showtimebasketball` @ `3bfcb18` (single "Initial commit")
**Live repo build (staging):** https://asherbarnes.github.io/Showtimebasketball/ (public, HTTP 200)
**Official site (reference):** https://www.showtimebasketballacademy.com/ (Wix)

**Evidence:** Screenshots are in `research/screenshots/`. Unless noted, findings were checked in Chromium through playwright-cli against a local `python3 -m http.server` at 320, 390, 768 and 1440 px.

**Standards applied:** The agency `CLAUDE.md` is **empty (0 bytes)**. The standards are in `../../CLAUDE.md.save` (WCAG 2.2 AA, no fabricated business facts, forms must not silently fail, and so on), so this audit uses those. Someone should restore `CLAUDE.md` so future sessions load it.

---

## 1. Executive summary

The repository is a hand-built static HTML/CSS/JS site that is a reasonable starting point. It has:
- a consistent editorial visual system
- accessible basics (a skip link, `:focus-visible`, reduced-motion support, a keyboard-operable FAQ)
- coach and program content taken mostly faithfully from the official site

It is **not launch-ready**. Five things matter most:

1. **The waiver form cannot be submitted.** Families are told the waiver is *required*. Submitting it shows a developer message: *"Email delivery is not configured yet. Add your EmailJS credentials in scripts/waiver-form.js…"*. The page is publicly reachable on GitHub Pages today. **(P0)**
2. **The Hall of Fame page is a dead end with visible placeholders.** It is linked from the primary navigation on every page, but it has no site header, nav or footer. It shows an "Add player name" row and the line *"Duplicate a `<tr>` in the table body to add more inductees."* **(P0)**
3. **The enrollment journey contradicts itself.** The site says acceptance after an evaluation is required before buying. Yet "Book Memberships" is one of three equal hero buttons and appears about 23 times across the site. It goes to a Minos Rec page with open "Purchase" buttons. "Get Your Free Session" goes to a generic inquiry form that never mentions a free session. **(P1)**
4. **Facts conflict across sources and need the client to confirm them:**
   - Academy experience: 2.5+ years vs 3+ years
   - Program values: L.E.A.D. vs H.E.L.D.
   - Booking system: Mindbody vs Minos Rec
   - Drop-in prices: $55 vs $60
   - A "Select" program that the site never mentions
   - Pricing: public on the official site and on Minos Rec, but deliberately hidden in the repo
   **(P1)**
5. **Mobile and accessibility defects:**
   - Event and Contact text is clipped off-screen at 320 px.
   - The hidden mobile drawer stays in the keyboard tab order on every viewport.
   - Primary buttons (3.5:1) and orange eyebrow text (2.9:1) fail contrast.
   - One button is effectively invisible on a light background.
   **(P1)**

Several gaps are cheap to fix and matter for launch: SEO basics (no canonical, OG image, favicon, sitemap, robots, structured data or 404 page), about 3.2 MB of PNG images with wrong declared dimensions, and header/footer markup copied into eight files that has already drifted. A URL migration plan from the Wix slugs is also needed. **(P2)**

The brand foundation is worth keeping and sharpening, not replacing. That means the "It's Showtime" name and attitude, the S badge, black backgrounds, condensed uppercase display type, "Foundation Before Exposure", and real athlete photography. The repo has drifted from Showtime's amber/gold to a burnt orange plus cream palette. Phase 3 should decide that deliberately.

---

## 2. Technology stack

| Area | Finding |
|---|---|
| Framework | None. 9 hand-written static `.html` pages with no templating or includes. |
| Styling | 3 global CSS files: `styles/tokens.css` (113 lines of custom properties), `components.css` (1,534), `main.css` (1,592). Mobile-first `min-width` media queries, desktop nav at ≥1024 px. `hall-of-fame.html` uses its own inline `<style>` and a separate design. |
| JS | `scripts/main.js` (vanilla IIFE: mobile drawer, desktop dropdown, FAQ accordion, IntersectionObserver reveal). `scripts/waiver-form.js` (signature_pad plus EmailJS). An inline Instagram embed loader on `programs.html`. |
| Fonts | Google Fonts loaded through a CSS `@import` in `tokens.css`: Barlow Condensed 600/700/800 and Figtree 400–700 plus italic 400. Hall of Fame loads Anton and Oswald separately. |
| Third-party | `signature_pad@5.0.4` and `@emailjs/browser@4` (unpinned major version, no SRI) from jsDelivr; Instagram `embed.js`; Google Maps iframe. |
| Package / build | No `package.json`, build, lint, tests, CI, README or project `CLAUDE.md`. |
| Deployment | `.nojekyll` and a public GitHub Pages URL return 200. No `CNAME`, so it is not on the production domain. No `robots.txt`, `sitemap.xml` or `404.html`. |
| Dev command | None documented. Any static server works, e.g. `python3 -m http.server`. |
| External services | **Minos Rec** (inquiry, memberships, sessions, booking home), **Mindbody** (still referenced in FAQ), EmailJS (unconfigured), thegrove.work, Google share link, Instagram, YouTube, TikTok. |

**Checks run:** There is no project tooling, so I ran no lint, build or tests and installed nothing. I did run:
- a link status sweep with curl
- a responsive and console sweep (9 pages × 4 widths)
- keyboard probes
- a waiver submit with dummy data (nothing could send, because the credentials are placeholders)
- contrast calculations
- image dimension checks with `sips`

Console output was clean apart from a missing `/favicon.ico` (404) and Instagram's own Permissions-Policy warnings.

---

## 3. Current site architecture

**Pages:** `index`, `about`, `programs`, `memberships`, `waiver`, `events`, `faqs`, `contact`, `hall-of-fame`.

**Primary navigation:**
- Desktop: About · Programs · Memberships ▾ (Overview / How to Become a Member / Waiver) · Events · Hall of Fame · FAQs · Contact · **Get Your Free Session**
- Mobile: a slide-out drawer with the same items.

**URL mapping vs the official Wix site** (inbound links and SEO equity are at stake):

| Wix URL | Repo equivalent |
|---|---|
| `/aboutus` | `about.html` |
| `/academy`, `/fundamentalists`, `/individualtraining` | `programs.html#academy` / `#fundamentalists` / `#individual` (merged into one page) |
| `/coming-soon-01` (Athletic Dev.) | `programs.html#athletic` |
| `/memberships`, `/how-to` | `memberships.html`, `memberships.html#how-to-become-a-member` |
| `/waiver` | `waiver.html` |
| `/event-list` | `events.html` |
| `/showtime-faqs` | `faqs.html` |
| `/individualtraininginquiries` (Wix form) | none; routed to the Minos general inquiry |
| none | `contact.html`, `hall-of-fame.html` (new) |

**Duplication:**
- Header, drawer and footer are copied by hand into 8 pages. They have already drifted: the footers on `memberships.html` and `waiver.html` drop Events and FAQs.
- The mission paragraph appears 3 times on the homepage, once in every footer, and again in a "mission bar" on 6 inner pages.

**Assets:**
- `assets/img/`: 15 photos, 11 coach headshots, the logo and 9 unused-looking placeholder SVGs.
- `images/showtime-logo.png` duplicates `assets/img/logo-showtime.png` and is used only by the Hall of Fame page.
- `photo-grove-court.png` and `photo-grove-session.png` show The Grove's branding, a separate business. Usage rights need confirming.

---

## 4. Reference-site comparison

### 4.1 Business facts with sources

| Claim | Official site (URL) | Minos Rec | Repo | Status |
|---|---|---|---|---|
| Academy experience | **2.5+ yrs** (`/` services card); **3+ yrs, on a club or school team** (`/academy`) | **3+ yrs, currently competing on a club/school team** (`minosrec.com/showtime-basketball-academy/memberships`) | 2.5+ (home, badges, facts); "roughly 2.5?3+" (programs body, with mojibake) | **Conflict, confirm.** The booking system and the program page both say 3+. |
| Fundamentalists experience | ≥1 yr (`/fundamentalists`) | ≥1 yr | ≥1 yr; "entry-level" | Consistent |
| Values | **L.E.A.D.** = Leadership, Effort, Attitude, Discipline (`/academy`, `/fundamentalists`, `/aboutus`) | none | L.E.A.D. on About and Programs; **H.E.L.D.** on Events | **Conflict.** H.E.L.D. (Hard Work, Energy, Leadership, Discipline) appears only in the Mar 2025 event recap on `/event-list`. Probably an older or event-specific framing; confirm. |
| Free session | "YOUR FIRST SESSION IS FREE! … Try one of our small group sessions" (`/`); referral FAQ: "one free trial session" that also lets staff "evaluate whether the athlete is a good fit" (`/showtime-faqs`) | Inquiry form has no mention of "free" | CTA label everywhere; body copy only on About and Contact | Present but **not reconciled** with evaluation (see 5.2) |
| Acceptance before purchase | "You must be accepted into the program before purchasing a membership." (`/memberships`); 5-step evaluation (`/showtime-faqs`) | Memberships page shows public **Purchase** buttons | States it, but CTAs undercut it | **Contradiction in practice** |
| Academy tiers | Basic $240 (1×/wk), **ESSENTIAL** $440 (2×), Plus $600 (3×); Drop-in $65, members only (`/memberships`) | Basic $240, **Essentials** $440, Plus $600 | No prices; defers to portal | Prices agree across sources; tier name spelling differs |
| Fundamentalist tiers | Basic $200, Essential $330, Plus $400; Drop-in **$55** (`/memberships`) | Same tiers; "Fundamentalists" group session **$60** (`/sessions`) | No prices | Drop-in price differs ($55 vs $60) |
| Individual training | 1-on-1 and small-group; own inquiry form (`/individualtraininginquiries`: athlete age, gender, experience, reason) | "Individual Training w/ Academy Coach **$80**", "w/ Master Coach **$100**" (`/sessions`) | No price; generic inquiry | Missing pricing and tier explanation |
| Athletic Development | `/coming-soon-01` is an untouched Wix template ("We Are Coming Soon", Wix's own Facebook/Twitter links) | none | "Coming Soon" badge | OK; confirm whether to show at all |
| Schedule | none on the Wix site | "Fundamentalists 5–6pm", "G - Silver 2 4–5pm" (`/sessions`) | FAQ: "Mondays through Thursdays and Saturdays"; Contact hours Mon–Thu 5–7:30pm, Sat 9–11:30am (HTML comment: "sourced from local business listings") | **Unverified**, confirm |
| Address | "heart of San Jose" only | "2099 S 10th St, San Jose, CA 95112" (no unit) | "2099 S 10th St, **Unit 90**, San Jose, CA 95112" | Confirm the unit and whether it is public |
| Phone | not listed | not listed | (408) 888-6739 | **Source unknown**, confirm |
| Email | FAQ says "Please email us" to cancel, but no email is published | none | No email; contact via inquiry | Gap |
| Booking system | Mindbody for **Purchase** (`studioid=5742717`) and for session cancellation | Full catalogue | Minos for all booking; FAQ still says Mindbody for cancellation | **Confirm the current system** |
| Est. | "© SHOWTIME BASKETBALL LLC \| EST. 2017" | none | Same | Consistent |
| Coaches | Derrick Nguyen (Founder & Director), Anthony Gardner (Co-Director), Kimo (Athletic Director) plus 8 coaches with titles (`/aboutus`) | none | Same roster and titles. Repo leaves out the Wix claim that Derrick "trained alongside Jayson Tatum, Joel Embiid, Zach LaVine, Tyrese Haliburton, and Tyrese Maxey". | Reasonably faithful; certifications are unverified |
| "Select" program | Not mentioned. Coach Jorge is "Head of Select Development". | Session "G - Silver 2" is unexplained | Not mentioned; but the Academy Instagram embed (`/p/DVhbzSeD7V_/`) shows a **"SELECT"** graphic | **Possible missing program**, confirm |
| Testimonials | none on the Wix site | none | 4 parent quotes on the homepage, labelled "Real reviews from families"; one is truncated ("push players…"); one author is "JustAmes V." | **Source unverified.** Possibly Google or Yelp. Confirm source and permission. |

### 4.2 Defects on the reference site worth knowing about

These are not inherited by the repo.
- The YouTube icon in every footer points to `youtube.com/user/Wix`. The repo correctly uses `@Showtimebasketballacademy`, which returns 200; still confirm it is the official channel.
- "INQUIRE HERE!" on `/memberships` and `/how-to` links back to the homepage.
- `/how-to` explains the steps in an image only ("1. Fill out (1).png"), which is inaccessible.
- Athletic Development links to an unedited Wix template.

### 4.3 Brand identity, reference vs repo

| Element | Reference (Wix) | Repo | Verdict |
|---|---|---|---|
| Logo | Circular "SHOWTIME · BASKETBALL" $-S badge, used large in header, hero and banner | Same badge, small in a square black tile (88 px source) with a "SHOWTIME / Basketball Academy" text lockup | Keep the badge. Give it more presence. Get a vector/SVG master. |
| Wordmark | Script "It's Showtime" over the hero photo | Condensed uppercase "IT'S SHOWTIME" | The script wordmark is a real brand asset; decide in Phase 3 |
| Display type | Anton (condensed, heavy) in amber and black | Barlow Condensed 800 | Same family of feeling. Anton is closer to the brand. |
| Body type | Avenir Light | Figtree | Fine either way |
| Accent | Amber/gold **#FFAC00** on black and white | Burnt orange **#E85D04** on cream #EFE9DF and charcoal | **Unapproved palette drift.** Hall of Fame uses gold #F0C419. Decide in Phase 3. |
| Buttons | Amber pills | Sharp 2 px rectangles; ghost outlines | The repo's sharp style is more distinctive, but CTA hierarchy is weak |
| Photography | Real Showtime sessions (ladder drills, shooting, kids in jerseys) | Real Showtime and Grove photos, mostly low-resolution | Keep real photography; get originals |

---

## 5. Business and conversion findings

### 5.1 Homepage value proposition
- **Strengths:**
  - The "It's Showtime" hero is confident.
  - "Development Before Exposure" and "not an AAU-first program… small groups of up to six" is the sharpest differentiator, and it is present.
  - Programs are listed with clear one-liners.
- **Weaknesses:**
  - The H1 is a brand slogan. The subhead "South Bay's Premier Training Program" is an unsupported superlative, inherited from Wix.
  - The real offer (a free first small-group session) is never stated in body copy on the homepage. The Wix homepage gives it a full band: "YOUR FIRST SESSION IS FREE!"
  - The hero body repeats the mission paragraph word for word, and it appears twice more lower on the page and again in the footer.
  - Who it's for (ages or grades), where (The Grove, San Jose) and what happens next are not answered above the fold.

### 5.2 Calls to action and the enrollment journey
I traced the journey from the homepage to each external destination. No forms were submitted.

| Path | Destination | Result |
|---|---|---|
| "Get Your Free Session" (about 43 links) | `minosrec.com/.../general-inquiry`. Returns 200. A 3-step form: Parent → Family → Details. | The form never mentions "free" or "evaluation". Parents get no confirmation that they reached the right place. |
| "Book Memberships" (about 23 links, including the **homepage hero**) | `minosrec.com/.../memberships`. Returns 200. 6 plans with **Purchase** buttons. | Contradicts "acceptance required". New families can hit a purchase wall, or buy without being evaluated. |
| "Book Sessions" (about 16) | `minosrec.com/.../sessions`. Returns 200. | Lists "G - Silver 2" ($65), Fundamentalists ($60), and individual sessions at $80/$100 with no explanation. Confusing for prospects. |
| "Book Online" (about 14) | `minosrec.com/.../home`. Returns 200. | A Minos landing page with its own inquiry form and court rentals. A fourth parallel entry point. |
| FAQ "How do I cancel a session?" | Mindbody `clients.mindbodyonline.com/classic/ws?studioid=5742717&stype=-98` | **Unverified.** Mindbody's bot protection returned 403 to automated browsers. If Minos Rec has replaced Mindbody, these instructions are wrong. |
| FAQ "How do I purchase a drop-in?" ("scroll to the bottom" of Minos memberships) | Minos memberships | **Incorrect.** There are no drop-ins on that page; they sit under Sessions. |
| "Get Directions" (13 links) | `share.google/iwF509Id1Iis388Qe` | Opens a **Google Search results page** carrying someone's personal search parameters (`rlz`, `sxsrf`), not Maps directions. |

**Core problem:** The site offers four parallel actions of equal weight (Free Session, Book Memberships, Book Sessions, Book Online) and never picks one. The homepage hero has three identical ghost buttons and no primary (`index.html:159-181`).

**Recommendation for Phase 5:**
- Make one primary path for new families: "Book a free intro session" → inquiry → evaluation → acceptance → membership.
- Make one secondary path for existing members: "Member login / book sessions".
- Remove "Book Memberships" from first-visit surfaces.
- Explain the four steps in plain language, with the free session clearly placed in them.

### 5.3 Program clarity
- Program descriptions are good and faithful.
- There is no **"Which program fits?"** guidance by age, grade or experience. Ages and grades are never stated.
- On mobile, the Academy and Fundamentalists sections both **open with an Instagram embed**. The first program CTA on `programs.html` sits at about 2,570 px on a 390 px viewport, roughly 3 screens down (screenshot: `programs-390-instagram.png`).
- Individual Training has no pricing and no dedicated inquiry form. Wix had both.

### 5.4 Membership and pricing clarity
- `memberships.html` has no plan names, frequencies or prices. It sends users to the portal four times ("Browse & Book Memberships", "Ready to enroll?", "Book Memberships", "Browse live plans").
- Prices are already public on both Wix and Minos. Hiding them adds a click and reads as evasive. This is a business decision for the client (see Q5).
- FAQ makeup credits refer to Basic, Essentials and Plus, but nothing on the site explains those tiers.

### 5.5 Trust and credibility
- **Good:**
  - Real coach headshots and bios.
  - Est. 2017.
  - A real facility.
  - Real past events.
  - Social links.
- **Missing or weak:**
  - Testimonials have no source. One is truncated and one carries an odd name.
  - No player outcomes beyond the broken Hall of Fame page.
  - Coach credentials are not linked to anything verifiable.
  - No safety, background-check or SafeSport statements, which matter to parents of minors.
  - No published email.
  - Events are stale; the last one was March 2025.

### 5.6 Mobile conversion
- Header CTA is hidden in the drawer below 1024 px. In the hero, the free session is the first of three equal outlined buttons.
- There is no sticky or persistent mobile CTA.
- Pages are very long at 390 px:
  - About: about 13,900 px (17 screens)
  - Home: about 10,150 px
  - Waiver: about 10,100 px
  - Programs: about 9,700 px

---

## 6. Content gaps

| Gap | Location | Notes |
|---|---|---|
| Ages and grades per program | Programs, Home | Not stated anywhere. Events mention "5th to 8th grade" for one clinic only. |
| Pricing for memberships, drop-ins and individual training | Memberships, Programs | Public elsewhere; client decision |
| Free session vs evaluation explanation | Home, Programs, Memberships, FAQ | See Q2 |
| Schedule and session times | Programs, FAQ | The FAQ day list and Contact hours are unverified |
| Select program, and "G - Silver 2" | Programs | Possible missing offering (Q4) |
| Individual Training inquiry and pricing | Programs | Wix had a dedicated form |
| Public email | Contact, FAQ | The FAQ "email us" instruction has no address |
| Safety, coach vetting, parent policies | FAQ / About | Missing; commonly expected |
| What to bring / first-session expectations | FAQ | Missing |
| Hall of Fame content and consent | Hall of Fame | Names minors' schools and colleges; confirm consent |
| Testimonial sources | Home | Unverified (Q8) |
| **Placeholder content shipped** | `hall-of-fame.html:276-283, 291`; `contact.html` "Public email not listed…" callout; HTML `CONTENT TODO` comments in `programs.html` | Visible placeholders on Hall of Fame and Contact |
| **Encoding mojibake** (`?` in place of a dash or apostrophe) | `programs.html:159` "2.5?3+"; `memberships.html:14` "Showtime?s"; `memberships.html:199` "pathways?small-group"; contact H2 "San Jose ? South Bay"; memberships lede "portal? not on this page" | Visible to users and in OG metadata |
| Values inconsistency | `events.html` uses H.E.L.D.; About and Programs use L.E.A.D. | Q3 |
| Experience inconsistency | `index.html:290`, `programs.html` badge/facts (2.5+) vs Minos (3+) | Q1 |
| Refund policy gap | `faqs.html` FAQ 6 | "within 14 days… no refunds after 15+ days". Day 14–15 is undefined. Inherited verbatim from Wix; confirm. |
| Rollover vs makeup bank | FAQ 2 vs FAQ 9 | "No roll-over classes" sits beside a "makeup bank" that does not expire. Needs one clear explanation. |
| Repetition | Mission paragraph about 10 times site-wide | Cut to one canonical placement plus short derivatives |
| Inaccurate alt text | `index.html:193` "athlete mid-jump during an agility ladder drill" | The image shows a line of athletes standing on court |

---

## 7. Design and UX findings

### A. Brand elements worth preserving
- The "It's Showtime" name and attitude, the S badge, and black/white with one hot accent.
- Condensed, heavy, uppercase display type.
- "Foundation / Development Before Exposure" as the signature idea.
- Real athlete photography from actual sessions.
- The editorial numbered program rows (01–04) on the homepage.
- Sharp corners and flat colour. These avoid generic SaaS styling, and the agency standards favour that.
- The Hall of Fame's "trophy wall" idea, as a concept rather than its execution.

### B. Weak execution worth improving
- **CTA hierarchy:**
  - Three identical outline buttons in the hero (`home-1440-fold.png`).
  - `btn--ghost` (light text and border, made for dark backgrounds) is used on **light** sections. "Book Sessions" in the Memberships "Ready to enroll?" band is nearly invisible (`memberships-1440.png`).
  - "Read More →" text links are only 14 px tall.
- **Palette drift and contrast:** The orange #E85D04 replaces Showtime's amber and fails contrast (see section 9).
- **Logo:** small, raster (278×290 source), boxed in a square tile, and missing the circular badge's presence.
- **Imagery:**
  - Most photos are under 1,024 px wide and blurry on retina screens. The hero is 574×1020, shown at about 640 CSS px.
  - Declared `width`/`height` attributes don't match real aspect ratios: hero declared 1200×1600 vs actual 574×1020; defensive drill declared 1600×1000 vs actual 950×878.
  - The same few photos repeat across pages.
- **Rhythm:** long stacks of similar sections (eyebrow → H2 → lede → content → CTA band) and a mission bar on every inner page.
- **Hall of Fame:** a completely different visual language (leather, wood, gold, Anton/Oswald, "EA-style top bar") with no site chrome.

### C. Unnecessary elements that can be removed
- The repeated mission paragraph and the "mission bar" on inner pages.
- Duplicate CTA banners. Memberships has four booking blocks.
- Instagram embeds as the lead visual of program sections. Use owned photos or video and link to Instagram instead.
- The "Download" signature button on the waiver.
- 9 placeholder SVGs and the duplicate logo file (after confirming they are unused).

### D. Missing design elements
- A "Which program fits?" comparison (age/grade, experience, format, frequency, price).
- A visual of the 4-step enrollment journey placed near the primary CTA.
- A persistent mobile CTA.
- A Programs dropdown in navigation. Wix had one; the repo uses a single merged page.
- Trust modules: outcomes, credentials, safety.
- Favicon, OG share image, branded 404 page.

---

## 8. Functionality issues

| # | Issue | Evidence | Priority |
|---|---|---|---|
| F1 | **Waiver submission fails** with a developer message | `scripts/waiver-form.js:12-18` placeholder keys. Reproduced by filling fields, typing a signature and submitting; the result is "Email delivery is not configured yet. Add your EmailJS credentials in scripts/waiver-form.js…" (`waiver-submit-error.png`). | **P0** |
| F2 | **Hall of Fame has no site navigation** and public placeholders | `hall-of-fame.html` has no header or footer, `<title>Hall of Fame</title>`, an "Add player name" row and a developer note (`hall-of-fame-390.png`) | **P0** |
| F3 | **Mobile horizontal overflow and clipped text** | At 320 px: Events scrolls 110 px wide and clips past-event text (`events-320-overflow.png`); Contact is 84 px too wide (`contact-320-overflow.png`); Home is 20 px. At 390 px: Events 40 px, Contact 14 px. At 768 px: Home 9 px. | **P1** |
| F4 | Hidden mobile drawer stays focusable | Tab sequence at 1440 px goes past "Get Your Free Session" into `[DRAWER] Showtime…`, `[DRAWER] About`, and so on. The drawer is only translated off-screen and has `aria-hidden="true"` with focusable children (`components.css:1084-1102`). | **P1** |
| F5 | Membership CTAs contradict the acceptance requirement | See 5.2 | **P1** |
| F6 | Incorrect drop-in instructions; possibly outdated Mindbody instructions | See 5.2 | **P1** |
| F7 | "Get Directions" opens Google Search, not Maps | `share.google/iwF509Id1Iis388Qe` redirects to a google.com/search URL carrying personal parameters | **P2** |
| F8 | No 404 page | `/does-not-exist` shows the server's default "Error response" | P2 |
| F9 | Footer drift | `memberships.html` and `waiver.html` footers omit Events and FAQs | P2 |
| F10 | First mouse-drawn signature didn't register in automation | Typed signature worked. **Unverified**; retest on a real touch device. | P3 |

**Working:**
- Desktop dropdown (hover, click and Escape)
- FAQ accordion (Enter, Space and click toggle once each)
- Drawer open/close, Escape and focus trap
- Reveal animation, with reduced motion respected
- All internal links
- All external links return 200, except Mindbody, which is bot-protected and therefore unverified

---

## 9. Accessibility findings

### Confirmed violations (WCAG 2.2 AA)

| Issue | Criterion | Location | Fix |
|---|---|---|---|
| White on #E85D04 = **3.50:1** at 13 px button text | 1.4.3 | `.btn--primary`, `.btn--on-dark`, header CTA | Darken the accent, or use dark text on the accent (5.51:1) |
| #E85D04 eyebrow text on cream #EFE9DF = **2.90:1**, and on surface = 3.17:1, at 11 px | 1.4.3 | `.eyebrow` site-wide (fine on dark: 5.51:1) | Use a darker accent for text on light backgrounds |
| `btn--ghost` on light backgrounds is nearly invisible | 1.4.3 / 1.4.11 | `memberships.html` "Ready to enroll?" band | Use a variant that suits the background |
| Focusable content inside an `aria-hidden` drawer | 2.4.3, 4.1.2 | `index.html:90-140` and all pages | Use `inert` or `visibility:hidden` when closed |
| Content clipped at 320 px; requires 2D scrolling | 1.4.10 Reflow | Events, Contact | Fix the past-event and contact-list grids |
| Hall of Fame: no skip link or landmarks; `display:flex` on `<td>` breaks table semantics; hover-only highlight | 1.3.1, 2.4.1 | `hall-of-fame.html` | Rebuild inside the site shell |
| Waiver status message: `role` is set at the moment the message appears and is not a pre-existing live region | 4.1.3 | `waiver.html:467`, `waiver-form.js:285-291` | Use a persistent `aria-live` region; also focus the first invalid field |
| Small tap targets: "Read More →" links are 14 px tall | 2.5.8 (24 px minimum) | `index.html` program rows | Increase hit area |

### Advisory
- Waiver: add an explicit "I have read and agree" consent checkbox. "Child(s) Name" should allow multiple children cleanly. Consider participant DOB and an emergency contact (this needs client and legal input).
- Inaccurate alt text on the hero (section 6).
- No `scroll-margin-top` for anchor targets under the sticky header (`#how-to-become-a-member`, `#academy`).
- External links open new tabs without a visual or SR cue ("opens in new tab").
- Instagram embeds bring third-party a11y issues; give them a text alternative or replace them.

### Positives
- Skip link
- Global `:focus-visible` (3 px outline)
- `prefers-reduced-motion` handled in CSS and JS
- One `<h1>` per page with no heading-level skips
- Labelled form fields with correct `type`/`autocomplete`
- Typed-signature alternative to drawing

---

## 10. SEO findings

### Confirmed gaps
- No `<link rel="canonical">` on any page. The **public GitHub Pages copy is indexable** and duplicates the official site's content.
- No `og:image`, `og:url`, Twitter card or favicon.
- No `robots.txt`, `sitemap.xml` or `404.html`. The Wix site does have a sitemap.
- No structured data. `SportsActivityLocation` or `LocalBusiness` would fit, but only with verified name, address, phone and hours (agency rule: don't fabricate).
- `hall-of-fame.html` has the title "Hall of Fame", no meta description and no `lang`-consistent head.
- Mojibake in the `memberships.html` OG description.
- **URL migration:** Wix slugs (`/aboutus`, `/academy`, `/showtime-faqs`, …) will 404 when the domain moves. GitHub Pages cannot do server-side 301s. Choose hosting with redirect support, or plan meta-refresh stubs, before launch.

### Advisory
- Titles are mostly good and distinct. Several pages share the same mission-based meta description.
- The merged `programs.html` loses Wix's dedicated program URLs. Separate program pages would give better long-tail and local search coverage ("youth basketball training San Jose").
- Connect the Google Business Profile to the site and keep NAP (name, address, phone) consistent with Minos Rec.

---

## 11. Performance findings

### Confirmed
- **About 3.2 MB of PNG photography** with no WebP/AVIF and no `srcset`:
  - `photo-hero-jump.png` (likely LCP) is **765 KB** but only 574×1020 px.
  - `photo-individual-form.png` is 553 KB.
- **No `loading="lazy"`** on any `<img>`. Below-fold images on all pages load eagerly.
- No `fetchpriority="high"` on the hero.
- **Incorrect intrinsic dimensions** on most images (section 7B). Aspect-ratio hints are wrong, which risks CLS and distortion.
- **Fonts load through a CSS `@import`** in `tokens.css`. The chain is HTML → tokens.css → Google CSS → font files, which is render-blocking with no preconnect. Figtree loads 5 styles.
- Three render-blocking stylesheets (about 3,200 lines), all loaded on every page.
- Instagram `embed.js` is heavy, adds third-party tracking, and causes layout shift. It is lazy-loaded by IntersectionObserver, which is good.
- `@emailjs/browser@4` is unpinned and has no SRI.

### Advisory
- JS is small and vanilla. The reveal-on-scroll animation is fine.
- No measured Lighthouse or CWV numbers. A run is recommended after the image fixes.

---

## 12. Prioritized action plan

### P0 — Critical (fix before any public use; the staging URL is already public)

1. **Waiver** (`waiver.html`, `scripts/waiver-form.js`)
   - Problem: submission fails with a developer message on a "required" form.
   - Impact: families can't complete a required step and see a broken site. Signed liability waivers for minors need reliable delivery and record-keeping.
   - Fix: decide the system of record (Q6). Prefer the Minos Rec or e-sign waiver Showtime already uses. Until then, hide the form and link to the working process. Do not use client-side EmailJS for legal records: there is no retention or audit trail, and `to_email` is a client-controlled parameter.
2. **Hall of Fame** (`hall-of-fame.html`)
   - Problem: dead-end page with visible placeholders, linked in primary navigation.
   - Fix: remove it from navigation until rebuilt in the site shell with real content and consent (Q9). Remove the placeholder row and developer note.

> **P0 remediation status (2026-10-10).** Both P0 items are **contained but not finished**. The open requirements are tracked in [`CONTENT_NEEDED.md`](../CONTENT_NEEDED.md).
>
> **Waiver (F1).**
> - The form and the signature/EmailJS scripts were removed.
> - `waiver.html` keeps the waiver text and the "required" statement.
> - It now directs families to the Minos Rec inquiry form for instructions (anchor `#complete-waiver`).
> - On `memberships.html`, "Read & Sign Waiver" and "Go to Signature Form" became "How to Complete the Waiver" and "Read the Waiver".
> - Still needed: an approved collection and retention solution.
>
> **Hall of Fame (F2).**
> - Removed from the nav, drawer and footer on all 8 pages.
> - The page now has a back link, a site nav, a `<main>` landmark and `noindex`. The placeholder row and developer note were removed.
> - The Pro column was being clipped below about 390 px. It is fixed (the table scrolls instead of clipping, and the name `<td>` is a table cell again).
> - Still needed: verification, consent and a rebuild in the site shell.
>
> **Verified** in Chromium at 320/390/768/1440:
> - Hall of Fame links are gone everywhere.
> - The waiver page has no form controls and makes no signature/EmailJS requests.
> - All 22 internal links and anchors resolve.
> - The desktop dropdown and mobile drawer work.
> - The Hall of Fame back link works by keyboard.
> - The waiver and Hall of Fame pages have no horizontal overflow.
>
> **Unchanged:** all P1–P3 items, including overflow on Events/Contact/Home (F3), drawer focusability (F4) and footer drift (F9).

### P1 — High impact

3. **Enrollment journey**: define one primary new-family path. Remove "Book Memberships" from the homepage hero and first-visit surfaces. Explain free session → evaluation → acceptance → membership. Keep a separate member path. *Depends on Q2, Q7.*
4. **Resolve factual conflicts** across home, programs, events and FAQ once confirmed: Academy experience, L.E.A.D. vs H.E.L.D., Mindbody vs Minos instructions, drop-in instructions, tier names. *Q1, Q3, Q7.*
5. **Mobile overflow**: fix Events (`.past-event` grid), Contact (`.contact-list`) and Home media bleed at 320/390 px.
6. **Accessibility**: drawer `inert`; accent and contrast fixes; ghost-button misuse; live region on the waiver; tap targets.
7. **Programs page on mobile**: move CTAs and key facts above the Instagram embeds, or replace the embeds. Add ages/grades and a "which program fits" comparison.
8. **Pricing transparency** on Memberships and Individual Training, if the client approves (Q5).
9. **Verify or remove unverified claims**: testimonials, hours, phone, "Premier", coach credentials (Q8, Q10, Q11).
10. **Fix mojibake** (5 places) and the inaccurate hero alt text.

### P2 — Medium

11. SEO baseline: canonical, OG image, favicon, sitemap, robots, 404, LocalBusiness JSON-LD with verified data. Add `noindex` on the GitHub Pages staging build.
12. URL migration and redirect plan from Wix slugs; choose hosting with redirect support.
13. Image pipeline: source originals, export responsive WebP/AVIF with `srcset`, correct `width`/`height`, lazy-load below the fold, `fetchpriority` on the hero.
14. Font loading: replace `@import` with `<link>`, preconnect, trim weights.
15. Shared header/footer: stop hand-copying chrome across 8 files. This is a justified small change with a specific problem behind it: drift already exists. Options are a tiny build step (e.g. Eleventy or a simple include script) or a disciplined partials workflow. Decide in Phase 5 or 6.
16. Reduce repetition and page length (mission copy, duplicate CTA bands).
17. Replace `share.google` with a proper Google Maps directions URL.
18. Pin `@emailjs/browser`, or remove it with F1, and add SRI to CDN scripts.

### P3 — Low

19. Delete unused placeholder SVGs and the duplicate logo; document dev and deploy in a README and project `CLAUDE.md`.
20. Add "opens in new tab" cues; `scroll-margin-top`; `text-wrap: balance` on headings.
21. Static copyright year on some pages (About, FAQ, Contact lack the `#year` script); minor.
22. Retest the drawn signature on real iOS and Android.
23. Restore the agency `CLAUDE.md` (currently empty; the content is in `CLAUDE.md.save`).

---

## 13. Questions requiring client confirmation

1. **Academy experience requirement:** 2.5+ years (Wix homepage) or 3+ years *and currently on a club or school team* (Wix `/academy` and Minos Rec)?
2. **Free session vs evaluation:** Is the free first session the same thing as the Academy evaluation? Does it apply to Fundamentalists and Academy equally? Can anyone book it, or only after inquiry screening?
3. **Values:** Is L.E.A.D. (Leadership, Effort, Attitude, Discipline) the current standard? Was H.E.L.D. (Hard Work, Energy, Leadership, Discipline) retired or event-specific?
4. **Select program:** Coach Jorge is "Head of Select Development" and an Instagram post shows "SELECT". Is there a Select or team program to feature? What is "G - Silver 2" on Minos?
5. **Pricing:** May the site publish membership, drop-in and individual-training prices ($200–$600/mo; $80/$100 1:1)? Which drop-in price is current: $55 or $60? Is the tier "Essential" or "Essentials"?
6. **Waiver:** Where are waivers signed and stored today (Wix form, Minos Rec, other)? Has counsel approved the waiver text, which names The Grove Community Collective as co-provider? Who should receive signed waivers?
7. **Booking system:** Is Minos Rec now the sole system, with Mindbody retired? What are the correct cancel, drop-in and membership-management steps? Should members be sent to a login URL?
8. **Testimonials:** Where do the four homepage quotes come from (Google? Yelp?), and are they approved for use? Full text of the truncated quote, and the correct name for "JustAmes V."?
9. **Hall of Fame:** Is this wanted? Do the listed athletes or their families consent to publication? What is the source of each entry?
10. **Contact details:** Is (408) 888-6739 Showtime's public number? Is "Unit 90" correct? What is the public email? What are the training hours (Mon–Thu 5–7:30pm, Sat 9–11:30am currently shown)?
11. **Coach credentials:** Confirm the bios, certifications (ACSM, NASM, Pure Sweat licence) and titles. Should "Head of Player Development at San Jose City College" stay?
12. **Ages and grades** served by each program?
13. **Athletic Development:** Should it appear at all before launch? Is there a timeline?
14. **Photography:** Are there higher-resolution originals? Does Showtime hold rights to the Grove-branded photos and all athlete images (minors)?
15. **Brand palette:** Is amber/gold (#FFAC00, Wix) the official accent, or has the burnt orange (#E85D04) in the repo been approved? Is there a vector logo and is the script "It's Showtime" wordmark available?
16. **Hosting and domain:** Where will the new site be hosted, and who controls DNS? (This determines how to redirect the Wix URLs.)
17. **Safety and policies:** Are there coach background checks, SafeSport, a privacy policy or a code of conduct to publish?

---

## 14. Recommended next phases

The planned sequence holds, with three adjustments that the audit supports:

0. **P0 containment (small, now, before Phase 2):** remove Hall of Fame from navigation, and hide or replace the broken waiver form on the public GitHub Pages build. Optionally add `noindex`. Both P0s are live on a public URL today, and the fixes are minimal and reversible. *Only with your approval; this audit changed no code.*
1. Initial audit (**done**).
2. **Content research and PRODUCT.md.** Send the section 13 questions to the client first. The enrollment journey (Q2, Q5, Q6, Q7) and the hosting/redirect decision (Q16) are blockers for both PRODUCT.md and the IA.
3. **Brand analysis and DESIGN.md.** Resolve the amber vs orange palette, the logo/wordmark and the photography plan (Q14, Q15). Set a contrast-safe accent here.
4. Impeccable design critique.
5. **Content and conversion improvements.** Single enrollment path, program comparison, pricing, FAQ corrections. Also decide the shared-header/footer approach (P2 #15) **before** Phase 6, so the homepage isn't built on copy-pasted chrome.
6. Homepage implementation.
7. Remaining pages, including the rebuilt waiver flow, Hall of Fame (if kept), redirects and the SEO baseline.
8. Final QA (a11y, CWV, cross-device, redirects, external destinations).

---

### Appendix: test notes and limitations
- **Mindbody** URLs returned 403 "Security Check" to curl and Playwright, so they were not verified.
- No forms were submitted to any external service. The waiver test could not send, because the credentials are placeholders.
- Mouse-drawn signature capture failed once in automation. This is unverified as a real defect (F10).
- Reference-site content was gathered with WebFetch and curl on 2026-10-10. The Wix homepage screenshot is `screenshots/reference-home-1440.png`.
- Screenshots: `home-1440-fold.png`, `home-390-fold.png`, `programs-390-instagram.png`, `memberships-1440.png`, `events-320-overflow.png`, `contact-320-overflow.png`, `hall-of-fame-390.png`, `waiver-submit-error.png`, `reference-home-1440.png`.
