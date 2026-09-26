import { canonicalLinks, ogUrl, pageJsonLd } from "@/showcase/seo";
import { createFileRoute } from "@tanstack/react-router";

import showcaseCss from "@/showcase/showcase.css?url";
import { ScaleSection } from "@/showcase/foundations";
import { ShowcaseShell } from "@/showcase/shell";

export const Route = createFileRoute("/scale")({
  head: () => ({
    meta: [
      { title: "Scale & Depth — Awesome DS" },
      {
        name: "description",
        content:
          "Spacing steps, corner radii, and elevation shadows — the named scales that keep every layout on rhythm.",
      },
      { property: "og:title", content: "Scale & Depth — Awesome DS" },
      {
        property: "og:description",
        content:
          "Spacing steps, corner radii, and elevation shadows — the named scales that keep every layout on rhythm.",
      },
      { property: "og:type", content: "website" },
      ogUrl("/scale"),
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "stylesheet", href: showcaseCss }, ...canonicalLinks("/scale")],
    scripts: pageJsonLd("/scale", "Scale PAGE_TITLE Depth — Awesome DS"),
  }),
  component: ScaleRoute,
});

function ScaleRoute() {
  return (
    <ShowcaseShell>
      <ScaleSection />
    </ShowcaseShell>
  );
}
