import { canonicalLinks, ogUrl, pageJsonLd } from "@/showcase/seo";
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
      ogUrl("/licenses"),
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "stylesheet", href: showcaseCss }, ...canonicalLinks("/licenses")],
    scripts: pageJsonLd("/licenses", TITLE),
  }),
  component: LicensesRoute,
});

function LicensesRoute() {
  return (
    <ShowcaseShell>
      <LicensesPage
        lede="This design system is built on open source software and freely licensed artwork. Everything it depends on is credited below."
        backLabel="Back to overview"
        groups={[
          {
            title: "Source code",
            entries: [
              {
                name: "Happy code library",
                author: "Mike-Demo",
                license: "See repository",
                url: "https://github.com/Mike-Demo/happy-code-library",
                note: "This site's source code is on GitHub — browse it, file issues, or contribute.",
              },
            ],
          },
          {
            title: "Open source libraries",
            entries: [
              ...baseCredits,
              {
                name: "Zod",
                author: "Colin McDonnell and contributors",
                license: "MIT",
                url: "https://github.com/colinhacks/zod/blob/main/LICENSE",
              },
            ],
          },
        ]}
      />
        <section className="wa-licenses wa-licenses-group" aria-label="Digital carbon">
          <h2>Digital carbon</h2>
          <p className="wa-licenses-lede">
            Homepage transfer is about 137.4 KB, roughly 0.021 g of CO2 per visit.
            Estimated with CO2.js using the Sustainable Web Design Model v4,
            measured 2026-09-27. Hosting: SpaceFast, which is not currently
            listed in the Green Web Foundation&apos;s green hosting dataset.
            Machine-readable disclosure: {" "}
            <a className="wa-licenses-entry-link" href="/carbon.txt">
              /carbon.txt
            </a>
          </p>
        </section>
    </ShowcaseShell>
  );
}
