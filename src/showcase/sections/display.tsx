// Component docs: display & media group. Preview-only.
import type { ReactElement } from "react";

import { ComponentDoc, Specimen } from "../ui";

export function AvatarDoc(): ReactElement {
  return (
    <ComponentDoc
      tag="wa-avatar"
      title="Avatar"
      summary="Represents a person or entity with an image, initials, or icon fallback."
      code={`<wa-avatar initials="AL" label="Ada Lovelace"></wa-avatar>
<wa-avatar shape="rounded" initials="GH" label="Grace Hopper"></wa-avatar>`}
    >
      <Specimen label="initials, icon, shapes">
        <wa-avatar initials="AL" label="Ada Lovelace"></wa-avatar>
        <wa-avatar initials="GH" label="Grace Hopper" shape="rounded"></wa-avatar>
        <wa-avatar label="Unknown user"></wa-avatar>
        <wa-avatar shape="square" label="Team">
          <wa-icon slot="icon" name="users"></wa-icon>
        </wa-avatar>
      </Specimen>
    </ComponentDoc>
  );
}

export function CardDoc(): ReactElement {
  return (
    <ComponentDoc
      tag="wa-card"
      title="Card"
      summary="Groups related content with optional header, footer, and media slots."
      code={`<wa-card with-header with-footer>
  <div slot="header">Header</div>
  Card body content.
  <div slot="footer"><wa-button variant="brand">Action</wa-button></div>
</wa-card>`}
    >
      <div className="wa-grid ds-form-grid wa-gap-l">
        <Specimen label="header + footer">
          <wa-card with-header with-footer style={{ width: "100%" }}>
            <div slot="header" className="wa-split">
              <strong>Q3 report</strong>
              <wa-badge variant="success">Final</wa-badge>
            </div>
            Revenue grew 18% quarter over quarter, driven by the new self-serve tier.
            <div slot="footer" className="wa-cluster wa-gap-s">
              <wa-button variant="brand" size="s">
                Download
              </wa-button>
              <wa-button appearance="plain" size="s">
                Share
              </wa-button>
            </div>
          </wa-card>
        </Specimen>
        <Specimen label="appearances">
          <div className="wa-stack wa-gap-s" style={{ width: "100%" }}>
            <wa-card appearance="outlined">Outlined card</wa-card>
            <wa-card appearance="filled">Filled card</wa-card>
            <wa-card appearance="plain">Plain card</wa-card>
          </div>
        </Specimen>
      </div>
    </ComponentDoc>
  );
}

export function CarouselDoc(): ReactElement {
  return (
    <ComponentDoc
      tag="wa-carousel"
      title="Carousel"
      also={["wa-carousel-item"]}
      summary="Slideshow of items with navigation arrows, pagination dots, and looping."
      code={`<wa-carousel navigation pagination loop>
  <wa-carousel-item>Slide 1</wa-carousel-item>
  <wa-carousel-item>Slide 2</wa-carousel-item>
</wa-carousel>`}
    >
      <Specimen label="navigation + pagination">
        <wa-carousel navigation pagination loop style={{ width: "100%", maxWidth: "28rem" }}>
          {["Design tokens", "Components", "Icons", "Dark mode"].map((label, index) => (
            <wa-carousel-item key={label}>
              <div className="ds-slide">
                <wa-icon
                  name={["palette", "cubes", "icons", "moon"][index]}
                  style={{ fontSize: "var(--wa-font-size-2xl)" }}
                ></wa-icon>
                <span>{label}</span>
              </div>
            </wa-carousel-item>
          ))}
        </wa-carousel>
      </Specimen>
    </ComponentDoc>
  );
}

export function ComparisonDoc(): ReactElement {
  return (
    <ComponentDoc
      tag="wa-comparison"
      title="Comparison"
      summary="Side-by-side before/after comparison with a draggable divider."
      code={`<wa-comparison>
  <div slot="before">Before</div>
  <div slot="after">After</div>
</wa-comparison>`}
    >
      <Specimen label="drag the divider">
        <wa-comparison style={{ width: "100%", maxWidth: "28rem" }}>
          <div slot="before" className="ds-compare ds-compare-before">
            Light
          </div>
          <div slot="after" className="ds-compare ds-compare-after">
            Dark
          </div>
        </wa-comparison>
      </Specimen>
    </ComponentDoc>
  );
}

export function IconDoc(): ReactElement {
  return (
    <ComponentDoc
      tag="wa-icon"
      title="Icon"
      summary="Renders Font Awesome Free icons by name. Decorative icons need no label; standalone icons must have one. Browse the full set on the Icons page."
      code={`<wa-icon name="heart"></wa-icon>
<wa-icon name="github" family="brands" label="GitHub"></wa-icon>`}
    >
      <Specimen label="families & variants">
        <wa-icon name="heart"></wa-icon>
        <wa-icon name="heart" family="regular"></wa-icon>
        <wa-icon name="github" family="brands" label="GitHub"></wa-icon>
        <wa-icon name="star" style={{ color: "var(--wa-color-warning-fill-loud)" }}></wa-icon>
        <wa-icon name="rocket" style={{ fontSize: "var(--wa-font-size-2xl)" }}></wa-icon>
      </Specimen>
    </ComponentDoc>
  );
}

export function AnimatedImageDoc(): ReactElement {
  return (
    <ComponentDoc
      tag="wa-animated-image"
      title="Animated Image"
      summary="Plays GIF/WebP animations with an accessible play/pause control."
      code={`<wa-animated-image src="/showcase/gradient.gif" alt="Animated gradient"></wa-animated-image>`}
    >
      <Specimen label="click to play / pause">
        <wa-animated-image
          src="/showcase/gradient.gif"
          alt="Animated gradient demo"
          style={{ width: "16rem" }}
        ></wa-animated-image>
      </Specimen>
    </ComponentDoc>
  );
}

export function AnimationDoc(): ReactElement {
  return (
    <ComponentDoc
      tag="wa-animation"
      title="Animation"
      summary="Applies named keyframe animations (Animate.css set) to slotted content."
      code={`<wa-animation name="pulse" duration="2000" iterations="Infinity" play>
  <wa-button variant="brand">Pulsing</wa-button>
</wa-animation>`}
    >
      <Specimen label="looping pulse">
        <wa-animation name="pulse" duration={2000} play>
          <wa-button variant="brand">Pulsing</wa-button>
        </wa-animation>
      </Specimen>
    </ComponentDoc>
  );
}

export function QrCodeDoc(): ReactElement {
  return (
    <ComponentDoc
      tag="wa-qr-code"
      title="QR Code"
      summary="Generates a QR code from any value; colors are themeable via tokens."
      code={`<wa-qr-code value="https://webawesome.com" label="Web Awesome site"></wa-qr-code>`}
    >
      <Specimen label="URL">
        <wa-qr-code value="https://webawesome.com" label="Scan to open webawesome.com"></wa-qr-code>
      </Specimen>
    </ComponentDoc>
  );
}

export function ZoomableFrameDoc(): ReactElement {
  return (
    <ComponentDoc
      tag="wa-zoomable-frame"
      title="Zoomable Frame"
      summary="Embeds a page in an iframe with zoom in/out controls."
      code={`<wa-zoomable-frame src="/showcase/include-demo.html" zoom="0.8"></wa-zoomable-frame>`}
    >
      <Specimen label="embedded fragment at 80%">
        <wa-zoomable-frame
          src="/showcase/include-demo.html"
          zoom={0.8}
          style={{ width: "100%", maxWidth: "28rem", height: "10rem" }}
        ></wa-zoomable-frame>
      </Specimen>
    </ComponentDoc>
  );
}
