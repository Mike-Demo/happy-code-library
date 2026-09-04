// Component docs: feedback & status group. Preview-only.
import { useRef, type ReactElement } from "react";

import type WaToast from "@awesome.me/webawesome/dist/components/toast/toast.js";

import { ComponentDoc, Specimen } from "../ui";

export function CalloutDoc(): ReactElement {
  return (
    <ComponentDoc
      tag="wa-callout"
      title="Callout"
      summary="Persistent inline message that lives in the layout — form errors, info panels, maintenance notices. For brief ephemeral messages, use Toast."
      code={`<wa-callout variant="success">
  <wa-icon slot="icon" name="circle-check"></wa-icon>
  Your changes were saved successfully.
</wa-callout>`}
    >
      <Specimen label="variants">
        <div className="wa-stack wa-gap-s" style={{ width: "100%" }}>
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
        </div>
      </Specimen>
    </ComponentDoc>
  );
}

export function ToastDoc(): ReactElement {
  const toastRef = useRef<WaToast | null>(null);

  const notify = (message: string, variant: "success" | "brand" | "danger") => {
    toastRef.current?.create(message, { variant });
  };

  return (
    <ComponentDoc
      tag="wa-toast"
      title="Toast"
      also={["wa-toast-item"]}
      summary="Ephemeral notifications that float over the page and dismiss themselves. Mount one wa-toast stack and call create() from code."
      code={`<wa-toast></wa-toast>
<script>
  document.querySelector('wa-toast').create('Saved!', { variant: 'success' });
</script>`}
    >
      <wa-toast
        ref={(element: WaToast | null) => {
          toastRef.current = element;
        }}
      ></wa-toast>

      <Specimen label="fire live notifications">
        <wa-button
          appearance="filled"
          onClick={() => notify("Your message has been sent.", "success")}
        >
          Success toast
        </wa-button>
        <wa-button appearance="filled" onClick={() => notify("Export started — we'll email you.", "brand")}>
          Brand toast
        </wa-button>
        <wa-button
          appearance="outlined"
          variant="danger"
          onClick={() => notify("Deployment failed on step 3.", "danger")}
        >
          Danger toast
        </wa-button>
      </Specimen>

      <Specimen label="anatomy (static wa-toast-item)">
        <div className="wa-stack wa-gap-s">
          <wa-toast-item variant="success" duration={0}>
            <wa-icon slot="icon" name="circle-check"></wa-icon>
            Invoice #2041 was paid.
          </wa-toast-item>
          <wa-toast-item variant="danger" duration={0}>
            <wa-icon slot="icon" name="circle-exclamation"></wa-icon>
            Could not reach the build server.
          </wa-toast-item>
        </div>
      </Specimen>
    </ComponentDoc>
  );
}

export function BadgeDoc(): ReactElement {
  return (
    <ComponentDoc
      tag="wa-badge"
      title="Badge"
      summary="Small non-interactive status indicator: counts, states, 'NEW'. If the user can click or remove it, use Tag."
      code={`<wa-badge variant="success">Active</wa-badge>
<wa-badge variant="danger" pill attention="pulse">3</wa-badge>`}
    >
      <Specimen label="variants & shapes">
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
      </Specimen>
    </ComponentDoc>
  );
}

export function TagDoc(): ReactElement {
  return (
    <ComponentDoc
      tag="wa-tag"
      title="Tag"
      summary="Interactive label: filter chips, removable selections, categories. For pure status, use Badge."
      code={`<wa-tag variant="neutral" with-remove>Filter: React</wa-tag>`}
    >
      <Specimen label="variants, removable, sizes">
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
      </Specimen>
    </ComponentDoc>
  );
}

export function ProgressBarDoc(): ReactElement {
  return (
    <ComponentDoc
      tag="wa-progress-bar"
      title="Progress Bar"
      summary="Horizontal progress for determinate work; switch to indeterminate when duration is unknown."
      code={`<wa-progress-bar value="60" label="Upload progress"></wa-progress-bar>
<wa-progress-bar indeterminate label="Working"></wa-progress-bar>`}
    >
      <Specimen label="determinate / indeterminate">
        <div className="wa-stack wa-gap-m" style={{ width: "100%" }}>
          <wa-progress-bar value={60} label="Upload progress"></wa-progress-bar>
          <wa-progress-bar indeterminate label="Working"></wa-progress-bar>
        </div>
      </Specimen>
    </ComponentDoc>
  );
}

export function ProgressRingDoc(): ReactElement {
  return (
    <ComponentDoc
      tag="wa-progress-ring"
      title="Progress Ring"
      summary="Compact circular progress with slotted content in the middle."
      code={`<wa-progress-ring value="72">72%</wa-progress-ring>`}
    >
      <Specimen label="values">
        <wa-progress-ring value={25}>25%</wa-progress-ring>
        <wa-progress-ring value={72}>72%</wa-progress-ring>
        <wa-progress-ring value={100}>
          <wa-icon name="check" label="Complete"></wa-icon>
        </wa-progress-ring>
      </Specimen>
    </ComponentDoc>
  );
}

export function SpinnerDoc(): ReactElement {
  return (
    <ComponentDoc
      tag="wa-spinner"
      title="Spinner"
      summary="Loading indicator for unknown durations; scales with font-size."
      code={`<wa-spinner style="font-size: var(--wa-font-size-2xl);"></wa-spinner>`}
    >
      <Specimen label="sizes follow font-size">
        <wa-spinner style={{ fontSize: "var(--wa-font-size-m)" }}></wa-spinner>
        <wa-spinner style={{ fontSize: "var(--wa-font-size-xl)" }}></wa-spinner>
        <wa-spinner style={{ fontSize: "var(--wa-font-size-3xl)" }}></wa-spinner>
      </Specimen>
    </ComponentDoc>
  );
}

export function SkeletonDoc(): ReactElement {
  return (
    <ComponentDoc
      tag="wa-skeleton"
      title="Skeleton"
      summary="Placeholder shapes while content loads; use the sheen effect sparingly."
      code={`<wa-skeleton effect="sheen" style="width: 60%;"></wa-skeleton>`}
    >
      <Specimen label="loading card">
        <div className="wa-stack wa-gap-s" style={{ width: "100%", maxWidth: "24rem" }}>
          <wa-skeleton effect="sheen" style={{ width: "40%" }}></wa-skeleton>
          <wa-skeleton effect="sheen" style={{ width: "100%" }}></wa-skeleton>
          <wa-skeleton effect="sheen" style={{ width: "85%" }}></wa-skeleton>
        </div>
      </Specimen>
    </ComponentDoc>
  );
}

export function TooltipDoc(): ReactElement {
  return (
    <ComponentDoc
      tag="wa-tooltip"
      title="Tooltip"
      summary="Short text hint on hover and focus. For rich or interactive content, use Popover."
      code={`<wa-button id="save-hint" appearance="outlined">Hover me</wa-button>
<wa-tooltip for="save-hint">Saves without publishing</wa-tooltip>`}
    >
      <Specimen label="on hover & focus">
        <wa-button id="tooltip-demo" appearance="outlined">
          Hover me
        </wa-button>
        <wa-tooltip for="tooltip-demo">Tooltips appear on hover and focus</wa-tooltip>
      </Specimen>
    </ComponentDoc>
  );
}
