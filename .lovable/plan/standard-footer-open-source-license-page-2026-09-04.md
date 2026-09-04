# Standard footer + open-source license page

Make the Skill Finder footer and its "Open source & credits" page part of this design system, so every project that uses the system gets them by default.

## What gets added

**1. A standard footer component**

Same content and structure as the Skill Finder footer: "Made by MikeDemo", the current year, an "Open Source" link to the license page, and LinkedIn / X / Threads links with brand icons. Rebuilt with this system's own tokens, layout utilities, and icons instead of the other project's Tailwind classes, so it looks right in light and dark mode. The name, the social links, and the license page path are all adjustable, but the defaults match the footer as it is today, so dropping it in needs no configuration.

**2. A standard open-source license page**

The same page layout: a back link, a heading and intro, then grouped credit sections (typeface, artwork, libraries, data sources), each entry showing name, author, license, an optional note, and a link to the license source. It ships with the credits this design system itself needs (Web Awesome, Font Awesome Free, React, TanStack) pre-filled, and each project adds its own entries on top.

**3. Showcase page**

A new "Patterns" page in the showcase site renders both the footer and the license page so they can be reviewed here, and the showcase's own footer is replaced with the standard one.

**4. Rules so new projects get it automatically**

The always-loaded design system guidance gains a short section stating that every app includes the standard footer at the bottom of its shell and a `/licenses` route using the standard license page, that credits for any new font, icon set, library, or data source must be added there, and that the footer must never be hand-rolled.

## Technical notes

- New files: `src/webawesome/patterns/site-footer.tsx`, `src/webawesome/patterns/licenses.tsx` (component + `LicenseEntry` type + `baseCredits`), `src/webawesome/patterns/index.ts`; exported from `src/webawesome/index.ts` and `src/index.ts` so consumers import them from the design-system barrel.
- Everything stays inside `src/webawesome/` so the file-copy attach carries it; no Tailwind, no `cn()`, no imports reaching outside the folder. Styling uses `--wa-*` tokens plus `wa-stack` / `wa-cluster` utilities, with any pattern-specific rules in a co-located CSS file imported by the theme entry.
- Icons use `<wa-icon>` (`code`, `arrow-left`, `arrow-up-right-from-square`, and the `brands` family for linkedin / x-twitter / threads) — no emojis.
- Footer year is computed at render; to stay hydration-safe it is rendered from a `useEffect`-set state or passed in, not read during SSR-sensitive render.
- Showcase: `src/routes/patterns.tsx` + a section under `src/showcase/`, added to the shell nav with its own head metadata.
- Verify with a typecheck and a browser pass over the new route in light and dark mode.

## Open question

The defaults name MikeDemo and link three personal social accounts. If this system is meant to be shared beyond your own projects, say so and the defaults become empty with the values supplied per project instead.
