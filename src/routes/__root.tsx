import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  createRootRouteWithContext,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import type { ReactNode } from "react";

import { WEB_AWESOME_HTML_CLASSES } from "../webawesome/setup";
import {
  WEB_AWESOME_FOUCE_STYLE_URL,
  WEB_AWESOME_STYLE_URLS,
} from "../webawesome/cdn";
import themeCss from "../webawesome/theme.css?url";
import appCss from "../styles.css?url";

/**
 * Content Security Policy delivered via meta tag (static hosting has no
 * response-header control; frame-ancestors/report-uri are header-only and
 * intentionally omitted).
 *
 * Third-party inventory (verified against the built page + source):
 * - cdn.jsdelivr.net: Web Awesome + Font Awesome stylesheets (<link> in head),
 *   Font Awesome webfonts (referenced by all.min.css), wa-icon SVG fetches
 * - js.hcaptcha.com / *.hcaptcha.com: hCaptcha demo widget (script injected at
 *   runtime on /components, renders an iframe, fetches challenge assets)
 * - app.aikido.dev: Aikido badge image on /licenses
 * - umami-lite.view.fast: private analytics tracker (script + event endpoint)
 * - esm.sh: NOT allowed — the site ships the vendored Web Awesome bundle;
 *   CDN mode exists only in docs strings and never executes
 *
 * 'unsafe-inline' on script-src/style-src is required: TanStack Start emits
 * inline hydration/scroll-restoration bootstraps and JSON-LD blocks, and the
 * markup uses style="" attributes (incl. the wa-include fragment).
 */
const CONTENT_SECURITY_POLICY = [
  "default-src 'self'",
  "script-src 'self' 'unsafe-inline' https://js.hcaptcha.com https://*.hcaptcha.com https://umami-lite.view.fast",
  "style-src 'self' 'unsafe-inline' https://cdn.jsdelivr.net",
  "font-src 'self' https://cdn.jsdelivr.net",
  "img-src 'self' data: https://app.aikido.dev https://*.hcaptcha.com",
  "connect-src 'self' https://cdn.jsdelivr.net https://*.hcaptcha.com https://umami-lite.view.fast",
  "frame-src https://js.hcaptcha.com https://*.hcaptcha.com",
  "object-src 'none'",
  "base-uri 'self'",
  "form-action 'self'",
  "upgrade-insecure-requests",
].join("; ");


export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Web Awesome Design System" },
      {
        name: "description",
        content:
          "Design system built on Web Awesome 3 and Font Awesome Free — tokens, components, and guidelines.",
      },
      { property: "og:title", content: "Web Awesome Design System" },
      {
        property: "og:description",
        content:
          "Design system built on Web Awesome 3 and Font Awesome Free — tokens, components, and guidelines.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      // Bing Webmaster Tools site verification (account-level code).
      { name: "msvalidate.01", content: "C46BBA52678FF98E0C7403B8F571606E" },
    ],
    links: [
      // Web Awesome + Font Awesome base styles and the anti-FOUCE utility
      // load from the pinned CDN as plain <link> tags — remote @import in
      // theme.css would break consumer CSS pipelines (see webawesome/cdn).
      ...WEB_AWESOME_STYLE_URLS.map((href) => ({ rel: "stylesheet", href }) as const),
      { rel: "stylesheet", href: WEB_AWESOME_FOUCE_STYLE_URL },
      { rel: "stylesheet", href: themeCss },
      { rel: "stylesheet", href: appCss },
      { rel: "icon", type: "image/png", href: "/favicon.png" },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={WEB_AWESOME_HTML_CLASSES}>
      <head>
        <meta httpEquiv="Content-Security-Policy" content={CONTENT_SECURITY_POLICY} />
        <script defer src="https://umami-lite.view.fast/tracker.js" data-website-id="d641c405-88d7-4b58-9967-1947b733d0df"></script>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

// Keep this root providers-only: canvas preview routes (/__mockup,
// /__component) render inside it, so any chrome leaks into every frame.
// WebAwesomeLoader is mounted in the showcase shell (not here) so element
// registration happens strictly after each route's SSR markup hydrates.
function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      {/* Required: nested routes render here. Removing <Outlet /> breaks all child routes. */}
      <Outlet />
    </QueryClientProvider>
  );
}
