import { canonicalLinks, ogUrl, pageJsonLd } from "@/showcase/seo";
import { createFileRoute } from "@tanstack/react-router";

import showcaseCss from "@/showcase/showcase.css?url";
import { DeliveryPage } from "@/showcase/delivery";
import { ShowcaseShell } from "@/showcase/shell";

const DESCRIPTION =
  "Bundle or CDN loading, optional server side rendering with hydration, and the limits of each — for Web Awesome and Font Awesome Free.";

export const Route = createFileRoute("/delivery")({
  head: () => ({
    meta: [
      { title: "Delivery & SSR — Awesome DS" },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: "Delivery & SSR — Awesome DS" },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      ogUrl("/delivery"),
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "stylesheet", href: showcaseCss }, ...canonicalLinks("/delivery")],
    scripts: pageJsonLd("/delivery", PAGE_TITLE),
  }),
  component: DeliveryRoute,
});

function DeliveryRoute() {
  return (
    <ShowcaseShell>
      <DeliveryPage />
    </ShowcaseShell>
  );
}
