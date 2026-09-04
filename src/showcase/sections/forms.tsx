// Component docs: form controls group. Preview-only.
import type { ReactElement } from "react";

import { ComponentDoc, Specimen } from "../ui";

export function InputDoc(): ReactElement {
  return (
    <ComponentDoc
      tag="wa-input"
      title="Input"
      summary="Single-line text entry with built-in label, hint, clearability, and password toggling. Labels go on the component — never as separate markup."
      code={`<wa-input label="Email" type="email" placeholder="you@example.com"
  hint="We never share your email." with-clear></wa-input>
<wa-input label="Password" type="password" password-toggle></wa-input>`}
    >
      <div className="wa-grid ds-form-grid wa-gap-l">
        <Specimen label="with hint & clear">
          <wa-input
            label="Email"
            type="email"
            placeholder="you@example.com"
            hint="We never share your email."
            with-clear
            style={{ width: "100%" }}
          ></wa-input>
        </Specimen>
        <Specimen label="password toggle">
          <wa-input
            label="Password"
            type="password"
            placeholder="Enter a password"
            password-toggle
            style={{ width: "100%" }}
          ></wa-input>
        </Specimen>
        <Specimen label="required">
          <wa-input label="Workspace name" required placeholder="acme-inc" style={{ width: "100%" }}></wa-input>
        </Specimen>
        <Specimen label="disabled">
          <wa-input label="Plan" value="Enterprise" disabled style={{ width: "100%" }}></wa-input>
        </Specimen>
      </div>
    </ComponentDoc>
  );
}

export function NumberInputDoc(): ReactElement {
  return (
    <ComponentDoc
      tag="wa-number-input"
      title="Number Input"
      summary="Numeric entry with stepper buttons, min/max clamping, and step increments — richer than a plain number field."
      code={`<wa-number-input label="Quantity" value="2" min="1" max="99"></wa-number-input>`}
    >
      <div className="wa-grid ds-form-grid wa-gap-l">
        <Specimen label="with steppers">
          <wa-number-input label="Quantity" value={2} min={1} max={99} style={{ width: "100%" }}></wa-number-input>
        </Specimen>
        <Specimen label="step & hint">
          <wa-number-input
            label="Price"
            value={49.5}
            step={0.5}
            min={0}
            hint="In USD, per seat"
            style={{ width: "100%" }}
          ></wa-number-input>
        </Specimen>
      </div>
    </ComponentDoc>
  );
}

export function OtpInputDoc(): ReactElement {
  return (
    <ComponentDoc
      tag="wa-otp-input"
      title="OTP Input"
      summary="One-time-passcode entry with per-character boxes, paste support, and auto-advance."
      code={`<wa-otp-input label="Verification code"></wa-otp-input>`}
    >
      <Specimen label="six digits">
        <wa-otp-input label="Verification code"></wa-otp-input>
      </Specimen>
    </ComponentDoc>
  );
}

export function TimeInputDoc(): ReactElement {
  return (
    <ComponentDoc
      tag="wa-time-input"
      title="Time Input"
      summary="Time-of-day entry with locale-aware formatting and segment-based keyboard editing."
      code={`<wa-time-input label="Meeting time"></wa-time-input>`}
    >
      <div className="wa-grid ds-form-grid wa-gap-l">
        <Specimen label="default">
          <wa-time-input label="Meeting time" style={{ width: "100%" }}></wa-time-input>
        </Specimen>
        <Specimen label="with hint">
          <wa-time-input
            label="Daily standup"
            hint="Shown in your local timezone"
            style={{ width: "100%" }}
          ></wa-time-input>
        </Specimen>
      </div>
    </ComponentDoc>
  );
}

export function KnownDateDoc(): ReactElement {
  return (
    <ComponentDoc
      tag="wa-known-date"
      title="Known Date"
      summary="Date entry for dates the user knows exactly (birthdays, issue dates) — typed segments beat calendar pickers for these."
      code={`<wa-known-date label="When was your passport issued?"></wa-known-date>`}
    >
      <Specimen label="typed date">
        <wa-known-date label="When was your passport issued?"></wa-known-date>
      </Specimen>
    </ComponentDoc>
  );
}

