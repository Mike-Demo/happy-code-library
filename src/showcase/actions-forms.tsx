// Buttons, actions, and form control specimens. Preview-only.
import type { ReactElement } from "react";

import { Demo, Section } from "./ui";

const VARIANTS = ["neutral", "brand", "success", "warning", "danger"] as const;
const APPEARANCES = ["accent", "filled", "outlined", "plain"] as const;
const BUTTON_SIZES = ["s", "m", "l"] as const;

export function ButtonsSection(): ReactElement {
  return (
    <Section
      id="buttons"
      kicker="Components"
      title="Buttons & actions"
      lede="Pick a variant for meaning and an appearance for weight. Keep one accent brand button per view; demote the rest to filled, outlined, or plain."
    >
      <Demo title="Variant × appearance">
        {VARIANTS.map((variant) => (
          <div key={variant} className="wa-cluster wa-gap-s">
            {APPEARANCES.map((appearance) => (
              <wa-button key={appearance} variant={variant} appearance={appearance}>
                {appearance}
              </wa-button>
            ))}
          </div>
        ))}
      </Demo>

      <div className="wa-grid wa-gap-l" style={{ alignItems: "start" }}>
        <Demo title="Sizes & shape">
          <div className="wa-cluster wa-gap-s" style={{ alignItems: "center" }}>
            {BUTTON_SIZES.map((size) => (
              <wa-button key={size} variant="brand" size={size}>
                Size {size}
              </wa-button>
            ))}
            <wa-button variant="brand" pill>
              Pill
            </wa-button>
          </div>
        </Demo>

        <Demo title="States">
          <div className="wa-cluster wa-gap-s" style={{ alignItems: "center" }}>
            <wa-button variant="brand" loading>
              Saving
            </wa-button>
            <wa-button variant="brand" disabled>
              Disabled
            </wa-button>
            <wa-button appearance="outlined" with-caret>
              With caret
            </wa-button>
          </div>
        </Demo>
      </div>

      <div className="wa-grid wa-gap-l" style={{ alignItems: "start" }}>
        <Demo title="With icons">
          <div className="wa-cluster wa-gap-s" style={{ alignItems: "center" }}>
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
            <wa-copy-button value="bun add @awesome.me/webawesome"></wa-copy-button>
          </div>
        </Demo>

        <Demo title="Button group & menu">
          <div className="wa-cluster wa-gap-m" style={{ alignItems: "center" }}>
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

            <wa-dropdown>
              <wa-button slot="trigger" appearance="filled" with-caret>
                Actions
              </wa-button>
              <wa-dropdown-item value="edit">Edit</wa-dropdown-item>
              <wa-dropdown-item value="duplicate">Duplicate</wa-dropdown-item>
              <wa-dropdown-item value="archive">Archive</wa-dropdown-item>
              <wa-dropdown-item value="delete" variant="danger">
                Delete
              </wa-dropdown-item>
            </wa-dropdown>
          </div>
        </Demo>
      </div>
    </Section>
  );
}

export function FormsSection(): ReactElement {
  return (
    <Section
      id="forms"
      kicker="Components"
      title="Forms"
      lede="Every control ships with built-in labels, hints, validation states, and full keyboard support. Labels go on the component — never as separate markup."
    >
      <div className="wa-grid ds-form-grid wa-gap-xl">
        <Demo title="Text & selection">
          <wa-input
            label="Email"
            type="email"
            placeholder="you@example.com"
            hint="We never share your email."
            with-clear
          ></wa-input>
          <wa-input
            label="Password"
            type="password"
            placeholder="Enter a password"
            password-toggle
          ></wa-input>
          <wa-textarea
            label="Message"
            placeholder="Tell us what you think"
            rows={3}
          ></wa-textarea>
          <wa-select label="Role" placeholder="Select a role" hint="You can change this later.">
            <wa-option value="viewer">Viewer</wa-option>
            <wa-option value="editor">Editor</wa-option>
            <wa-option value="admin">Administrator</wa-option>
          </wa-select>
        </Demo>

        <Demo title="Choices & ranges">
          <div className="wa-stack wa-gap-xs">
            <wa-checkbox checked>Email me product updates</wa-checkbox>
            <wa-checkbox>Email me security alerts</wa-checkbox>
            <wa-checkbox disabled>Legacy notifications (retired)</wa-checkbox>
          </div>
          <wa-divider></wa-divider>
          <wa-radio-group label="Plan" value="pro">
            <wa-radio value="free">Free</wa-radio>
            <wa-radio value="pro">Pro</wa-radio>
            <wa-radio value="team">Team</wa-radio>
          </wa-radio-group>
          <wa-divider></wa-divider>
          <wa-switch checked>Enable notifications</wa-switch>
          <wa-slider label="Volume" min={0} max={100} value={60} hint="Drag to adjust"></wa-slider>
          <wa-rating label="Rate your experience" value={4}></wa-rating>
        </Demo>
      </div>
    </Section>
  );
}
