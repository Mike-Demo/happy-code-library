import { createFileRoute } from "@tanstack/react-router";

import showcaseCss from "@/showcase/showcase.css?url";
import { ColorsSection } from "@/showcase/foundations";
import { ShowcaseShell } from "@/showcase/shell";

export const Route = createFileRoute("/colors")({
  head: () => ({
    meta: [
      { title: "Colors — Awesome DS" },
      {
        name: "description",
        content:
          "Semantic color tokens with guaranteed-contrast pairs, surfaces, and full palette scales for light and dark themes.",
      },
      { property: "og:title", content: "Colors — Awesome DS" },
      {
        property: "og:description",
        content:
          "Semantic color tokens with guaranteed-contrast pairs, surfaces, and full palette scales for light and dark themes.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "stylesheet", href: showcaseCss }],
  }),
  component: ColorsRoute,
});

function ColorsRoute() {
  return (
    <ShowcaseShell>
      <ColorsSection />
    </ShowcaseShell>
  );
}
