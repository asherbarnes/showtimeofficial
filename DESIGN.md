# Showtime Basketball Academy — Design System

> Visual direction and design standards for the Next.js + TypeScript + Tailwind rebuild.
> **Phase 3 output, 2026-10-10.** Planning only: nothing here is implemented, and **no brand decision here has been approved by the client.**
> Facts come from [`PRODUCT.md`](PRODUCT.md). Open questions are in [`CONTENT_NEEDED.md`](CONTENT_NEEDED.md) (I8, I13). Migration rules: [`research/migration-requirements.md`](research/migration-requirements.md).

**Labels used in this document**

| Label | Meaning |
|---|---|
| **VERIFIED** | Measured on the official Wix site (computed styles, Wix theme variables or font files) on 2026-10-10 |
| **PROPOSED** | Chosen by the agency to complement the verified brand. Fine to implement; reversible. |
| **CLIENT APPROVAL** | A brand change or uncertain choice. Build it as proposed, but don't treat it as final until confirmed (section 18). |

---

## 1. Design Vision

**"Lights on, gym open."** Showtime's real environment is a bright, white-walled gym with maple hardwood, black apparel and black wall graphics. Its brand is a white-on-black badge with one hot signal colour: amber. The site should feel like walking into that gym. It is high-contrast and orderly, with real athletes working and one colour that tells you where to go.

The site should read as a **serious development academy that parents trust**. It should not look like a hype-mixtape sports brand or a corporate SaaS page.

Design rules that follow from that:

1. **Black frames, white court, amber signal.** Black and white carry the structure. Amber is reserved for action and emphasis, so it keeps its meaning.
2. **Photography is the decoration.** Real Showtime sessions do the emotional work. Graphic ornament stays minimal.
3. **Discipline in layout.** Strong alignment, clear numbering and generous but consistent spacing reflect a coaching culture built on L.E.A.D. standards (provisional, I1).
4. **Parent-first clarity.** Every page answers: what is it, who is it for, what does it involve, what does it cost (if approved) and how do I start.
5. **One path forward.** One primary CTA per view (PRODUCT 7.4).

## 2. Existing Brand Identity

### 2.1 Official brand (Wix site), VERIFIED

| Element | Evidence | Notes |
|---|---|---|
| **Logo** | Circular badge: "SHOWTIME" arched above, "BASKETBALL" arched below, a dollar-sign "S" with basketball seams, in a thin ring. White on black in the header (`showtime-white`, 225×223 on Wix). Also painted **black on the white gym wall** (visible in photos). | Only raster files exist (`assets/img/logo-showtime.png`, 278×290). **Vector master needed.** |
| **Script wordmark** | "It's Showtime", white script over the hero video. Font: **Escape the Ordinary** (Octotype). | The font file says "Free for personal use" (fsType 4). Commercial use needs a licence. See 6.1. |
| **Program lockup** | "SHOWTIME" in heavy white sans with an amber script "Academy" over it (Wix `/academy` banner) | A sub-brand lockup pattern exists for Academy. It's unknown whether other programs have one. |
| **Primary colour** | Amber **#FFAC00** (Wix theme `color_18`; headlines, "INQUIRE HERE!" button, footer bar). A near-duplicate **#FFA700** (`color_23`) is used interchangeably. | |
| **Darks** | **#000000** (header band, body text) and **#1E1E1E** (`color_21`; "Your first session is free" and "Our services" bands) | |
| **Light** | **#FFFFFF** page background | No cream or off-white anywhere on the official site |
| **Display type** | **Anton** 400, uppercase, in amber or black at 44–100 px | Google Font, SIL OFL. Safe to use. |
| **UI and label type** | **Netflix Sans** Bold/Medium/Regular (uploaded): nav, program titles, footer line | Netflix's proprietary corporate typeface (Dalton Maag). **Not licensable for this use. Do not carry over.** |
| **Body type** | **Avenir LT 35 Light** and **85 Heavy** (Wix-provided) | Licensed through Wix only. It doesn't transfer to a self-hosted site. |
| Other | **SF Pro Display** Medium is uploaded too | Apple's licence restricts it to Apple platforms. Do not carry over. |
| **Buttons** | Amber pills, ~30 px radius, black text; some white and #1E1E1E pills | |
| **Layout conventions** | Black logo band over a white centred nav bar; full-bleed 50/50 photo + text splits; dark #1E1E1E statement bands; amber footer bar with "© SHOWTIME BASKETBALL LLC \| EST. 2017" and social icons | |
| **Photography** | High-key, natural-colour photos from real sessions at The Grove: white walls, maple floor, black gear, Showtime badge and Grove mark on the walls. Hero is a gym video (ceiling rafters, ball in flight). | Generally better resolution and composition than the copies in the repo |

Reference screenshots (1440 px, homepage and `/academy`) were captured in this phase for analysis and **not saved to the repo**. The audit's `research/screenshots/reference-home-1440.png` is the stored reference.

### 2.2 The current repo, NOT approved

| Element | Repo | Assessment |
|---|---|---|
| Accent | Burnt orange **#E85D04** (+ #C44D03) | **Not supported by any official source.** Fails contrast as button and eyebrow colour (3.50:1 and 2.90:1). Drop it. |
| Backgrounds | Cream **#EFE9DF**, #E4DDD2, #F7F3EC | Not in the official brand. It also drifts toward **The Grove's** warm off-white (#F8F8F4, section 16). Drop it. |
| Display | Barlow Condensed 800 | Same family of feeling as Anton but not the brand face. Replace with Anton. |
| Body | Figtree | Good geometric match for Avenir and openly licensed. **Keep** (6.2). |
| Shape | 2 px corners, no shadows | More distinctive and disciplined than the Wix pills. **Keep** (proposed; 9.1). |
| Hall of Fame | Gold #F0C419, Anton/Oswald, leather and wood | A separate design. Fold it into the main system. |
| Logo | Badge shrunk into a small square tile | Under-uses the strongest brand asset |

### 2.3 Gaps between the brand and its execution

- **Brand is right; execution is weak.** The Wix site has the right ingredients (black, amber, Anton, real photos) but template-level layout: centred everything, uniform pills, weak hierarchy, a blurred facility photo and an image-only enrollment steps graphic.
- **The repo improved structure but lost the brand.** Its editorial layouts and sharp corners are good. Its colour and typeface drifted away from what parents already recognise.
- **The rebuild combines both:** the official palette and Anton, with the repo's structural discipline, plus better hierarchy and accessibility.

## 3. Brand Personality

| Showtime is… | …not | What it means in design |
|---|---|---|
| **Disciplined** | Rigid or militaristic | Strict grid, consistent spacing, numbered sequences, no random flourishes |
| **Energetic** | Hype or loud | Amber and Anton in short bursts. Real action photos, not motion effects. |
| **Credible** | Corporate | Specific facts (Est. 2017, coach credentials as stated, small groups). No superlatives. Restrained palette. |
| **Development-first** | Exposure- or AAU-first | Show teaching moments (coach + athlete) more than highlight dunks |
| **Approachable to families** | Intimidating | Plain-language labels, visible prices and steps (if approved), friendly photos of younger players, readable body text |
| **Confident** ("It's Showtime") | Arrogant | Big type used for real statements ("Foundation before exposure"), not filler |

**Voice cue for headings:** short, declarative and specific, e.g. a program name plus who it's for. Copy itself is Phase 5.

## 4. Visual Direction

**Recommended direction: "Court Lines".** A significantly improved evolution of the official identity.

| Idea from the brief | Verdict | How it applies |
|---|---|---|
| Bold athletic typography | **Yes** (VERIFIED basis) | Anton uppercase for H1/H2 and key numbers only |
| Strong basketball photography | **Yes, with a caveat** | Real Showtime photos only. Today's files are low-resolution, so layouts must not depend on full-bleed hero photos until originals arrive (section 11). |
| Clear, disciplined layouts | **Yes** | 12-column grid; asymmetric splits; numbered program index; step rails |
| High contrast | **Yes** | Black/white structure; amber only on black or as a fill under black text |
| Purposeful colour | **Yes** | One accent (amber), no secondary hues |
| Strong program hierarchy | **Yes** | Three programs, each with its own page and contextual CTA |
| Confident CTAs | **Yes** | One amber primary per view; one secondary style; no ghost buttons on light |
| Minimal decoration | **Yes** | The only graphic motif is the court line (4.1) |
| Dark-mode-only "Nike" aesthetic | **No** | Too heavy for parents. The real gym is bright. Dark is used as a framing band, not the default. |
| Video hero | **Not at launch** | The Wix hero uses video. Revisit only with a client-supplied, compressed loop (section 15). |

