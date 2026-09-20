// Overview page: system identity, stats, and jumping-off points. Preview-only.
import { Link, useNavigate } from "@tanstack/react-router";
import type { ReactElement } from "react";

import { WaButton, WaCard, WaCopyButton, WaIcon } from "@/webawesome/react";

import { COMPONENT_COUNT } from "./component-registry";
import { BRAND_ICONS, REGULAR_ICONS, SOLID_ICONS } from "./icon-index";

const ICON_TOTAL = SOLID_ICONS.length + REGULAR_ICONS.length + BRAND_ICONS.length;

const QUICK_START = `import "@/webawesome/theme.css";
import { WebAwesomeLoader } from "@/webawesome";

// Mount once near the root, then use any element:
<WebAwesomeLoader />
<wa-button variant="brand">Get started</wa-button>`;

const PAGES = [
  {
    to: "/colors",
    icon: "palette",
    title: "Colors",
    text: "Semantic fill/on-color pairs at three attention levels, surfaces, and the full palette scales.",
  },
  {
    to: "/typography",
    icon: "font",
    title: "Typography",
    text: "Four font families, a modular size scale, and named weights — all token-driven.",
  },
  {
    to: "/scale",
    icon: "ruler-combined",
    title: "Scale & depth",
    text: "Spacing steps, corner radii, and elevation shadows that keep layouts on rhythm.",
  },
  {
    to: "/icons",
    icon: "icons",
    title: "Iconography",
    text: ICON_TOTAL.toLocaleString() + " Font Awesome Free icons, searchable by name with copyable markup.",
  },
  {
    to: "/components",
    icon: "cubes",
    title: "Components",
    text: COMPONENT_COUNT + " custom elements with live variants, states, and copyable code.",
  },
] as const;

const PRINCIPLES = [
  {
    icon: "swatchbook",
    title: "Tokens, never raw values",
    text: "Every color, space, radius, and shadow comes from a --wa-* token, so one theme swap restyles everything — including dark mode.",
  },
  {
    icon: "layer-group",
    title: "Variant is meaning, appearance is weight",
    text: "brand/success/warning/danger say what something means; accent/filled/outlined/plain say how loudly it speaks.",
  },
  {
    icon: "universal-access",
    title: "Accessible by construction",
    text: "Real buttons and labels, keyboard-reachable states, and guaranteed-contrast on-color pairs are built into the components.",
  },
] as const;

export function OverviewPage(): ReactElement {
  const navigate = useNavigate();

  return (
    <>
      <section className="ds-hero">
        <div className="ds-section-inner wa-stack wa-gap-l">
          <p className="ds-kicker">Design system</p>
          <h1 className="ds-hero-title">Awesome DS</h1>
          <p className="ds-lede" style={{ maxWidth: "40ch" }}>
            A complete, token-driven design system built on Web Awesome 3 and Font Awesome Free —
            free, open source, and themed for light and dark out of the box.
          </p>
          <div className="wa-cluster wa-gap-s">
            <WaButton
              variant="brand"
              size="l"
              with-end
              onClick={() => void navigate({ to: "/components" })}
            >
              <WaIcon slot="end" name="arrow-right"></WaIcon>
              Browse components
            </WaButton>
            <WaButton appearance="outlined" size="l" onClick={() => void navigate({ to: "/icons" })}>
              Search icons
            </WaButton>
          </div>
          <div className="ds-stats wa-grid wa-gap-m">
            <div className="ds-stat">
              <span className="ds-stat-value">{COMPONENT_COUNT}</span>
              <span className="ds-stat-label">components</span>
            </div>
            <div className="ds-stat">
              <span className="ds-stat-value">{ICON_TOTAL.toLocaleString()}</span>
              <span className="ds-stat-label">icons</span>
            </div>
            <div className="ds-stat">
              <span className="ds-stat-value">5×3</span>
              <span className="ds-stat-label">semantic color pairs</span>
            </div>
            <div className="ds-stat">
              <span className="ds-stat-value">2</span>
              <span className="ds-stat-label">themes: light &amp; dark</span>
            </div>
          </div>
        </div>
      </section>

      <section className="ds-section">
        <div className="ds-section-inner wa-stack wa-gap-xl">
          <header className="wa-stack wa-gap-2xs">
            <p className="ds-kicker">Explore</p>
            <h2 className="ds-title">The system at a glance</h2>
          </header>
          <div className="wa-grid ds-page-grid wa-gap-l">
            {PAGES.map((page) => (
              <Link key={page.to} to={page.to} className="ds-page-card-link">
                <WaCard className="ds-page-card">
                  <div className="wa-stack wa-gap-s">
                    <WaIcon name={page.icon} className="ds-page-card-icon"></WaIcon>
                    <strong>{page.title}</strong>
                    <span className="ds-quiet">{page.text}</span>
                    <span className="ds-page-card-cta">
                      Open <WaIcon name="arrow-right"></WaIcon>
                    </span>
                  </div>
                </WaCard>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="ds-section ds-section-alt">
        <div className="ds-section-inner wa-stack wa-gap-xl">
          <header className="wa-stack wa-gap-2xs">
            <p className="ds-kicker">Principles</p>
            <h2 className="ds-title">How to build with it</h2>
          </header>
          <div className="wa-grid ds-page-grid wa-gap-l">
            {PRINCIPLES.map((principle) => (
              <div key={principle.title} className="ds-principle wa-stack wa-gap-s">
                <WaIcon name={principle.icon} className="ds-page-card-icon"></WaIcon>
                <strong>{principle.title}</strong>
                <span className="ds-quiet">{principle.text}</span>
              </div>
            ))}
          </div>

          <div className="wa-stack wa-gap-s">
            <h3 className="ds-demo-title">Quick start</h3>
            <div className="ds-code-block">
              <pre>
                <code>{QUICK_START}</code>
              </pre>
              <WaCopyButton value={QUICK_START}></WaCopyButton>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
