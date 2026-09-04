# Add hCaptcha as a component

hCaptcha is not part of Web Awesome, so this ships as a first-class design-system component: a themed React wrapper around hCaptcha's official widget script, plus form wiring and docs.

## What gets added

**`src/webawesome/patterns/hcaptcha.tsx`** — `HCaptcha` component:
- Props: `siteKey` (required), `size` (`normal` | `compact` | `invisible`), `theme` (`light` | `dark` | `auto`, defaulting to the design system's current color scheme), `hl` (language), `name` (hidden field name, default `h-captcha-response`), plus `className`, `id` and ref forwarding.
- Callbacks: `onVerify(token, ekey)`, `onExpire`, `onError`, `onChallengeOpen`, `onChallengeClose`.
- Imperative handle: `execute()` (for invisible mode), `reset()`, `getResponse()`.
- Loads `https://js.hcaptcha.com/1/api.js?render=explicit&onload=…` once, idempotently, after hydration only (never during SSR), the same way the CDN loader guards its single-load promise.
- Renders a container div and calls `hcaptcha.render()` once the script is ready; removes the widget on unmount.
- Emits the token into a hidden input so the widget works inside a plain form and inside a Web Awesome form without extra glue.
- A test site key constant (`HCAPTCHA_TEST_SITE_KEY`) is exported for local development and the showcase.

**`src/webawesome/patterns/patterns.css`** — a `.wa-hcaptcha` block using only `--wa-*` tokens: spacing, radius, and a bordered fallback box while the widget loads, so it doesn't cause layout shift. No raw literals.

**Exports** — `src/webawesome/patterns/index.ts` re-exports `HCaptcha`, `HCaptchaProps`, `HCaptchaHandle`, `HCAPTCHA_TEST_SITE_KEY`; the root barrel already re-exports patterns, so consumers get `import { HCaptcha } from "@/design-system/…"`.

**Showcase** — an hCaptcha section on the components page (registry entry under Form controls) with a live widget using the hCaptcha test key, an invisible-mode example driven by a button, and a copyable snippet. Preview-only, excluded from consumers as before.

**Docs and rules** — `.lovable/system.md` gains a short rule: use `HCaptcha` for bot protection rather than hand-rolling a widget or embedding the script by hand, always verify the token server-side with the secret key (never in client code), and never hardcode the secret. `.lovable/design-system.json` gets the component's `usage`, one `examples` entry, and `antipatterns`. `roadmap.md` records the item.

## Notes

- Server-side verification is the consumer's job and needs an `HCAPTCHA_SECRET` secret in their own project; the plan includes a documented snippet showing the `POST https://api.hcaptcha.com/siteverify` call, but no server code ships in this library.
- The widget script is loaded from hCaptcha's own domain (required — it cannot be vendored), so this is the one component with a live third-party runtime dependency; that is called out in the docs and credited on the licenses page.
- Verification: typecheck, then a browser check of the components page confirming the widget iframe mounts, the invisible-mode button triggers a challenge, and no console errors.
