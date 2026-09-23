# Environment variables

This project needs **no environment variables to build or run**. It is a static
site with no backend, no API keys and no secrets. A missing `.env` file is the
normal state.

Copy [`.env.example`](../.env.example) to `.env` only if you want to set the one
optional variable below.

## Variables

| Variable | Required | Scope | What it controls |
| --- | --- | --- | --- |
| `VITE_HCAPTCHA_SITE_KEY` | No | Browser (`VITE_` prefix — bundled into client code) | The hCaptcha **site key** used by the hCaptcha demo in the component showcase. Omit it and the demo falls back to hCaptcha's public test key `10000000-ffff-ffff-ffff-000000000001`, which always validates. A site key is public by design and safe to commit. |
| `TSS_PRERENDERING` | No — set by the build | Build process | Set to `"true"` by TanStack Start while prerendering. `src/router.tsx` reads it to install unref'd query timers so the build can exit. Never set this by hand. |
| `NODE_ENV` | No — set by tooling | Server / build | Read by `src/webawesome/theme-editor-write.server.ts`, which refuses to write `brand.css` when it is `production`. |

## Secrets

There are none in this repository, and none are needed.

If you add server-side hCaptcha verification in a project built from this design
system, the **hCaptcha secret key** goes in a server-side secret store and is
sent only to `https://api.hcaptcha.com/siteverify`. Never put it in a `VITE_`
variable — anything with that prefix is inlined into browser bundles.
