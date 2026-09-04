import { useEffect } from "react";

/** Pinned Web Awesome release the CDN assets are loaded from. */
export const WEB_AWESOME_VERSION = "3.12.0";

/** Pinned Font Awesome Free release the icon set is loaded from. */
export const FONT_AWESOME_VERSION = "7.3.1";

/** Base URL for the pinned Web Awesome dist files. */
export const WEB_AWESOME_CDN = `https://cdn.jsdelivr.net/npm/@awesome.me/webawesome@${WEB_AWESOME_VERSION}/dist`;

/**
 * Classes for the root <html> element. They activate the default theme,
 * the default color palette, and light color scheme. Swap "wa-light" for
 * "wa-dark" (or toggle it at runtime) for dark mode.
 */
export const WEB_AWESOME_HTML_CLASSES = "wa-theme-default wa-palette-default wa-light";

const LOADER_ID = "webawesome-loader";

/**
 * Client-side bootstrap for Web Awesome custom elements.
 *
 * Mount once INSIDE your page content (e.g. in a shared layout that route
 * components render), not above lazy route boundaries. Its effect fires
 * after the surrounding tree hydrates, then appends Web Awesome's module
 * loader script from the pinned CDN. The loader registers each <wa-*>
 * element on demand and resolves Font Awesome icons itself, both pinned by
 * the URL version — so no npm package is needed at runtime.
 *
 * Mounting it above a lazy route (e.g. the root route) can register
 * elements while the route's SSR markup is still hydrating; the upgrade
 * reflects attributes onto the DOM mid-hydration and React logs a
 * hydration-mismatch warning. Mounting inside the routed content makes
 * registration strictly post-hydration.
 *
 * Injection is browser-only and runs once per document. Server-rendered
 * <wa-*> markup is fine — the tags ship as plain HTML and upgrade in the
 * browser once the loader arrives.
 *
 * To self-host instead, copy the dist folder into src/assets/ and point
 * WEB_AWESOME_CDN at it.
 */
export function WebAwesomeLoader(): null {
  useEffect(() => {
    if (document.getElementById(LOADER_ID)) return;

    const script = document.createElement("script");
    script.id = LOADER_ID;
    script.type = "module";
    script.src = `${WEB_AWESOME_CDN}/webawesome.loader.js`;
    document.head.append(script);
  }, []);

  return null;
}