### 4.1 Graphic motif: court lines (PROPOSED)

Taken from the hardwood itself (floor lines, the key, the arc), and used sparingly:

- **Rules:** 2 px lines. Amber on dark, black (#000) on light. Use them under eyebrows, between table rows and as step connectors.
- **Arc:** one large thin quarter-arc (3-point-line geometry, 1.5 px stroke, `aria-hidden` SVG) is allowed **once per page at most**. It goes behind a dark band or the step rail. Never over faces.
- **Numbers:** Anton numerals (01, 02, 03) for program indexes and steps, like jersey numbers.
- **Not allowed:** basketball clip-art, ball-texture backgrounds, flame or speed graphics, the "$" symbol separated from the badge, icon-card grids.

### 4.2 Surface rhythm

Pages alternate between four surfaces: **white**, **light neutral**, **black/charcoal band** and **photo split**. Never place more than two sections with the same surface in a row. **Amber full-bleed bands** are allowed **once per page** for the main conversion moment, with black text (11.15:1).

## 5. Color Palette

### 5.1 Tokens

| Token | Hex | Status | Role |
|---|---|---|---|
| `amber-500` (brand) | **#FFAC00** | **VERIFIED** (Wix `color_18`) | Primary CTA fill, amber band, highlights on dark, footer bar, Anton headings **on dark only** |
| (retire) | #FFA700 | VERIFIED but redundant | Merge into #FFAC00. Don't use two near-identical ambers. |
| `amber-600` (hover) | #E69A00 | PROPOSED | Primary button hover/pressed. Black on it = 8.99:1. |
| `amber-700` (text) | #8A5D00 | PROPOSED (sits between Wix ramp shades #AA7913 and #936300) | **Amber text on light surfaces**: eyebrows, inline highlights, active nav underline. 5.76:1 on white, 5.14:1 on `neutral-100`, 4.73:1 on `amber-100`. |
| `amber-100` (tint) | #FFE6B4 | VERIFIED as a Wix theme ramp shade (`color_16`); use is PROPOSED | Notices, e.g. "Available after acceptance", "Coming soon". Body text on it is `charcoal` (13.68:1); `amber-700` only for the notice rule or label (4.73:1). |
| `black` | **#000000** | **VERIFIED** | Header band, footer body, hero panel, focus ring on light |
| `charcoal` | **#1E1E1E** | **VERIFIED** (Wix `color_21`) | Dark statement bands, **primary text on light** (16.67:1) |
| `charcoal-800` | #2A2A2A | PROPOSED | Raised surfaces on dark (dropdown panel, event date block) |
| `white` | **#FFFFFF** | **VERIFIED** | Main background; text on dark |
| `neutral-100` | #F2F2F2 | PROPOSED | Alternate light surface (comparison table, FAQ). A neutral grey that deliberately avoids cream. |
| `neutral-300` | #D9D9D9 | PROPOSED | Decorative dividers on light (not for meaningful boundaries) |
| `neutral-500` | #8C8C8C | PROPOSED | **Form-control borders** and meaningful boundaries on white (3.36:1). On `neutral-100` use #808080 (3.53:1); #8C8C8C there is only 3.0:1. |
| `neutral-600` | #5C5C5C | PROPOSED | Muted text on light (6.69:1 on white, 5.97:1 on `neutral-100`) |
| `neutral-400-dark` | #B8B8B8 | PROPOSED | Muted text on dark (8.40:1 on #1E1E1E) |
| `line-dark` | #3D3D3D | PROPOSED | Decorative dividers on dark only |
| `error` | #B42318 | PROPOSED | Error text and borders on light (6.57:1) |
| `error-on-dark` | #FF6B5E | PROPOSED | Error on dark (5.97:1) |
| `success` | #1E7A3A | PROPOSED | Success messages on light (5.38:1) |

**Not in the system:** #E85D04 burnt orange, cream (#EFE9DF family), Hall of Fame gold #F0C419, the Wix default red/blue/yellow theme slots (`color_3`–`5`; template leftovers, never seen in use), and any gradient other than the image scrim in 11.4.

### 5.2 Semantic assignments

| Use | Light surface | Dark surface (#000 / #1E1E1E) |
|---|---|---|
| Page background | `white`, alternate `neutral-100` | `black` or `charcoal` |
| Primary text | `charcoal` #1E1E1E | `white` |
| Muted text | `neutral-600` #5C5C5C | `neutral-400-dark` #B8B8B8 |
| Display headings | `charcoal` (amber **never** as text on light; it's 1.88:1) | `white`, or `amber-500` for one emphasised word or line |
| Eyebrow / label | `amber-700` or `charcoal` | `amber-500` |
| Links in body copy | `charcoal`, underlined; hover `amber-700` | `white`, underlined; hover `amber-500` |
| Primary CTA | `amber-500` fill, **black** text; hover `amber-600` | same |
| Secondary CTA | 2 px `black` border, black text; hover black fill, white text | 2 px `white` border, white text; hover white fill, black text |
| Focus ring | 3 px `black` outline, 2 px offset | 3 px `amber-500` outline, 2 px offset (8.85:1 on charcoal) |
| On an amber band | Text `black`; secondary buttons black-outline; focus ring black | n/a |
| Borders (inputs, tables) | `neutral-500` on white; #808080 on `neutral-100` | #8C8C8C (4.96:1 on charcoal) |

### 5.3 Contrast reference (WCAG 2.2 AA, computed 2026-10-10)

| Pair | Ratio | OK for |
|---|---|---|
| #000 on #FFAC00 | 11.15 | All text |
| #1E1E1E on #FFAC00 | 8.85 | All text |
| #FFF on #FFAC00 | **1.88** | **Never** |
| #FFAC00 on #FFF / #F2F2F2 | **1.88 / 1.68** | **Never** for text or meaningful UI |
| #FFAC00 on #000 / #1E1E1E | 11.15 / 8.85 | All text, focus rings |
| #8A5D00 on #FFF | 5.76 | All text |
| #1E1E1E on #FFF | 16.67 | All text |
| #5C5C5C on #FFF / #F2F2F2 | 6.69 / 5.97 | All text |
| #8A5D00 on #F2F2F2 / #FFE6B4 | 5.14 / 4.73 | All text |
| #B8B8B8 on #1E1E1E | 8.40 | All text |
| #8C8C8C on #FFF | 3.36 | Input borders (non-text 3:1) |
| #000 on #E69A00 | 8.99 | Hover state text |

### 5.4 Why amber, not burnt orange

- Amber #FFAC00 is the colour on every official page: headings, buttons and the footer bar. It's also in the Wix theme definition. Families already associate it with Showtime.
- Burnt orange appears **only** in the repo. Nothing in the official site, the Minos account, the logo (monochrome) or the photography supports it.
- The repo's likely reason for switching, contrast, is solved better by **using amber as a fill under black text** and by using a dark amber (`amber-700`) for the rare amber text on light. Orange solved nothing: it failed contrast too.
- **CLIENT APPROVAL:** confirm amber #FFAC00 as the official brand colour and retire #E85D04 (section 18).

## 6. Typography

### 6.1 Official typography and licensing

| Face | Where on Wix | Licence status | Decision |
|---|---|---|---|
| **Anton** | Headlines | SIL OFL (Google Fonts) | **Keep. Display face.** VERIFIED. |
| Avenir LT Light/Heavy | Body | Wix-supplied; Linotype commercial licence not transferable | Replace with Figtree (proposed). If the client owns an Avenir web licence, it may be swapped in (CLIENT APPROVAL). |
| Netflix Sans | Nav, program titles, footer | Proprietary to Netflix | **Do not use.** Replace with Figtree 700 uppercase. |
| SF Pro Display | Uploaded; minor use | Apple platform-only licence | **Do not use** |
| Escape the Ordinary | "It's Showtime" script | "Free for personal use" | **Do not load as a web font.** Use the wordmark only as **artwork (SVG)** once the client confirms a commercial licence or supplies licensed artwork (CLIENT APPROVAL, I13). Until then, omit the script wordmark and don't imitate it with another script font. |

### 6.2 Proposed system: two families

| Role | Family | Weights | Why |
|---|---|---|---|
| **Display** | **Anton** | 400 (its only weight) | The official headline face. Condensed and heavy, like jersey lettering. Fits Showtime's existing voice. |
| **Body, UI, labels** | **Figtree** (variable) | 400, 600, 700. **No italics** unless content needs them. | Geometric and open, close to Avenir's feel. Excellent small-size legibility. OFL. Already proven in the repo. |

Load both through `next/font/google` (self-hosted at build, works with static export). Use `display: swap` and only these weights. **No third family.** Barlow Condensed, Oswald and the Hall of Fame faces are retired.

### 6.3 Type scale

Mobile values are at 320–390 px; desktop at ≥1280 px. Fluid between with `clamp()`.

| Token | Family / weight | Mobile → desktop | Line height | Tracking | Case | Use |
|---|---|---|---|---|---|---|
| `display-xl` | Anton | 48 → 112 px · `clamp(3rem, 1.8rem + 6vw, 7rem)` | 0.95 | 0.005em | Upper | Home H1 only |
| `display-lg` | Anton | 40 → 80 px · `clamp(2.5rem, 1.7rem + 4vw, 5rem)` | 0.95 | 0.005em | Upper | Inner-page H1 |
| `h2` | Anton | 32 → 56 px · `clamp(2rem, 1.5rem + 2.5vw, 3.5rem)` | 1.0 | 0.01em | Upper | Section headings |
| `stat` | Anton | 40 → 56 px | 1.0 | 0 | — | Prices, step numbers, program index numbers, event dates |
| `h3` | Figtree 700 | 20 → 26 px · `clamp(1.25rem, 1.1rem + 0.75vw, 1.625rem)` | 1.2 | -0.005em | Sentence | Card, row and sub-section headings |
| `h4` | Figtree 700 | 18 px | 1.3 | 0 | Sentence | Minor headings, table headers |
| `lead` | Figtree 400 | 19 → 21 px | 1.5 | 0 | Sentence | Intro paragraph under H1/H2 (max 60ch) |
| `body` | Figtree 400 | 17 px (1.0625rem) | 1.6 | 0 | Sentence | Paragraphs (max 68ch) |
| `small` | Figtree 400/600 | 15 px | 1.5 | 0 | Sentence | Meta, captions, footnotes (never below 14 px) |
| `label` | Figtree 700 | 13 px (0.8125rem) | 1.2 | 0.12em | Upper | Eyebrows, nav sub-labels, table captions. **Minimum 13 px** (the repo's 11 px is too small). |
| `button` | Figtree 700 | 15 → 16 px | 1 | 0.06em | Upper | All buttons |
| `nav` | Figtree 600 | 15 px | 1 | 0.02em | Sentence or upper (pick one, keep it site-wide) | Header links |

**Rules**
- **Anton is never smaller than 28 px** and never used for running text, buttons or labels. It becomes cramped below that size.
- One `display-*` heading per page (the H1). Other Anton headings are `h2`.
- Uppercase Anton headings should be **short: at most ~6 words**, or 3 lines on mobile. Longer headings use `h3` Figtree.
- One amber-highlighted word or line per heading at most, on dark surfaces only.
- Don't use oversized type as decoration. Every Anton heading must say something real.
- **Exception, record board (10.13):** Hall of Fame player names are H3s set in Anton upper (28 → 42 px, `clamp(1.75rem, 1.35rem + 1.5vw, 2.625rem)`, line height 1, tracking 0.01em). They are names, not running text, so the 28 px floor still holds. Use this nowhere else.
- **Mobile:** H1 must fit in at most 4 lines at 390 px. Body stays 17 px (never reduced). Eyebrows stay 13 px. Allow `text-wrap: balance` on headings and `pretty` on paragraphs.

## 7. Layout and Spacing

### 7.1 Grid

| | Mobile < 768 | Tablet 768–1023 | Desktop ≥ 1024 |
|---|---|---|---|
| Columns | 4 | 8 | 12 |
| Gutter | 16 px | 24 px | 32 px |
| Side margin | 20 px | 32 px | 48 px (fluid `clamp(1.25rem, 4vw, 3rem)`) |
| Container | full | full | **max 1280 px** (`max-w-7xl`); text measure 68ch |

Full-bleed is allowed for photo splits, dark bands and the amber band. The content inside always aligns to the container.

### 7.2 Spacing scale (Tailwind's default 4 px base)

| Token | Value | Use |
|---|---|---|
| `space-1/2/3` | 4/8/12 px | Inline gaps, icon-to-label |
| `space-4/6` | 16/24 px | Paragraph spacing, form field gaps, card padding (mobile) |
| `space-8/10` | 32/40 px | Card padding (desktop), heading-to-content |
| `space-12/16` | 48/64 px | Between blocks inside a section |
| **Section padding** | **64 px mobile → 96 px tablet → 112 px desktop** (`py-16 md:py-24 lg:py-28`) | Every full section |
| Compact section | 40 → 56 px | Proof strips, notices, footer legal bar |

**Heading stack:** eyebrow → 12 px → H2 → 16 px → lead → 32–40 px → content.

### 7.3 Composition rules

- **Asymmetry over centring.** Default to left-aligned text in 5/7 or 7/5 splits. Centred text only for short statements (one or two lines) in bands.
- **No more than one card grid per page.** Prefer lists, rows, tables and splits. The coach roster is the one legitimate grid.
- **Corners:** `0` for photos and sections; `2px` for buttons, inputs and small surfaces. Full rounding only for the circular badge.
- **Shadows:** none, except a 1 px border or a single subtle shadow (`0 8px 24px rgb(0 0 0 / 0.12)`) on the open dropdown and the mobile sticky CTA bar.
- **Borders over boxes:** separate content with 1–2 px rules (court-line motif) rather than filled, rounded cards.

## 8. Navigation

### 8.1 Header (desktop ≥ 1024 px)

- **Purpose:** brand recognition and a fast route to programs, plus the one primary CTA.
- **Composition:** a single **black** bar, 80 px tall. This merges Wix's black logo band and white nav bar into one row. From left to right:
  - The badge (white, 56 px, links home; `alt="Showtime Basketball Academy — home"`)
  - Nav links: **Programs ▾**, Memberships, About, Events, FAQs
  - Utility link **Members** (muted `neutral-400-dark`, `small`)
  - The amber **Get Started** button
- **Typography:** `nav` white. Hover: amber 2 px underline 6 px below the text. Current page: persistent amber underline and `aria-current="page"`.
- **Programs dropdown:** a disclosure **button** (`aria-expanded`). It opens on click or Enter/Space, not hover-only. The `charcoal-800` panel lists Overview, Academy, Fundamentalists and Individual Training, each with a one-line "who it's for" in `small` muted. Escape closes it and returns focus. Athletic Development is not listed until it launches.
- **Behaviour:** static (not sticky) on desktop. That saves vertical space; the hero carries the CTA.

### 8.2 Mobile header and drawer (< 1024 px)

- **Header:** black, 64 px. Badge 44 px on the left; on the right a **Menu** button (44×44, icon + visible "Menu" label).
- **Drawer:** full-screen black panel.
  - Links in Figtree 700 at 24 px, with 56 px row height and 1 px `line-dark` dividers
  - Programs shown **expanded inline** as an indented sub-list (no nested toggles)
  - Members link
  - A full-width amber CTA pinned to the bottom (respects `safe-area-inset-bottom`)
  - Close button top right in the same position as Menu
- **Accessibility:** use `inert` on the drawer when closed. On open, move focus to the first link, trap focus and lock body scroll. Escape closes and returns focus to Menu. Under reduced motion it opens with no animation, otherwise a 200 ms fade/slide.
- **Persistent CTA bar:** after the hero CTA scrolls out of view, show a 64 px black bottom bar with a full-width amber **Get Started** button. Hide it when the footer CTA or the drawer is visible. Implement with one small IntersectionObserver. It must not cover focused elements (add `scroll-padding-bottom`). On program pages, the bar uses that page's contextual CTA.

### 8.3 Secondary navigation

- **Program pages:** a horizontal "program switcher" under the hero (Academy · Fundamentalists · Individual Training). These are links with `aria-current`. On mobile it scrolls horizontally with visible edge padding.
- **Breadcrumbs** on program sub-pages only (`Programs / Academy`), `small` muted.
- **Skip link:** "Skip to main content", visible on focus. Amber background, black text.

## 9. Buttons and CTAs

### 9.1 Button specs (PROPOSED; replaces the Wix pills, see 18)

| Variant | Fill / text | Size | Notes |
|---|---|---|---|
| **Primary** | `amber-500` / black; hover `amber-600`; active translate-y 1 px | Height 48 px (52 px in heroes); padding x 24–28 px; `button` type; radius 2 px | **One per view.** Optional trailing arrow → that nudges 2 px right on hover (no motion under reduced motion). |
| **Secondary (light)** | Transparent, 2 px black border / black; hover black fill, white text | Same | Paired with primary at most once per group |
| **Secondary (dark)** | Transparent, 2 px white border / white; hover white fill, black text | Same | |
| **Text link CTA** | `charcoal` (light) or `white` (dark), Figtree 700, 2 px underline 4 px offset, → | Min hit area 44 px tall via padding | For "View Academy details" etc. **Never amber text on light.** |
| **On amber band** | Primary becomes **black fill / white text** (21:1); secondary = black outline | Same | |

- **Mobile:** full-width buttons in heroes and CTA bands; stacked with 12 px gap. Minimum target 44×44 px everywhere.
- **Disabled state:** avoid disabled buttons. If needed, use `neutral-100` fill, `neutral-600` text and `aria-disabled` with an explanation.
- **External links (Minos Rec):** if a link opens a new tab, append visually-hidden text "(opens in a new tab)" and a small external-link icon. The label names the destination when that's helpful, e.g. "Send an inquiry", with "on our booking site" in small text below the button where useful.

### 9.2 CTA vocabulary (from PRODUCT 7.4, pending B1)

The generic enrollment CTA is **Get Started** (changed from "Get Started" on 2026-10-10). The free-session offer is verified only for small-group sessions and isn't confirmed for any specific program, so a button label must not promise it. State the offer in text, with its qualification ("Your first small-group session is free."), on Home and Get Started. The label is `primaryCta` in `lib/site.ts`; the offer copy is in `lib/enrollment.ts`.

| Context | Primary | Secondary |
|---|---|---|
| Site-wide / Home / Fundamentalists | **Get Started** | Compare programs |
| Academy | **Apply for an Academy Evaluation** | Get Started |
| Individual Training | **Book Individual Training** | Ask a question (inquiry) |
| Memberships (prospects) | **Get Started** | Member Login & Booking |
| Members utility | **Member Login & Booking** | — |

**Never show "Book Memberships" or purchase links on first-visit surfaces** (B2).

## 10. Component Design Principles

Each component lists its purpose, composition, type, spacing, behaviour and mobile adaptation. **Do not force every section into one template.** The variety comes from different compositions sharing one palette, type system and spacing scale.

### 10.1 Hero, three variants

| Variant | Use | Composition | Mobile |
|---|---|---|---|
| **A. Split hero** (home) | The homepage | 7/5 split. Left: a black panel with eyebrow (`label` amber: e.g. "San Jose · Est. 2017"), H1 `display-xl` white, lead in `neutral-400-dark`, then primary + secondary CTAs and a single line "First session free" (wording per B1). Right: a photo running to the viewport edge at full panel height, `object-position` set per image. | Text panel first (CTA visible at 390×844 without scrolling), then the photo at 4:5. The photo is **not** the LCP blocker: the H1 is the LCP element. |
| **B. Program hero** | Program pages | Black band: breadcrumb, H1 `display-lg`, **fact row** (Experience · Format · Frequency · From $X if approved) as 3–4 label/value pairs with 1 px dividers; contextual CTA. A photo sits beside it on desktop (5/12) or below the band as a 16:9 crop. | Fact row becomes a 2×2 grid. Photo below the CTA. |
| **C. Simple page hero** | About, Memberships, Events, FAQs, Contact, Get Started | White or `neutral-100`, H1 `display-lg` in charcoal, lead, optional small photo or none. Compact: 64–80 px padding. | Same, stacked |
| **D. Feature hero** (Hall of Fame only) | A recognition page with no photography | Black band, no eyebrow: H1 `display-lg` white, lead in `muted-dark`, and one amber `stat`-size figure (the player count, no leading zero, so it never echoes the row numbers) with a `label` caption, aligned right on desktop. It stays smaller than the player names: the people are the peak, not the count. Hidden when the list is empty. The page's one court arc (4.1) sits behind it, clipped to the band. A 2 px amber rule closes the band. Padding 48–80 px. The figure is `aria-hidden`, with a plain-language screen-reader equivalent ("5 players featured"). | Stacked: H1, lead, then the figure under a 1 px `line-dark` rule. |

No full-screen (100vh) heroes. No text set directly on a high-key photo (see 11.4).

### 10.2 Program index (home, programs overview)

- **Purpose:** route a parent to the right program quickly.
- **Composition:** numbered **rows**, not cards. Each row shows:
  - A big Anton number (`stat`): **01** Academy, **02** Fundamentalists, **03** Individual Training
  - The program name (`h3`)
  - "Who it's for" (one line)
  - A requirement chip (e.g. "1+ year experience"; Academy wording per B4)
  - A text-link CTA
  - A 4:3 photo on desktop (right column)
  Rows are separated by 2 px black rules (court-line motif).
- **Behaviour:** the whole row is **not** one giant link. The heading link and the CTA link are separate. Hover shifts the rule to amber on dark variants only.
- **Mobile:** the number and name sit on one line; the photo goes on top at 16:9, or is omitted on the home index to keep it short.
- **Athletic Development:** a single muted line under the index ("Athletic Development, coming soon"). No row, no photo, no link (O1).

### 10.3 Program comparison table (Programs overview)

- **Purpose:** the "Which program fits?" tool the audit found missing.
- **Composition:** a real `<table>` with a caption. Columns: Academy · Fundamentalists · Individual Training. Rows: Who it's for, Experience, Team requirement, Format, Frequency, Price (if approved), How to start. The `neutral-100` surface takes `charcoal` headers in `h4`; row rules are `neutral-300`.
- **Mobile:** stacked per-program blocks (a definition list), **not** a horizontally scrolled table. Each block has its own CTA. On tablet, the table scrolls inside a wrapper with a visible scroll hint.

### 10.4 Training philosophy

- **Purpose:** the differentiator: "Foundation before exposure", development-first, not AAU-first.
- **Composition:** a **black band**. A large Anton statement on the left (the verified line), with 2–3 short supporting paragraphs on the right. The L.E.A.D. standards follow as a horizontal row of four large Anton letters, each with its word and a one-line definition. That's a typographic treatment, not icons. **L.E.A.D. is provisional (I1).** Its component must be easy to remove.
- **One optional court-arc graphic** behind this band.
- **Mobile:** statement first, then L.E.A.D. as a 2×2 grid.

### 10.5 Enrollment step rail ("How to get started")

- **Purpose:** explain inquire → free session/evaluation → placement → membership (PRODUCT 7.1/7.4; wording per B1).
- **Composition:** 4–5 steps. Each has an Anton number, an `h4` title and a 1–2 line description. Steps are joined by a 2 px horizontal rule on desktop and a vertical rule on mobile. They're an ordered list (`<ol>`) **as text, never an image**. The primary CTA sits directly under the rail.
- **Placement:** this is the one **amber band** on the home and Get Started pages (black text and rules). On program pages, use a white surface version.

### 10.6 Coach profiles

- **Purpose:** credibility through real, named coaches with official titles.
- **Composition:**
  - **Leadership** (Derrick, Ant, Kimo): a larger 2-column feature. Headshot at 4:5, name in `h3`, title as `label`, and a short bio with **only the credentials stated on S2**. Omit the NBA "trained alongside" claim (U5).
  - **Coaching staff:** a grid of headshots (2 columns on mobile, 3 on tablet, 4 on desktop), each with name and title. No bios unless provided.
- **Photos:** the existing headshots are consistent (black polos, grey backdrop). Keep them uncropped to the same 4:5 frame and the same eye line. No filters.
- **Behaviour:** no flip cards or hover-reveal bios. All text is visible.
- **Program pages:** show the relevant coaches only (e.g. Lam and Ron on Fundamentalists), pending confirmation (I6).

### 10.7 Membership information

- **Purpose:** transparent tiers and policies for families comparing options (pricing behind the `showPricing` flag, B5).
- **Composition:** two side-by-side **plan tables** (Academy, Fundamentalists), each with three rows (Basic 1×/week, Essentials 2×/week, Plus 3×/week). The price is set in Anton `stat`. Visit counts and makeup caps go in `small`. **Do not** use three floating pricing cards with a "most popular" badge; nothing supports that claim.
- **Required notice:** an `amber-100` notice above the tables: "Memberships are available after acceptance into the program" (policy S5). It has an info icon and a text label, so colour isn't the only signal.
- **Policies:** verbatim policy text in `<details>` accordions below (Cancellations, Makeups, Refunds), each with a visible heading.
- **CTA:** for prospects, **Get Started**. A separate "Already a member? Member Login & Booking" text link.
- **Mobile:** the tables stack. Tier name and price stay on one line.

### 10.8 Testimonials (only if verified)

- **At launch: none** (U3, I7). Don't build placeholder quote carousels.
- If verified quotes arrive: a single large pull quote per page (Figtree 600 at 24–28 px, charcoal) with attribution in `label` and source (e.g. "Parent, via Yelp" if permitted). No star ratings, no carousels, no avatar placeholders.

### 10.9 Events

- **Purpose:** upcoming clinics and the community record.
- **Composition:** a list of **event rows**. A date block on the left (`charcoal-800`, Anton day number in amber, month in `label` white) sits beside the title (`h3`), time and location, eligibility as a chip (e.g. "5th–8th grade", "Free"), and an RSVP CTA. Past events sit in a separate, quieter list (`neutral-600` text, no CTA).
- **Empty state** (current reality, S9): a short message ("No upcoming events right now") plus **Get Started** and a link to Instagram for announcements. No fake "coming soon" events.
- **Data:** from `events.ts` (PRODUCT 10).

### 10.10 Inquiry and enrollment CTA band

- **Purpose:** the closing conversion moment on each page.
- **Variants:** use **black** on most pages and the **amber** band only where the step rail isn't already amber. Use **charcoal** (`surface="charcoal"`) when the page is already black-heavy above the band and a black band would merge into the black footer (Hall of Fame). It stays dark-surface: white H2, `muted-dark` text, the same buttons. `compact` (40–56 px padding) is allowed where the content above is short.
- **Composition:** an Anton H2 (short), one supporting line, primary + secondary buttons, and a reassurance line in `small` (e.g. what happens after the inquiry, wording per B1). Left-aligned on desktop with the CTA group to the right. Stacked on mobile.
- **One closing band per page.** Don't repeat booking banners (the audit found four on Memberships).

### 10.11 Footer

- **Composition:**
  - **Black body:** the badge (64 px), a one-line positioning statement (verified wording), and three link columns (Programs · Academy info · Members), with Members links pointing to Minos.
  - **Location block:** "Showtime trains at The Grove, 2099 S 10th St, Unit 90, San Jose, CA 95112", plus a "Get directions" link to the `maps` constant.
  - **Social icons** (Instagram, TikTok; YouTube if O3 is confirmed), 44 px targets, each with an accessible name.
  - **Amber legal bar** (VERIFIED signature element): "© Showtime Basketball LLC · Est. 2017" in black `small` 600, plus Waiver and FAQs links. If a privacy policy is added later, it goes here.
- **Not included:** phone, email or hours until B8 is resolved. The mission paragraph is excluded (U1).
- **Mobile:** columns stack. Location comes first (it's what families look for). The amber legal bar text wraps centred.

### 10.12 Supporting components

- **Notice:** an `amber-100` surface, 2 px `amber-700` left rule, info icon, and charcoal text. Used for policy notes and "coming soon".
- **FAQ accordion:** native `<details>`/`<summary>`. Summary in `h4` Figtree with a + / − indicator; 1 px rules between items.
- **Chips/tags:** `label` type, 1 px `neutral-500` border, 2 px radius, no fill. On dark: white border.
- **Placeholder marker:** retired 2026-10-19 (component removed). Missing content is tracked in CONTENT_NEEDED.md and left off the page.

### 10.13 Record board (Hall of Fame)

> **Superseded 2026-10-19.** The client approved the original repo's vintage NBA 2K-style Hall of Fame as the creative direction, and `/hall-of-fame` now reproduces it (`app/hall-of-fame/hall-of-fame.css`): leather radial gradient (#7a1717 → #3a0a0a), black title bar with a 3 px gold (#a9840f) border, Anton italic title, Oswald body, gold (#f0c419) subtitle, cream ribbon, wood-framed cream table (Name / High School / College / Pro) with alternating rows, a gold glow on row hover, and "—" for stages the source leaves blank (screen readers hear "Not listed"). It deliberately sits outside this system (gradients, shadows, 10 px corners, a third family); the exception is scoped to that page. The site header and footer still frame it. Differences from the source: the template's "Add player name" row and editor note are omitted, the table scrolls inside its frame on very narrow screens instead of clipping, and Oswald is self-hosted. The record board spec below and hero variant D are kept for reference only.

- **Purpose:** list recognised players and the stages of their basketball paths, with nothing implied that the source doesn't state.
- **Composition:** a `label` H2 ("Player pathways") over a 2 px black rule, then an ordered list of rows separated by 1 px `neutral-300` rules. Each row has a quiet Anton numeral (28–32 px, `neutral-500`, no filled block, `aria-hidden`; the `<ol role="list">` carries the order). The order is the source order, **not a ranking**, so the numeral must never outweigh the name. Then the player's name (see 6.3 exception), and a `<dl>` of **only the stages the source lists**, in order (High school, College, Professional). Each stage has a visible `label` term over an `h4` value.
- **No fixed columns.** A missing stage is omitted, never shown as an empty cell, a dash or "none". Blank cells under a column header read as "didn't reach that level".
- **Responsive:** below 768 px the stages stack under the name. From 768 px they run left to right, joined by a 24 × 2 px black court-line connector (a CSS pseudo-element, so the `<dl>` stays valid). From 1024 px the stages share the name's row (`3rem | 20rem | 1fr`) and the connector **stretches** (minimum 24 px) so the last stage meets the row's right edge: the court line runs the length of the path. The stretching line is the `::before` of each later stage, placed as a grid item, so the `<dl>` keeps only `<dt>`/`<dd>` children.
- **Empty list:** render neither the board nor the hero count.
- **Data:** `lib/hall-of-fame.ts` only. Never add stages, years, statistics or awards (PRODUCT U6, CONTENT_NEEDED I11).

## 11. Photography and Imagery

### 11.1 Character of Showtime photography (VERIFIED from Wix and repo)

High-key gym light, white walls, light maple floor, black apparel, the Showtime badge and Grove mark on the walls, natural colour, real kids and coaches mid-drill. This is authentic and distinctive. **Keep the natural colour.** No duotone, amber tint, grain or heavy contrast filters. The black/amber frame around the photos supplies the brand colour.

### 11.2 Repo image audit (all in `assets/img/`, rights unconfirmed)

| Image | Size | Subject and quality | Homepage? | Best use |
|---|---|---|---|---|
| `photo-defensive-drill.png` | 950×878 | Coach silhouette in the foreground watching players in stance; badge on the wall. **Strongest storytelling image** (coach + development). | **Yes**: interim hero photo (right panel at ≤ 560 px wide) | Home hero, Academy |
| `photo-shooting-form.png` | 680×1020 | Coach correcting a young player's form. Warm, clear teaching moment. | **Yes**: Fundamentalists row | Fundamentalists, Individual Training |
| `photo-grove-session.png` | 950×983 | Session with Showtime badge and Grove mark on the wall | **Yes**: facility section | Facility / The Grove, About |
| `photo-academy-session.png` | 1024×576 | Wide group session; good context | Yes (program index, Academy row) | Academy, About |
| `photo-ladder-coach.png` | 707×1024 | Ladder lane, coach watching; dynamic | Possible | Academy, Athletic Development later |
| `photo-youth-coaching.png` | 1024×682 | Coach at the hoop with young players lined up | Possible | Fundamentalists |
| `photo-individual-form.png` | 574×1020 | Player shooting, Grove mark behind | No (low resolution) | Individual Training (small) |
| `photo-coaching-strength.png` | 1024×682 | Weight room team talk | No | About, Athletic Development (later) |
| `photo-ballhandling-drill.png` | 1024×468 | Ball-handling drill; thin crop | No | Fundamentalists (banner) |
| `photo-agility-ladder.png` | 1024×485 | Feet and cones close-up; texture | No | Small accent only |
| `photo-group-circle.png` | 1024×397 | Large group; very thin crop | No | Events |
| `photo-hero-jump.png` | 574×1020 | Line drill, vertical; 765 KB; **alt text in repo is wrong** | No | Mobile-only crop at most |
| `photo-team-huddle.png` | 1024×576 | Black-walled gym; **venue unconfirmed** | No | Events, only if venue and rights are confirmed |
| `photo-youth-circle.png` | 1024×388 | Seated kids; **likely another venue** | No | Events (CYS?), if confirmed |
| `photo-grove-court.png` | 762×708 | The Grove's floor logo: **The Grove's brand** | No | Facility section, only with Grove's permission |
| `coach-*.png` ×11 | 574–847 wide | Consistent studio headshots | Leadership teaser | About, program pages |

**Overall:** the content is right but the resolution is low (nothing over 1024 px). The Wix site displays several **better, larger photos** (e.g. the vertical ladder drill with a coach and the wide defensive-stance shot on `/academy`). **Request originals of the Wix photography from the client.** Don't download or republish them from Wix without confirming rights.

### 11.3 Usage guidelines by subject

| Subject | Guidance |
|---|---|
| **Training sessions** | Wide or medium shots showing structure (lines, stations, coach position). Show the court lines; that's the motif. |
| **Individual development** | Coach + one athlete, eye-level, hands-on correction. Faces visible. Prefer these over solo highlight shots. |
| **Coaches** | Studio headshots for profiles. Action shots of coaches teaching for story sections. Never stock. |
| **Basketball action** | Real game-speed movement (finishing, defensive stance). Avoid motion-blurred unreadable frames. |
| **Group training** | Show the small-group format (one coach to a handful of athletes) rather than crowds. This supports the "small groups" claim (pending I4). |
| **Facility** | The court, the hoops, the weight room. Include the badge on the wall. The Grove's marks may appear incidentally; don't make Grove branding the subject without permission. |
| **Community and events** | Clinics with families present. Use only with event-specific consent. Caption with event name and date only, **never children's names**. |

### 11.4 Technical and readability rules

- **Text over images:** avoid it. These photos are high-key (white walls), so white text over them fails. Put text on a **solid panel** beside the photo. If an overlay is unavoidable (e.g. a mobile banner), use a bottom scrim `linear-gradient(to top, rgb(0 0 0 / .85), transparent 60%)` and confirm ≥4.5:1 against the lightest pixel under the text.
- **Cropping:** set a focal point per image in the manifest (`object-position`). Never crop through faces or the ball at the action point. Use art direction (`<picture>` sources) for mobile crops of wide images. Approved ratios: **4:5, 4:3, 16:9, 1:1**. No ultra-thin banners below 3:1.
- **Delivery:** pre-generate AVIF + WebP at 640/960/1280/1920 px wide (never upscale beyond the original). Record intrinsic `width`/`height` in a typed manifest. Hero and first-viewport images are eager (`fetchpriority="high"`); everything else lazy. Target ≤ 200 KB for the hero image at 1280 px.
- **Alt text:** describe the action ("Coach watching players hold a defensive stance during an Academy session"). Don't name minors. Decorative images get `alt=""`.
- **Rights and consent:** every image entry in the manifest carries `rightsConfirmed: boolean` and `minorsConsent: boolean`. Default both to false (I8).

### 11.5 Photography to request from the client

1. **Originals** of all repo photos and the Wix site photos (full resolution).
2. **A homepage hero image**, landscape 3:2 and a portrait 4:5 crop of the same moment: coach + athletes mid-drill, badge visible, ≥ 2400 px wide.
3. **Fundamentals-age action** (younger players, smiling and learning).
4. **Individual Training 1:1** sessions with both coach levels (Academy Coach and Master Coach).
5. **Facility arrival:** exterior, entrance and parking. Families need to find it.
6. **Event photos** labelled by event and date, with consent status.
7. **Coach action shots** to pair with the headshots.
8. Optional: a 10–15 s muted training loop (≤ 2 MB, 1080p) for possible later use.
9. An **OG share image**, or approval to build one from the badge + a photo.

Recommend a half-day **photo shoot** at The Grove during regular sessions if originals are insufficient. It's the single biggest visual upgrade available.

## 12. Page Composition Guidelines

Each page lists (1) objective, (2) hero, (3) sections, (4) photography, (5) CTA and (6) mobile. Copy is Phase 5. Don't build wireframes from this; use it as the brief.

### 12.1 Homepage (highest priority)

1. **Objective:** in 10 seconds a parent knows what Showtime is, who it's for and where, and that the first step is a free session.
2. **Hero:** split hero A (black text panel + `photo-defensive-drill` for now). If the script wordmark is licensed, it may appear once, small, as a signature above the H1 (decorative artwork, with real text in the H1).
3. **Sections, in order:**
   1. Hero
   2. **Proof strip** (white, compact): 3–4 verified facts as inline label/value pairs separated by rules. Est. 2017 · Small-group training · Trains at The Grove, San Jose · coach credentials as stated. No icons.
   3. **Philosophy band** (black, 10.4)
   4. **Program index** (white, 10.2)
   5. **How to get started**: amber step rail (10.5)
   6. **Coaches teaser** (`neutral-100`): leadership trio + "Meet the coaches"
   7. **Facility / The Grove** photo split (16)
   8. Closing CTA band (black) + footer
4. **Photography:** hero, 3 program thumbnails, one facility image, 3 headshots. **No image repeats.**
5. **CTA:** Get Started (hero, step rail, closing). Secondary: Compare programs.
6. **Mobile:** CTA visible above the fold at 390×844. The program index omits photos. The sticky CTA bar appears after the hero. Total page length is roughly 8–9 screens at most.

### 12.2 About

1. **Objective:** trust in people, philosophy and place.
2. **Hero:** C (white), with a short positioning lead.
3. **Sections:** Story (Est. 2017; verified facts only, two-column text with a pull statement) → philosophy and L.E.A.D. (reuse 10.4, light variant) → leadership features → full coach grid → The Grove facility split → safety/trust block **only when provided (I15)** → closing CTA.
4. **Photography:** headshots; coach-teaching action; facility.
5. **CTA:** Get Started.
6. **Mobile:** leadership features stack (photo above text). The coach grid is 2 columns.

### 12.3 Programs overview

1. **Objective:** pick the right program.
2. **Hero:** C, with an H1 and one line framing the three programs.
3. **Sections:** program index (10.2) → **comparison table** (10.3) → how to get started (white step rail) → Athletic Development "coming soon" notice → closing CTA.
4. **Photography:** one per program row.
5. **CTA:** Get Started; per-row links to program pages.
6. **Mobile:** comparison table becomes stacked blocks. A small client-side hash handler maps old `#academy`-style links (migration doc 4.2).

### 12.4 Academy

1. **Objective:** qualify and attract experienced players; explain the evaluation.
2. **Hero:** B, with a fact row: Experience (per B4) · Team requirement · 60-min sessions · From $240/mo (if approved).
3. **Sections:** What it is (split with photo) → **Key performance indicators** as a numbered list (Anton numerals, 5 items, verbatim from S3) → **evaluation criteria** (three bold criteria: Coachability · Response to adversity & feedback · Cultural fit) → evaluation step rail → membership tiers (Academy table only) + acceptance notice → coaches → FAQ excerpts → closing CTA.
4. **Photography:** defensive drill, academy session, team-level action. It should feel the most intense of the three program pages.
5. **CTA:** **Apply for an Academy Evaluation**; secondary Get Started (pending B1).
6. **Mobile:** fact row 2×2; KPIs as a vertical list; the sticky bar uses the Academy CTA.

### 12.5 Fundamentalists

1. **Objective:** reassure parents of newer players; show growth toward Academy.
2. **Hero:** B, with a fact row: 1+ year experience · 60-min group class · From $200/mo (if approved).
3. **Sections:** What it is (split, warmer photo) → skills list (numbered rows) → "What a session looks like" (short text + 2-photo pair) → coaches (Lam, Ron; pending I6) → tiers + acceptance notice (B2) → **pathway to Academy** (a simple two-step visual: Fundamentalists → Academy, criteria as text) → closing CTA.
4. **Photography:** `photo-shooting-form`, `photo-youth-coaching`. Younger, smiling, hands-on.
5. **CTA:** Get Started.
6. **Mobile:** photo pair becomes one image; the pathway visual stacks vertically.

### 12.6 Individual Training

1. **Objective:** sell 1:1 sessions with clear coach levels and prices.
2. **Hero:** B, with a fact row: 60 min · 1-on-1 · $80 / $100 per session (if approved).
3. **Sections:** focus areas (shooting mechanics, footwork, ball-handling, finishing, movement), as a two-column list → **coach level chooser**: two side-by-side options (Academy Coach $80 with Lam and Ron; Master Coach $100 with Derrick and Ant), each with its own booking button. This is the one place two equal CTAs are correct. → Cancellation policy (Minos wording, verbatim) → "Not sure? Ask a question" inquiry → closing band.
4. **Photography:** 1:1 teaching shots (request). Interim: `photo-shooting-form`, `photo-individual-form` (small).
5. **CTA:** **Book Individual Training** per coach level; secondary Ask a question.
6. **Mobile:** coach levels stack. The booking button stays directly under each price.

### 12.7 Memberships

1. **Objective:** compare tiers and understand policies; route members to Minos.
2. **Hero:** C, with a lead that says acceptance comes first.
3. **Sections:** acceptance notice → plan tables (10.7) → drop-ins (only confirmed prices; omit the Fundamentalists drop-in until C8) → policy accordions (verbatim) → keep an `id="how-to-become-a-member"` section linking to `/get-started` → members box (Member Login & Booking).
4. **Photography:** none required (one small image at most). This page is information.
5. **CTA:** prospects: Get Started; members: Member Login & Booking (secondary style). **No purchase links** (B2).
6. **Mobile:** tables stack. Accordions are full width. Prices stay legible at 32 px or more.

### 12.8 Events

1. **Objective:** show what's coming, or say clearly that nothing is, and keep the community feel.
2. **Hero:** C (compact).
3. **Sections:** upcoming list or empty state (10.9) → past events list (Playmakers Clinic, CYS clinic) → follow on Instagram → closing CTA.
4. **Photography:** event-labelled photos only, with consent. Otherwise none.
5. **CTA:** event RSVP when an event exists; otherwise Get Started.
6. **Mobile:** date block sits above the title; chips wrap.

### 12.9 Get Started (primary enrollment page) and Contact

**Get Started** (`/get-started`)
1. **Objective:** remove uncertainty about the first step.
2. **Hero:** C, with an H1 and a one-line promise (wording per B1).
3. **Sections:** amber step rail (10.5) → "Which program?" short chooser (three links) → what to bring and what to expect (from the official event and FAQ details where verified) → waiver step explanation (links to `/waiver#complete-waiver`) → inquiry CTA.
4. **Photography:** one welcoming session image.
5. **CTA:** **Send an Inquiry** (Minos), the single primary.
6. **Mobile:** the step rail is vertical; the CTA follows immediately after the last step.

**Contact** (`/contact`)
1. **Objective:** location and the right contact route.
2. **Hero:** C (compact).
3. **Sections:** address block (large, copyable) + "Get directions" + facility arrival photo (when supplied) → contact routes (inquiry form; phone and email only after B8) → members box → static map image or link. **No embedded Google Map iframe** (performance and privacy); a static image with a link is enough.
4. **Photography:** facility exterior (request).
5. **CTA:** Send an Inquiry.
6. **Mobile:** address first, directions button full-width.

## 13. Responsive Design

- **Mobile first.** Design at 390 px, then verify at 320 px. Scale up at 768, 1024, 1280 and 1440.
- **Breakpoints:** Tailwind defaults (`sm` 640, `md` 768, `lg` 1024, `xl` 1280). Desktop nav starts at `lg`.
- **Required checks:** 320, 390, 768, 1024, 1440. No horizontal overflow at any of them.
- **Mobile is its own composition,** not a squeezed desktop:
  - The sticky CTA bar replaces repeated in-page CTAs.
  - The program index drops photos on Home.
  - The comparison table becomes stacked blocks.
  - Splits stack text-first unless the photo carries essential meaning.
  - Section padding drops to 64 px.
- **Tablet (768–1023):** splits stay stacked until `lg`, except proof strips and plan tables, which can go two-up.
- **Touch:** 44×44 px minimum for primary actions and nav; at least 24×24 px for any target (WCAG 2.5.8); 8 px minimum spacing between adjacent targets.

## 14. Accessibility

WCAG 2.2 AA is the baseline (agency `CLAUDE.md`; migration doc section 6). Design-level commitments:

- **Contrast:** use only the pairs in 5.3. Amber is a **fill under dark text** or **text on dark**. Never amber text or amber icons conveying meaning on light surfaces. Non-text UI (inputs, focus rings, chips that convey state) reaches 3:1.
- **Focus:** a visible `:focus-visible` ring on every interactive element (5.2), never removed. The skip link appears on focus.
- **Structure:** one H1 per page, logical H2/H3, and landmarks. Step rails are `<ol>`. Tables are real tables. FAQs use `<details>`.
- **Not colour alone:** current nav state uses an underline + `aria-current`. Notices have an icon + label. Errors have text + icon.
- **Motion:** respect `prefers-reduced-motion` (section 15).
- **Images:** accurate alt text; no text baked into images (the Wix steps image is replaced by real text).
- **Forms:** none on-site at launch (Minos handles them). If any are added: visible labels, no placeholder-as-label, inline errors linked with `aria-describedby`, error summary on submit.
- **Zoom:** the layout holds at 200% zoom and with 400% reflow at 320 px.
- Automated checks (axe/Lighthouse) during build. **They are not proof.** Keyboard and screen-reader spot checks happen in Phase 8.

## 15. Motion and Interaction

- **Default: almost none.** Motion only communicates state.
- **Allowed:**
  - Colour and underline transitions at 150 ms
  - Button arrow nudge at 150 ms
  - Dropdown and drawer open/close at 200 ms (`cubic-bezier(0.22, 1, 0.36, 1)`)
  - Accordion open with no height animation (native `<details>`)
- **Not allowed:**
  - Scroll-triggered reveal and fade-in on sections
  - Parallax
  - Auto-advancing carousels
  - Counters that animate numbers
  - Animation libraries (Framer Motion, GSAP)
  - Autoplaying hero video at launch
- **Reduced motion:** all transitions drop to instant. If video is ever added, show the poster image only.
- **Hover is never the only way** to reveal information or navigation.

## 16. Relationship with The Grove

**What's verified:** Showtime trains at The Grove (2099 S 10th St, Unit 90). The Grove says it is "home to Showtime Basketball Academy", and the waiver names both as providers (PRODUCT 11). **The legal and ownership relationship is unconfirmed (I9).**

**The Grove's visual identity** (thegrove.work, observed 2026-10-10): warm off-white #F8F8F4, olive-charcoal #3E3D35, near-black #1C1C1C, an amber accent #FFB800, the Wix Madefor Display typeface, and a geometric black wall mark.

**Recommendations (PROPOSED):**

- **Showtime stays visually distinct.** Use Showtime's black/white/amber, Anton and the badge. **Don't adopt The Grove's off-white, olive or Madefor type.** This is one more reason to drop the repo's cream backgrounds, which drift toward The Grove's palette.
- The shared amber is a happy coincidence. Don't build any visual "family" device on it without client direction.
- **Acknowledge The Grove in text, not logos:**
  - A dedicated **facility section** on Home and About: "Showtime trains at The Grove in San Jose" (interim wording from I9), with the address and a text link to `thegrove.work`.
  - The **footer location line** names The Grove.
  - Facility claims (10,000 sq ft, FIBA-certified flooring) appear **only if approved** (U4).
- **Grove logo:** don't place it as a partner logo or in a co-branded lockup until the client confirms the relationship and The Grove grants permission. Its incidental appearance on walls in photos is fine, subject to photo rights (I8).
- **No ownership language** ("our facility", "owned by") until I9 is answered.
- **Optional later:** if the client approves, a small "Community" note about The Grove's scholarship and outreach work (PRODUCT 11), as text with a link.

## 17. Implementation Guidance for Next.js/Tailwind

These are proposals. **Do not create a Tailwind config in Phase 3.**

### 17.1 Tokens (Tailwind v4 `@theme`, CSS-first)

```css
/* app/globals.css (proposed) */
@import "tailwindcss";

@theme {
  /* Colour: see DESIGN.md 5.1 for status */
  --color-amber-100: #FFE6B4;
  --color-amber-500: #FFAC00;  /* brand, VERIFIED */
  --color-amber-600: #E69A00;  /* hover */
  --color-amber-700: #8A5D00;  /* amber text on light only */
  --color-black: #000000;      /* VERIFIED */
  --color-charcoal: #1E1E1E;   /* VERIFIED; body text on light */
  --color-charcoal-800: #2A2A2A;
  --color-white: #FFFFFF;
  --color-neutral-100: #F2F2F2;
  --color-neutral-300: #D9D9D9;
  --color-neutral-500: #8C8C8C;
  --color-neutral-600: #5C5C5C;
  --color-muted-dark: #B8B8B8;
  --color-line-dark: #3D3D3D;
  --color-error: #B42318;
  --color-error-dark: #FF6B5E;
  --color-success: #1E7A3A;

  /* Type: families come from next/font CSS variables */
  --font-display: var(--font-anton), "Arial Narrow", Impact, sans-serif;
  --font-sans: var(--font-figtree), system-ui, -apple-system, "Segoe UI", sans-serif;

  --text-display-xl: clamp(3rem, 1.8rem + 6vw, 7rem);
  --text-display-xl--line-height: 0.95;
  --text-display-lg: clamp(2.5rem, 1.7rem + 4vw, 5rem);
  --text-display-lg--line-height: 0.95;
  --text-h2: clamp(2rem, 1.5rem + 2.5vw, 3.5rem);
  --text-h2--line-height: 1;
  --text-h3: clamp(1.25rem, 1.1rem + 0.75vw, 1.625rem);
  --text-h3--line-height: 1.2;
  --text-lead: clamp(1.1875rem, 1.1rem + 0.3vw, 1.3125rem);
  --text-lead--line-height: 1.5;
  --text-body: 1.0625rem;
  --text-body--line-height: 1.6;
  --text-label: 0.8125rem;
  --text-label--letter-spacing: 0.12em;

  --radius-sm: 2px;
  --ease-out-court: cubic-bezier(0.22, 1, 0.36, 1);
}
```

### 17.2 Practices

- **Fonts:** `next/font/google`. `Anton({ weight: '400', subsets: ['latin'], variable: '--font-anton' })` and `Figtree({ weight: ['400','600','700'], subsets: ['latin'], variable: '--font-figtree' })`. Preload Anton (it's in the LCP H1). Keep an `"Arial Narrow"`/Impact fallback with `size-adjust` to limit CLS.
- **Components** (names indicative):
  - `SiteHeader`, `ProgramsMenu`, `MobileDrawer`, `StickyCta`
  - `Hero` (variants `split | program | simple`)
  - `ProgramIndex`, `ComparisonTable`, `PhilosophyBand`, `StepRail`
  - `CoachFeature`, `CoachGrid`, `PlanTable`, `Notice`, `EventRow`, `CtaBand`, `SiteFooter`
  - `Button` (variants `primary | secondary`, `surface: light | dark | amber`)
- **Surface context:** pass a `surface` prop (or a `data-surface` attribute) on sections so buttons, links and focus rings choose the correct contrast pair automatically. Don't hand-pick colours per instance.
- **Client JS only for:** mobile drawer, programs dropdown, sticky CTA observer and the programs hash redirect. Everything else is a Server Component (static export).
- **Images:** a typed `images.ts` manifest (`src`, `width`, `height`, `alt`, `focal`, `rightsConfirmed`, `minorsConsent`). `next/image` with `unoptimized: true` plus pre-generated `srcset`, or `<picture>` for art-directed crops. Never ship the original PNGs.
- **Logo:** an inline SVG component once a vector exists, with `currentColor` so it can be white on dark or black on light. Interim: an optimised PNG/WebP at 2× display size.
- **Icons:** a small set of inline SVGs (menu, close, chevron, external, info, social). No icon library unless more than ~15 icons are needed. **No emoji as icons.**
- **Content flags:** `showPricing`, `showLeadStandards`, `showTestimonials`, `showScriptWordmark` live in one config, so client decisions are a one-line change.
- **Performance budgets:**
  - LCP ≤ 2.5 s on mid-range mobile
  - CLS ≤ 0.1
  - JS ≤ ~70 KB gzipped on content pages
  - Two font files in the critical path at most

## 18. Brand Decisions Requiring Client Approval

| # | Decision | Recommendation | Status |
|---|---|---|---|
| D1 | **Official accent colour**: amber #FFAC00 (Wix) vs burnt orange #E85D04 (repo) | **Amber #FFAC00.** Retire orange and cream. | CLIENT APPROVAL (I13). Build with amber. |
| D2 | **Script "It's Showtime" wordmark**: the font ("Escape the Ordinary") is personal-use only | Obtain a commercial licence or the original licensed artwork as SVG. Until then, don't use it. | CLIENT APPROVAL (I13). Blocks use of the script mark, not development. |
| D3 | **Vector logo** (badge) and any program lockups ("SHOWTIME *Academy*") | Supply SVG/AI/EPS masters | CLIENT INPUT (I13) |
| D4 | **Body typeface**: Figtree replaces Avenir (Wix-licensed) and Netflix Sans (proprietary) | Figtree, unless the client owns Avenir web licences | CLIENT APPROVAL (low risk) |
| D5 | **Button shape**: sharp 2 px rectangles instead of Wix's amber pills | Sharp. It's more disciplined and distinctive. | PROPOSED (low risk; easy to change) |
| D6 | **Combined black header bar** instead of separate logo band + white nav bar | Combined | PROPOSED |
| D7 | **Photography**: originals, Wix-site photo originals, rights, minors' consent, a possible shoot | Request originals plus a half-day shoot | CLIENT INPUT (I8) |
| D8 | **Grove acknowledgement**: wording, use of The Grove's logo, facility claims | Text-only acknowledgement; no logo or ownership language until confirmed | CLIENT INPUT (I9, U4) |
| D9 | **L.E.A.D.** as a visual feature | Feature it, behind a flag | CLIENT INPUT (I1) |
| D10 | Hero video at a later stage | Not at launch | Optional |

## 19. Reference Sources

All accessed 2026-10-10.

| Source | What was used |
|---|---|
| `https://www.showtimebasketballacademy.com/` (S1) | Computed colours, Wix theme variables (`--color_1…60`), font families, button styles, layout. A full-page screenshot was analysed and not stored. |
| `https://www.showtimebasketballacademy.com/academy` (S3) | Inner-page layout, "SHOWTIME *Academy*" lockup, photography quality |
| Wix font files (`static.wixstatic.com/ufonts/…`) | Name tables read for identification only (Netflix Sans, Escape the Ordinary, SF Pro Display). Not stored in the repo or redistributed. |
| `https://www.thegrove.work/` (G1) | The Grove's palette and typeface, for differentiation only |
| `assets/img/*` | Repo image audit (11.2) |
| `styles/tokens.css` | The repo's current palette and type (2.2) |
| `research/site-audit.md` | Section 4.3 brand comparison; section 7 design findings; section 9 contrast failures |
| `PRODUCT.md` | Positioning, programs, journeys, facts, the Grove relationship |
| `research/migration-requirements.md` | Static export constraints; accessibility acceptance criteria |
| `research/screenshots/reference-home-1440.png` | Stored reference of the Wix homepage |
