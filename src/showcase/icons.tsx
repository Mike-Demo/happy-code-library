// Font Awesome Free icon gallery rendered through <wa-icon>. Preview-only.
import type { ReactElement } from "react";

import { Demo, Section } from "./ui";

const SOLID_ICONS = [
  "house",
  "magnifying-glass",
  "user",
  "gear",
  "bell",
  "heart",
  "star",
  "envelope",
  "calendar",
  "trash",
  "pen",
  "download",
  "upload",
  "check",
  "xmark",
  "circle-info",
  "triangle-exclamation",
  "credit-card",
  "cart-shopping",
  "chart-line",
  "lock",
  "globe",
  "code",
  "palette",
] as const;

const REGULAR_ICONS = ["heart", "star", "bell", "envelope", "calendar", "comment", "bookmark", "clock"] as const;

const BRAND_ICONS = ["github", "x-twitter", "google", "apple", "figma", "slack", "discord", "youtube"] as const;

export function IconsSection(): ReactElement {
  return (
    <Section
      id="icons"
      kicker="Foundations"
      title="Icons"
      lede="Font Awesome Free ships three styles: classic solid (default), classic regular, and brands. Icons inherit the surrounding font-size and color, so they scale and theme with text."
    >
      <Demo title="Classic solid (default)">
        <div className="wa-grid ds-icon-grid wa-gap-s">
          {SOLID_ICONS.map((name) => (
            <div key={name} className="ds-icon-cell">
              <wa-icon name={name}></wa-icon>
              <span className="ds-icon-name">{name}</span>
            </div>
          ))}
        </div>
      </Demo>

      <div className="wa-grid wa-gap-l" style={{ alignItems: "start" }}>
        <Demo title='Classic regular — variant="regular"'>
          <div className="wa-grid ds-icon-grid wa-gap-s">
            {REGULAR_ICONS.map((name) => (
              <div key={`regular-${name}`} className="ds-icon-cell">
                <wa-icon name={name} variant="regular"></wa-icon>
                <span className="ds-icon-name">{name}</span>
              </div>
            ))}
          </div>
        </Demo>

        <Demo title='Brands — family="brands"'>
          <div className="wa-grid ds-icon-grid wa-gap-s">
            {BRAND_ICONS.map((name) => (
              <div key={`brand-${name}`} className="ds-icon-cell">
                <wa-icon name={name} family="brands"></wa-icon>
                <span className="ds-icon-name">{name}</span>
              </div>
            ))}
          </div>
        </Demo>
      </div>

      <Demo title="Sizing & color follow the text">
        <div className="wa-cluster wa-gap-l" style={{ alignItems: "center" }}>
          <wa-icon name="star" style={{ fontSize: "var(--wa-font-size-s)" }}></wa-icon>
          <wa-icon name="star" style={{ fontSize: "var(--wa-font-size-l)" }}></wa-icon>
          <wa-icon name="star" style={{ fontSize: "var(--wa-font-size-2xl)" }}></wa-icon>
          <wa-icon
            name="star"
            style={{
              fontSize: "var(--wa-font-size-3xl)",
              color: "var(--wa-color-warning-fill-loud)",
            }}
          ></wa-icon>
          <wa-icon
            name="heart"
            style={{
              fontSize: "var(--wa-font-size-3xl)",
              color: "var(--wa-color-danger-fill-loud)",
            }}
          ></wa-icon>
          <code className="ds-code">{'<wa-icon name="star"></wa-icon>'}</code>
        </div>
      </Demo>
    </Section>
  );
}
