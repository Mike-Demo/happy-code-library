import { createFileRoute } from "@tanstack/react-router";

import showcaseCss from "@/showcase/showcase.css?url";
import { ShowcaseShell } from "@/showcase/shell";
import { ThemePage } from "@/showcase/theme-page";

const DESCRIPTION =
  "Tune the design system's colors, fonts, spacing, and corners live, then save them as the shipped defaults.";

export const Route = createFileRoute("/theme")({
  head: () => ({
    meta: [
      { title: "Theme Editor — Awesome DS" },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: "Theme Editor — Awesome DS" },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "stylesheet", href: showcaseCss }],
  }),
  component: ThemeRoute,
});

function ThemeRoute() {
  return (
    <ShowcaseShell>
      <ThemePage />
    </ShowcaseShell>
  );
}
