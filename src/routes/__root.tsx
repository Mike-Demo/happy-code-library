import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  createRootRouteWithContext,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import type { ReactNode } from "react";

import { WebAwesomeLoader, WEB_AWESOME_HTML_CLASSES } from "../webawesome/setup";
import themeCss from "../webawesome/theme.css?url";
import appCss from "../styles.css?url";

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
    ],
    links: [
      { rel: "stylesheet", href: themeCss },
      { rel: "stylesheet", href: appCss },
      { rel: "icon", href: "/favicon.ico", type: "image/x-icon" },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={WEB_AWESOME_HTML_CLASSES}>
      <head>
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
// WebAwesomeLoader renders nothing — it only registers <wa-*> elements.
function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <WebAwesomeLoader />
      {/* Required: nested routes render here. Removing <Outlet /> breaks all child routes. */}
      <Outlet />
    </QueryClientProvider>
  );
}
