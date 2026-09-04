# Theme editor

A new "Theme editor" page where you change the look of the system with controls instead of files. Every change applies instantly to the whole preview — header, navigation, all component pages — and a "Save as default" button writes the result into the system's brand file so it becomes the real default for this system and every project that uses it.

The editor is also part of the shipped system, so a project built on this design system can drop the same panel in.

## What you can tweak

**Colors** — brand, success, warning, danger and neutral. Pick a hue for each; the full light and dark ramps are generated from it, so both modes stay correct without picking twice. A light/dark switch inside the editor lets you check the result.

**Fonts** — body, heading and code font family, plus one overall text-size control that scales the whole type scale together.

**Spacing & density** — overall spacing scale, plus form control height and padding for compact or roomy interfaces.

**Corners & shadows** — border radius scale (from square to very round) and shadow strength.

Each group has a reset, and there's a reset-everything button.

## How it behaves

- Changes apply live and are remembered in your browser between visits, so you can wander the component pages and see them everywhere.
- "Save as default" writes the settings into the system's brand file. After that the values are the system's defaults for everyone, and the browser-only copy is cleared.
- A "Copy CSS" button gives you the same block as text, for pasting elsewhere or handing to someone.
- Live editing is a preview-time convenience. The saved defaults are what ship.

## One caveat about saving

The save button writes the file from the running preview. That works while you're previewing here, and I'll confirm the file changed. If a save ever doesn't stick, tell me the values (or paste the copied block) and I'll write them in directly — same result.

## Technical notes

- `src/webawesome/brand.css` — new, imported by `theme.css`. Holds the brand token overrides inside `@layer wa-theme` so themes stay swappable. Ships empty-but-commented initially.
- `src/webawesome/theme-editor/` — new folder inside the design system so it propagates on attach:
  - `tokens.ts` — the editable token model: groups, control types, `--wa-*` target properties, defaults, and the CSS serializer shared by live preview, copy and save.
  - `theme-editor.tsx` — the `ThemeEditor` panel, built from `wa-color-picker`, `wa-select`, `wa-slider`, `wa-input`, `wa-tab-group`, `wa-details`, `wa-button`, `wa-callout` and the layout utilities. No raw values in its own styling.
  - `use-theme-overrides.ts` — applies overrides by writing custom properties onto `document.documentElement`, persists to `localStorage`, client-only via effect so SSR is unaffected.
  - `theme-editor.css` — layout for the panel using `--wa-*` tokens only.
- Color ramps: derive each step of the 05–95 ramp in `oklch` from the chosen hue, matching the shape of the stock ramps in `tokens.css`, so generated palettes read as part of the system.
- `src/webawesome/theme-editor.functions.ts` — `saveThemeDefaults` server function, Zod-validated, dev-guarded (refuses when not running the dev server), serializes the same CSS and writes `src/webawesome/brand.css`. Kept out of the client graph by keeping file writing in a `.server.ts` helper.
- `src/routes/theme.tsx` + `src/showcase/theme-page.tsx` — the showcase page, with its own `head()` metadata; a "Theme" link added under Foundations in `src/showcase/shell.tsx`.
- Exports added to `src/webawesome/index.ts` (and so `src/index.ts`): `ThemeEditor`, `useThemeOverrides`, the token model and serializer types. The server function is not exported from the barrel.
- `.lovable/design-system.json` gets a `ThemeEditor` entry (usage, examples, antipatterns); `.lovable/system.md` gains a rule that brand changes go through the brand file / editor, never scattered overrides; `roadmap.md` updated.
- Verification: typecheck, then a browser pass that changes a color, a font, spacing and radius, confirms the whole page reacts, reloads to confirm persistence, saves, and confirms `brand.css` contents.
