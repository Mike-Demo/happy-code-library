// Shared showcase site shell: header, navigation, footer. Preview-only.
import { Link } from "@tanstack/react-router";
import type { ReactElement, ReactNode } from "react";

import { WaBadge, WaButton, WaIcon, WaPage } from "@/webawesome/react";
import { SiteFooter } from "@/webawesome/patterns";
import { WebAwesomeLoader } from "@/webawesome/setup";

import { ThemeToggle } from "./ui";

const FOUNDATION_LINKS = [
  { to: "/colors", label: "Colors" },
  { to: "/typography", label: "Typography" },
  { to: "/scale", label: "Scale & depth" },
  { to: "/theme", label: "Theme editor" },
] as const;

const LIBRARY_LINKS = [
  { to: "/icons", label: "Icons" },
  { to: "/components", label: "Components" },
  { to: "/delivery", label: "Delivery & SSR" },
  { to: "/licenses", label: "Open source" },
] as const;

export function ShowcaseShell({ children }: { children: ReactNode }): ReactElement {
  return (
    <WaPage mobile-breakpoint="920">
      {/* Registers <wa-*> elements after this subtree hydrates. */}
      <WebAwesomeLoader />
      <a className="wa-visually-hidden" slot="skip-to-content" href="#main">
        Skip to content
      </a>

      <header slot="header" className="ds-bar wa-split wa-gap-m">
        <div className="wa-cluster wa-gap-s" style={{ alignItems: "center" }}>
          <WaButton className="wa-mobile-only" appearance="plain" size="s" data-toggle-nav>
            <WaIcon name="bars" label="Open navigation"></WaIcon>
          </WaButton>
          <Link to="/" className="ds-brand-link wa-cluster wa-gap-s" style={{ alignItems: "center" }}>
            <WaIcon className="ds-logo" name="wand-magic-sparkles"></WaIcon>
            <span className="ds-brand">Awesome DS</span>
          </Link>
          <WaBadge variant="neutral" appearance="outlined">
            WA 3.12
          </WaBadge>
          <WaBadge variant="neutral" appearance="outlined">
            FA 7.3
          </WaBadge>
        </div>
        <div className="wa-cluster wa-gap-xs" style={{ alignItems: "center" }}>
          <ThemeToggle />
        </div>
      </header>

      <nav slot="navigation" className="ds-nav wa-stack wa-gap-3xs" aria-label="Showcase pages">
        <Link to="/" data-drawer="close" activeOptions={{ exact: true }} activeProps={{ className: "ds-active" }}>
          Overview
        </Link>
        <p className="ds-nav-label">Foundations</p>
        {FOUNDATION_LINKS.map((link) => (
          <Link
            key={link.to}
            to={link.to}
            data-drawer="close"
            activeProps={{ className: "ds-active" }}
          >
            {link.label}
          </Link>
        ))}
        <p className="ds-nav-label">Library</p>
        {LIBRARY_LINKS.map((link) => (
          <Link
            key={link.to}
            to={link.to}
            data-drawer="close"
            activeProps={{ className: "ds-active" }}
          >
            {link.label}
          </Link>
        ))}
      </nav>

      <div slot="navigation-footer" className="ds-nav-foot">
        Free &amp; open source
      </div>

      <main id="main" className="ds-main">
        {children}
      </main>

      <SiteFooter slot="footer" />
    </wa-page>
  );
}
