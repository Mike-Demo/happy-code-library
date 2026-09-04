# Roadmap — Web Awesome + Font Awesome Design System

## Done
- [x] Inspect uploads (FA Free 7.3.1 web zip; Web Awesome skill docs)
- [x] Install pinned upstreams: @awesome.me/webawesome@3.12.0, @fortawesome/fontawesome-free@7.3.1
- [x] meta.yaml / sources.yaml / system.md / lovable.toml / .dsignore
- [x] src/webawesome/ design-system folder (theme entry, loader, JSX types, barrel)
- [x] Root wiring (theme CSS link, html theme classes)
- [x] Explicit component registration (src/webawesome/components.ts — autoloader 404s under the bundler)
- [x] Icon CDN pinned to FA 7.3.1 via setIconPath (src/webawesome/icon-library.ts — WA hardcodes 7.3.0; newer icons 403)
- [x] Loader mounted inside routed content (ShowcaseShell) — registration above lazy routes caused hydration-mismatch warnings
- [x] Multi-page showcase: Overview, Colors, Typography, Scale & depth, Icons, Components
- [x] Components page: all 70 elements documented with live variants/states, copyable code, searchable sidebar
- [x] Icons page: full 2,883-icon searchable index (solid/regular/brands) with copy-to-clipboard
- [x] Dark-mode toggle, persistent across routes
- [x] Unique head metadata per route
- [x] Browser-verified: all 6 routes, search/filter, dialog interaction, dark mode — zero console errors, zero failed requests

## Ready
- [ ] Optional brand-token overrides in theme.css when the user picks brand colors
- [ ] Optional fully self-hosted Font Awesome SVGs (currently version-pinned CDN)
- [ ] Optional: compress public/showcase/gradient.gif (~1.6 MB, preview-only)
