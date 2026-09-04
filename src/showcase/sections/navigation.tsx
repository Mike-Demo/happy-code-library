// Component docs: navigation & structure group. Preview-only.
import type { ReactElement } from "react";

import { ComponentDoc, Specimen } from "../ui";

export function BreadcrumbDoc(): ReactElement {
  return (
    <ComponentDoc
      tag="wa-breadcrumb"
      title="Breadcrumb"
      also={["wa-breadcrumb-item"]}
      summary="Shows where the user is in a hierarchy, with each ancestor a link."
      code={`<wa-breadcrumb>
  <wa-breadcrumb-item href="#">Workspace</wa-breadcrumb-item>
  <wa-breadcrumb-item href="#">Projects</wa-breadcrumb-item>
  <wa-breadcrumb-item>Design System</wa-breadcrumb-item>
</wa-breadcrumb>`}
    >
      <Specimen label="trail with icon">
        <wa-breadcrumb label="Location">
          <wa-breadcrumb-item href="#">
            <wa-icon slot="start" name="house"></wa-icon>
            Workspace
          </wa-breadcrumb-item>
          <wa-breadcrumb-item href="#">Projects</wa-breadcrumb-item>
          <wa-breadcrumb-item>Design System</wa-breadcrumb-item>
        </wa-breadcrumb>
      </Specimen>
    </ComponentDoc>
  );
}

export function TabGroupDoc(): ReactElement {
  return (
    <ComponentDoc
      tag="wa-tab-group"
      title="Tab Group"
      also={["wa-tab", "wa-tab-panel"]}
      summary="Switches between sections inline. Panels pair with tabs by matching panel names."
      code={`<wa-tab-group active="general">
  <wa-tab panel="general">General</wa-tab>
  <wa-tab panel="billing">Billing</wa-tab>
  <wa-tab-panel name="general">General settings…</wa-tab-panel>
  <wa-tab-panel name="billing">Billing settings…</wa-tab-panel>
</wa-tab-group>`}
    >
      <Specimen label="three tabs, one disabled">
        <wa-tab-group active="general" style={{ width: "100%" }}>
          <wa-tab panel="general">General</wa-tab>
          <wa-tab panel="billing">Billing</wa-tab>
          <wa-tab panel="danger" disabled>
            Danger zone
          </wa-tab>
          <wa-tab-panel name="general">Workspace name, locale, and default roles live here.</wa-tab-panel>
          <wa-tab-panel name="billing">Payment methods, invoices, and usage limits live here.</wa-tab-panel>
          <wa-tab-panel name="danger">Deleting a workspace is permanent.</wa-tab-panel>
        </wa-tab-group>
      </Specimen>
    </ComponentDoc>
  );
}

export function DetailsDoc(): ReactElement {
  return (
    <ComponentDoc
      tag="wa-details"
      title="Details"
      summary="Single expandable disclosure. For a set of related disclosures, group them in an Accordion."
      code={`<wa-details summary="What counts as a seat?">
  Any member who signs in during the billing period.
</wa-details>`}
    >
      <Specimen label="expandable">
        <div className="wa-stack wa-gap-s" style={{ width: "100%", maxWidth: "32rem" }}>
          <wa-details summary="What counts as a seat?">
            Any member who signs in during the billing period counts as one seat.
          </wa-details>
          <wa-details summary="Can I change plans later?" appearance="filled">
            Yes — upgrades apply immediately and downgrades at the next renewal.
          </wa-details>
        </div>
      </Specimen>
    </ComponentDoc>
  );
}

export function AccordionDoc(): ReactElement {
  return (
    <ComponentDoc
      tag="wa-accordion"
      title="Accordion"
      also={["wa-accordion-item"]}
      summary="A set of disclosures where opening one can close the others."
      code={`<wa-accordion>
  <wa-accordion-item summary="Shipping">Orders ship within 2 days.</wa-accordion-item>
  <wa-accordion-item summary="Returns">30-day return window.</wa-accordion-item>
</wa-accordion>`}
    >
      <Specimen label="grouped disclosures">
        <wa-accordion style={{ width: "100%", maxWidth: "32rem" }}>
          <wa-accordion-item summary="Shipping">Orders ship within 2 business days.</wa-accordion-item>
          <wa-accordion-item summary="Returns">Returns are free within a 30-day window.</wa-accordion-item>
          <wa-accordion-item summary="Warranty">All hardware includes a 2-year warranty.</wa-accordion-item>
        </wa-accordion>
      </Specimen>
    </ComponentDoc>
  );
}

