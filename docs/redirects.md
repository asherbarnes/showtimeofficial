# Redirect requirements (not implemented)

Legacy redirects are deliberately **not built yet**. They depend on the hosting and domain decision (CONTENT_NEEDED B7). This file records what the domain migration must cover. The source analysis is in `research/migration-requirements.md` section 4; ignore its GitHub Pages-specific mechanics unless that host is chosen.

## Preferred mechanism

Real HTTP **301** redirects at the host or CDN (for example `redirects()` in `next.config.ts` on a server-capable host, or the host's redirect rules). Fall back to static meta-refresh stubs only if the chosen host can't issue 301s.

## Wix URLs (production domain, indexed by search engines)

| Old path | New path | Notes |
| --- | --- | --- |
| `/aboutus` | `/about` | |
| `/academy` | `/programs/academy` | |
| `/fundamentalists` | `/programs/fundamentalists` | |
| `/individualtraining` | `/programs/individual-training` | |
| `/individualtraininginquiries` | `/programs/individual-training#book` | The Wix inquiry form is lost (CONTENT_NEEDED I5) |
| `/athleticdevelopment`, `/coming-soon-01` | `/programs` | Athletic Development is deferred |
| `/how-to` | `/get-started` | |
| `/event-list` | `/events` | |
| `/event-details/playmakers-clinic-2025-03-01-13-00` | `/events` | |
| `/event-details/showtime-basketball-x-cys-elevate-your-game` | `/events` | |
| `/showtime-faqs` | `/faqs` | |
| `/memberships`, `/waiver` | same | No redirect needed |
| `/paywall`, `/pricing-plans/do-not-go-here` | — | Wix artefacts; let them 404 |

## Old GitHub Pages repo URLs (`*.html`)

Only relevant if the site ever serves the old `asherbarnes.github.io/Showtimebasketball` URLs. `/about.html` → `/about`, and so on for every page. `hall-of-fame.html` → `/hall-of-fame` (a noindex draft; see CONTENT_NEEDED I11).

## Fragment links (client-side only)

Servers never see `#fragments`, so these need a small client-side handler on the target page if old links must keep working:

- `/programs#academy` → `/programs/academy`
- `/programs#fundamentalists` → `/programs/fundamentalists`
- `/programs#individual` → `/programs/individual-training`
- `/programs#athletic` → stay on `/programs`
- `/memberships#how-to-become-a-member`: already preserved as a section id
- `/waiver#complete-waiver`: already preserved as a section id

## Before cutover

1. Choose one canonical host (www or apex), then set `SITE_URL`.
2. Re-verify every Minos URL in `lib/site.ts` (lesson IDs can change).
3. Replace the Wix-only waiver and Individual Training inquiry forms (CONTENT_NEEDED B6, I5).
4. Submit the new sitemap in Search Console (CONTENT_NEEDED O6).
