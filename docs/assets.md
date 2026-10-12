# Asset inventory and approvals

Source: the original repo's `assets/img/` (read only, not modified). Photos were converted from PNG to WebP (quality 80, original dimensions; nothing is over 1024px). Headshots were capped at 640px wide. Dimensions and alt text live in `lib/images.ts`.

**No asset here is cleared for launch.** Every photo has `rightsConfirmed: false` and `minorsConsent: false` (CONTENT_NEEDED I8, DESIGN 11).

## Migrated

| File | Used on | Approval needed |
| --- | --- | --- |
| `public/images/brand/showtime-badge.png` (278×290, unchanged copy) | Header, footer | Vector master requested (DESIGN D3). Raster works only on black. |
| `app/icon.png` (192), `app/apple-icon.png` (180) | Favicon, touch icon | Generated from the badge on black. Regenerate from the vector when supplied. |
| `photos/defensive-drill.webp` | Home hero | Rights; minors pictured |
| `photos/academy-session.webp` | Academy hero, programs index | Rights; minors pictured; **The Grove's wall mark is prominent** (CONTENT_NEEDED I9) |
| `photos/shooting-form.webp` | Fundamentalists hero, programs index | Rights; minors pictured |
| `photos/youth-coaching.webp` | Programs index (Individual Training row) | Rights; minors pictured |
| `photos/individual-form.webp` | Individual Training hero | Rights; minor pictured; low resolution |
| `photos/grove-session.webp` | Home and About (The Grove) | Rights; minors; **The Grove's wall mark is prominent** (I9) |
| `photos/ladder-coach.webp`, `coaching-strength.webp`, `ballhandling-drill.webp` | Not used yet | Rights; minors |
| `coaches/*.webp` (11 headshots) | Home and About (leadership 3); the rest are not used yet | Confirm photo use and current roster (CONTENT_NEEDED I6) |

## Not migrated (deliberately)

| File | Reason |
| --- | --- |
| `photo-team-huddle.png`, `photo-youth-circle.png` | Probably another venue; rights unknown |
| `photo-grove-court.png` | The Grove's own branding is the subject |
| `photo-hero-jump.png` | 765 KB, low resolution, wrong alt text in the old repo |
| `photo-group-circle.png`, `photo-agility-ladder.png` | Ultra-thin crops (below the 3:1 limit) |
| `placeholder-*.svg`, `images/showtime-logo.png` | Placeholders; duplicate logo |
| Wix and Instagram imagery | Rights unconfirmed. Request originals from the client instead. |

## Fonts

Anton and Figtree (both SIL OFL) are loaded through `next/font/google` and self-hosted at build time. Wix's Netflix Sans, SF Pro, Avenir and the "Escape the Ordinary" script are **not** used (DESIGN 6.1).

## Still needed from the client

High-resolution originals, a hero image, Individual Training 1:1 shots, a facility exterior, an OG share image and a vector logo. The full shot list is in DESIGN.md 11.5.
