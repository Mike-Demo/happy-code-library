/**
 * Web Awesome Design System — entry point.
 *
 * Components are Web Awesome custom elements used directly as <wa-*> tags
 * in JSX (typed via ./types.d.ts, pulled in below so consumers importing
 * this barrel get <wa-*> JSX support automatically). This module exports
 * the setup helpers the host app needs; import component modules and
 * utilities straight from "@awesome.me/webawesome" when needed (see
 * .lovable/system.md).
 */
import "./types.d.ts";
// Side-effect import: consumers who import this barrel inherit the full
// theme (tokens, base styles, utilities, Font Awesome) without a separate
// stylesheet link. The preview app links theme.css?url in the root head
// instead and never imports this barrel, so styles are not loaded twice.
import "./theme.css";

export { WebAwesomeLoader, WEB_AWESOME_HTML_CLASSES } from "./setup";
