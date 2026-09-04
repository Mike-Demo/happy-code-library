// Component docs: utilities & observers group. Preview-only.
import { useRef, useState, type ReactElement } from "react";

import type WaMutationObserver from "@awesome.me/webawesome/dist/components/mutation-observer/mutation-observer.js";
import type WaResizeObserver from "@awesome.me/webawesome/dist/components/resize-observer/resize-observer.js";

import { ComponentDoc, Specimen, useWaEvent } from "../ui";

export function IncludeDoc(): ReactElement {
  return (
    <ComponentDoc
      tag="wa-include"
      title="Include"
      summary="Fetches and injects an external HTML fragment at runtime. Only include files you control."
      code={`<wa-include src="/showcase/include-demo.html"></wa-include>`}
    >
      <Specimen label="fragment fetched at runtime">
        <wa-include src="/showcase/include-demo.html" style={{ width: "100%" }}></wa-include>
      </Specimen>
    </ComponentDoc>
  );
}

export function IntersectionObserverDoc(): ReactElement {
  const observerRef = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);

  useWaEvent(observerRef, ["wa-intersect"], (event) => {
    const detail = (event as CustomEvent<{ entry?: IntersectionObserverEntry }>).detail;
    if (detail?.entry) setVisible(detail.entry.isIntersecting);
  });

  return (
    <ComponentDoc
      tag="wa-intersection-observer"
      title="Intersection Observer"
      summary="Watches children and fires wa-intersect as they enter or leave the viewport — lazy loading, scroll-triggered reveals."
      code={`<wa-intersection-observer intersect-class="in-view" threshold="0.5">
  <div class="reveal">Animates when scrolled into view</div>
</wa-intersection-observer>`}
    >
      <Specimen label="scroll the box into view">
        <div className="wa-stack wa-gap-s" style={{ width: "100%" }}>
          <wa-badge variant={visible ? "success" : "neutral"}>
            {visible ? "In view" : "Out of view"}
          </wa-badge>
          <div className="ds-observer-scroll">
            <div className="ds-observer-spacer">Scroll down inside this box…</div>
            <wa-intersection-observer
              threshold="0.5"
              ref={(element: HTMLElement | null) => {
                observerRef.current = element;
              }}
            >
              <div className="ds-observer-target">I fire wa-intersect</div>
            </wa-intersection-observer>
          </div>
        </div>
      </Specimen>
    </ComponentDoc>
  );
}

export function MutationObserverDoc(): ReactElement {
  const observerRef = useRef<WaMutationObserver | null>(null);
  const [mutations, setMutations] = useState(0);
  const [tone, setTone] = useState<"brand" | "success" | "warning">("brand");

  useWaEvent(observerRef, ["wa-mutation"], () => {
    setMutations((count) => count + 1);
  });

  const nextTone = tone === "brand" ? "success" : tone === "success" ? "warning" : "brand";

  return (
    <ComponentDoc
      tag="wa-mutation-observer"
      title="Mutation Observer"
      summary="Fires wa-mutation when attributes or children of slotted content change."
      code={`<wa-mutation-observer attr="variant">
  <wa-badge variant="brand">Watched</wa-badge>
</wa-mutation-observer>`}
    >
      <Specimen label="change the badge's attribute">
        <wa-mutation-observer
          attr="variant"
          ref={(element: WaMutationObserver | null) => {
            observerRef.current = element;
          }}
        >
          <wa-badge variant={tone}>Watched badge</wa-badge>
        </wa-mutation-observer>
        <wa-button appearance="filled" size="s" onClick={() => setTone(nextTone)}>
          Change variant
        </wa-button>
        <span className="ds-caption">mutations observed: {mutations}</span>
      </Specimen>
    </ComponentDoc>
  );
}

export function ResizeObserverDoc(): ReactElement {
  const observerRef = useRef<WaResizeObserver | null>(null);
  const [size, setSize] = useState("—");

  useWaEvent(observerRef, ["wa-resize"], (event) => {
    const detail = (event as CustomEvent<{ entries?: ResizeObserverEntry[] }>).detail;
    const rect = detail?.entries?.[0]?.contentRect;
    if (rect) setSize(Math.round(rect.width) + " × " + Math.round(rect.height) + " px");
  });

  return (
    <ComponentDoc
      tag="wa-resize-observer"
      title="Resize Observer"
      summary="Fires wa-resize with new dimensions when slotted content changes size."
      code={`<wa-resize-observer>
  <textarea>Resize me</textarea>
</wa-resize-observer>`}
    >
      <Specimen label="drag the corner">
        <div className="wa-stack wa-gap-s">
          <wa-resize-observer
            ref={(element: WaResizeObserver | null) => {
              observerRef.current = element;
            }}
          >
            <textarea className="ds-resizable" defaultValue="Resize me from the corner handle." rows={3}></textarea>
          </wa-resize-observer>
          <span className="ds-caption">observed size: {size}</span>
        </div>
      </Specimen>
    </ComponentDoc>
  );
}
