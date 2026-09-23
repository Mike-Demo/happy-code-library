# Repository hand-off documentation

Goal: someone can clone this repo outside Lovable and build, understand, and maintain it. No application code changes.

## Audit findings (already confirmed)

- TanStack Start v1 + TanStack Router (file routes in `src/routes/`), React 19, TypeScript, Vite 8, Bun (`bun.lock`, `bunfig.toml`).
- No backend: no Lovable Cloud / database / auth / edge functions. Fully static — all nine public pages are prerendered at build time.
- Styling: plain CSS + Web Awesome design tokens (`src/webawesome/`), no Tailwind.
- Upstreams are build-only devDependencies: `@awesome.me/webawesome@3.12.0`, `@fortawesome/fontawesome-free@7.3.1`; their stylesheets load from a version-pinned CDN.
- Build: `bun run build` → `vite build && node scripts/copy-static-output.mjs`; publish `dist/client`.
- Only environment variable in use: `VITE_HCAPTCHA_SITE_KEY` (public site key, optional — the hCaptcha demo falls back to a test key). `TSS_PRERENDERING` is set by the build itself. No `.env` exists today.
- There is no `bun run check` script; typecheck runs via `bunx tsgo --noEmit`.

## Step 1 — Rewrite `README.md`

Replace the generic starter text with: project overview and live URL, key features (70 typed Web Awesome element wrappers, 2,883-icon index, theme editor, standard footer + license page, hCaptcha pattern, CDN/SSR delivery modes, static prerender), attribution and licenses for Web Awesome + Font Awesome Free + hCaptcha, tech stack, local development (Bun/Node prerequisites, install, dev server, env setup), build and deployment summary pointing at `dist/client`, and a documentation index linking the new `docs/` files plus `SPACEFAST.md` and `roadmap.md`.

## Step 2 — New `docs/` folder

- `docs/architecture.md` — folder-by-folder map (`src/webawesome/` library vs `src/showcase/` preview-only, `src/routes/`, `scripts/`, `public/`), design decisions (file-based routing, TanStack Query loader pattern, URL search params for icon search, client-vs-server boundaries, `.server.ts` naming, `.dsignore` consumer propagation, token-based styling), and gotchas: custom-element registration must happen inside routed content to avoid hydration mismatches, icon path pinned to Font Awesome 7.3.1, remote CSS loads as `<link>` tags not `@import`, prerender needs the unref'd query timer provider in `src/router.tsx`, no Cloudflare Worker entrypoint allowed, `wa-cloak` anti-FOUCE class.
- `docs/deployment.md` — static hosting on Spacefast: install/build commands, `dist/client` output, `public/_redirects` SPA fallback, `sitemap.xml`/`robots.txt`, the Lovable → GitHub → Spacefast build loop, domain/DNS notes, and the two known failure modes (leftover Worker config, Spacefast building a stale commit).
- `docs/environment.md` — every variable with purpose and whether required; no secret values. Also add a `.env.example` carrying the same keys, commented.

## Step 3 — Consolidate `roadmap.md`

Rewrite it from the existing roadmap plus the twelve records in `.lovable/plan/`: completed milestones as checked items grouped by theme, open items (brand-token overrides, fully self-hosted CSS/icons, gradient GIF compression) unchecked. Keep it a task list, not a changelog.

## Step 4 — Verify

- Check every markdown link in `README.md` and `docs/` resolves to a committed file.
- Grep the new docs for tokens/keys to confirm no secrets (the hCaptcha test site key is public and documented as such).
- Run `bunx tsgo --noEmit` to confirm nothing broke.

## Open question

The live production URL: I'll document the Spacefast-served site plus the Lovable preview URL. If you have a custom domain already in mind, tell me and I'll put that in the README instead.
