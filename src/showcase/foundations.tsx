// Foundations: color, typography, and scale token specimens. Preview-only.
import type { ReactElement } from "react";

import { Demo, Section } from "./ui";

const SEMANTIC_VARIANTS = ["brand", "neutral", "success", "warning", "danger"] as const;
const FILL_LEVELS = ["quiet", "normal", "loud"] as const;
const PALETTE_HUES = [
  "red",
  "orange",
  "yellow",
  "green",
  "cyan",
  "blue",
  "indigo",
  "purple",
  "pink",
  "gray",
] as const;
const PALETTE_STEPS = ["95", "90", "80", "70", "60", "50", "40", "30", "20", "10", "05"] as const;
const SURFACES = ["raised", "default", "lowered"] as const;

export function ColorsSection(): ReactElement {
  return (
    <Section
      id="colors"
      kicker="Foundations"
      title="Color"
      lede="Semantic groups pair a fill with a guaranteed-contrast on-color at three attention levels: quiet, normal, and loud. Always use these pairs instead of raw palette values."
    >
      <div className="wa-grid ds-swatch-grid wa-gap-l">
        {SEMANTIC_VARIANTS.map((variant) => (
          <div key={variant} className="wa-stack wa-gap-xs">
            <h3 className="ds-demo-title" style={{ textTransform: "capitalize" }}>
              {variant}
            </h3>
            {FILL_LEVELS.map((level) => (
              <div
                key={level}
                className="ds-swatch"
                style={{
                  background: `var(--wa-color-${variant}-fill-${level})`,
                  color: `var(--wa-color-${variant}-on-${level})`,
                }}
              >
                <span className="ds-swatch-name">fill-{level}</span>
                <br />
                <span className="ds-swatch-token">on-{level}</span>
              </div>
            ))}
          </div>
        ))}
      </div>

      <Demo title="Surfaces & text">
        <div className="wa-grid ds-swatch-grid wa-gap-m">
          {SURFACES.map((surface) => (
            <div
              key={surface}
              className="ds-swatch"
              style={{ background: `var(--wa-color-surface-${surface})` }}
            >
              <span className="ds-swatch-name">surface-{surface}</span>
              <br />
              <span className="ds-swatch-token">--wa-color-surface-{surface}</span>
            </div>
          ))}
          <div className="ds-swatch">
            <span className="ds-swatch-name">text-normal</span>
            <br />
            <span className="ds-swatch-token ds-quiet">text-quiet</span>
            <br />
            <span className="ds-swatch-token" style={{ color: "var(--wa-color-text-link)" }}>
              text-link
            </span>
          </div>
        </div>
      </Demo>

      <Demo title="Palette scales">
        <div className="wa-stack wa-gap-xs">
          {PALETTE_HUES.map((hue) => (
            <div key={hue} className="ds-palette-row">
              <span className="ds-palette-hue">{hue}</span>
              {PALETTE_STEPS.map((step) => (
                <div
                  key={step}
                  className="ds-palette-cell"
                  title={`--wa-color-${hue}-${step}`}
                  style={{ background: `var(--wa-color-${hue}-${step})` }}
                ></div>
              ))}
            </div>
          ))}
        </div>
      </Demo>
    </Section>
  );
}

const FONT_FAMILIES = [
  { token: "heading", sample: "Design once, theme everywhere" },
  { token: "body", sample: "Body text carries the interface. It should be quiet, legible, and consistent." },
  { token: "longform", sample: "Longform text is tuned for extended reading, like documentation." },
  { token: "code", sample: 'import "@/webawesome/theme.css";' },
] as const;

const FONT_SIZES = ["xs", "s", "m", "l", "xl", "2xl", "3xl", "4xl"] as const;
const FONT_WEIGHTS = ["light", "normal", "semibold", "bold"] as const;

export function TypographySection(): ReactElement {
  return (
    <Section
      id="typography"
      kicker="Foundations"
      title="Typography"
      lede="Families, a modular size scale, and named weights — all driven by --wa-font-* tokens so a single theme swap restyles every component."
    >
      <Demo title="Families">
        {FONT_FAMILIES.map((family) => (
          <div key={family.token} className="ds-row-grid">
            <span className="ds-row-label">font-family-{family.token}</span>
            <span style={{ fontFamily: `var(--wa-font-family-${family.token})` }}>
              {family.sample}
            </span>
          </div>
        ))}
      </Demo>

      <Demo title="Size scale">
        {FONT_SIZES.map((size) => (
          <div key={size} className="ds-row-grid">
            <span className="ds-row-label">font-size-{size}</span>
            <span
              style={{
                fontSize: `var(--wa-font-size-${size})`,
                lineHeight: "var(--wa-line-height-condensed)",
              }}
            >
              The quick brown fox
            </span>
          </div>
        ))}
      </Demo>

      <Demo title="Weights">
        {FONT_WEIGHTS.map((weight) => (
          <div key={weight} className="ds-row-grid">
            <span className="ds-row-label">font-weight-{weight}</span>
            <span style={{ fontWeight: `var(--wa-font-weight-${weight})` }}>
              The quick brown fox jumps over the lazy dog
            </span>
          </div>
        ))}
      </Demo>
    </Section>
  );
}

const SPACE_STEPS = ["3xs", "2xs", "xs", "s", "m", "l", "xl", "2xl", "3xl", "4xl"] as const;
const RADII = ["s", "m", "l", "pill", "circle"] as const;
const SHADOWS = ["s", "m", "l"] as const;

export function ScaleSection(): ReactElement {
  return (
    <Section
      id="scale"
      kicker="Foundations"
      title="Scale & depth"
      lede="Spacing, corner radii, and elevation come from small named scales. Compose layouts with wa-stack, wa-cluster, and wa-grid plus wa-gap-* utilities."
    >
      <Demo title="Spacing scale">
        {SPACE_STEPS.map((step) => (
          <div key={step} className="ds-row-grid">
            <span className="ds-row-label">space-{step}</span>
            <div className="ds-space-bar" style={{ width: `var(--wa-space-${step})` }}></div>
          </div>
        ))}
      </Demo>

      <div className="wa-grid wa-gap-l" style={{ alignItems: "start" }}>
        <Demo title="Border radius">
          <div className="wa-cluster wa-gap-l">
            {RADII.map((radius) => (
              <div key={radius} className="wa-stack wa-gap-2xs" style={{ textAlign: "center" }}>
                <div
                  className="ds-radius-tile"
                  style={{ borderRadius: `var(--wa-border-radius-${radius})` }}
                ></div>
                <span className="ds-row-label">{radius}</span>
              </div>
            ))}
          </div>
        </Demo>

        <Demo title="Shadows">
          <div className="wa-cluster wa-gap-l">
            {SHADOWS.map((shadow) => (
              <div
                key={shadow}
                className="ds-shadow-tile"
                style={{ boxShadow: `var(--wa-shadow-${shadow})` }}
              >
                shadow-{shadow}
              </div>
            ))}
          </div>
        </Demo>
      </div>
    </Section>
  );
}
