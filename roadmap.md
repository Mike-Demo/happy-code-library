# Roadmap — Web Awesome + Font Awesome Design System

## Done
- [x] Inspect uploads (FA Free 7.3.1 web zip; Web Awesome skill docs)
- [x] Install pinned upstreams: @awesome.me/webawesome@3.12.0, @fortawesome/fontawesome-free@7.3.1
- [x] meta.yaml / sources.yaml / system.md / lovable.toml / .dsignore
- [x] src/webawesome/ design-system folder (theme entry, loader, JSX types)
- [x] Root wiring (theme CSS link, html theme classes, client loader)
- [x] Explicit component registration (src/webawesome/components.ts — autoloader 404s under the bundler)
- [x] Showcase: foundations (colors, typography, spacing, radius, shadows)
- [x] Showcase: icons (wa-icon + Font Awesome solid/regular/brands)
- [x] Showcase: components (buttons, forms, feedback, data display, navigation, overlays)
- [x] Dark-mode toggle on the showcase (wa-dark class)
- [x] Head metadata on index route
- [x] Browser-verified: light + dark render, dialog/drawer interactive, zero console errors

## Ready
- [ ] Optional brand-token overrides in theme.css when the user picks brand colors
- [ ] Optional self-hosted Font Awesome assets via setIconPath() (currently CDN-resolved)
