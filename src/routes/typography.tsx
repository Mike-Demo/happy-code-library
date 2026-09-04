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
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "stylesheet", href: showcaseCss }],
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