export function TextareaDoc(): ReactElement {
  return (
    <ComponentDoc
      tag="wa-textarea"
      title="Textarea"
      summary="Multi-line text entry with rows control and optional auto-resize."
      code={`<wa-textarea label="Message" placeholder="Tell us what you think" rows="3"></wa-textarea>`}
    >
      <div className="wa-grid ds-form-grid wa-gap-l">
        <Specimen label="default">
          <wa-textarea
            label="Message"
            placeholder="Tell us what you think"
            rows={3}
            style={{ width: "100%" }}
          ></wa-textarea>
        </Specimen>
        <Specimen label="disabled">
          <wa-textarea label="Release notes" value="Locked after publishing." disabled rows={3} style={{ width: "100%" }}></wa-textarea>
        </Specimen>
      </div>
    </ComponentDoc>
  );
}

export function SelectDoc(): ReactElement {
  return (
    <ComponentDoc
      tag="wa-select"
      title="Select"
      also={["wa-option"]}
      summary="Dropdown form field for picking one value from a list. Options are wa-option children."
      code={`<wa-select label="Role" placeholder="Select a role">
  <wa-option value="viewer">Viewer</wa-option>
  <wa-option value="editor">Editor</wa-option>
  <wa-option value="admin">Administrator</wa-option>
</wa-select>`}
    >
      <div className="wa-grid ds-form-grid wa-gap-l">
        <Specimen label="single select">
          <wa-select
            label="Role"
            placeholder="Select a role"
            hint="You can change this later."
            style={{ width: "100%" }}
          >
            <wa-option value="viewer">Viewer</wa-option>
            <wa-option value="editor">Editor</wa-option>
            <wa-option value="admin">Administrator</wa-option>
            <wa-option value="owner" disabled>
              Owner (contact support)
            </wa-option>
          </wa-select>
        </Specimen>
        <Specimen label="with clear, preselected">
          <wa-select label="Region" value="eu-west" with-clear style={{ width: "100%" }}>
            <wa-option value="us-east">US East</wa-option>
            <wa-option value="eu-west">EU West</wa-option>
            <wa-option value="ap-south">AP South</wa-option>
          </wa-select>
        </Specimen>
      </div>
    </ComponentDoc>
  );
}

export function CheckboxDoc(): ReactElement {
  return (
    <ComponentDoc
      tag="wa-checkbox"
      title="Checkbox"
      summary="Yes/no choice submitted with a form. For settings that apply instantly, use Switch instead."
      code={`<wa-checkbox checked>Email me product updates</wa-checkbox>`}
    >
      <Specimen label="states">
        <div className="wa-stack wa-gap-xs">
          <wa-checkbox checked>Email me product updates</wa-checkbox>
          <wa-checkbox>Email me security alerts</wa-checkbox>
          <wa-checkbox indeterminate>Select all projects</wa-checkbox>
          <wa-checkbox disabled>Legacy notifications (retired)</wa-checkbox>
        </div>
      </Specimen>
    </ComponentDoc>
  );
}

export function CheckboxGroupDoc(): ReactElement {
  return (
    <ComponentDoc
      tag="wa-checkbox-group"
      title="Checkbox Group"
      summary="Groups related checkboxes under one label with shared validation."
      code={`<wa-checkbox-group label="Interests">
  <wa-checkbox name="design">Design</wa-checkbox>
  <wa-checkbox name="development">Development</wa-checkbox>
</wa-checkbox-group>`}
    >
      <Specimen label="grouped choices">
        <wa-checkbox-group label="Interests" hint="Pick as many as you like">
          <wa-checkbox name="design" checked>
            Design
          </wa-checkbox>
          <wa-checkbox name="development" checked>
            Development
          </wa-checkbox>
          <wa-checkbox name="marketing">Marketing</wa-checkbox>
        </wa-checkbox-group>
      </Specimen>
    </ComponentDoc>
  );
}

export function RadioGroupDoc(): ReactElement {
  return (
    <ComponentDoc
      tag="wa-radio-group"
      title="Radio Group"
      also={["wa-radio"]}
      summary="Pick exactly one from 2–5 visible options. For longer lists, use Select."
      code={`<wa-radio-group label="Plan" value="pro">
  <wa-radio value="free">Free</wa-radio>
  <wa-radio value="pro">Pro</wa-radio>
  <wa-radio value="team">Team</wa-radio>
</wa-radio-group>`}
    >
      <div className="wa-grid ds-form-grid wa-gap-l">
        <Specimen label="vertical">
          <wa-radio-group label="Plan" value="pro">
            <wa-radio value="free">Free</wa-radio>
            <wa-radio value="pro">Pro</wa-radio>
            <wa-radio value="team">Team</wa-radio>
            <wa-radio value="enterprise" disabled>
              Enterprise (talk to sales)
            </wa-radio>
          </wa-radio-group>
        </Specimen>
        <Specimen label="horizontal">
          <wa-radio-group label="Environment" value="staging" orientation="horizontal">
            <wa-radio value="dev">Dev</wa-radio>
            <wa-radio value="staging">Staging</wa-radio>
            <wa-radio value="prod">Prod</wa-radio>
          </wa-radio-group>
        </Specimen>
      </div>
    </ComponentDoc>
  );
}

