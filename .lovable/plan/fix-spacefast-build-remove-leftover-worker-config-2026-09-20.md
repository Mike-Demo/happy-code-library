# Fix Spacefast build: remove leftover Worker config

## Problem

Spacefast's build fails before running our build command:

```text
Unsupported platform features were detected in this space.
- cloudflare-pages: Cloudflare Worker entrypoints are not converted.
```

The cause is leftover Cloudflare Worker configuration in the repository:
`wrangler.jsonc` at the root declares a Worker entrypoint (`main:
@tanstack/react-start/server-entry`), and `@cloudflare/vite-plugin` is still a
dependency. Spacefast's build pack scans the repo, sees a Worker project, and
refuses to build.

That Worker setup is now obsolete: the site is fully static — every public
page is prerendered to HTML and published from `dist/client`. Nothing at
request time needs a server.

## Fix: strip the Worker path entirely

1. **Delete `wrangler.jsonc`.** This is the file Spacefast detects. The
   project no longer deploys as a Worker, so it has no purpose.

2. **Remove `@cloudflare/vite-plugin`** from `package.json` and simplify
   `vite.config.ts`: drop the plugin import and the
   `STATIC_BUILD` / `useCloudflare` branching. The config becomes the plain
   static build — prerendering always on — with no Worker variant.

3. **Update `SPACEFAST.md`**: remove the "Cloudflare Workers plugin and
   `STATIC_BUILD`" section; the build spec becomes just install, build,
   publish `dist/client`.

4. **Update `roadmap.md`**: note the static-hosting change (Worker path
   removed).

## What does NOT change

- The build command stays `vite build && node scripts/copy-static-output.mjs`.
- All nine prerendered pages, `sitemap.xml`, `robots.txt`, `_redirects`, and
  the favicon are untouched.
- The theme editor's dev-only "Save as default" behavior is untouched.

## SSR question — answered from Spacefast's own docs

Yes, this project can already do SSR — the TanStack Start server build (the
old `STATIC_BUILD=0` Worker path) renders pages on a server at request time.
But Spacefast cannot host it: its agent docs state plainly "Do not use
Spacefast for: server-side code, background jobs, cron, or databases …
Spacefast serves a site's built output — bring a build, not a server." The
build error you hit is exactly that rule being enforced. Spacefast has no SSR
mode to switch on, so prerendered static hosting (what we set up) is the only
way to run this project there.

## Trade-off to be aware of

Removing the Worker config means the project can no longer be built as a
Cloudflare Worker (the old `STATIC_BUILD=0` path). That path produced a
server-rendered deployment this project no longer uses, and Spacefast —
the stated hosting target — does not accept server-side code anyway. If you
ever move to a host that does SSR, the two pieces (`wrangler.jsonc` and the
plugin wiring) can be re-added.

## Verification

- Typecheck passes.
- Full build succeeds and still prerenders all 9 pages into `dist/client`.
- Spot-check one built page in a browser.
- Then commit — the next Spacefast build should get past the detection step
  and run the real build.
