# Web Awesome Design System

A self-contained design system and living style guide built on
[Web Awesome 3](https://webawesome.com) and
[Font Awesome Free 7](https://fontawesome.com), delivered as a TanStack Start
site that is prerendered to fully static HTML.

The site is a nine-page showcase (tokens, typography, scale, theme editor, icon
index, component gallery, delivery modes, licenses) and, at the same time, the
source of the design system itself: everything under `src/webawesome/` is the
shippable library, everything under `src/showcase/` is preview-only.

- **Live site:** served from the prerendered build on
  [Spacefast](https://spacefast.com) — see [`docs/deployment.md`](docs/deployment.md).
- **Lovable preview:** https://id-preview--9fea97bb-e317-446f-b683-1274350846c6.lovable.app

## Key features

- **70 typed React wrappers** for every Web Awesome custom element
  (`src/webawesome/react/`), generated from Web Awesome's custom-elements
  manifest. Refs forwarded, unknown props spread onto the element host.
- **Self-contained vendor bundle** (`src/webawesome/vendor/webawesome.bundle.js`)
  registers all 70 elements with no runtime npm install and no JS CDN.
- **Optional delivery modes** — `<WebAwesomeLoader source="cdn" | "bundle" hydrate />`,
  a pinned CDN helper, and an opt-in server-render helper.
- **Icon index** — searchable catalog of 2,883 Font Awesome Free icons
  (solid / regular / brands) with copy-to-clipboard, pinned to Font Awesome 7.3.1.
- **Theme editor** (`/theme`) — live editing of colors, fonts, spacing/density,
  corners and shadows with localStorage preview, generated-CSS output and
  "Copy CSS". "Save as default" writes `src/webawesome/brand.css` and works only
  in local development.
- **Standard patterns** — `SiteFooter`, `LicensesPage`, and an `HCaptcha`
  component (visible / compact / invisible, imperative `execute` / `reset` /
  `getResponse`, hidden token field).
- **Dark mode** that persists across routes, plus Web Awesome's anti-FOUCE
  `wa-cloak` utility.
- **Static and search-ready** — all nine public routes prerendered to HTML,
  per-route `head()` metadata, `sitemap.xml`, `robots.txt`, favicon.

## Attribution and licenses

This project bundles and builds on third-party open-source work. Full credits
are also rendered in-app at `/licenses`.

| Project | Version | License |
| --- | --- | --- |
| [Web Awesome](https://webawesome.com) (`@awesome.me/webawesome`) | 3.12.0 | MIT (free tier) |
| [Font Awesome Free](https://fontawesome.com) (`@fortawesome/fontawesome-free`) | 7.3.1 | Icons: CC BY 4.0 · Fonts: SIL OFL 1.1 · Code: MIT |
| [TanStack Start / Router / Query](https://tanstack.com) | see `package.json` | MIT |
| [React](https://react.dev) | 19 | MIT |
| [hCaptcha](https://www.hcaptcha.com) | hosted script | hCaptcha terms of service |

Font Awesome Free icons require attribution under CC BY 4.0 — keep the
`/licenses` page (or the equivalent credits) in any site built from this system.

## Tech stack

- **Framework:** TanStack Start v1 (SSR-capable, built here as static output)
- **Router:** TanStack Router, file-based routes in `src/routes/`
- **UI:** React 19 + TypeScript (strict)
- **Styling:** plain CSS with Web Awesome design tokens — no Tailwind, no PostCSS
- **Data:** TanStack Query
- **Build tool:** Vite 8
- **Package manager:** Bun

## Local development

### Prerequisites

- **Bun** 1.1 or newer (the lockfile is `bun.lock`)
- **Node.js** 22 or newer (used by `scripts/copy-static-output.mjs` and by the
  Spacefast build, which runs `npm install`)

### Install and run

```sh
bun install
bun run dev          # dev server on http://localhost:8080
```

### Environment variables

None are required — the app runs with no `.env` file. The single optional
variable is documented in [`docs/environment.md`](docs/environment.md); copy
[`.env.example`](.env.example) to `.env` if you want to set it.

### Checks

```sh
bunx tsgo --noEmit   # typecheck (there is no `bun run check` script)
bun run lint         # eslint
```

## Build and deployment

```sh
bun run build        # vite build && node scripts/copy-static-output.mjs
```

The build prerenders all nine public routes to HTML. **Publish `dist/client`** —
it is a plain directory of static files, with no server-side code and no
Cloudflare Worker entrypoint. `scripts/copy-static-output.mjs` copies
`.output/public` into `dist/client` when a future toolchain version emits there
instead; today the prerender pass writes `dist/client` directly and the script
exits cleanly.

Full hosting details, redirect rules and DNS notes:
[`docs/deployment.md`](docs/deployment.md).

## Documentation index

- [`docs/architecture.md`](docs/architecture.md) — codebase layout, design
  decisions, gotchas and lessons learned
- [`docs/deployment.md`](docs/deployment.md) — static hosting, redirects, domains
- [`docs/environment.md`](docs/environment.md) — every environment variable
- [`SPACEFAST.md`](SPACEFAST.md) — the terse build spec for the host
- [`roadmap.md`](roadmap.md) — completed milestones and open work
- `.lovable/` — design-system metadata, authored guidance (`system.md`) and
  archived decision records (`.lovable/plan/`)
