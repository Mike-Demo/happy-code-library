// Component docs: actions group. Preview-only.
import type { ReactElement } from "react";

import { ComponentDoc, Specimen } from "../ui";

const VARIANTS = ["neutral", "brand", "success", "warning", "danger"] as const;
const APPEARANCES = ["accent", "filled", "outlined", "plain"] as const;
const BUTTON_SIZES = ["s", "m", "l"] as const;

export function ButtonDoc(): ReactElement {
  return (
    <ComponentDoc
      tag="wa-button"
      title="Button"
      summary="Pick a variant for meaning and an appearance for weight. Keep one accent brand button per view; demote the rest to filled, outlined, or plain."
      code={`<wa-button variant="brand">Save changes</wa-button>
<wa-button appearance="outlined">Cancel</wa-button>
<wa-button variant="brand" loading>Saving</wa-button>
<wa-button variant="brand" with-start>
  <wa-icon slot="start" name="download"></wa-icon>
  Download
</wa-button>`}
    >
      <Specimen label="variant × appearance">
        <div className="wa-stack wa-gap-s">
          {VARIANTS.map((variant) => (
            <div key={variant} className="wa-cluster wa-gap-s">
              {APPEARANCES.map((appearance) => (
                <wa-button key={appearance} variant={variant} appearance={appearance}>
                  {appearance}
                </wa-button>
              ))}
            </div>
          ))}
        </div>
      </Specimen>

      <Specimen label="sizes & shape">
        {BUTTON_SIZES.map((size) => (
          <wa-button key={size} variant="brand" size={size}>
            Size {size}
          </wa-button>
        ))}
        <wa-button variant="brand" pill>
          Pill
        </wa-button>
        <wa-button variant="brand" href="/components" target="_self">
          Link button
        </wa-button>
      </Specimen>

      <Specimen label="states: loading / disabled / caret">
        <wa-button variant="brand" loading>
          Saving
        </wa-button>
        <wa-button variant="brand" disabled>
          Disabled
        </wa-button>
        <wa-button appearance="outlined" with-caret>
          With caret
        </wa-button>
      </Specimen>

      <Specimen label="with icons">
        <wa-button variant="brand" with-start>
          <wa-icon slot="start" name="download"></wa-icon>
          Download
        </wa-button>
        <wa-button appearance="outlined" with-end>
          <wa-icon slot="end" name="arrow-right"></wa-icon>
          Continue
        </wa-button>
        <wa-button appearance="filled">
          <wa-icon name="gear" label="Settings"></wa-icon>
        </wa-button>
      </Specimen>
    </ComponentDoc>
  );
}

export function ButtonGroupDoc(): ReactElement {
  return (
    <ComponentDoc
      tag="wa-button-group"
      title="Button Group"
      summary="Visually fuses related buttons into a single segmented control. Always set a label for assistive technology."
      code={`<wa-button-group label="Text alignment">
  <wa-button appearance="filled"><wa-icon name="align-left" label="Align left"></wa-icon></wa-button>
  <wa-button appearance="filled"><wa-icon name="align-center" label="Align center"></wa-icon></wa-button>
  <wa-button appearance="filled"><wa-icon name="align-right" label="Align right"></wa-icon></wa-button>
</wa-button-group>`}
    >
      <Specimen label="icon segments">
        <wa-button-group label="Text alignment">
          <wa-button appearance="filled">
            <wa-icon name="align-left" label="Align left"></wa-icon>
          </wa-button>
          <wa-button appearance="filled">
            <wa-icon name="align-center" label="Align center"></wa-icon>
          </wa-button>
          <wa-button appearance="filled">
            <wa-icon name="align-right" label="Align right"></wa-icon>
          </wa-button>
        </wa-button-group>
      </Specimen>
      <Specimen label="text segments">
        <wa-button-group label="Billing period">
          <wa-button appearance="outlined">Monthly</wa-button>
          <wa-button appearance="outlined">Yearly</wa-button>
        </wa-button-group>
      </Specimen>
    </ComponentDoc>
  );
}

export function CopyButtonDoc(): ReactElement {
  return (
    <ComponentDoc
      tag="wa-copy-button"
      title="Copy Button"
      summary="Copies a value to the clipboard and confirms with built-in feedback. Ideal next to code, tokens, and IDs."
      code={`<wa-copy-button value="bun add @awesome.me/webawesome"></wa-copy-button>`}
    >
      <Specimen label="next to a value">
        <code className="ds-code">bun add @awesome.me/webawesome</code>
        <wa-copy-button value="bun add @awesome.me/webawesome"></wa-copy-button>
      </Specimen>
      <Specimen label="disabled">
        <wa-copy-button value="unavailable" disabled></wa-copy-button>
      </Specimen>
    </ComponentDoc>
  );
}

export function DropdownDoc(): ReactElement {
  return (
    <ComponentDoc
      tag="wa-dropdown"
      title="Dropdown"
      also={["wa-dropdown-item"]}
      summary="A menu of commands opened from a trigger button. For picking a value from a list, use Select instead."
      code={`<wa-dropdown>
  <wa-button slot="trigger" appearance="filled" with-caret>Actions</wa-button>
  <wa-dropdown-item value="edit">Edit</wa-dropdown-item>
  <wa-dropdown-item value="duplicate">Duplicate</wa-dropdown-item>
  <wa-dropdown-item value="delete" variant="danger">Delete</wa-dropdown-item>
</wa-dropdown>`}
    >
      <Specimen label="command menu">
        <wa-dropdown>
          <wa-button slot="trigger" appearance="filled" with-caret>
            Actions
          </wa-button>
          <wa-dropdown-item value="edit">
            <wa-icon slot="icon" name="pen"></wa-icon>
            Edit
          </wa-dropdown-item>
          <wa-dropdown-item value="duplicate">
            <wa-icon slot="icon" name="copy"></wa-icon>
            Duplicate
          </wa-dropdown-item>
          <wa-dropdown-item value="archive">
            <wa-icon slot="icon" name="box-archive"></wa-icon>
            Archive
          </wa-dropdown-item>
          <wa-dropdown-item value="delete" variant="danger">
            <wa-icon slot="icon" name="trash"></wa-icon>
            Delete
          </wa-dropdown-item>
        </wa-dropdown>
      </Specimen>
    </ComponentDoc>
  );
}
