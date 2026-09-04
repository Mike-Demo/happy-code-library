// Pins the default icon library's CDN to the Font Awesome version this
// design system ships (@fortawesome/fontawesome-free). Web Awesome hardcodes
// an older FA release in its default resolver, so icons added in newer FA
// versions 403 without this pin. The default resolver prefers the icon path
// set here and keeps its own mutator (currentColor fill, duotone handling).
//
// Browser-only: imported from ./components.ts, which WebAwesomeLoader loads
// dynamically after hydration.
//
// To self-host instead, point this at a copied `svgs/` directory from the
// @fortawesome/fontawesome-free package and keep the same folder layout.
import { setIconPath } from "@awesome.me/webawesome/dist/webawesome.js";

/** Keep in sync with the pinned @fortawesome/fontawesome-free version. */
export const FONT_AWESOME_VERSION = "7.3.1";

setIconPath(`https://ka-f.fontawesome.com/releases/v${FONT_AWESOME_VERSION}/svgs`);
