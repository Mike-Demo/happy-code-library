import { createFileRoute } from "@tanstack/react-router";

import showcaseCss from "@/showcase/showcase.css?url";
import { ShowcaseShell } from "@/showcase/shell";
import { LicensesPage, baseCredits } from "@/webawesome/patterns";

const TITLE = "Open source & credits — Awesome DS";
const DESCRIPTION =
  "The open source libraries, icon artwork, and typefaces the Awesome DS design system is built on, with their authors and licenses.";

export const Route = createFileRoute("/licenses")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "stylesheet", href: showcaseCss }],
  }),
  component: LicensesRoute,
});

function LicensesRoute() {
  return (
    <ShowcaseShell>
      <LicensesPage
        lede="This design system is built on open source software and freely licensed artwork. Everything it depends on is credited below."
        backLabel="Back to overview"
        groups={[{ title: "Open source libraries", entries: baseCredits }]}
      />
    </ShowcaseShell>
  );
}
