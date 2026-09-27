// Theme editor page: live token editing plus a live preview. Preview-only.
import { useState, type ReactElement } from "react";

import { ThemeEditor } from "@/webawesome/theme-editor";
import { saveThemeDefaults } from "@/webawesome/theme-editor.functions";

import { Demo, Section } from "./ui";

export function ThemePage(): ReactElement {
  const [savedTo, setSavedTo] = useState("");

  return (
    <Section
      id="theme"
      kicker="Foundations"
      title="Theme editor"
      headingLevel={1}
      lede="Retune the system's colors, type, spacing, and shape with controls instead of files. Changes apply to every page instantly and are remembered in this browser; saving writes them into the system's brand file as the shipped default."
    >
      <ThemeEditor
        onSave={async (css) => {
          const result = await saveThemeDefaults({ data: { css } });
          setSavedTo(result.path);
        }}
      />

      {savedTo ? (
        <wa-callout variant="brand" size="small">
          <wa-icon slot="icon" name="file-code"></wa-icon>
          Written to <code>{savedTo}</code>.
        </wa-callout>
      ) : null}

      <Demo title="Live preview" headingLevel={2}>
        <div className="wa-stack wa-gap-m">
          <div className="wa-cluster wa-gap-xs">
            <wa-button variant="brand">Brand</wa-button>
            <wa-button variant="success" appearance="outlined">
              Success
            </wa-button>
            <wa-button variant="warning" appearance="outlined">
              Warning
            </wa-button>
            <wa-button variant="danger">Danger</wa-button>
            <wa-button variant="neutral" appearance="plain">
              Neutral
            </wa-button>
          </div>
          <div className="wa-grid wa-gap-m" style={{ "--min-column-size": "16rem" } as never}>
            <wa-card>
              {/* h3 (not h4): sits under the "Live preview" h2 in the outline. Inline size preserves the h4 look. */}
              <h3 slot="header" style={{ fontSize: "1rem", marginBlock: "1.33em" }}>
                Card heading
              </h3>
              <p>
                Body copy shows the type scale, the surface color, and the corner radius all at
                once.
              </p>
              <div slot="footer" className="wa-cluster wa-gap-xs">
                <wa-badge variant="brand">New</wa-badge>
                <wa-tag>Tag</wa-tag>
              </div>
            </wa-card>
            <div className="wa-stack wa-gap-s">
              <wa-input label="Email" placeholder="you@example.com"></wa-input>
              <wa-select label="Plan" value="pro">
                <wa-option value="free">Free</wa-option>
                <wa-option value="pro">Pro</wa-option>
              </wa-select>
              <wa-switch checked>Notifications</wa-switch>
              <wa-progress-bar value={62}></wa-progress-bar>
            </div>
          </div>
          <wa-callout variant="brand">
            <wa-icon slot="icon" name="circle-info"></wa-icon>
            Callouts, badges, and form controls all read their colors from the same semantic
            tokens, so one pick retints everything.
          </wa-callout>
        </div>
      </Demo>
    </Section>
  );
}
