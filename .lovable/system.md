# Web Awesome Design System

This design system wraps **Web Awesome 3.12.0** — the free, open-source web component library from the Font Awesome team (MIT licensed) — plus **Font Awesome Free 7.3.1** for iconography. Components are framework-agnostic custom elements (`<wa-*>`) used directly in JSX; all styling flows through `--wa-*` design tokens and CSS layers. There is no CSS-in-JS, no Tailwind, and no theme provider component.

## Setup (do this once per app)

1. **Theme CSS** — link the design system's `theme.css` in the root route head (TanStack: `import themeCss from "<design-system folder>/webawesome/theme.css?url"` and add `{ rel: "stylesheet", href: themeCss }` to `head().links`). This single file loads Web Awesome's base styles, the default theme + palette, layout/text utilities, and Font Awesome Free (self-hosted webfonts).
2. **Root classes** — set `class="wa-theme-default wa-palette-default wa-light"` on `<html>` (exported as `WEB_AWESOME_HTML_CLASSES` from the design system's `setup` module). Swap `wa-light` → `wa-dark` for dark mode; both themes are token-complete.
3. **Component loader** — render `<WebAwesomeLoader />` (from the design system's `setup` module) once near the app root. After hydration it dynamically imports the design system's `components` module, which explicitly registers every `<wa-*>` element. Explicit imports are required: Web Awesome's autoloader resolves component files by URL at runtime, which 404s in bundled apps. Never import component modules statically in SSR-evaluated code — they touch `document` at module scope and crash the server render.
4. **Types** — the design system folder ships `types.d.ts`, which pulls in generated JSX typings for every `<wa-*>` tag. It works automatically once the folder is under `src/`; it requires `"allowImportingTsExtensions": true` in tsconfig (already set on Lovable templates).

## Using components

- Write custom element tags directly in JSX: `<wa-button variant="brand" size="large">Save</wa-button>`. No React imports needed; the autoloader registers tags lazily.
- Component APIs (attributes, slots, events, CSS parts) are documented per component in `node_modules/@awesome.me/webawesome/dist/skills/webawesome/references/components/*.md` — consult the reference before styling or wiring events. Never guess part names or token mappings.
- Custom element events (`wa-show`, `wa-hide`, `wa-input`, `wa-change`, …) are DOM events: attach listeners via a `ref` in `useEffect`, or drive element properties imperatively (`dialogRef.current.open = true`). React's `onChange` does not fire for Web Awesome form controls; use the element's own events.
- For imperative typing, import the component class type: `import type WaDialog from "@awesome.me/webawesome/dist/components/dialog/dialog.js"` (type-only imports are SSR-safe).
- React wrappers exist under `@awesome.me/webawesome/dist/react/*` for React ≤18 interop; on React 19 prefer plain tags.

## Layout

- Full pages, app shells: `<wa-page>` owns the viewport — header/nav/main/footer via slots; nav goes in `slot="navigation"` exactly once (sidebar on desktop, drawer on mobile, automatically). Reset `html, body { min-height: 100%; margin: 0; padding: 0 }` and zero the main padding for full-bleed sections.
- Sections, cards, widgets: compose with utility classes — `wa-stack` (vertical), `wa-cluster` (inline wrap), `wa-grid` (responsive columns), `wa-flank`, `wa-split`, `wa-frame` — plus `wa-gap-*`, `wa-align-items-*`, `wa-justify-content-*`. Never hand-roll flex/grid CSS for what these cover.

## Icons

- Use `<wa-icon name="star">` for all icons — **never emojis**, anywhere (logos, alt text, bullets, toasts included).
- Free families only: default solid (`<wa-icon name="bell">`), regular (`family="classic" variant="regular"`), and brands (`family="brands" name="github"`). No kit codes, no Pro families (sharp, duotone, thin, light are Pro).
- `<wa-icon>` resolves SVGs from Font Awesome's free keyless CDN by default. For fully self-hosted icons, call `setIconPath()` (from `@awesome.me/webawesome`) with a URL serving Font Awesome Free's `svgs/` directory.
- Font Awesome's CSS classes (`<i class="fa-solid fa-star">`) also work — the webfonts are self-hosted through the bundled npm package. Prefer `<wa-icon>` in components; the classes are for markdown/CMS content where custom elements are awkward.
- Give icon-only controls a `label` attribute (Web Awesome components) or `aria-label`.

## Hard constraints

- **Tokens only.** Every color, space, radius, shadow, and font size comes from `--wa-*` tokens or `wa-*` utilities. Raw hex/px/rem literals are defects; the sole exception is a deliberate brand override inside `theme.css`'s `@layer wa-theme` block.
- **Never style through the shadow DOM blindly.** Order: attributes (`variant`, `appearance`, `size`, `pill`) → the component's documented custom properties → its documented `::part()`. `background`/`color` on a `<wa-button>` host styles an invisible wrapper — use `::part(base)`.
- **One `variant="brand"` button per view region.** Demote the rest to `appearance="outlined"` or `"plain"`, and never place an outlined button whose variant matches the band color it sits on.
- **Free tier only.** Do not use Pro-only components (`wa-combobox`, `wa-file-input`, chart/video families) or Pro icon families, and never embed a kit code.
- **SSR discipline.** `<wa-*>` markup server-renders as plain HTML and upgrades client-side — that is correct and expected. Never import Web Awesome runtime modules (components, loader) in server functions or at module scope of SSR-evaluated code; type-only imports are fine.
- **Accessibility baseline.** Real heading elements for hierarchy, `label` on every form control and icon-only button, meaningful `alt` text, keyboard-reachable interactive states.
- **Custom CSS is the exception.** Work down the ladder: existing component → layout utility → token → component styling API → only then a small token-based custom rule. Never a parallel design language.
