# Make the Design Systems sites agent-friendly (L0 -> L1/L2)

## What I confirmed

- Both hosts return **403 to a bot user-agent (GPTBot)** but **200 to a normal browser**, on every path including `robots.txt`. The block is at the hosting edge/firewall, not in this code — the site files themselves allow all bots.
- This project already ships: `robots.txt`, `sitemap.xml`, a favicon, prerendered HTML for all 9 pages, and per-page title/description/og tags.
- Missing: `llms.txt` (today `/llms.txt` falls through to the homepage), Schema.org JSON-LD, `twitter:card` on every page (to confirm), and a `<main>`/`<nav>`/`<footer>` landmark check.
- Assumption: this project is the Font Awesome build (design.1). design.2 (NES build) is a separate project — the same code steps must be repeated there.

## Step 1 — Unblock agent traffic (you, in the host/DNS dashboard)

I can't change this from code. In the firewall / bot-protection settings for the `mikedemo.dev` zone (or Spacefast's bot settings), allow verified AI and search crawlers (GPTBot, ClaudeBot, PerplexityBot, Googlebot, generic `curl`) on both hosts, or turn off "block AI bots" / challenge mode. One rule likely fixes both. This alone is what moves the score off L0.

## Step 2 — Discovery files (code)

- Add `public/llms.txt`: short description of the design system, links to each of the 9 pages, the licenses page, and the GitHub repo.
- Optionally `public/llms-full.txt` with a text summary of components, tokens, and delivery modes.
- Add `/llms.txt` to `robots.txt` comments and make sure `_redirects` does not rewrite real files (static files win already; verify after build).
- Update `sitemap.xml` / robots `Sitemap:` line to the real domain `https://design.1.mikedemo.dev` (currently relative/preview URL — will verify and fix).

## Step 3 — Metadata and structured data (code)

- Every route's `head()`: confirm `og:type`, `twitter:card`, canonical link on the real domain.
- Add JSON-LD: `WebSite` + `Organization` on the home page, `WebPage`/`TechArticle` on content pages, `SoftwareSourceCode` referencing the repo and MIT/CC BY licenses.
- Record the rule in `.lovable/system.md` (search readiness section) so consumers inherit it.

## Step 4 — Semantic HTML check (code)

Confirm the prerendered HTML has one `<main>`, a `<nav>` for the site menu, `<header>`, and the `<footer>` from SiteFooter; add missing landmarks in the showcase shell.

## Out of scope (by design)

Levels 3–5 (REST API, OpenAPI, MCP, webhooks, auth, streaming) require a server. Spacefast hosts static files only, so these stay failing unless you later move to a host that runs server code. Realistic target: **L1–L2**.

## Verification

- Build, then check `dist/client` has `llms.txt`, JSON-LD in each page's HTML, and landmarks.
- After you deploy and change the firewall rule, I re-run `curl -A GPTBot` against both hosts and expect 200 for `/`, `/robots.txt`, `/sitemap.xml`, `/llms.txt`.

## Rollback

All code changes are additive static files and head tags; reverting the commit restores the current site.
