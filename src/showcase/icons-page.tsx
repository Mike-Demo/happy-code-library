// Icons page: searchable index of every Font Awesome Free icon. Preview-only.
import { useMemo, useRef, useState, type ReactElement } from "react";

import type WaInput from "@awesome.me/webawesome/dist/components/input/input.js";
import type WaToast from "@awesome.me/webawesome/dist/components/toast/toast.js";

import { BRAND_ICONS, REGULAR_ICONS, SOLID_ICONS } from "./icon-index";
import { Section, useWaEvent } from "./ui";

const INITIAL_LIMIT = 72;
const LIMIT_STEP = 216;

interface IconFamily {
  id: "solid" | "regular" | "brands";
  label: string;
  family?: "regular" | "brands";
  icons: readonly string[];
}

const FAMILIES: readonly IconFamily[] = [
  { id: "solid", label: "Solid", icons: SOLID_ICONS },
  { id: "regular", label: "Regular", family: "regular", icons: REGULAR_ICONS },
  { id: "brands", label: "Brands", family: "brands", icons: BRAND_ICONS },
];

const TOTAL = SOLID_ICONS.length + REGULAR_ICONS.length + BRAND_ICONS.length;

function FamilyGrid({
  family,
  query,
  onCopy,
}: {
  family: IconFamily;
  query: string;
  onCopy: (name: string, family?: string) => void;
}): ReactElement {
  const [limit, setLimit] = useState(INITIAL_LIMIT);

  const matches = useMemo(() => {
    if (!query) return family.icons;
    return family.icons.filter((name) => name.includes(query));
  }, [family.icons, query]);

  const visible = matches.slice(0, limit);
  const remaining = matches.length - visible.length;

  return (
    <div className="wa-stack wa-gap-s">
      <div className="wa-cluster wa-gap-s" style={{ alignItems: "center" }}>
        <h3 className="ds-demo-title">{family.label}</h3>
        <wa-badge variant="neutral" appearance="outlined">
          {query ? matches.length + " of " + family.icons.length : String(family.icons.length)}
        </wa-badge>
      </div>
      {matches.length === 0 ? (
        <p className="ds-quiet">No {family.label.toLowerCase()} icons match "{query}".</p>
      ) : (
        <>
          <div className="ds-icon-grid">
            {visible.map((name) => (
              <button
                key={name}
                type="button"
                className="ds-icon-cell"
                title={"Copy \u201C" + name + "\u201D"}
                onClick={() => onCopy(name, family.family)}
              >
                <wa-icon name={name} family={family.family}></wa-icon>
                <span className="ds-icon-name">{name}</span>
              </button>
            ))}
          </div>
          {remaining > 0 ? (
            <wa-button
              appearance="outlined"
              size="s"
              style={{ alignSelf: "start" }}
              onClick={() => setLimit((current) => current + LIMIT_STEP)}
            >
              Show {Math.min(remaining, LIMIT_STEP)} more of {remaining}
            </wa-button>
          ) : null}
        </>
      )}
    </div>
  );
}

export function IconsPage(): ReactElement {
  const searchRef = useRef<WaInput | null>(null);
  const toastRef = useRef<WaToast | null>(null);
  const [query, setQuery] = useState("");

  useWaEvent(searchRef, ["input", "wa-clear"], () => {
    setQuery((searchRef.current?.value ?? "").trim().toLowerCase());
  });

  const copyIcon = (name: string, family?: string) => {
    const snippet = family
      ? '<wa-icon name="' + name + '" family="' + family + '"></wa-icon>'
      : '<wa-icon name="' + name + '"></wa-icon>';
    void navigator.clipboard.writeText(snippet).then(() => {
      toastRef.current?.create("Copied " + snippet, { variant: "success", duration: 2500 });
    });
  };

  return (
    <Section
      id="icons"
      kicker="Library"
      title="Iconography"
      lede={
        "All " +
        TOTAL.toLocaleString() +
        " Font Awesome Free icons, rendered through wa-icon. Click any icon to copy its markup. Icons scale with font-size and inherit the current text color."
      }
    >
      <wa-toast
        ref={(element: WaToast | null) => {
          toastRef.current = element;
        }}
      ></wa-toast>

      <wa-input
        placeholder={"Search " + TOTAL.toLocaleString() + " icons by name\u2026"}
        with-clear
        size="l"
        style={{ maxWidth: "28rem" }}
        ref={(element: WaInput | null) => {
          searchRef.current = element;
        }}
      >
        <wa-icon slot="start" name="magnifying-glass"></wa-icon>
      </wa-input>

      <div className="ds-demo wa-stack wa-gap-m">
        <span className="ds-specimen-label">usage</span>
        <div className="wa-cluster wa-gap-l" style={{ alignItems: "center" }}>
          <wa-icon name="heart" style={{ fontSize: "var(--wa-font-size-xl)" }}></wa-icon>
          <wa-icon
            name="heart"
            family="regular"
            style={{ fontSize: "var(--wa-font-size-xl)" }}
          ></wa-icon>
          <wa-icon
            name="font-awesome"
            family="brands"
            style={{ fontSize: "var(--wa-font-size-xl)", color: "var(--wa-color-brand-fill-loud)" }}
          ></wa-icon>
          <code className="ds-code">{'<wa-icon name="heart" family="regular"></wa-icon>'}</code>
        </div>
      </div>

      {FAMILIES.map((family) => (
        <FamilyGrid key={family.id} family={family} query={query} onCopy={copyIcon} />
      ))}
    </Section>
  );
}