export function TreeDoc(): ReactElement {
  return (
    <ComponentDoc
      tag="wa-tree"
      title="Tree"
      also={["wa-tree-item"]}
      summary="Hierarchical navigation with expandable branches and selection."
      code={`<wa-tree>
  <wa-tree-item expanded>
    src
    <wa-tree-item>components</wa-tree-item>
    <wa-tree-item>styles</wa-tree-item>
  </wa-tree-item>
</wa-tree>`}
    >
      <Specimen label="file tree">
        <wa-tree style={{ maxWidth: "20rem" }}>
          <wa-tree-item expanded>
            <wa-icon name="folder-open"></wa-icon>
            src
            <wa-tree-item expanded>
              <wa-icon name="folder-open"></wa-icon>
              webawesome
              <wa-tree-item>
                <wa-icon name="file-code" family="regular"></wa-icon>
                theme.css
              </wa-tree-item>
              <wa-tree-item>
                <wa-icon name="file-code" family="regular"></wa-icon>
                setup.tsx
              </wa-tree-item>
            </wa-tree-item>
            <wa-tree-item>
              <wa-icon name="folder"></wa-icon>
              showcase
            </wa-tree-item>
          </wa-tree-item>
        </wa-tree>
      </Specimen>
    </ComponentDoc>
  );
}

export function DividerDoc(): ReactElement {
  return (
    <ComponentDoc
      tag="wa-divider"
      title="Divider"
      summary="Visual separator between sections; supports vertical orientation."
      code={`<wa-divider></wa-divider>
<wa-divider orientation="vertical"></wa-divider>`}
    >
      <Specimen label="horizontal & vertical">
        <div className="wa-stack wa-gap-s" style={{ width: "100%", maxWidth: "24rem" }}>
          <span>Section one</span>
          <wa-divider></wa-divider>
          <span>Section two</span>
        </div>
        <div className="wa-cluster wa-gap-s" style={{ height: "2rem", alignItems: "center" }}>
          <span>Edit</span>
          <wa-divider orientation="vertical"></wa-divider>
          <span>Duplicate</span>
          <wa-divider orientation="vertical"></wa-divider>
          <span>Delete</span>
        </div>
      </Specimen>
    </ComponentDoc>
  );
}

export function SplitPanelDoc(): ReactElement {
  return (
    <ComponentDoc
      tag="wa-split-panel"
      title="Split Panel"
      summary="Two resizable panes with a draggable divider; supports snapping and min sizes."
      code={`<wa-split-panel position="35">
  <div slot="start">Navigation</div>
  <div slot="end">Content</div>
</wa-split-panel>`}
    >
      <Specimen label="drag the handle">
        <wa-split-panel position={35} style={{ width: "100%", height: "8rem" }}>
          <div slot="start" className="ds-pane">
            Navigation
          </div>
          <div slot="end" className="ds-pane">
            Content
          </div>
        </wa-split-panel>
      </Specimen>
    </ComponentDoc>
  );
}

export function ScrollerDoc(): ReactElement {
  return (
    <ComponentDoc
      tag="wa-scroller"
      title="Scroller"
      summary="Accessible scroll container with edge shadows that hint at more content."
      code={`<wa-scroller orientation="horizontal">
  <!-- wide content -->
</wa-scroller>`}
    >
      <Specimen label="horizontal scroll with shadows">
        <wa-scroller orientation="horizontal" style={{ width: "100%", maxWidth: "28rem" }}>
          <div className="wa-cluster wa-gap-s" style={{ flexWrap: "nowrap", padding: "var(--wa-space-xs)" }}>
            {["Tokens", "Buttons", "Forms", "Feedback", "Display", "Navigation", "Overlays", "Utilities"].map(
              (label) => (
                <wa-tag key={label} variant="neutral">
                  {label}
                </wa-tag>
              ),
            )}
          </div>
        </wa-scroller>
      </Specimen>
    </ComponentDoc>
  );
}

export function PageDoc(): ReactElement {
  return (
    <ComponentDoc
      tag="wa-page"
      title="Page"
      summary="Full-page scaffold with header, navigation, main, aside, and footer slots. Nav written once renders as a desktop sidebar and a mobile drawer automatically — this very showcase runs inside one."
      code={`<wa-page mobile-breakpoint="768">
  <header slot="header">Brand</header>
  <nav slot="navigation">…links…</nav>
  <main>Content</main>
  <footer slot="footer">Footer</footer>
</wa-page>`}
    >
      <Specimen label="miniature page (scaled)">
        <div className="ds-page-mini">
          <div className="ds-page-mini-header">header</div>
          <div className="ds-page-mini-body">
            <div className="ds-page-mini-nav">navigation</div>
            <div className="ds-page-mini-main">main</div>
          </div>
          <div className="ds-page-mini-footer">footer</div>
        </div>
      </Specimen>
    </ComponentDoc>
  );
}
