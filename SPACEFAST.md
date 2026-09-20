# Spacefast build spec

This project is edited and previewed in Lovable and published as a fully
static site: every public page is prerendered to HTML at build time.

## Commands

| Step    | Command                                             |
| ------- | --------------------------------------------------- |
| Install | `npm install`                                       |
| Build   | `vite build && node scripts/copy-static-output.mjs` |

(`npm run build` runs exactly that.)

## Output directory

- **Publish this:** `dist/client`
- Raw prerender output it is copied from (when present): `.output/public`

In this project the prerender pass writes straight into `dist/client`, so
`scripts/copy-static-output.mjs` detects that and exits cleanly with
`.output/public missing; dist/client already populated`. It exists so the build
keeps working if a future Nitro/TanStack version emits `.output/public`
instead: then it cleans `dist/client` and copies the output across. Either way,
the directory to publish is always `dist/client`.

## Prerendered routes

Configured in `vite.config.ts` under `tanstackStart.pages`, with
`prerender: { enabled: true, autoStaticPathsDiscovery: false }`:

`/`, `/colors`, `/typography`, `/scale`, `/theme`, `/icons`, `/components`,
`/delivery`, `/licenses`

Each lands at `<route>/index.html` (`/` at `index.html`). The editor-only
preview routes (`/__mockup/...`, `/__component/...`) are deliberately not
prerendered and are disallowed in `robots.txt`.

Do **not** set `nitro: { preset: "static" }` — it breaks this SSR build
("rolldownOptions.input should not be an html file").

## No server-side code

Spacefast serves only built static output — no server-side code, so this
project carries no server deployment configuration (no Worker entrypoint, no
`wrangler.jsonc`). Every page is prerendered; nothing runs at request time.

## Static files served from `public/`

- `sitemap.xml` — all nine public routes
- `robots.txt` — allows crawlers, points at `/sitemap.xml`
- `_redirects` — `/*  /index.html  200` so deep links and refreshes work
- `favicon.png`

## Not available on the static site

The theme editor's "Save as default" button writes `src/webawesome/brand.css`
and only works while developing locally. On the published site it says so and
points at "Copy CSS" instead. Everything else — live theme preview, dark mode,
icon search, component demos, hCaptcha — runs entirely in the browser.
