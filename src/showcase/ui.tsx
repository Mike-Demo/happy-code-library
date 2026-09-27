// Showcase building blocks — preview-only (excluded from consumers).
import {
  useEffect,
  useRef,
  useState,
  type ReactElement,
  type ReactNode,
  type RefObject,
} from "react";

/**
 * Attach DOM event listeners to a custom element via ref. Web Awesome
 * components dispatch DOM events (wa-input, wa-mutation, …) that React's
 * synthetic event system does not surface, so we listen natively.
 */
export function useWaEvent<T extends HTMLElement>(
  ref: RefObject<T | null>,
  events: readonly string[],
  handler: (event: Event) => void,
): void {
  const handlerRef = useRef(handler);
  handlerRef.current = handler;
  const eventKey = events.join(",");

  useEffect(() => {
    const element = ref.current;
    if (!element) return;
    const names = eventKey.split(",");
    const listener = (event: Event) => handlerRef.current(event);
    for (const name of names) element.addEventListener(name, listener);
    return () => {
      for (const name of names) element.removeEventListener(name, listener);
    };
  }, [ref, eventKey]);
}

interface SectionProps {
  id: string;
  kicker: string;
  title: string;
  lede?: string;
  children: ReactNode;
  /**
   * Heading level for the section title. Pages whose section title is the
   * page's main heading pass 1 so every page has exactly one h1 and no
   * levels are skipped. Defaults to 2.
   */
  headingLevel?: 1 | 2;
}

/** Full-bleed page section with a centered content column. */
export function Section({ id, kicker, title, lede, children, headingLevel = 2 }: SectionProps): ReactElement {
  const TitleTag = headingLevel === 1 ? "h1" : "h2";
  return (
    <section id={id} className="ds-section">
      <div className="ds-section-inner wa-stack wa-gap-xl">
        <header className="wa-stack wa-gap-2xs">
          <p className="ds-kicker">{kicker}</p>
          <TitleTag className="ds-title">{title}</TitleTag>
          {lede ? <p className="ds-lede">{lede}</p> : null}
        </header>
        {children}
      </div>
    </section>
  );
}

interface DemoProps {
  title: string;
  children: ReactNode;
  /**
   * Heading level for the demo title. Pass 2 when the demo sits directly
   * under a page-level h1 so the outline never skips a level. Defaults to 3.
   */
  headingLevel?: 2 | 3;
}

/** Titled specimen panel. */
export function Demo({ title, children, headingLevel = 3 }: DemoProps): ReactElement {
  const TitleTag = headingLevel === 2 ? "h2" : "h3";
  return (
    <div className="wa-stack wa-gap-s">
      <TitleTag className="ds-demo-title">{title}</TitleTag>
      <div className="ds-demo wa-stack wa-gap-m">{children}</div>
    </div>
  );
}

interface SpecimenProps {
  label: string;
  children: ReactNode;
}

/** Labeled variant/state specimen inside a component doc. */
export function Specimen({ label, children }: SpecimenProps): ReactElement {
  return (
    <div className="wa-stack wa-gap-2xs">
      <span className="ds-specimen-label">{label}</span>
      <div className="wa-cluster wa-gap-s" style={{ alignItems: "center" }}>
        {children}
      </div>
    </div>
  );
}

interface ComponentDocProps {
  tag: string;
  title: string;
  /** Companion tags documented inside this section (e.g. wa-option under Select). */
  also?: readonly string[];
  summary: string;
  code?: string;
  children: ReactNode;
}

/** Storybook-style section for a single component: specimens + copyable code. */
export function ComponentDoc({
  tag,
  title,
  also,
  summary,
  code,
  children,
}: ComponentDocProps): ReactElement {
  return (
    <section id={tag} className="ds-comp wa-stack wa-gap-m" aria-label={title}>
      <header className="wa-stack wa-gap-2xs">
        <div className="wa-cluster wa-gap-s" style={{ alignItems: "center" }}>
          <h3 className="ds-comp-title">{title}</h3>
          <code className="ds-chip">{`<${tag}>`}</code>
          {(also ?? []).map((sub) => (
            <code key={sub} className="ds-chip ds-chip-quiet">{`<${sub}>`}</code>
          ))}
        </div>
        <p className="ds-comp-summary">{summary}</p>
      </header>
      <div className="ds-demo wa-stack wa-gap-l">{children}</div>
      {code ? (
        <wa-details className="ds-code-details" summary="Code">
          <div className="ds-code-block">
            <pre>
              <code>{code}</code>
            </pre>
            <wa-copy-button value={code}></wa-copy-button>
          </div>
        </wa-details>
      ) : null}
    </section>
  );
}

/** Light/dark mode toggle; flips Web Awesome color scheme classes on <html>. */
export function ThemeToggle(): ReactElement {
  const [dark, setDark] = useState(false);

  // Sync with whatever mode the document is already in (survives route changes).
  useEffect(() => {
    setDark(document.documentElement.classList.contains("wa-dark"));
  }, []);

  const toggle = () => {
    const next = !dark;
    document.documentElement.classList.toggle("wa-dark", next);
    document.documentElement.classList.toggle("wa-light", !next);
    setDark(next);
  };

  return (
    <wa-button appearance="plain" size="s" onClick={toggle}>
      <wa-icon
        name={dark ? "sun" : "moon"}
        label={dark ? "Switch to light mode" : "Switch to dark mode"}
      ></wa-icon>
    </wa-button>
  );
}
