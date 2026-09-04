// Delivery page: how element definitions load (bundle vs CDN, SSR hydration).
// Preview-only.
import type { ReactElement, ReactNode } from "react";

import {
  FONT_AWESOME_STYLE_URL,
  WEB_AWESOME_LOADER_URL,
  WEB_AWESOME_SSR_LOADER_URL,
  WEB_AWESOME_STYLE_URL,
} from "@/webawesome/cdn";
import { FONT_AWESOME_VERSION, WEB_AWESOME_VERSION } from "@/webawesome/setup";

import { Section } from "./ui";

const MODES = [
  {
    icon: "box-archive",
    title: "Bundle (default)",
    text: "Elements come from the bundle shipped inside the design system. No third-party request, works offline, one larger file up front.",
    code: `<WebAwesomeLoader />`,
  },
  {
    icon: "cloud",
    title: "CDN",
    text: "Web Awesome's own autoloader is fetched from a version-pinned CDN and registers each element on demand. Smaller app payload; the page depends on the CDN.",
    code: `<WebAwesomeLoader source="cdn" />`,
  },
  {
    icon: "server",
    title: "Bundle + SSR hydration",
    text: "Same shipped bundle, built with Lit's hydration support so server-rendered shadow roots are hydrated instead of thrown away.",
    code: `<WebAwesomeLoader hydrate />`,
  },
  {
    icon: "cloud-arrow-down",
    title: "CDN + SSR hydration",
    text: "The CDN's hydration-aware autoloader (webawesome.ssr-loader.js) for server-rendered markup without shipping the bundle.",
    code: `<WebAwesomeLoader source="cdn" hydrate />`,
  },
] as const;

const LINK_SNIPPET = `<!-- Optional: stylesheets as head links instead of a CSS import -->
<link rel="stylesheet" href="${WEB_AWESOME_STYLE_URL}">
<link rel="stylesheet" href="${FONT_AWESOME_STYLE_URL}">`;

const SSR_SNIPPET = `// Server (Node / build-time prerender), after installing
// @awesome.me/webawesome and Lit's SSR packages:
import { renderWebAwesomeMarkup } from "@/webawesome/ssr/render.server";

const html = await renderWebAwesomeMarkup(
  \`<wa-card with-header>
     <h3 slot="header">Pricing</h3>
     <wa-button variant="brand">Choose plan</wa-button>
   </wa-card>\`,
);

// Client: hydrate the server-rendered shadow roots.
<WebAwesomeLoader hydrate />`;

const WITH_SNIPPET = `<!-- Slot detection does not work on the server, so name the parts -->
<wa-dialog with-footer>
  <p>Dialog content</p>
  <div slot="footer"><wa-button>Close</wa-button></div>
</wa-dialog>`;

const TIMING_SNIPPET = `// Never set properties before the element is defined and settled,
// or Lit throws a hydration error.
const rating = document.querySelector("wa-rating");
await customElements.whenDefined("wa-rating");
await rating.updateComplete;
rating.getSymbol = () => '<wa-icon name="heart"></wa-icon>';`;

const LIMITS = [
  "Server-rendered components are an approximation, not a no-JavaScript experience — they still need their scripts to become interactive.",
  "<wa-icon> renders an empty SVG on the server; icons appear once the browser resolves them.",
  "<wa-qr-code> and the chart components need a browser canvas and stay blank until they connect.",
  "<wa-animated-image> has no meaningful static fallback.",
  "Localization always falls back to English, and text direction is not inherited on the server.",
  "Lit's SSR package is experimental; keep it to build-time or Node rendering rather than a hot request path.",
];

function CodePanel({ label, code }: { label: string; code: string }): ReactElement {
  return (
    <div className="wa-stack wa-gap-2xs">
      <h3 className="ds-demo-title">{label}</h3>
      <div className="ds-code-block">
        <pre>
          <code>{code}</code>
        </pre>
        <wa-copy-button value={code}></wa-copy-button>
      </div>
    </div>
  );
}

function ModeCard({
  icon,
  title,
  text,
  code,
}: {
  icon: string;
  title: string;
  text: ReactNode;
  code: string;
}): ReactElement {
  return (
    <wa-card with-header>
      <div slot="header" className="wa-cluster wa-gap-s" style={{ alignItems: "center" }}>
        <wa-icon name={icon}></wa-icon>
        <strong>{title}</strong>
      </div>
      <div className="wa-stack wa-gap-s">
        <p>{text}</p>
        <code className="ds-chip">{code}</code>
      </div>
    </wa-card>
  );
}

export function DeliveryPage(): ReactElement {
  return (
    <>
      <Section
        id="modes"
        kicker="Delivery"
        title="Loading modes"
        lede={`Every mode uses the same pinned releases — Web Awesome ${WEB_AWESOME_VERSION} and Font Awesome Free ${FONT_AWESOME_VERSION} — and the same components. Only where the JavaScript comes from, and whether server-rendered markup is hydrated, changes.`}
      >
        <div className="wa-grid ds-card-grid">
          {MODES.map((mode) => (
            <ModeCard key={mode.title} {...mode} />
          ))}
        </div>
        <wa-callout variant="neutral">
          <wa-icon slot="icon" name="circle-info"></wa-icon>
          Mount the loader once, inside your routed content rather than above a lazy route
          boundary, so registration happens after that subtree hydrates.
        </wa-callout>
      </Section>

      <Section
        id="cdn"
        kicker="CDN"
        title="Loading from a CDN"
        lede="CDN mode fetches Web Awesome's autoloader from jsDelivr at the pinned version and lets it register elements as they appear. Stylesheets already load from the same pinned CDN through theme.css; link tags are available if you prefer them."
      >
        <div className="wa-stack wa-gap-l">
          <CodePanel label="Autoloader URLs" code={`${WEB_AWESOME_LOADER_URL}\n${WEB_AWESOME_SSR_LOADER_URL}`} />
          <CodePanel label="Stylesheets as head links" code={LINK_SNIPPET} />
        </div>
      </Section>

      <Section
        id="ssr"
        kicker="SSR"
        title="Server side rendering"
        lede="Server rendering emits each component's shadow root as a declarative shadow DOM template, so components look roughly final before their JavaScript runs. The client side is one prop; the server side is opt-in and experimental."
      >
        <div className="wa-stack wa-gap-l">
          <CodePanel label="Render on the server, hydrate on the client" code={SSR_SNIPPET} />
          <CodePanel label="Name conditional slots with with-* attributes" code={WITH_SNIPPET} />
          <CodePanel label="Wait before setting properties" code={TIMING_SNIPPET} />
          <wa-callout variant="warning">
            <wa-icon slot="icon" name="triangle-exclamation"></wa-icon>
            <strong>Experimental.</strong> Web Awesome labels its SSR support experimental, as does
            Lit's underlying SSR package. Hydration mode is safe to turn on; server rendering is
            best kept to build-time or Node rendering.
          </wa-callout>
          <div className="wa-stack wa-gap-2xs">
            <h3 className="ds-demo-title">Known limitations</h3>
            <ul className="wa-stack wa-gap-2xs">
              {LIMITS.map((limit) => (
                <li key={limit}>{limit}</li>
              ))}
            </ul>
          </div>
        </div>
      </Section>
    </>
  );
}
