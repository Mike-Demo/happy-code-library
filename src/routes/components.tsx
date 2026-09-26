import { canonicalLinks, ogUrl, pageJsonLd } from "@/showcase/seo";
import { createFileRoute } from "@tanstack/react-router";

import showcaseCss from "@/showcase/showcase.css?url";
import { ComponentsPage } from "@/showcase/components-page";
import { ShowcaseShell } from "@/showcase/shell";

export const Route = createFileRoute("/components")({
  head: () => ({
    meta: [
      { title: "Components — Awesome DS" },
      {
        name: "description",
        content:
          "All 70 Web Awesome elements with live variants, interaction states, realistic compositions, and copyable code.",
      },
      { property: "og:title", content: "Components — Awesome DS" },
      {
        property: "og:description",
        content:
          "All 70 Web Awesome elements with live variants, interaction states, realistic compositions, and copyable code.",
      },
      { property: "og:type", content: "website" },
      ogUrl("/components"),
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "stylesheet", href: showcaseCss }, ...canonicalLinks("/components")],
    scripts: pageJsonLd("/components", "Components — Awesome DS"),
  }),
  component: ComponentsRoute,
});

function ComponentsRoute() {
  return (
    <ShowcaseShell>
      <ComponentsPage />
    </ShowcaseShell>
  );
}
