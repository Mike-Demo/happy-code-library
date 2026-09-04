// Component docs: overlays group. Preview-only.
import { useRef, type ReactElement } from "react";

import type WaDialog from "@awesome.me/webawesome/dist/components/dialog/dialog.js";
import type WaDrawer from "@awesome.me/webawesome/dist/components/drawer/drawer.js";

import { ComponentDoc, Specimen } from "../ui";

export function DialogDoc(): ReactElement {
  const dialogRef = useRef<WaDialog | null>(null);

  return (
    <ComponentDoc
      tag="wa-dialog"
      title="Dialog"
      summary="Modal that blocks the page for confirmations and focused tasks. If the user can keep working alongside it, use Drawer."
      code={`<wa-dialog label="Delete project?">
  This cannot be undone.
  <wa-button slot="footer" data-dialog="close" appearance="plain">Cancel</wa-button>
  <wa-button slot="footer" variant="danger" data-dialog="close">Delete</wa-button>
</wa-dialog>`}
    >
      <Specimen label="open a modal">
        <wa-button
          variant="brand"
          onClick={() => {
            if (dialogRef.current) dialogRef.current.open = true;
          }}
        >
          Open dialog
        </wa-button>
        <wa-dialog
          label="Delete project?"
          ref={(element: WaDialog | null) => {
            dialogRef.current = element;
          }}
        >
          Deleting <strong>acme-marketing</strong> removes its pages, assets, and history. This cannot be
          undone.
          <wa-button slot="footer" appearance="plain" data-dialog="close">
            Cancel
          </wa-button>
          <wa-button slot="footer" variant="danger" data-dialog="close">
            Delete project
          </wa-button>
        </wa-dialog>
      </Specimen>
    </ComponentDoc>
  );
}

export function DrawerDoc(): ReactElement {
  const drawerRef = useRef<WaDrawer | null>(null);

  return (
    <ComponentDoc
      tag="wa-drawer"
      title="Drawer"
      summary="Side panel that slides in without blocking — settings panels, detail views, secondary nav."
      code={`<wa-drawer label="Notification settings" placement="end">
  …panel content…
</wa-drawer>`}
    >
      <Specimen label="slide in from the end">
        <wa-button
          appearance="filled"
          onClick={() => {
            if (drawerRef.current) drawerRef.current.open = true;
          }}
        >
          Open drawer
        </wa-button>
        <wa-drawer
          label="Notification settings"
          placement="end"
          ref={(element: WaDrawer | null) => {
            drawerRef.current = element;
          }}
        >
          <div className="wa-stack wa-gap-m">
            <wa-switch checked>Product updates</wa-switch>
            <wa-switch checked>Security alerts</wa-switch>
            <wa-switch>Weekly digest</wa-switch>
          </div>
          <wa-button slot="footer" variant="brand" data-drawer="close">
            Done
          </wa-button>
        </wa-drawer>
      </Specimen>
    </ComponentDoc>
  );
}

export function PopoverDoc(): ReactElement {
  return (
    <ComponentDoc
      tag="wa-popover"
      title="Popover"
      summary="Click-triggered floating panel for rich content. For plain text hints on hover, use Tooltip."
      code={`<wa-button id="share-btn" appearance="outlined">Share</wa-button>
<wa-popover for="share-btn">…rich content…</wa-popover>`}
    >
      <Specimen label="rich floating panel">
        <wa-button id="popover-demo" appearance="outlined">
          Share
        </wa-button>
        <wa-popover for="popover-demo">
          <div className="wa-stack wa-gap-s" style={{ maxWidth: "16rem" }}>
            <strong>Share this page</strong>
            <div className="wa-cluster wa-gap-xs">
              <wa-input value="https://ds.acme.dev/components" size="s" readonly style={{ flex: 1 }}></wa-input>
              <wa-copy-button value="https://ds.acme.dev/components"></wa-copy-button>
            </div>
          </div>
        </wa-popover>
      </Specimen>
    </ComponentDoc>
  );
}

export function PopupDoc(): ReactElement {
  return (
    <ComponentDoc
      tag="wa-popup"
      title="Popup"
      summary="Low-level anchored-positioning primitive that Tooltip, Popover, and Dropdown build on. Reach for those first; use Popup only for custom anchored UI."
      code={`<div id="popup-anchor">Anchor</div>
<wa-popup anchor="popup-anchor" placement="top" active arrow>
  <div>Anchored content</div>
</wa-popup>`}
    >
      <Specimen label="anchored panel (always active)">
        <div className="ds-popup-demo">
          <span id="popup-anchor" className="ds-popup-anchor">
            Anchor
          </span>
          <wa-popup anchor="popup-anchor" placement="top" active arrow distance={8}>
            <div className="ds-popup-panel">Anchored via wa-popup</div>
          </wa-popup>
        </div>
      </Specimen>
    </ComponentDoc>
  );
}
