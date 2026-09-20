# Roadmap — Web Awesome + Font Awesome Design System

## Done
- [x] Inspect uploads (FA Free 7.3.1 web zip; Web Awesome skill docs)
- [x] Install pinned upstreams: @awesome.me/webawesome@3.12.0, @fortawesome/fontawesome-free@7.3.1
- [x] meta.yaml / sources.yaml / system.md / lovable.toml / .dsignore
- [x] src/webawesome/ design-system folder (theme entry, loader, JSX types, barrel)
- [x] Root wiring (theme CSS link, html theme classes)
- [x] Converted to a **local** design system (source_type: local) — no npm-backed classification, no Enterprise gate
- [x] Typed React wrappers for all 70 elements (src/webawesome/react/, generated from WA's custom-elements manifest)
- [x] Self-contained vendor bundle (src/webawesome/vendor/webawesome.bundle.js, 0.8 MB) built by scripts/build-vendor.ts — registers all 70 elements, no runtime npm or JS CDN
- [x] Icon path pinned to FA 7.3.1 inside the vendor bundle, before any element registers (WA hardcodes 7.3.0; newer icons 403)
- [x] Stylesheets load from version-pinned jsdelivr CDN via theme.css; local token snapshot in tokens.css for extraction
- [x] Web Awesome + Font Awesome moved to devDependencies (build inputs only)
- [x] Loader mounted inside routed content (ShowcaseShell) — registration above lazy routes caused hydration-mismatch warnings
- [x] Multi-page showcase: Overview, Colors, Typography, Scale & depth, Icons, Components
- [x] Components page: all 70 elements documented with live variants/states, copyable code, searchable sidebar
- [x] Icons page: full 2,883-icon searchable index (solid/regular/brands) with copy-to-clipboard
- [x] Dark-mode toggle, persistent across routes
- [x] Unique head metadata per route
- [x] Browser-verified after the local conversion: all 6 routes, elements upgrade, icons resolve, wrappers render — zero console errors, zero failed requests

- [x] Standard patterns: SiteFooter + LicensesPage (src/webawesome/patterns/), required in every consuming app per system.md

- [x] Optional delivery modes: `<WebAwesomeLoader source="cdn" | "bundle" hydrate />`, pinned CDN helper (src/webawesome/cdn.ts), hydration bundle (webawesome.ssr.bundle.js), opt-in server render helper (src/webawesome/ssr/render.server.ts), SSR FOUC rule, Delivery & SSR showcase page

- [x] hCaptcha component (src/webawesome/patterns/hcaptcha.tsx): visible/compact/invisible, imperative execute/reset/getResponse, hidden token field, showcase section, licenses credit, system.md rule
- [x] Anti-FOUCE utility included: wa-cloak class via pinned CDN fouce.css import in theme.css + local fallback in tokens.css
- [x] Search readiness: brand mark (src/assets/logos/brand-mark.png), public/favicon.png + root icon link, public/robots.txt, delivery/minification rules in system.md
- [x] Static hosting (Spacefast): all 9 public routes prerendered (tanstackStart.pages + prerender, Workers plugin off by default, STATIC_BUILD=0 to restore it), output published from dist/client via scripts/copy-static-output.mjs, public/sitemap.xml + robots Sitemap line + public/_redirects SPA fallback, SPACEFAST.md build spec

## Ready
- [ ] Optional brand-token overrides in theme.css when the user picks brand colors
- [ ] Optional fully self-hosted CSS + Font Awesome SVGs (currently version-pinned CDN)
- [ ] Optional: compress public/showcase/gradient.gif (~1.6 MB, preview-only)
- [x] Theme editor — live token editing (colors, fonts, spacing/density, corners, shadows), localStorage preview, `brand.css` save via `saveThemeDefaults` server function, `/theme` showcase page.
