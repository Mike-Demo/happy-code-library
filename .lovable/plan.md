# Include Web Awesome's FOUCE utility

Goal
Ship Web Awesome's anti-FOUCE utility (`wa-cloak`, from the pinned 3.12.0 release) with the
design system, so any app can hide unregistered custom elements until they upgrade.
Verified live at the pinned CDN: `dist/styles/utilities/fouce.css` returns 200 and contains
`.wa-cloak:has(:not(:defined))` plus the `wa-fouce-cloak` keyframes.

Changes

1. `src/webawesome/theme.css`
   - Add `@import url("https://cdn.jsdelivr.net/npm/@awesome.me/webawesome@3.12.0/dist/styles/utilities/fouce.css");`
     alongside the existing pinned CDN imports (after the main webawesome.css import, before
     tokens.css), so consumers get the utility from the same pinned CDN automatically.

2. `src/webawesome/tokens.css`
   - Append the `wa-cloak` rule and `wa-fouce-cloak` keyframes (inside `@layer wa-utilities`)
     as the local fallback, matching the existing local-token-snapshot pattern. The rule is
     tiny (~15 lines), so it is copied verbatim with attribution rather than imported.

3. `.lovable/system.md`
   - Document the utility: wrap regions that contain `<wa-*>` markup in `class="wa-cloak"`
     (or put `wa-cloak` on a top-level container) to keep unregistered elements hidden until
     the loader registers them; note it complements, not replaces, the `hydrate` SSR FOUC rule.

4. `roadmap.md`
   - One line noting the FOUCE utility is included.

Verification
- Typecheck.
- Browser-check the showcase: add `wa-cloak` usage is documented, no console errors, and the
  CDN stylesheet request succeeds (200).
