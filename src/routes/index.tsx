import { createFileRoute } from "@tanstack/react-router";

import showcaseCss from "@/showcase/showcase.css?url";
import { ButtonsSection, FormsSection } from "@/showcase/actions-forms";
import { DisplaySection, FeedbackSection } from "@/showcase/feedback-display";
import { ColorsSection, ScaleSection, TypographySection } from "@/showcase/foundations";
import { IconsSection } from "@/showcase/icons";
import { NavigationSection, OverlaysSection } from "@/showcase/nav-overlays";
import { ThemeToggle } from "@/showcase/ui";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Web Awesome Design System — Showcase" },
      {
        name: "description",
        content:
          "Living showcase of the Web Awesome + Font Awesome Free design system: color tokens, typography, icons, and every component.",
      },
      { property: "og:title", content: "Web Awesome Design System — Showcase" },
      {
        property: "og:description",
        content:
          "Living showcase of the Web Awesome + Font Awesome Free design system: color tokens, typography, icons, and every component.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "stylesheet", href: showcaseCss }],
  }),
  component: ShowcasePage,
});

function ShowcasePage() {
  return (
    <wa-page mobile-breakpoint="920">
      <a className="wa-visually-hidden" slot="skip-to-content" href="#overview">
        Skip to content
      </a>

      <header slot="header" className="ds-bar wa-split wa-gap-m">
        <div className="wa-cluster wa-gap-s" style={{ alignItems: "center" }}>
          <wa-button className="wa-mobile-only" appearance="plain" size="s" data-toggle-nav>
            <wa-icon name="bars" label="Open navigation"></wa-icon>
          </wa-button>
          <wa-icon className="ds-logo" name="wand-magic-sparkles"></wa-icon>
          <span className="ds-brand">Awesome DS</span>
          <wa-badge variant="neutral" appearance="outlined">
            WA 3.12
          </wa-badge>
          <wa-badge variant="neutral" appearance="outlined">
            FA 7.3
          </wa-badge>
        </div>
        <div className="wa-cluster wa-gap-xs" style={{ alignItems: "center" }}>
          <ThemeToggle />
        </div>
      </header>

      <nav slot="navigation" className="ds-nav wa-stack wa-gap-3xs" aria-label="Showcase sections">
        <a href="#overview" data-drawer="close">
          Overview
        </a>
        <p className="ds-nav-label">Foundations</p>
        <a href="#colors" data-drawer="close">
          Color
        </a>
        <a href="#typography" data-drawer="close">
          Typography
        </a>
        <a href="#scale" data-drawer="close">
          Scale &amp; depth
        </a>
        <a href="#icons" data-drawer="close">
          Icons
        </a>
        <p className="ds-nav-label">Components</p>
        <a href="#buttons" data-drawer="close">
          Buttons &amp; actions
        </a>
        <a href="#forms" data-drawer="close">
          Forms
        </a>
        <a href="#feedback" data-drawer="close">
          Feedback &amp; status
        </a>
        <a href="#display" data-drawer="close">
          Data display
        </a>
        <a href="#navigation" data-drawer="close">
          Navigation
        </a>
        <a href="#overlays" data-drawer="close">
          Overlays
        </a>
      </nav>

      <div slot="navigation-footer" className="ds-nav-foot">
        Free &amp; open source
      </div>

      <main className="ds-main">
        <section id="overview" className="ds-section ds-hero">
          <div className="ds-section-inner wa-stack wa-gap-l">
            <p className="ds-kicker">Design system</p>
            <h1 className="ds-hero-title">Web Awesome + Font Awesome, ready to build with</h1>
            <p className="ds-hero-lede">
              A complete, token-driven design system built on Web Awesome components and Font
              Awesome Free icons. Attach it to a project and every button, form, and callout
              arrives styled, accessible, and themeable.
            </p>
            <div className="wa-cluster wa-gap-s" style={{ alignItems: "center" }}>
              <wa-button variant="brand" size="l" href="#buttons">
                Explore components
              </wa-button>
              <wa-button variant="neutral" appearance="outlined" size="l" href="#colors">
                See the foundations
              </wa-button>
            </div>
            <div className="wa-cluster wa-gap-s" style={{ alignItems: "center" }}>
              <code className="ds-code">import "@/webawesome/theme.css"</code>
              <wa-copy-button value='import "@/webawesome/theme.css"'></wa-copy-button>
            </div>
          </div>
        </section>

        <ColorsSection />
        <TypographySection />
        <ScaleSection />
        <IconsSection />
        <ButtonsSection />
        <FormsSection />
        <FeedbackSection />
        <DisplaySection />
        <NavigationSection />
        <OverlaysSection />
      </main>

      <footer slot="footer" className="ds-bar ds-footer wa-split">
        <small>Built with Web Awesome and Font Awesome Free</small>
        <small className="ds-quiet">Theme: default • Palette: default</small>
      </footer>
    </wa-page>
  );
}
