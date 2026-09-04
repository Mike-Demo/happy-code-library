// Component docs: actions group. Preview-only.
// Uses the typed React wrappers from the library barrel, which is what
// consumers import. Raw `<wa-*>` tags stay valid too (see webawesome/types.d.ts).
import type { ReactElement } from "react";

import {
  WaButton,
  WaButtonGroup,
  WaCopyButton,
  WaDropdown,
  WaDropdownItem,
  WaIcon,
} from "../../webawesome/react";
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
      code={`<WaButton variant="brand">Save changes</WaButton>
<WaButton appearance="outlined">Cancel</WaButton>
<WaButton variant="brand" loading>Saving</WaButton>
<WaButton variant="brand" with-start>
  <WaIcon slot="start" name="download" />
  Download
</WaButton>`}
    >
      <Specimen label="variant × appearance">
        <div className="wa-stack wa-gap-s">
          {VARIANTS.map((variant) => (
            <div key={variant} className="wa-cluster wa-gap-s">
              {APPEARANCES.map((appearance) => (
                <WaButton key={appearance} variant={variant} appearance={appearance}>
                  {appearance}
                </WaButton>
              ))}
            </div>
          ))}
        </div>
      </Specimen>

      <Specimen label="sizes & shape">
        {BUTTON_SIZES.map((size) => (
          <WaButton key={size} variant="brand" size={size}>
            Size {size}
          </WaButton>
        ))}
        <WaButton variant="brand" pill>
          Pill
        </WaButton>
        <WaButton variant="brand" href="/components" target="_self">
          Link button
        </WaButton>
      </Specimen>

      <Specimen label="states: loading / disabled / caret">
        <WaButton variant="brand" loading>
          Saving
        </WaButton>
        <WaButton variant="brand" disabled>
          Disabled
        </WaButton>
        <WaButton appearance="outlined" with-caret>
          With caret
        </WaButton>
      </Specimen>

      <Specimen label="with icons">
        <WaButton variant="brand" with-start>
          <WaIcon slot="start" name="download" />
          Download
        </WaButton>
        <WaButton appearance="outlined" with-end>
          <WaIcon slot="end" name="arrow-right" />
          Continue
        </WaButton>
        <WaButton appearance="filled">
          <WaIcon name="gear" label="Settings" />
        </WaButton>
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
      code={`<WaButtonGroup label="Text alignment">
  <WaButton appearance="filled"><WaIcon name="align-left" label="Align left" /></WaButton>
  <WaButton appearance="filled"><WaIcon name="align-center" label="Align center" /></WaButton>
  <WaButton appearance="filled"><WaIcon name="align-right" label="Align right" /></WaButton>
</WaButtonGroup>`}
    >
      <Specimen label="icon segments">
        <WaButtonGroup label="Text alignment">
          <WaButton appearance="filled">
            <WaIcon name="align-left" label="Align left" />
          </WaButton>
          <WaButton appearance="filled">
            <WaIcon name="align-center" label="Align center" />
          </WaButton>
          <WaButton appearance="filled">
            <WaIcon name="align-right" label="Align right" />
          </WaButton>
        </WaButtonGroup>
      </Specimen>
      <Specimen label="text segments">
        <WaButtonGroup label="Billing period">
          <WaButton appearance="outlined">Monthly</WaButton>
          <WaButton appearance="outlined">Yearly</WaButton>
        </WaButtonGroup>
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
      code={`<WaCopyButton value="--wa-color-brand-fill-loud" />`}
    >
      <Specimen label="next to a value">
        <code className="ds-code">--wa-color-brand-fill-loud</code>
        <WaCopyButton value="--wa-color-brand-fill-loud" />
      </Specimen>
      <Specimen label="disabled">
        <WaCopyButton value="unavailable" disabled />
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
      code={`<WaDropdown>
  <WaButton slot="trigger" appearance="filled" with-caret>Actions</WaButton>
  <WaDropdownItem value="edit">Edit</WaDropdownItem>
  <WaDropdownItem value="duplicate">Duplicate</WaDropdownItem>
  <WaDropdownItem value="delete" variant="danger">Delete</WaDropdownItem>
</WaDropdown>`}
    >
      <Specimen label="command menu">
        <WaDropdown>
          <WaButton slot="trigger" appearance="filled" with-caret>
            Actions
          </WaButton>
          <WaDropdownItem value="edit">
            <WaIcon slot="icon" name="pen" />
            Edit
          </WaDropdownItem>
          <WaDropdownItem value="duplicate">
            <WaIcon slot="icon" name="copy" />
            Duplicate
          </WaDropdownItem>
          <WaDropdownItem value="archive">
            <WaIcon slot="icon" name="box-archive" />
            Archive
          </WaDropdownItem>
          <WaDropdownItem value="delete" variant="danger">
            <WaIcon slot="icon" name="trash" />
            Delete
          </WaDropdownItem>
        </WaDropdown>
      </Specimen>
    </ComponentDoc>
  );
}
