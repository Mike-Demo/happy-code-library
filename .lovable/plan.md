# Static hosting on Spacefast

## Step 0 — Static check: PASSES

Nothing in this project needs a server at request time:

- No database, no logins, no per-user pages, no webhooks, no cron.
- Every page is the same for every visitor (showcase pages: Overview, Colors, Typography, Scale, Theme editor, Icons, Components, Delivery, Open source).
- One exception, already harmless: the Theme editor's "Save as default" button calls a small server helper that writes the brand file. It is already refused outside local development, so on the static site that button simply reports it isn't available. The editor's live preview and "Copy CSS" keep working, because they run in the browser. I'll make the button say so plainly instead of failing with a raw error.

So we can proceed.

## Step 1 — Prerender every public page

Enable prerendering in `vite.config.ts` and list the nine public pages:
`/`, `/colors`, `/typography`, `/scale`, `/theme`, `/icons`, `/components`, `/delivery`, `/licenses`.

Automatic route discovery stays off, so the two editor-only preview routes are never prerendered.

If the build writes every page and then hangs, the cause is a timer left running during prerender; the fix is a prerender guard on the data-cache timers in `src/router.tsx` (details below).

## Step 2 — Build output in `dist/client`

Keep the normal build (no static preset — it breaks this build). Add `scripts/copy-static-output.mjs`, which copies the finished pages from `.output/public` into a clean `dist/client`, and does nothing if they already live there. Build command becomes:

```text
vite build && node scripts/copy-static-output.mjs
```

## Step 3 — Static files

- New `public/sitemap.xml` listing the nine public pages at `https://happy-code-library.lovable.app`.
- `public/robots.txt`: keep the existing rules, add a line pointing at `/sitemap.xml`.
- New `public/_redirects` with `/*  /index.html  200` so deep links and refreshes work.
- No server-generated sitemap exists, so nothing to delete.
- Page titles and descriptions are already set per page, so they are baked into the prerendered files. I'll confirm each one during verification.

## Step 4 — `SPACEFAST.md`

Documents the install command, the build command, that the site to publish is `dist/client`, and that `.output/public` is the raw build output it is copied from.

## Step 5 — Verification

- Typecheck.
- Full build.
- Confirm `dist/client` holds an `index.html` for each of the nine pages plus `sitemap.xml`, `robots.txt`, `_redirects`, `favicon.png`.
- Open each built page in a browser: content renders, no errors, and page state carried in the address bar (such as the icon search term) still restores after load.
- Report anything that only works while editing in Lovable and not on the published static site.

## Technical notes

- Prerender is configured on the `tanstackStart()` plugin in `vite.config.ts`: `pages: [{ path: "/" }, ...]` plus `prerender: { enabled: true, autoStaticPathsDiscovery: false }`. This project does not use `@lovable.dev/vite-tanstack-config` (it wires Vite directly), so there is no wrapper version to raise; if prerendering emits nothing, I'll add that wrapper at 2.20.0+ and move the options into it rather than inventing another mechanism.
- `nitro: { preset: "static" }` is deliberately NOT set.
- Hanging-build fix, if needed: in `src/router.tsx` the `QueryClient` is created per request; install an unref'd timeout provider for `timeoutManager` guarded by `process.env.TSS_PRERENDERING === "true"`.
- `scripts/copy-static-output.mjs` is idempotent: resolves `.output/public`, exits cleanly when absent but `dist/client` already populated, otherwise clears and recreates `dist/client` and recursive-copies.
- Client-only behaviour that stays client-only: Web Awesome element registration, theme toggle, localStorage theme overrides, hCaptcha, icon search.
