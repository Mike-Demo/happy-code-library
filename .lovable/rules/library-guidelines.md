# Font Awsome & Web Awesome — Guidelines

## Components

The design system exports these components — import them from `@ws-q44iemhjvr3azhdcenod/9fea97bb-e317-446f-b683-1274350846c6` and compose them before building anything from scratch:

`LicensesPage`, `SiteFooter`, `WaAccordionItem`, `WaAccordion`, `WaAnimatedImage`, `WaAnimation`, `WaAvatar`, `WaBadge`, `WaBreadcrumbItem`, `WaBreadcrumb`, `WaButtonGroup`, `WaButton`, `WaCallout`, `WaCard`, `WaCarouselItem`, `WaCarousel`, `WaCheckboxGroup`, `WaCheckbox`, `WaColorPicker`, `WaComparison`, `WaCopyButton`, `WaDetails`, `WaDialog`, `WaDivider`, `WaDrawer`, `WaDropdownItem`, `WaDropdown`, `WaFormatBytes`, `WaFormatDate`, `WaFormatNumber`, `WaIcon`, `WaInclude`, `WaInput`, `WaIntersectionObserver`, `WaKnownDate`, `WaMarkdown`, `WaMutationObserver`, `WaNumberInput`, `WaOption`, `WaOtpInput`, `WaPage`, `WaPagination`, `WaPopover`, `WaPopup`, `WaProgressBar`, `WaProgressRing`, `WaQrCode`, `WaRadioGroup`, `WaRadio`, `WaRandomContent`, `WaRating`, `WaRelativeTime`, `WaResizeObserver`, `WaScroller`, `WaSelect`, `WaSkeleton`, `WaSlider`, `WaSpinner`, `WaSplitPanel`, `WaSwitch`, `WaTabGroup`, `WaTabPanel`, `WaTab`, `WaTag`, `WaTextarea`, `WaTimeInput`, `WaToastItem`, `WaToast`, `WaTooltip`, `WaTreeItem`, `WaTree`, `WaZoomableFrame`, `WebAwesomeLoader`

Per-component details (import stanzas, props, variants, examples) live in `.lovable/rules/libraries/{slug}/components.md` — on disk, not auto-loaded. Read that file or the component source when the name alone isn't enough.

## Theme Files

The design system's theme is delivered through the following files. The author's original source files carry the full wiring the design system needs — variable declarations, framework-specific directives, provider objects, etc. — and are the canonical import target.

- `@ws-q44iemhjvr3azhdcenod/9fea97bb-e317-446f-b683-1274350846c6/webawesome/theme.css` (source — preferred import)
- `@ws-q44iemhjvr3azhdcenod/9fea97bb-e317-446f-b683-1274350846c6/webawesome/tokens.css` (source — preferred import)
- `@ws-q44iemhjvr3azhdcenod/9fea97bb-e317-446f-b683-1274350846c6/dist/tokens.css` (auto-generated flat list of CSS custom properties — a raw-values fallback only; does NOT carry framework-specific wiring that the source files above provide)

