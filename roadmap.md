# Roadmap — Web Awesome + Font Awesome Design System

Decision records for every completed item live in `.lovable/plan/`.
Architecture notes: [`docs/architecture.md`](docs/architecture.md).

## Done

### Foundation
- [x] Install pinned upstreams as build inputs: `@awesome.me/webawesome@3.12.0`,
      `@fortawesome/fontawesome-free@7.3.1` (devDependencies only)
- [x] `.lovable/` setup: `meta.yaml`, `sources.yaml`, `system.md`, `lovable.toml`, `.dsignore`
- [x] `src/webawesome/` design-system folder — theme entry, loader, JSX types, barrel
- [x] Root wiring: theme CSS link, html theme classes
- [x] Converted to a **local** design system (`source_type: local`) — no npm-backed
      classification, no Enterprise gate
- [x] Typed React wrappers for all 70 elements, generated from Web Awesome's
      custom-elements manifest
- [x] Self-contained vendor bundle built by `scripts/build-vendor.ts` — registers all
      70 elements, no runtime npm and no JS CDN
- [x] Icon path pinned to Font Awesome 7.3.1 inside the bundle, before any element
      registers (Web Awesome hardcodes 7.3.0; newer icons 403)
- [x] Stylesheets load from version-pinned CDN `<link>` tags; local token snapshot in
      `tokens.css` for extraction
- [x] Loader mounted inside routed content (showcase shell) to avoid hydration
      mismatches
- [x] Anti-FOUCE `wa-cloak` utility wired in

### Showcase
- [x] Multi-page showcase: Overview, Colors, Typography, Scale & depth, Theme editor,
      Icons, Components, Delivery & SSR, Licenses
- [x] Components page: all 70 elements with live variants/states, copyable code,
      searchable sidebar
- [x] Icons page: full 2,883-icon searchable index (solid/regular/brands) with
      copy-to-clipboard
- [x] Dark-mode toggle, persistent across routes
- [x] Unique `head()` metadata per route
- [x] Showcase uses the library's own typed React wrappers, not raw custom-element tags

### Patterns
- [x] `SiteFooter` + `LicensesPage` — required in every consuming app per `system.md`
- [x] hCaptcha component: visible/compact/invisible, imperative
      `execute`/`reset`/`getResponse`, hidden token field, auto light/dark theme
- [x] Theme editor: live token editing (colors, fonts, spacing/density, corners,
      shadows), localStorage preview, `brand.css` save via server function, `/theme` page
- [x] Shadow slider fixed — scales the stock shadow shape instead of flattening every axis

### Delivery
- [x] Optional delivery modes: `<WebAwesomeLoader source="cdn" | "bundle" hydrate />`,
      pinned CDN helper, hydration bundle, opt-in server render helper, SSR FOUC rule
- [x] Search readiness: brand mark, `public/favicon.png` + root icon link,
      `robots.txt`, delivery/minification rules in `system.md`
- [x] Static hosting: nine public routes prerendered, published from `dist/client` via
      `scripts/copy-static-output.mjs`, `sitemap.xml`, `_redirects` SPA fallback,
      `SPACEFAST.md` build spec
- [x] Worker path removed (`wrangler.jsonc`, `@cloudflare/vite-plugin`) — the host
      rejects repos with server entrypoints; the project is static-only
- [x] Live build verified on the host

### Hand-off
- [x] `README.md` rewritten as real project documentation
- [x] `docs/architecture.md`, `docs/deployment.md`, `docs/environment.md`, `.env.example`

## Open

- [ ] Brand-token overrides in `theme.css` once final brand colors are chosen
- [ ] Fully self-hosted CSS + Font Awesome SVGs (currently version-pinned CDN)
- [ ] Compress `public/showcase/gradient.gif` (~1.6 MB, preview-only)
- [ ] Update absolute URLs in `public/sitemap.xml` and `public/robots.txt` when a
      custom domain is connected
- [x] Agent readiness: llms.txt, canonical/og:url, JSON-LD, real-domain sitemap (host firewall still blocks bots — owner action)
