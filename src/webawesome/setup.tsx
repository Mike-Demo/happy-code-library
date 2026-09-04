import { useEffect } from "react";

/**
 * Classes for the root <html> element. They activate the default theme,
 * the default color palette, and light color scheme. Swap "wa-light" for
 * "wa-dark" (or toggle it at runtime) for dark mode.
 */
export const WEB_AWESOME_HTML_CLASSES = "wa-theme-default wa-palette-default wa-light";

/**
 * Client-side bootstrap for Web Awesome custom elements.
 *
 * Mount once INSIDE your page content (e.g. in a shared layout that route
 * components render), not above lazy route boundaries. Its effect fires
 * after the surrounding tree hydrates, then imports ./components, which
 * registers every Web Awesome element explicitly. Explicit imports are
 * required in bundled apps: Web Awesome's autoloader resolves component
 * files by URL at runtime, which 404s under a bundler.
 *
 * Mounting it above a lazy route (e.g. the root route) can register
 * elements while the route's SSR markup is still hydrating; the upgrade
 * reflects attributes onto the DOM mid-hydration and React logs a
 * hydration-mismatch warning. Mounting inside the routed content makes
 * registration strictly post-hydration.
 *
 * The import MUST stay dynamic and client-side: component modules touch
 * `document` at module scope, so importing them during SSR crashes the
 * server render. Server-rendered <wa-*> markup is fine — the tags ship
 * as plain HTML and upgrade in the browser.
 */
export function WebAwesomeLoader(): null {
  useEffect(() => {
    void import("./components");
  }, []);
  return null;
}
