import { canonicalLinks, ogUrl, pageJsonLd } from "@/showcase/seo";
import { createFileRoute } from "@tanstack/react-router";

import showcaseCss from "@/showcase/showcase.css?url";
import { OverviewPage } from "@/showcase/overview";
import { ShowcaseShell } from "@/showcase/shell";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Awesome DS — Web Awesome Design System" },
      {
        name: "description",
        content:
          "Token-driven design system on Web Awesome 3 and Font Awesome Free: 70 components, 2,883 icons, light and dark themes.",
      },
      { property: "og:title", content: "Awesome DS — Web Awesome Design System" },
      {
        property: "og:description",
        content:
          "Token-driven design system on Web Awesome 3 and Font Awesome Free: 70 components, 2,883 icons, light and dark themes.",
      },
      { property: "og:type", content: "website" },
      ogUrl("/"),
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "stylesheet", href: showcaseCss }, ...canonicalLinks("/")],
    scripts: pageJsonLd("/", PAGE_TITLE),
  }),
  component: IndexRoute,
});

function IndexRoute() {
  return (
    <ShowcaseShell>
      <OverviewPage />
    </ShowcaseShell>
  );
}
