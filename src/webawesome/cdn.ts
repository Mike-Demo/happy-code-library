/**
 * CDN delivery for Web Awesome — optional.
 *
 * By default this design system registers custom elements from the vendored
 * bundle in ./vendor, so nothing is fetched from a third party at runtime.
 * CDN mode is the alternative: the browser loads Web Awesome's own loader from
 * a version-pinned CDN, which then autoloads each element on demand.
 *
 *   Bundle mode  — no network dependency, one larger JS file up front.
 *   CDN mode     — smaller app payload, lazily loaded elements, but the page
 *                  depends on the CDN being reachable.
 *
 * Stylesheets always come from the same pinned CDN (see ./theme.css); the URLs
 * are exported here too for projects that prefer <link> tags in the document
 * head over a CSS import.
 */
import { FONT_AWESOME_VERSION, WEB_AWESOME_CDN, WEB_AWESOME_VERSION } from "./setup";

/** Font Awesome Free CDN root for the pinned release. */
export const FONT_AWESOME_CDN = `https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@${FONT_AWESOME_VERSION}`;

/** Web Awesome autoloader — registers elements lazily as they appear. */
export const WEB_AWESOME_LOADER_URL = `${WEB_AWESOME_CDN}/webawesome.loader.js`;

/** Web Awesome autoloader with Lit hydration support, for SSR'd markup. */
export const WEB_AWESOME_SSR_LOADER_URL = `${WEB_AWESOME_CDN}/webawesome.ssr-loader.js`;

/** Complete Web Awesome stylesheet: base styles, theme, palette, utilities. */
export const WEB_AWESOME_STYLE_URL = `${WEB_AWESOME_CDN}/styles/webawesome.css`;

/** Font Awesome Free stylesheet: fa-* utility classes and webfonts. */
export const FONT_AWESOME_STYLE_URL = `${FONT_AWESOME_CDN}/css/all.min.css`;

/** Where <wa-icon> fetches SVGs from. */
export const FONT_AWESOME_ICON_PATH = `${FONT_AWESOME_CDN}/svgs`;

/** Both stylesheets, in load order, for <link rel="stylesheet"> tags. */
export const WEB_AWESOME_STYLE_URLS = [WEB_AWESOME_STYLE_URL, FONT_AWESOME_STYLE_URL] as const;

/** The pinned releases the URLs above point at. */
export const CDN_VERSIONS = {
  webAwesome: WEB_AWESOME_VERSION,
  fontAwesome: FONT_AWESOME_VERSION,
} as const;

export interface CdnLoadOptions {
  /**
   * Load the hydration-aware loader instead of the standard one. Required
   * when <wa-*> markup is server-rendered with declarative shadow DOM.
   */
  hydrate?: boolean;
}

const SCRIPT_ID = "wa-cdn-loader";

interface BasePathModule {
  setIconPath: (path: string) => void;
}

/**
 * Loads Web Awesome from the pinned CDN. Browser-only and idempotent: calling
 * it more than once per document is a no-op, so elements are never registered
 * twice.
 *
 * The icon path is pinned first, before the loader registers anything: Web
 * Awesome's stock resolver targets an older Font Awesome release whose CDN
 * 404s for icons added since. Both modules come from the same CDN root, so
 * they share the module instance holding that setting.
 */
export async function loadWebAwesomeFromCdn(options: CdnLoadOptions = {}): Promise<void> {
  if (typeof document === "undefined") return;
  if (document.getElementById(SCRIPT_ID)) return;

  const script = document.createElement("script");
  script.id = SCRIPT_ID;
  script.type = "module";
  script.src = options.hydrate ? WEB_AWESOME_SSR_LOADER_URL : WEB_AWESOME_LOADER_URL;

  const module = (await import(/* @vite-ignore */ `${WEB_AWESOME_CDN}/webawesome.js`)) as BasePathModule;
  module.setIconPath(FONT_AWESOME_ICON_PATH);

  document.head.append(script);
}

