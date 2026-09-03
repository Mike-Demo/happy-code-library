// Navigation and overlay specimens, including interactive dialog and drawer demos.
// Preview-only.
import { useRef, type ReactElement } from "react";

import type WaDialog from "@awesome.me/webawesome/dist/components/dialog/dialog.js";
import type WaDrawer from "@awesome.me/webawesome/dist/components/drawer/drawer.js";

import { Demo, Section } from "./ui";

export function NavigationSection(): ReactElement {
  return (
    <Section
      id="navigation"
      kicker="Components"
      title="Navigation"
      lede="Tabs switch sections inline, breadcrumbs show hierarchy, and pagination splits long result sets."
    >
      <Demo title="Tabs">
        <wa-tab-group>
          <wa-tab panel="tokens">Tokens</wa-tab>
          <wa-tab panel="components">Components</wa-tab>
          <wa-tab panel="patterns">Patterns</wa-tab>
          <wa-tab panel="retired" disabled>
            Retired
          </wa-tab>
          <wa-tab-panel name="tokens" active>
            Tokens are the smallest design decisions: colors, spacing, radii, and type.
          </wa-tab-panel>
          <wa-tab-panel name="components">
            Components consume tokens, so restyling the theme restyles every component.
          </wa-tab-panel>
          <wa-tab-panel name="patterns">
            Patterns compose components into full sections like heroes and settings pages.
          </wa-tab-panel>
          <wa-tab-panel name="retired">This panel is disabled.</wa-tab-panel>
        </wa-tab-group>
      </Demo>

      <div className="wa-grid wa-gap-l" style={{ alignItems: "start" }}>
        <Demo title="Breadcrumb">
          <wa-breadcrumb label="Documentation trail">
            <wa-breadcrumb-item>Docs</wa-breadcrumb-item>
            <wa-breadcrumb-item>Components</wa-breadcrumb-item>
            <wa-breadcrumb-item>Navigation</wa-breadcrumb-item>
            <wa-breadcrumb-item>Breadcrumb</wa-breadcrumb-item>
          </wa-breadcrumb>
        </Demo>

        <Demo title="Pagination">
          <wa-pagination total={128} page-size={10} page={3} label="Search results"></wa-pagination>
        </Demo>
      </div>
    </Section>
  );
}

export function OverlaysSection(): ReactElement {
  const dialogRef = useRef<WaDialog | null>(null);
  const drawerRef = useRef<WaDrawer | null>(null);

  return (
    <Section
      id="overlays"
      kicker="Components"
      title="Overlays"
      lede="Dialogs block the page for decisions, drawers slide in alongside it, and popovers float rich content from a trigger. All close on Escape and manage focus."
    >
      <wa-dialog
        label="Delete workspace"
        ref={(element: WaDialog | null) => {
          dialogRef.current = element;
        }}
      >
        This permanently deletes the workspace and all of its projects. This action cannot be
        undone.
        <div slot="footer" className="wa-cluster wa-gap-s">
          <wa-button appearance="plain" data-dialog="close">
            Cancel
          </wa-button>
          <wa-button variant="danger" data-dialog="close">
            Delete workspace
          </wa-button>
        </div>
      </wa-dialog>

      <wa-drawer
        label="Notification settings"
        ref={(element: WaDrawer | null) => {
          drawerRef.current = element;
        }}
      >
        <div className="wa-stack wa-gap-m">
          <wa-switch checked>Email digests</wa-switch>
          <wa-switch>Push notifications</wa-switch>
          <wa-switch checked>Mentions only</wa-switch>
        </div>
        <wa-button slot="footer" variant="brand" data-drawer="close">
          Done
        </wa-button>
      </wa-drawer>

      <wa-popover for="popover-trigger">
        <div className="wa-stack wa-gap-s">
          <strong>Popovers hold rich content</strong>
          <p className="ds-quiet">Anything interactive can live here — even other components.</p>
          <wa-button variant="brand" size="s">
            Take action
          </wa-button>
        </div>
      </wa-popover>

      <Demo title="Try them">
        <div className="wa-cluster wa-gap-s">
          <wa-button
            variant="danger"
            appearance="outlined"
            onClick={() => {
              if (dialogRef.current) dialogRef.current.open = true;
            }}
          >
            Open dialog
          </wa-button>
          <wa-button
            appearance="filled"
            onClick={() => {
              if (drawerRef.current) drawerRef.current.open = true;
            }}
          >
            Open drawer
          </wa-button>
          <wa-button id="popover-trigger" appearance="outlined">
            Show popover
          </wa-button>
        </div>
      </Demo>
    </Section>
  );
}
