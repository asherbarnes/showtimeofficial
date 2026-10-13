---
target: app/hall-of-fame/page.tsx
total_score: 20
max_score: 28
na_heuristics: 5,7,9,10
p0_count: 0
p1_count: 1
target_identity: "file:/Users/file/webdesign/clients/showtime-nextjs/app/hall-of-fame/page.tsx"
target_fingerprint: "sha256:8fa0059c8f98f3b633acac70541e95e9a9b66e30e391f6a5137191a11fd17e6a"
target_path: /Users/file/webdesign/clients/showtime-nextjs/app/hall-of-fame/page.tsx
timestamp: 2026-10-12T03-40-14Z
slug: app-hall-of-fame-page-tsx
---
Method: dual-agent (A: design review · B: detector + browser evidence)

## Design Health Score
| # | Heuristic | Score | Key Issue |
|---|---|---|---|
| 1 | Visibility of System Status | 3 | "05 Players featured" orients; unlisted by design |
| 2 | Match System / Real World | 3 | Roster vocabulary fits; "Entries keep the order of the original Hall of Fame" is internal provenance; "UMary" unexplained |
| 3 | User Control and Freedom | 3 | Header/footer exits; no parent context link |
| 4 | Consistency and Standards | 2 | Anton H3 names and hand-built black hero diverge from DESIGN 6.3 / 10.1, undocumented |
| 5 | Error Prevention | n/a | No inputs |
| 6 | Recognition Rather Than Recall | 3 | At lg, field labels are sr-only; only the header row names columns |
| 7 | Flexibility and Efficiency | n/a | Static five-item list |
| 8 | Aesthetic and Minimalist Design | 3 | Disciplined; empty Professional column and extra heading tier cost a point |
| 9 | Error Recovery | n/a | No error states |
| 10 | Help and Documentation | n/a | Content page (correction/removal route is a content gap, I11) |
| **Total** | | **20/28** | **Good (71%)** |

## Design Specificity Verdict
Authored for Showtime at the top (black band, court arc, amber "05" scoreboard figure, black jersey-number blocks, Anton names), generic in the middle (standard SectionHeading stack; at desktop a sparse four-column grid). Detector: CLI clean (0 findings, exit 0). Browser overlay: kicker-above-heading and hero-eyebrow-chip on "Player Pathways" (borderline: on-system label pattern, but a repeated template move); gpt-thin-border-wide-shadow on the shared header dropdown (out of scope). Contrast all AA (lowest 6.69:1); no overflow 320–1440; CTAs 52px tall; 0 console errors.

## Priority Issues
1. [P1] Empty desktop columns imply absence (PlayerRoster.tsx fixed lg:col-start grid). 4 of 5 Professional cells and Brandon Boyd's high school are blank under a column header, reading as "didn't reach", the meaning the omit rule exists to avoid. Fix: drop fixed columns at lg; render each player's present stages in order with visible labels (pathway row). → /impeccable layout
2. [P2] Too much heading before the first name (page.tsx:57–62). "The roster" H2 + provenance lead add a fourth Anton tier and push the first entry to ~812px at 320. Fix: visually hidden H2 or small type-label; move provenance to comments/CONTENT_NEEDED. → /impeccable distill
3. [P2] Undocumented system departures: Anton H3 names, one-off hero not using PageHero. Fix: record a "record board" + "feature hero" variant in DESIGN.md 10.x, or fold the hero into PageHero. → /impeccable typeset, then document
4. [P2] Edge cases: "01 Players featured" plural bug; "05" read as "zero five"; key={player.name} collides on duplicates; items-center misaligns long names; header row not sticky. → /impeccable harden
5. [P3] Black CTA band runs into black footer; close has no distinct moment. Fix: surface="amber" CtaBand (allowed once per page; none used here). → /impeccable colorize

## Persona Red Flags
- Jordan (first-time parent): provenance line meaningless; no inclusion criteria shown; "UMary"; empty Professional cells read as failure.
- Sam (screen reader): good ol > h3 > dl structure; hero section unnamed; "05" announced "zero five".
- Casey (mobile, 320): no player name in first viewport; values ~130px wide wrap; no sticky CTA (fine for a Read page).

## Minor Observations
- 768: entries use ~55% width; inline pathway could start at md.
- Amber used twice in the hero (eyebrow rule + bottom rule): at the limit.
- lg dd uses font-semibold with text-h4 (spec h4 is 700).
- Arc reads as continuous with the black header because both are black; it is clipped to the hero.

## Questions to Consider
- Should "Professional" be a column, or is the honest structure "where each went next"?
- Should the roster start on the black band itself?
- Does a lone pro entry visually rank Brandon Boyd above the others?
- Should a consent-pending recognition page close on a sales CTA at all?