export function SwitchDoc(): ReactElement {
  return (
    <ComponentDoc
      tag="wa-switch"
      title="Switch"
      summary="Instant-apply on/off setting. If the change is submitted later with a form, use Checkbox."
      code={`<wa-switch checked>Enable notifications</wa-switch>`}
    >
      <Specimen label="states">
        <div className="wa-stack wa-gap-xs">
          <wa-switch checked>Enable notifications</wa-switch>
          <wa-switch>Auto-update components</wa-switch>
          <wa-switch checked disabled>
            Required security patches
          </wa-switch>
        </div>
      </Specimen>
    </ComponentDoc>
  );
}

export function SliderDoc(): ReactElement {
  return (
    <ComponentDoc
      tag="wa-slider"
      title="Slider"
      summary="Pick a numeric value from a continuous range, with keyboard support and optional tooltip."
      code={`<wa-slider label="Volume" min="0" max="100" value="60"></wa-slider>`}
    >
      <div className="wa-grid ds-form-grid wa-gap-l">
        <Specimen label="with hint">
          <wa-slider
            label="Volume"
            min={0}
            max={100}
            value={60}
            hint="Drag to adjust"
            style={{ width: "100%" }}
          ></wa-slider>
        </Specimen>
        <Specimen label="disabled">
          <wa-slider label="Reserved capacity" min={0} max={100} value={30} disabled style={{ width: "100%" }}></wa-slider>
        </Specimen>
      </div>
    </ComponentDoc>
  );
}

export function RatingDoc(): ReactElement {
  return (
    <ComponentDoc
      tag="wa-rating"
      title="Rating"
      summary="Star rating input; supports half steps and a read-only display mode."
      code={`<wa-rating label="Rate your experience" value="4"></wa-rating>`}
    >
      <Specimen label="interactive / half steps / read-only">
        <wa-rating label="Rate your experience" value={4}></wa-rating>
        <wa-rating label="Average rating" value={3.5} precision={0.5}></wa-rating>
        <wa-rating label="Score" value={5} readonly></wa-rating>
      </Specimen>
    </ComponentDoc>
  );
}

export function ColorPickerDoc(): ReactElement {
  return (
    <ComponentDoc
      tag="wa-color-picker"
      title="Color Picker"
      summary="Full color selection with swatches, eyedropper, and format switching. For app UI colors, prefer semantic tokens over free-form picks."
      code={`<wa-color-picker label="Accent color" value="#1a5fb4"></wa-color-picker>`}
    >
      <Specimen label="with a starting value">
        <wa-color-picker label="Accent color" value="#1a5fb4"></wa-color-picker>
      </Specimen>
    </ComponentDoc>
  );
}

/** Realistic composition: several controls working together in a card. */
export function FormsInContext(): ReactElement {
  return (
    <section className="ds-comp wa-stack wa-gap-m" aria-label="Form controls in context">
      <header className="wa-stack wa-gap-2xs">
        <div className="wa-cluster wa-gap-s" style={{ alignItems: "center" }}>
          <h3 className="ds-comp-title">In context: workspace settings</h3>
        </div>
        <p className="ds-comp-summary">
          Controls composed inside a card — the arrangement that surfaces spacing and alignment
          bugs isolated specimens hide.
        </p>
      </header>
      <wa-card with-header with-footer style={{ maxWidth: "34rem" }}>
        <div slot="header" className="wa-split">
          <strong>Workspace settings</strong>
          <wa-badge variant="success">Synced</wa-badge>
        </div>
        <div className="wa-stack wa-gap-m">
          <wa-input label="Workspace name" value="Acme Design" with-clear></wa-input>
          <wa-select label="Default role for invites" value="editor">
            <wa-option value="viewer">Viewer</wa-option>
            <wa-option value="editor">Editor</wa-option>
            <wa-option value="admin">Administrator</wa-option>
          </wa-select>
          <wa-switch checked>Allow public share links</wa-switch>
        </div>
        <div slot="footer" className="wa-cluster wa-gap-s">
          <wa-button variant="brand">Save changes</wa-button>
          <wa-button appearance="plain">Cancel</wa-button>
        </div>
      </wa-card>
    </section>
  );
}
