import { canonicalLinks, ogUrl, pageJsonLd } from "@/showcase/seo";
import { createFileRoute } from "@tanstack/react-router";

import showcaseCss from "@/showcase/showcase.css?url";
import { IconsPage } from "@/showcase/icons-page";
import { ShowcaseShell } from "@/showcase/shell";

export const Route = createFileRoute("/icons")({
  head: () => ({
    meta: [
      { title: "Icons — Awesome DS" },
      {
        name: "description",
        content:
          "Search all 2,883 Font Awesome Free icons — solid, regular, and brands — and copy ready-to-use wa-icon markup.",
      },
      { property: "og:title", content: "Icons — Awesome DS" },
      {
        property: "og:description",
        content:
          "Search all 2,883 Font Awesome Free icons — solid, regular, and brands — and copy ready-to-use wa-icon markup.",
      },
      { property: "og:type", content: "website" },
      ogUrl("/icons"),
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "stylesheet", href: showcaseCss }, ...canonicalLinks("/icons")],
    scripts: pageJsonLd("/icons", "Icons — Awesome DS"),
  }),
  component: IconsRoute,
});

function IconsRoute() {
  return (
    <ShowcaseShell>
      <IconsPage />
    </ShowcaseShell>
  );
}
