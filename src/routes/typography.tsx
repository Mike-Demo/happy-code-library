import { canonicalLinks, ogUrl, pageJsonLd } from "@/showcase/seo";
import { createFileRoute } from "@tanstack/react-router";

import showcaseCss from "@/showcase/showcase.css?url";
import { TypographySection } from "@/showcase/foundations";
import { ShowcaseShell } from "@/showcase/shell";

export const Route = createFileRoute("/typography")({
  head: () => ({
    meta: [
      { title: "Typography — Awesome DS" },
      {
        name: "description",
        content:
          "Font families, the modular type scale, and named weights — every text style driven by --wa-font-* tokens.",
      },
      { property: "og:title", content: "Typography — Awesome DS" },
      {
        property: "og:description",
        content:
          "Font families, the modular type scale, and named weights — every text style driven by --wa-font-* tokens.",
      },
      { property: "og:type", content: "website" },
      ogUrl("/typography"),
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "stylesheet", href: showcaseCss }, ...canonicalLinks("/typography")],
    scripts: pageJsonLd("/typography", PAGE_TITLE),
  }),
  component: TypographyRoute,
});

function TypographyRoute() {
  return (
    <ShowcaseShell>
      <TypographySection />
    </ShowcaseShell>
  );
}
