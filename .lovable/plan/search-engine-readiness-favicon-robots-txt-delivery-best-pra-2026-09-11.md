# Search-engine readiness: favicon, robots.txt, delivery best practices

## Goal
Give the design system a proper icon and crawler instructions, and confirm the code it ships is delivered efficiently — so any real site built on it starts search-engine-ready.

## 1. Favicon
- Generate a simple square brand mark for the design system (bold, legible at 16px).
- Save the full-size mark as a brand asset at `src/assets/logos/brand-mark.png` so projects that attach this design system inherit it.
- Add a downscaled square copy at `public/favicon.png` for this showcase site.
- Point the icon link in `src/routes/__root.tsx` at `/favicon.png` and remove the leftover default `public/favicon.ico`.

## 2. robots.txt
- Add `public/robots.txt` allowing all crawlers, and excluding the internal preview paths (`/__mockup/`, `/__component/`) that exist only for the editor.
- No sitemap line yet: this project has never been published, so there is no live address to point crawlers at. That can be added the moment it goes live.

## 3. Delivery best practices
- Confirm the production build already minifies and content-hashes the shipped code and styles (it does — the two large vendor files are readable source in development and minified on build).
- Confirm compression: the hosting edge applies gzip/brotli automatically; adding our own compression would double-compress and is deliberately skipped.
- Record both facts, plus the favicon/robots defaults, in `.lovable/system.md` as rules, so projects built on this design system follow the same setup instead of re-inventing it.
- Add a short "Search readiness" note to `roadmap.md`.

## Verification
- Typecheck the project.
- Load the showcase and confirm the new icon is requested successfully and `/robots.txt` serves the expected text.
- Confirm no console errors.

## Notes
Each showcase page already has its own title and description, so no metadata rework is needed. Once you publish, the icon and robots file are live at your real address; head changes only reach a live site on the next publish.
