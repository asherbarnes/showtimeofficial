# Showtime Basketball Academy — Next.js rebuild

A rebuild of the Showtime Basketball Academy website as a maintainable, accessible, mobile-first Next.js site. This repository currently holds the application scaffold and the planning documents; the site itself has not been implemented yet.

## Stack

- [Next.js](https://nextjs.org) 16 (App Router, `src/` directory)
- TypeScript
- Tailwind CSS v4
- ESLint (`eslint-config-next`)
- npm

## Development

```bash
npm install       # install dependencies
npm run dev       # start the dev server at http://localhost:3000
npm run build     # production build
npm run start     # serve the production build
npm run lint      # run ESLint
```

## Planning documents

| File | Purpose |
| --- | --- |
| `PRODUCT.md` | Source of truth for business facts, audience, offers and conversion goals |
| `DESIGN.md` | Brand identity and visual decisions |
| `CONTENT_NEEDED.md` | Open questions and content still needed from the client |
| `research/site-audit.md` | Audit of the original site |
| `research/migration-requirements.md` | Requirements for migrating from the original site |

## Relationship to the original site

The original site is a static HTML site in [asherbarnes/Showtimebasketball](https://github.com/asherbarnes/Showtimebasketball). This is a separate, independent repository: nothing here is pushed to or changes the original repository. The planning documents were copied from the original project's working directory and are maintained here from now on.

Hosting has not been decided. If the site stays on GitHub Pages, it must be built as a static export (no server-only features); any hosting change needs client approval.
