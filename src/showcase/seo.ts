/** Public origin the static site is served from (Spacefast). */
export const SITE_URL = "https://design.1.mikedemo.dev";

const SITE_NAME = "Awesome DS";
const REPO_URL = "https://github.com/Mike-Demo/happy-code-library";

/** Canonical link for a leaf route. */
export function canonicalLinks(path: string): { rel: string; href: string }[] {
  return [{ rel: "canonical", href: `${SITE_URL}${path}` }];
}

/** og:url meta for a leaf route. */
export function ogUrl(path: string): { property: string; content: string } {
  return { property: "og:url", content: `${SITE_URL}${path}` };
}

/** JSON-LD for a page: WebPage within the site, plus site-level data on "/". */
export function pageJsonLd(
  path: string,
  name: string,
): { type: string; children: string }[] {
  const website = {
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    name: SITE_NAME,
    url: `${SITE_URL}/`,
  };
  const graph: Record<string, unknown>[] = [
    {
      "@type": "WebPage",
      "@id": `${SITE_URL}${path}#webpage`,
      url: `${SITE_URL}${path}`,
      name,
      isPartOf: { "@id": `${SITE_URL}/#website` },
    },
  ];
  if (path === "/") {
    graph.push(website, {
      "@type": "SoftwareSourceCode",
      name: `${SITE_NAME} — Web Awesome Design System`,
      codeRepository: REPO_URL,
      programmingLanguage: ["TypeScript", "CSS"],
      license: "https://opensource.org/licenses/MIT",
    });
  }
  return [
    {
      type: "application/ld+json",
      children: JSON.stringify({ "@context": "https://schema.org", "@graph": graph }),
    },
  ];
}
