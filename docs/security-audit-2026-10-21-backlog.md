# Security audit 2026-10-21 backlog

## Triage

The audit reports **0 confirmed findings**, **2 needs-validation leads**, and **0 rejected candidates**. There are no confirmed findings to prioritize or create remediation issues for.

Issue creation is unavailable in this session. The following issue draft is ready to file and links back to parent issue #3.

## Issue draft

**Title:** `[security][needs-validation] Audit leads to validate`

**Body:**

Related to [Mike-Demo/happy-code-library#3](https://github.com/Mike-Demo/happy-code-library/issues/3).

Validate each lead below. These are not confirmed findings; do not assign severity until the missing facts are established.

- [ ] **Preview DS_SPECIMEN_PROPS postMessage listener checks event.source===parent but never event.origin, so any framing site can drive the previewed component's props**
  - Fingerprint: `preview-postmessage-no-origin-check-specimen-props`
  - Claimed root cause: The DS_SPECIMEN_PROPS listeners validate only event.source === parent and never validate event.origin against an allowlist of intended Lovable canvas origins, so any site that frames the preview becomes the trusted parent and can supply specimen props.
  - Exact missing fact from the supplied issue: “A concrete previewed component from the (not-in-repo) generated registry src/.generated/mockup-components whose accepted string prop reaches a script, innerHTML, or attacker-controlled navigation/content sink in the preview origin with a concrete effect on another principal, plus whether the hosting layer for an allowed Lovable/localhost preview h…”
- [ ] **Unauthenticated saveThemeDefaults server function writes arbitrary CSS to src/webawesome/brand.css in any non-production server deployment**
  - Fingerprint: `unauthenticated-theme-save-writes-brand-css`
  - Claimed root cause: The saveThemeDefaults server function performs a filesystem write to the shipped source file src/webawesome/brand.css with no authentication, authorization, Origin/CSRF, or loopback check; the sole gate is an exact NODE_ENV === 'production' comparison in writeBrandCss, so any non-production server deployment exposing the endpoint would allow an un…
  - Exact missing fact from the supplied issue: “Whether any real non-static deployment of this code (e.g. the Lovable preview named in README.md, a vite dev/vite preview host, or a staging SSR deployment) actually serves the saveThemeDefaults endpoint to unauthenticated network callers with NODE_ENV != 'production' AND a writable process.cwd()/src/webawesome/brand.css. That NODE_ENV value, serv…”

The supplied issue text ends in ellipses in both missing-fact descriptions; they are retained above rather than completed by inference.
