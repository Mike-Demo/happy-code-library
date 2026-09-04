// Component docs: data & formatting group. Preview-only.
import type { ReactElement } from "react";

import { ComponentDoc, Specimen } from "../ui";

export function FormatNumberDoc(): ReactElement {
  return (
    <ComponentDoc
      tag="wa-format-number"
      title="Format Number"
      summary="Locale-aware number, currency, and percent formatting without any JS."
      code={`<wa-format-number value="2048.5" type="currency" currency="USD"></wa-format-number>
<wa-format-number value="0.725" type="percent"></wa-format-number>`}
    >
      <Specimen label="decimal / currency / percent">
        <span>
          <wa-format-number value={1234567.891}></wa-format-number>
        </span>
        <span>
          <wa-format-number value={2048.5} type="currency" currency="USD"></wa-format-number>
        </span>
        <span>
          <wa-format-number value={0.725} type="percent"></wa-format-number>
        </span>
      </Specimen>
    </ComponentDoc>
  );
}

export function FormatDateDoc(): ReactElement {
  return (
    <ComponentDoc
      tag="wa-format-date"
      title="Format Date"
      summary="Locale-aware date and time formatting from an ISO string."
      code={`<wa-format-date date="2026-03-15T09:30:00" month="long" day="numeric" year="numeric"></wa-format-date>`}
    >
      <Specimen label="long / short / time">
        <span>
          <wa-format-date date="2026-03-15T09:30:00" month="long" day="numeric" year="numeric"></wa-format-date>
        </span>
        <span>
          <wa-format-date date="2026-03-15T09:30:00" month="2-digit" day="2-digit" year="2-digit"></wa-format-date>
        </span>
        <span>
          <wa-format-date date="2026-03-15T09:30:00" hour="numeric" minute="numeric"></wa-format-date>
        </span>
      </Specimen>
    </ComponentDoc>
  );
}

export function FormatBytesDoc(): ReactElement {
  return (
    <ComponentDoc
      tag="wa-format-bytes"
      title="Format Bytes"
      summary="Human-readable byte counts (KB, MB, GB) from raw numbers."
      code={`<wa-format-bytes value="1572864"></wa-format-bytes>`}
    >
      <Specimen label="scales automatically">
        <span>
          <wa-format-bytes value={812}></wa-format-bytes>
        </span>
        <span>
          <wa-format-bytes value={1572864}></wa-format-bytes>
        </span>
        <span>
          <wa-format-bytes value={9437184000}></wa-format-bytes>
        </span>
      </Specimen>
    </ComponentDoc>
  );
}

export function RelativeTimeDoc(): ReactElement {
  const twoHoursAgo = new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString();
  const inThreeDays = new Date(Date.now() + 3 * 24 * 60 * 60 * 1000).toISOString();

  return (
    <ComponentDoc
      tag="wa-relative-time"
      title="Relative Time"
      summary="Live-updating 'x minutes ago' timestamps that stay correct as time passes."
      code={`<wa-relative-time date="2026-02-27T10:00:00Z" sync></wa-relative-time>`}
    >
      <Specimen label="past & future">
        <span>
          Deployed <wa-relative-time date={twoHoursAgo} sync></wa-relative-time>
        </span>
        <span>
          Trial ends <wa-relative-time date={inThreeDays} sync></wa-relative-time>
        </span>
      </Specimen>
    </ComponentDoc>
  );
}

export function MarkdownDoc(): ReactElement {
  return (
    <ComponentDoc
      tag="wa-markdown"
      title="Markdown"
      summary="Renders a Markdown string as themed HTML."
      code={`<wa-markdown>
  <script type="text/markdown">
    ## Release 2.1
    - **Faster** icon search
    - Fixed \`wa-select\` keyboard nav
  </script>
</wa-markdown>`}
    >
      <Specimen label="rendered markdown">
        <wa-markdown style={{ width: "100%" }}>
          <script
            type="text/markdown"
            dangerouslySetInnerHTML={{
              __html: "## Release 2.1\n\n- **Faster** icon search\n- Fixed `wa-select` keyboard nav\n- New `wa-known-date` docs",
            }}
          ></script>
        </wa-markdown>
      </Specimen>
    </ComponentDoc>
  );
}

export function RandomContentDoc(): ReactElement {
  return (
    <ComponentDoc
      tag="wa-random-content"
      title="Random Content"
      summary="Shows one random child on each load — rotating tips, quotes, or promos."
      code={`<wa-random-content>
  <div>Tip: press / to search icons.</div>
  <div>Tip: every color has an on-color pair.</div>
</wa-random-content>`}
    >
      <Specimen label="reload to shuffle">
        <wa-random-content>
          <div>Tip: press / in the icon page search to jump straight to it.</div>
          <div>Tip: every fill token has an on-fill pair for accessible text.</div>
          <div>Tip: use appearance to control weight, variant to control meaning.</div>
        </wa-random-content>
      </Specimen>
    </ComponentDoc>
  );
}
