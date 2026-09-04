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

export { WebAwesomeLoader, WEB_AWESOME_HTML_CLASSES } from "./setup";
