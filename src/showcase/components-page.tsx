// Components page: full gallery with searchable sidebar. Preview-only.
import { useMemo, useRef, useState, type ReactElement } from "react";

import type WaInput from "@awesome.me/webawesome/dist/components/input/input.js";

import { COMPONENT_COUNT, COMPONENT_GROUPS } from "./component-registry";
import { Section, useWaEvent } from "./ui";
import { ButtonDoc, ButtonGroupDoc, CopyButtonDoc, DropdownDoc } from "./sections/actions";
import {
  CheckboxDoc,
  CheckboxGroupDoc,
  ColorPickerDoc,
  FormsInContext,
  HCaptchaDoc,
  InputDoc,
  KnownDateDoc,
  NumberInputDoc,
  OtpInputDoc,
  RadioGroupDoc,
  RatingDoc,
  SelectDoc,
  SliderDoc,
  SwitchDoc,
  TextareaDoc,
  TimeInputDoc,
} from "./sections/forms";
import {
  BadgeDoc,
  CalloutDoc,
  ProgressBarDoc,
  ProgressRingDoc,
  SkeletonDoc,
  SpinnerDoc,
  TagDoc,
  ToastDoc,
  TooltipDoc,
} from "./sections/feedback";
import {
  AnimatedImageDoc,
  AnimationDoc,
  AvatarDoc,
  CardDoc,
  CarouselDoc,
  ComparisonDoc,
  IconDoc,
  QrCodeDoc,
  ZoomableFrameDoc,
} from "./sections/display";
import {
  FormatBytesDoc,
  FormatDateDoc,
  FormatNumberDoc,
  MarkdownDoc,
  RandomContentDoc,
  RelativeTimeDoc,
} from "./sections/data";
import {
  AccordionDoc,
  BreadcrumbDoc,
  DetailsDoc,
  DividerDoc,
  PageDoc,
  PaginationDoc,
  ScrollerDoc,
  SplitPanelDoc,
  TabGroupDoc,
  TreeDoc,
} from "./sections/navigation";
import { DialogDoc, DrawerDoc, PopoverDoc, PopupDoc } from "./sections/overlays";
import {
  IncludeDoc,
  IntersectionObserverDoc,
  MutationObserverDoc,
  ResizeObserverDoc,
} from "./sections/utilities";

/** Doc renderer for every tag in the registry, keyed by tag. */
const DOCS: Record<string, () => ReactElement> = {
  "wa-button": ButtonDoc,
  "wa-button-group": ButtonGroupDoc,
  "wa-copy-button": CopyButtonDoc,
  "wa-dropdown": DropdownDoc,
  "wa-input": InputDoc,
  "wa-number-input": NumberInputDoc,
  "wa-otp-input": OtpInputDoc,
  "wa-time-input": TimeInputDoc,
  "wa-known-date": KnownDateDoc,
  "wa-textarea": TextareaDoc,
  "wa-select": SelectDoc,
  "wa-checkbox": CheckboxDoc,
  "wa-checkbox-group": CheckboxGroupDoc,
  "wa-radio-group": RadioGroupDoc,
  "wa-switch": SwitchDoc,
  "wa-slider": SliderDoc,
  "wa-rating": RatingDoc,
  "wa-color-picker": ColorPickerDoc,
  hcaptcha: HCaptchaDoc,
  "wa-callout": CalloutDoc,
  "wa-toast": ToastDoc,
  "wa-badge": BadgeDoc,
  "wa-tag": TagDoc,
  "wa-progress-bar": ProgressBarDoc,
  "wa-progress-ring": ProgressRingDoc,
  "wa-spinner": SpinnerDoc,
  "wa-skeleton": SkeletonDoc,
  "wa-tooltip": TooltipDoc,
  "wa-card": CardDoc,
  "wa-avatar": AvatarDoc,
  "wa-icon": IconDoc,
  "wa-details": DetailsDoc,
  "wa-accordion": AccordionDoc,
  "wa-divider": DividerDoc,
  "wa-comparison": ComparisonDoc,
  "wa-carousel": CarouselDoc,
  "wa-animated-image": AnimatedImageDoc,
  "wa-markdown": MarkdownDoc,
  "wa-format-number": FormatNumberDoc,
  "wa-format-bytes": FormatBytesDoc,
  "wa-format-date": FormatDateDoc,
  "wa-relative-time": RelativeTimeDoc,
  "wa-qr-code": QrCodeDoc,
  "wa-breadcrumb": BreadcrumbDoc,
  "wa-tab-group": TabGroupDoc,
  "wa-pagination": PaginationDoc,
  "wa-tree": TreeDoc,
  "wa-scroller": ScrollerDoc,
  "wa-split-panel": SplitPanelDoc,
  "wa-page": PageDoc,
  "wa-dialog": DialogDoc,
  "wa-drawer": DrawerDoc,
  "wa-popover": PopoverDoc,
  "wa-popup": PopupDoc,
  "wa-animation": AnimationDoc,
  "wa-include": IncludeDoc,
  "wa-random-content": RandomContentDoc,
  "wa-intersection-observer": IntersectionObserverDoc,
  "wa-mutation-observer": MutationObserverDoc,
  "wa-resize-observer": ResizeObserverDoc,
  "wa-zoomable-frame": ZoomableFrameDoc,
};

