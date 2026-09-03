// Feedback, status, and data display specimens. Preview-only.
import type { ReactElement } from "react";

import { Demo, Section } from "./ui";

export function FeedbackSection(): ReactElement {
  return (
    <Section
      id="feedback"
      kicker="Components"
      title="Feedback & status"
      lede="Callouts are persistent messages that live in the layout; badges and tags mark status inline; progress, spinners, and skeletons cover loading."
    >
      <Demo title="Callouts">
        <wa-callout variant="brand">
          <wa-icon slot="icon" name="circle-info"></wa-icon>
          A new version of this design system is available.
        </wa-callout>
        <wa-callout variant="success">
          <wa-icon slot="icon" name="circle-check"></wa-icon>
          Your changes were saved successfully.
        </wa-callout>
        <wa-callout variant="warning">
          <wa-icon slot="icon" name="triangle-exclamation"></wa-icon>
          Your trial ends in three days.
        </wa-callout>
        <wa-callout variant="danger">
          <wa-icon slot="icon" name="circle-exclamation"></wa-icon>
          Payment failed. Update your billing details to continue.
        </wa-callout>
        <wa-callout variant="neutral" appearance="outlined">
          <wa-icon slot="icon" name="gear"></wa-icon>
          Maintenance is scheduled for Sunday at 02:00 UTC.
        </wa-callout>
      </Demo>

      <div className="wa-grid wa-gap-l" style={{ alignItems: "start" }}>
        <Demo title="Badges">
          <div className="wa-cluster wa-gap-s" style={{ alignItems: "center" }}>
            <wa-badge variant="brand">New</wa-badge>
            <wa-badge variant="success">Active</wa-badge>
            <wa-badge variant="warning">Pending</wa-badge>
            <wa-badge variant="danger">Failed</wa-badge>
            <wa-badge variant="neutral" appearance="outlined">
              Draft
            </wa-badge>
            <wa-badge variant="brand" pill>
              12
            </wa-badge>
            <wa-badge variant="danger" pill attention="pulse">
              3
            </wa-badge>
          </div>
        </Demo>

        <Demo title="Tags">
          <div className="wa-cluster wa-gap-s" style={{ alignItems: "center" }}>
            <wa-tag variant="brand">Design</wa-tag>
            <wa-tag variant="success">Approved</wa-tag>
            <wa-tag variant="neutral" with-remove>
              Filter: React
            </wa-tag>
            <wa-tag variant="neutral" with-remove>
              Filter: Tokens
            </wa-tag>
            <wa-tag variant="warning" size="s" pill>
              Beta
            </wa-tag>
          </div>
        </Demo>
      </div>

      <div className="wa-grid wa-gap-l" style={{ alignItems: "start" }}>
        <Demo title="Progress & loading">
          <wa-progress-bar value={60} label="Upload progress"></wa-progress-bar>
          <wa-progress-bar indeterminate label="Working"></wa-progress-bar>
          <div className="wa-cluster wa-gap-l" style={{ alignItems: "center" }}>
            <wa-progress-ring value={72}>72%</wa-progress-ring>
            <wa-spinner style={{ fontSize: "var(--wa-font-size-m)" }}></wa-spinner>
            <wa-spinner style={{ fontSize: "var(--wa-font-size-xl)" }}></wa-spinner>
            <wa-spinner style={{ fontSize: "var(--wa-font-size-3xl)" }}></wa-spinner>
          </div>
        </Demo>

        <Demo title="Skeletons & tooltip">
          <div className="wa-stack wa-gap-s">
            <wa-skeleton effect="sheen" style={{ width: "60%" }}></wa-skeleton>
            <wa-skeleton effect="sheen" style={{ width: "100%" }}></wa-skeleton>
            <wa-skeleton effect="sheen" style={{ width: "85%" }}></wa-skeleton>
          </div>
          <div className="wa-cluster wa-gap-s">
            <wa-tooltip for="tooltip-demo">Tooltips appear on hover and focus</wa-tooltip>
            <wa-button id="tooltip-demo" appearance="outlined">
              Hover me
            </wa-button>
          </div>
        </Demo>
      </div>
    </Section>
  );
}

export function DisplaySection(): ReactElement {
  return (
    <Section
      id="display"
      kicker="Components"
      title="Data display"
      lede="Cards structure content, avatars represent people, details disclose on demand, and the format helpers render numbers, dates, and byte counts with locale awareness."
    >
      <div className="wa-grid ds-card-grid wa-gap-l">
        <wa-card with-header with-media with-footer>
          <div slot="media" className="ds-media-ph">
            <wa-icon name="image" label="Placeholder artwork"></wa-icon>
          </div>
          <div slot="header" className="wa-split">
            <strong>Component tokens</strong>
            <wa-badge variant="brand">New</wa-badge>
          </div>
          Cards compose header, media, body, and footer slots. This one uses a token-based
          placeholder instead of a raw image.
          <div slot="footer" className="wa-cluster wa-gap-s">
            <wa-button variant="brand" size="s">
              Read more
            </wa-button>
            <wa-button appearance="plain" size="s">
              Dismiss
            </wa-button>
          </div>
        </wa-card>

        <div className="wa-stack wa-gap-l">
          <Demo title="Avatars">
            <div className="wa-cluster wa-gap-m" style={{ alignItems: "center" }}>
              <wa-avatar initials="EK" label="Elsa Krieger"></wa-avatar>
              <wa-avatar label="Anonymous user"></wa-avatar>
              <wa-avatar shape="rounded" initials="WA" label="Web Awesome"></wa-avatar>
              <wa-avatar shape="square" label="Workspace">
                <wa-icon slot="icon" name="building"></wa-icon>
              </wa-avatar>
            </div>
          </Demo>

          <Demo title="Details">
            <wa-details summary="What is a design token?" open>
              A named value — like a color, size, or shadow — referenced everywhere instead of
              hardcoded literals, so one change re-themes the whole system.
            </wa-details>
            <wa-details summary="Can I use Font Awesome classes directly?">
              Yes, the webfont CSS is bundled. Prefer the icon component in app code so icons
              inherit sizing and theming automatically.
            </wa-details>
          </Demo>
        </div>

        <div className="wa-stack wa-gap-l">
          <Demo title="Formatters">
            <div className="ds-row-grid">
              <span className="ds-row-label">format-number</span>
              <wa-format-number value={1234567.89} type="currency" currency="USD"></wa-format-number>
            </div>
            <div className="ds-row-grid">
              <span className="ds-row-label">format-bytes</span>
              <wa-format-bytes value={1048576}></wa-format-bytes>
            </div>
            <div className="ds-row-grid">
              <span className="ds-row-label">format-date</span>
              <wa-format-date
                date="2026-02-14T12:00:00Z"
                month="long"
                day="numeric"
                year="numeric"
              ></wa-format-date>
            </div>
            <div className="ds-row-grid">
              <span className="ds-row-label">relative-time</span>
              <wa-relative-time date="2026-01-30T09:00:00Z"></wa-relative-time>
            </div>
          </Demo>

          <Demo title="QR code">
            <div className="wa-cluster wa-gap-m" style={{ alignItems: "center" }}>
              <wa-qr-code value="https://webawesome.com" label="Web Awesome website"></wa-qr-code>
              <span className="ds-quiet">Scannable, styleable, and generated client-side.</span>
            </div>
          </Demo>
        </div>
      </div>
    </Section>
  );
}
