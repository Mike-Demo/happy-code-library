# Spacefast build spec

This project is edited and previewed in Lovable and published as a fully
static site: every public page is prerendered to HTML at build time.

## Commands

| Step    | Command                                               |
| ------- | ----------------------------------------------------- |
| Install | `npm install`                                         |
| Build   | `vite build && node scripts/copy-static-output.mjs`    |

(`npm run build` runs exactly that build command.)

## Output directory

- **Publish this:** `dist/client`
- Raw build output it is copied from: `.output/public`

`scripts/copy-static-output.mjs` copies `.output/public` into a clean
`dist/client` after the build. It is idempotent and skips gracefully if the
output already lives in `dist/client`.

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

## Static files served from `public/`

- `sitemap.xml` — all nine public routes
- `robots.txt` — allows crawlers, points at `/sitemap.xml`
- `_redirects` — `/*  /index.html  200` so deep links and refreshes work
- `favicon.png`

## Not available on the static site

The theme editor's "Save as default" button writes `src/webawesome/brand.css`
and only works while developing locally. On the published site it reports that
and suggests "Copy CSS" instead. Everything else — live theme preview, dark
mode, icon search, component demos — runs entirely in the browser.