export function ComponentsPage(): ReactElement {
  const searchRef = useRef<WaInput | null>(null);
  const [query, setQuery] = useState("");

  useWaEvent(searchRef, ["input", "wa-clear"], () => {
    setQuery((searchRef.current?.value ?? "").trim().toLowerCase());
  });

  const filteredGroups = useMemo(() => {
    if (!query) return COMPONENT_GROUPS;
    return COMPONENT_GROUPS.map((group) => ({
      ...group,
      entries: group.entries.filter(
        (entry) =>
          entry.label.toLowerCase().includes(query) ||
          entry.tag.includes(query) ||
          (entry.also ?? []).some((sub) => sub.includes(query)),
      ),
    })).filter((group) => group.entries.length > 0);
  }, [query]);

  const scrollTo = (tag: string) => {
    document.getElementById(tag)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <Section
      id="components"
      kicker="Library"
      title="Components"
      lede={
        "Every custom element the system ships — " +
        COMPONENT_COUNT +
        " in total, counting sub-elements documented under their parents. Each entry shows live variants and states with copyable code."
      }
    >
      <div className="ds-comp-layout">
        <aside className="ds-comp-sidebar" aria-label="Component index">
          <wa-input
            placeholder="Filter components…"
            size="s"
            with-clear
            ref={(element: WaInput | null) => {
              searchRef.current = element;
            }}
          >
            <wa-icon slot="start" name="magnifying-glass"></wa-icon>
          </wa-input>
          <nav className="ds-comp-index wa-stack wa-gap-3xs">
            {filteredGroups.length === 0 ? (
              <p className="ds-quiet">Nothing matches "{query}".</p>
            ) : (
              filteredGroups.map((group) => (
                <div key={group.id} className="wa-stack wa-gap-3xs">
                  <p className="ds-nav-label">{group.label}</p>
                  {group.entries.map((entry) => (
                    <button
                      key={entry.tag}
                      type="button"
                      className="ds-index-link"
                      onClick={() => scrollTo(entry.tag)}
                    >
                      {entry.label}
                    </button>
                  ))}
                </div>
              ))
            )}
          </nav>
        </aside>

        <div className="ds-comp-content wa-stack wa-gap-2xl">
          {COMPONENT_GROUPS.map((group) => (
            <div key={group.id} id={"group-" + group.id} className="wa-stack wa-gap-xl">
              <div className="wa-cluster wa-gap-s" style={{ alignItems: "center" }}>
                <h2 className="ds-group-title">{group.label}</h2>
                <wa-badge variant="neutral" appearance="outlined">
                  {group.entries.length}
                </wa-badge>
              </div>
              {group.entries.map((entry) => {
                const Doc = DOCS[entry.tag];
                return Doc ? <Doc key={entry.tag} /> : null;
              })}
              {group.id === "forms" ? <FormsInContext /> : null}
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
