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
 * Mount once near the app root. It lazily imports the Web Awesome
 * autoloader after hydration; the autoloader scans the DOM for <wa-*>
 * tags, registers each component on demand, and keeps watching for new
 * tags via a MutationObserver — no per-component imports required.
 *
 * The import MUST stay dynamic and client-side: the loader touches
 * `document` at module scope, so importing it during SSR crashes the
 * server render. Server-rendered <wa-*> markup is fine — the tags ship
 * as plain HTML and upgrade in the browser.
 */
export function WebAwesomeLoader(): null {
  useEffect(() => {
    void import("@awesome.me/webawesome/dist/webawesome.loader.js");
  }, []);
  return null;
}
