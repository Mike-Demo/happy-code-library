# Convert to a local (CDN-backed) design system

## Why the error appeared now

`.lovable/meta.yaml` declares `source_type: npm`, which marks this library as "backed by an npm package". That classification is only checked when a release is cut, not while building or previewing — which is why nothing flagged it during the whole build. The earlier failure (`upstream_versions` naming an undeclared package) came from the same block of config.

Uploading the packages manually doesn't change the classification: `source_type` is a declaration in the config, not something inferred from how the files arrived.

## The fix

Reclassify the library as **local** and remove the runtime dependency on npm entirely, so consumers get a working system from the copied `src/` files alone — no install step, no Enterprise gate.

### 1. Config

- `.lovable/meta.yaml`: `source_type: local`; drop `upstream_package`, `upstream_packages`, `upstream_versions`, and `stack_packages`. Keep `framework: react`, `css_framework: css-variables`, `starter_template: custom_design_system`.
- `.lovable/sources.yaml`: point at local files instead of `node_modules/` — `src/index.ts` for components, `src/webawesome/theme.css` (plus a local tokens file) for tokens.

### 2. Load Web Awesome and Font Awesome from their CDNs

- `src/webawesome/theme.css` currently `@import`s from `node_modules`. Replace those with the pinned CDN URLs for Web Awesome 3.12.0 styles and Font Awesome Free 7.3.1, keeping the brand-override block as-is.
- `src/webawesome/setup.tsx`: instead of dynamically importing the npm component modules, inject Web Awesome's CDN module script once after hydration. The existing post-hydration timing and the SSR-safety notes stay — only the source of the modules changes. `src/webawesome/components.ts` and the `setIconPath` pin in `icon-library.ts` are folded into this (the CDN build resolves both itself, pinned by URL version).

### 3. Give the barrel real, extractable components

Local extraction reads `src/index.ts`, so the system needs typed React components rather than bare `<wa-*>` tags. Add thin wrapper components under `src/webawesome/react/` — one per Web Awesome element — each with a typed props interface, forwarded ref, merged `className`, and spread rest props, rendering the underlying custom element. They contain no npm imports, so they work for CDN consumers. Export all of them from `src/index.ts`.

This is a large set (70 elements), so it lands in waves: a wave of wrappers, verified in the showcase, then the next — until every element is covered.

### 4. Showcase and docs

- The showcase keeps working throughout; its `<wa-*>` usage is progressively swapped to the wrappers as each wave lands, so the showcase verifies the published surface.
- `.lovable/system.md`: document CDN loading (and how to self-host instead), the wrapper import convention, and that no npm install is required.
- `roadmap.md` updated to reflect the conversion.

## Technical notes

- The npm packages stay installed as devDependencies only — used for local typings and the icon manifest that generates the icon index, never shipped to consumers.
- `.dsignore` keeps `src/showcase/**` preview-only; the wrappers and theme ship.
- Verification per wave: `tsgo --noEmit`, then a browser pass over all six routes in light and dark checking zero console errors and zero failed requests.

## Trade-off

CDN loading means consumer apps fetch Web Awesome and Font Awesome at runtime from `cdn.jsdelivr.net` / Font Awesome's CDN (both version-pinned). If you'd rather have the assets self-hosted, that's a follow-up: copy the dist files into `src/assets/` and repoint the theme URLs.
