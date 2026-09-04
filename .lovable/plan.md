# Optional SSR and CDN support for the Web Awesome design system

Two new, opt-in delivery modes. Both are additive: the current default (self-contained
vendor bundle + version-pinned stylesheets) keeps working unchanged for every existing
consumer.

## 1. CDN mode

Today element definitions come from the bundled `src/webawesome/vendor/webawesome.bundle.js`
and only the stylesheets come from the pinned jsDelivr CDN. CDN mode lets a project skip the
bundled JavaScript and load Web Awesome's own loader from jsDelivr instead (verified working:
the published loader uses only relative imports and lazily autoloads each element from the CDN).

- New `src/webawesome/cdn.ts` exporting the pinned CDN URLs (loader, SSR loader, Web Awesome
  stylesheet, Font Awesome stylesheet, icon path) and a `loadWebAwesomeFromCdn()` helper that
  injects the loader module once per document and pins the Font Awesome icon path first.
- `WebAwesomeLoader` gains an optional `source` prop: `"bundle"` (default, today's behaviour)
  or `"cdn"`.
- Stylesheets stay as they are; the same URLs are also exported so a project that prefers
  `<link>` tags in the document head can use them without duplicating strings.

Trade-off to state in the docs: CDN mode means fewer bytes shipped with the app but a runtime
dependency on jsDelivr availability.

## 2. SSR mode (experimental, matching Web Awesome's own labelling)

Web Awesome's SSR support has two halves. We implement both, with server rendering kept
strictly opt-in.

**Hydration half (safe, works in this stack):**
- A second generated bundle, `vendor/webawesome.ssr.bundle.js`, produced by the existing
  `scripts/build-vendor.ts` with `@lit-labs/ssr-client/lit-element-hydrate-support.js` imported
  before any component, exactly as the docs require. Keeping it a bundle preserves the
  no-runtime-npm-install contract.
- `WebAwesomeLoader` gains `hydrate?: boolean`; when set it loads the SSR bundle (and the
  SSR loader URL in CDN mode) instead of the standard one.
- A small stylesheet rule shipped with the theme, guarded so it only applies in SSR mode:
  `:not([did-ssr]):not(:defined) { visibility: hidden }`, to avoid a flash of unstyled
  content for elements that were not server rendered.
- The `with-*` props the docs describe (`with-footer`, `with-header`, `with-label`, ...) are
  already typed on the generated React wrappers; they get documented as required when SSR
  is on and a matching slot is used.

**Server-rendering half (opt-in, verified before commitment):**
- A server-only helper `renderWebAwesomeMarkup()` wrapping Web Awesome's `ssr/render-string`
  so a project can produce declarative-shadow-DOM markup for a static block of `<wa-*>` HTML.
- First implementation step is a feasibility check of Lit's SSR package inside the app's
  serverless runtime. If it does not run there, the helper ships documented as Node/build-time
  only rather than being wired into the request path, and the plan's hydration half still
  stands on its own. This will be reported either way.

## 3. Docs, rules and showcase

- New showcase page "Delivery" documenting the four combinations (bundle/CDN x hydrate on/off),
  copy-paste snippets, and the known SSR limitations from Web Awesome's docs (icons, QR code,
  charts, animated image, localization, `dir`, timing rules before setting properties).
- `.lovable/system.md` gains rules: default to bundle mode; SSR mode requires the hydrate
  bundle plus the matching `with-*` attributes; never set properties on a `<wa-*>` element
  before `customElements.whenDefined()` and `updateComplete`.
- `roadmap.md` updated.

## Verification

Typecheck, then browser-verify the showcase in all modes: default bundle, CDN mode, and
hydrate mode — checking elements upgrade, icons render, and there are no console errors or
failed requests.

## Technical notes

- Both bundles are generated artifacts from the existing dev-only `@awesome.me/webawesome`
  dependency; no runtime npm dependency is added, so the design system stays classified local.
- `@lit-labs/ssr-client` is already present as a transitive dev dependency and is inlined into
  the SSR bundle at build time.
- Pinned versions stay single-sourced: Web Awesome 3.12.0 and Font Awesome Free 7.3.1.
