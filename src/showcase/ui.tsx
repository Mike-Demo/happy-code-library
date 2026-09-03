// Showcase building blocks — preview-only (excluded from consumers).
import { useEffect, useState, type ReactElement, type ReactNode } from "react";

interface SectionProps {
  id: string;
  kicker: string;
  title: string;
  lede?: string;
  children: ReactNode;
}

/** Full-bleed page section with a centered content column. */
export function Section({ id, kicker, title, lede, children }: SectionProps): ReactElement {
  return (
    <section id={id} className="ds-section">
      <div className="ds-section-inner wa-stack wa-gap-xl">
        <header className="wa-stack wa-gap-2xs">
          <p className="ds-kicker">{kicker}</p>
          <h2 className="ds-title">{title}</h2>
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
}

/** Titled specimen panel. */
export function Demo({ title, children }: DemoProps): ReactElement {
  return (
    <div className="wa-stack wa-gap-s">
      <h3 className="ds-demo-title">{title}</h3>
      <div className="ds-demo wa-stack wa-gap-m">{children}</div>
    </div>
  );
}

/** Light/dark mode toggle; flips Web Awesome color scheme classes on <html>. */
export function ThemeToggle(): ReactElement {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle("wa-dark", dark);
    document.documentElement.classList.toggle("wa-light", !dark);
  }, [dark]);

  return (
    <wa-button
      appearance="plain"
      size="s"
      onClick={() => setDark((previous) => !previous)}
    >
      <wa-icon
        name={dark ? "sun" : "moon"}
        label={dark ? "Switch to light mode" : "Switch to dark mode"}
      ></wa-icon>
    </wa-button>
  );
}
