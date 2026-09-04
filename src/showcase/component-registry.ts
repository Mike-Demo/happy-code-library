// Registry of every component the design system ships, grouped for the
// components page sidebar. Sub-elements (items, options, tabs …) are
// documented inside their parent's section via `also`. Preview-only.

export interface ComponentEntry {
  tag: string;
  label: string;
  also?: readonly string[];
}

export interface ComponentGroup {
  id: string;
  label: string;
  entries: readonly ComponentEntry[];
}

export const COMPONENT_GROUPS: readonly ComponentGroup[] = [
  {
    id: "actions",
    label: "Actions",
    entries: [
      { tag: "wa-button", label: "Button" },
      { tag: "wa-button-group", label: "Button Group" },
      { tag: "wa-copy-button", label: "Copy Button" },
      { tag: "wa-dropdown", label: "Dropdown", also: ["wa-dropdown-item"] },
    ],
  },
  {
    id: "forms",
    label: "Form controls",
    entries: [
      { tag: "wa-input", label: "Input" },
      { tag: "wa-number-input", label: "Number Input" },
      { tag: "wa-otp-input", label: "OTP Input" },
      { tag: "wa-time-input", label: "Time Input" },
      { tag: "wa-known-date", label: "Known Date" },
      { tag: "wa-textarea", label: "Textarea" },
      { tag: "wa-select", label: "Select", also: ["wa-option"] },
      { tag: "wa-checkbox", label: "Checkbox" },
      { tag: "wa-checkbox-group", label: "Checkbox Group" },
      { tag: "wa-radio-group", label: "Radio Group", also: ["wa-radio"] },
      { tag: "wa-switch", label: "Switch" },
      { tag: "wa-slider", label: "Slider" },
      { tag: "wa-rating", label: "Rating" },
      { tag: "wa-color-picker", label: "Color Picker" },
    ],
  },
  {
    id: "feedback",
    label: "Feedback & status",
    entries: [
      { tag: "wa-callout", label: "Callout" },
      { tag: "wa-toast", label: "Toast", also: ["wa-toast-item"] },
      { tag: "wa-badge", label: "Badge" },
      { tag: "wa-tag", label: "Tag" },
      { tag: "wa-progress-bar", label: "Progress Bar" },
      { tag: "wa-progress-ring", label: "Progress Ring" },
      { tag: "wa-spinner", label: "Spinner" },
      { tag: "wa-skeleton", label: "Skeleton" },
      { tag: "wa-tooltip", label: "Tooltip" },
    ],
  },
  {
    id: "display",
    label: "Display & media",
    entries: [
      { tag: "wa-card", label: "Card" },
      { tag: "wa-avatar", label: "Avatar" },
      { tag: "wa-icon", label: "Icon" },
      { tag: "wa-details", label: "Details" },
      { tag: "wa-accordion", label: "Accordion", also: ["wa-accordion-item"] },
      { tag: "wa-divider", label: "Divider" },
      { tag: "wa-comparison", label: "Comparison" },
      { tag: "wa-carousel", label: "Carousel", also: ["wa-carousel-item"] },
      { tag: "wa-animated-image", label: "Animated Image" },
      { tag: "wa-markdown", label: "Markdown" },
    ],
  },
  {
    id: "data",
    label: "Data & formatting",
    entries: [
      { tag: "wa-format-number", label: "Format Number" },
      { tag: "wa-format-bytes", label: "Format Bytes" },
      { tag: "wa-format-date", label: "Format Date" },
      { tag: "wa-relative-time", label: "Relative Time" },
      { tag: "wa-qr-code", label: "QR Code" },
    ],
  },
  {
    id: "navigation",
    label: "Navigation & structure",
    entries: [
      { tag: "wa-breadcrumb", label: "Breadcrumb", also: ["wa-breadcrumb-item"] },
      { tag: "wa-tab-group", label: "Tab Group", also: ["wa-tab", "wa-tab-panel"] },
      { tag: "wa-pagination", label: "Pagination" },
      { tag: "wa-tree", label: "Tree", also: ["wa-tree-item"] },
      { tag: "wa-scroller", label: "Scroller" },
      { tag: "wa-split-panel", label: "Split Panel" },
      { tag: "wa-page", label: "Page" },
    ],
  },
  {
    id: "overlays",
    label: "Overlays",
    entries: [
      { tag: "wa-dialog", label: "Dialog" },
      { tag: "wa-drawer", label: "Drawer" },
      { tag: "wa-popover", label: "Popover" },
      { tag: "wa-popup", label: "Popup" },
    ],
  },
  {
    id: "utilities",
    label: "Utilities & observers",
    entries: [
      { tag: "wa-animation", label: "Animation" },
      { tag: "wa-include", label: "Include" },
      { tag: "wa-random-content", label: "Random Content" },
      { tag: "wa-intersection-observer", label: "Intersection Observer" },
      { tag: "wa-mutation-observer", label: "Mutation Observer" },
      { tag: "wa-resize-observer", label: "Resize Observer" },
      { tag: "wa-zoomable-frame", label: "Zoomable Frame" },
    ],
  },
];

/** Total custom elements covered, counting sub-elements documented under parents. */
export const COMPONENT_COUNT = COMPONENT_GROUPS.reduce(
  (total, group) =>
    total +
    group.entries.reduce((sum, entry) => sum + 1 + (entry.also?.length ?? 0), 0),
  0,
);
