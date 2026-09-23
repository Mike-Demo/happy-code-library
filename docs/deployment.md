# Deployment

The site is **fully static**. Every public page is rendered to HTML at build
time; nothing runs at request time. There is no database, no auth, no edge
function and no Worker entrypoint.

## Build

| Step | Command |
| --- | --- |
| Install | `bun install` (the host runs `npm install`) |
| Build | `bun run build` → `vite build && node scripts/copy-static-output.mjs` |
| Publish | the `dist/client` directory |

`scripts/copy-static-output.mjs` normalizes the output: if the toolchain writes
`.output/public`, it clears `dist/client` and copies the files across; if the
prerender pass already wrote `dist/client` (current behaviour) it logs
`.output/public missing; dist/client already populated` and exits 0. Either way,
the directory to publish is always `dist/client`.

## Prerendered routes

Configured in `vite.config.ts` under `tanstackStart.pages` with
`prerender: { enabled: true, autoStaticPathsDiscovery: false }`:

`/`, `/colors`, `/typography`, `/scale`, `/theme`, `/icons`, `/components`,
`/delivery`, `/licenses`

Each lands at `<route>/index.html` (`/` at `index.html`). Adding a public route
means adding it to that `pages` list — discovery is off on purpose so the
editor-only preview routes (`/__mockup/...`, `/__component/...`) are never
prerendered.

Do **not** set `nitro: { preset: "static" }`; it breaks this build.

## Host: Spacefast

[`SPACEFAST.md`](../SPACEFAST.md) is the terse spec the host reads. Spacefast
serves built output only — its docs state plainly not to use it for server-side
code, background jobs, cron or databases. There is no SSR mode to switch on, so
prerendered static output is the only shape that runs there.

### Publish loop

1. Edit and preview in Lovable.
2. Sync the project to GitHub (`Mike-Demo/happy-code-library`, branch `main`).
3. Re-run the Spacefast build — it clones the repo and runs install + build.

### Known failure modes

- **"Unsupported platform features … Cloudflare Worker entrypoints are not
  converted."** The repo contains a Worker entrypoint. `wrangler.jsonc` and
  `@cloudflare/vite-plugin` were removed for exactly this reason — if the error
  returns, check nothing reintroduced them (note that `dist/` can contain a
  stale build artifact of that name, but `dist/` is gitignored).
- **Same error on code that is already fixed.** The host built an older commit.
  Confirm the commit hash in the build log matches the repo tip, re-check the
  GitHub sync status, then re-run the build.

## Redirects and static files, served from `public/`

- `_redirects` — `/*  /index.html  200`, so deep links and refreshes resolve
  even where a prerendered file is missing.
- `sitemap.xml` — the nine public routes.
- `robots.txt` — allows crawlers, disallows `/__mockup/` and `/__component/`,
  points at `/sitemap.xml`.
- `favicon.png` — 64px derivative of `src/assets/logos/brand-mark.png`, linked
  from `src/routes/__root.tsx`.

## Domain and DNS

A custom domain is configured at the host, not in this repo. Two things to
update in the repo once the domain is final:

1. `public/sitemap.xml` — the absolute URLs (currently
   `https://happy-code-library.lovable.app`).
2. `public/robots.txt` — the `Sitemap:` line.

DNS records themselves (A / CNAME for apex and `www`) are set with the registrar
per the host's instructions; nothing in the build depends on them.

## Not available on the static site

The theme editor's **"Save as default"** writes `src/webawesome/brand.css` and
only works while developing locally. On the published site it says so and points
at "Copy CSS". Everything else — live theme preview, dark mode, icon search,
component demos, hCaptcha — runs entirely in the browser.

## Compression and minification

Vite minifies and content-hashes assets; the hosting edge handles gzip/Brotli.
Do not add application-level compression — doubling it up breaks some browsers.
