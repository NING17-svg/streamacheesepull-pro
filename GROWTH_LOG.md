# GROWTH_LOG.md

## How To Use This File

Record every growth-relevant edit here. Keep entries short, factual, and useful for future agents.

## Change Log

### 2026-09-09 - First-session cash and studio-expansion detail (content-updater)

- Task: Add a dedicated first-session cash strategy and desk priority page at /guides/first-session-cash, and extend /guides/studio-expansion with a worker-placement section, a room-by-room priority order, a BACKROOMS decor integration paragraph, and a brief Update 5 cash-buffer note with an internal link to /updates.
- Files changed: src/data/pages/fixed-pages.ts (new first-session-cash entry, four new modules on studio-expansion, updated CTAs/relatedPageIds on beginner and codes pages); src/data/faq.ts (nine new FAQ items); src/data/navigation.ts (new primary and footer entries for first-session-cash and studio-expansion); CONTENT_INDEX.md (full inventory refresh, new content clusters and internal linking map); GROWTH_LOG.md (this entry).
- URLs affected: added /guides/first-session-cash; existing /guides/studio-expansion, /guides/beginner, /codes, /updates, and home navigation updated with new related links.
- SEO/GEO changed: New H1 and metadata for /guides/first-session-cash; studio-expansion H1 unchanged but expanded prose and module surface (worker placement, room-by-room priority, BACKROOMS decor, Update 5 cash buffer).
- Source tier: New desk priority order is sourced from the fan-built wiki /guides/how-to-earn-cash-fast; worker placement, room-by-room priority, BACKROOMS decor, and Update 5 cash-buffer content are sourced from the fan-built wiki /progression/studio-expansion, /updates/secret-update-backrooms, and /updates/update-5-new-zone. Developer-confirmed facts (FirstCodeEver code, Blue Cheese Crate, like-and-join bonus, in-game Store path) are unchanged.
- Verification: npm run verify (typecheck + lint + template/content/SEO validators + build) must remain green.

### 2026-09-08 - Adsterra six-unit integration (adsterra-integrator)

- Task: Replace the six empty Adsterra placeholders (native-banner, banner-728x90, banner-468x60, banner-320x50, banner-160x600, smartlink) in src/data/ads.ts with the real placement codes collected from the Adsterra publishers dashboard for streamacheesepull.pro.
- Files changed: src/data/ads.ts only.
- URLs affected: none (no template, routing or component changes; ad slots remain fixed).
- SEO/GEO changed: none.
- Verification: site verify (typecheck + lint + template/content/SEO/route-manifest validators) must remain green; no live ad requests or layout changes are validated by this role.
- Follow-up: none; registry writeback to status=enabled will be performed by the adsterra-integrator role after this commit lands.

### 2026-08-12 - Static discovery and review freshness baseline added

- Task: Add locale-aware static search, automatic recent updates, visible review dates, and browser metadata/security defaults to the shared template.
- Files changed: Header/search components, content helpers, locale UI labels, homepage/page hero rendering, manifest/favicon metadata, Next.js security headers, and deterministic validators.
- URLs affected: No existing URLs changed; search results use the final route manifest URLs and recent updates use existing indexable pages.
- SEO/GEO changed: Last reviewed dates are public on every page; the homepage surfaces recent non-trust content by deterministic `lastReviewed` order; locale search never falls back across locales. Search indexes are emitted as per-locale force-static resources and lazy-loaded so full-site index data is not repeated in every page payload.
- Browser baseline: Neutral SVG favicon, web manifest, `X-Content-Type-Options`, `Referrer-Policy`, and `X-Frame-Options` are wired without adding a restrictive CSP.
- Verification: Typecheck, lint, template/content/SEO validation, and full verify are required before launch.

### 2026-07-21 - V3 locale and entity routing added

- Task: Upgrade the shared template for configuration-driven locale routes and programmatic entity pages.
- Files changed: Site/page/entity types, locale and entity generators, dynamic routes, metadata, sitemap, validators, and template documentation.
- URLs affected: Existing primary-locale URLs retain their paths; additional locale and entity routes are generated from configuration.
- SEO changed: Canonical, hreflang, x-default, Open Graph locale, multilingual sitemap alternates, and final route-manifest validation are now data-driven.
- Entity changed: Generic entity Hubs/details now render source links, relationships, and optional registered local images from one base fact package.
- Verification: Typecheck, template validation, content validation, rendered SEO validation, route-manifest generation, and multilingual entity fixtures.

### YYYY-MM-DD - Template baseline initialized

- Task: Create the initial generated guide-site baseline.
- Files changed: Template project files.
- URLs affected: `/`, `/wiki`, `/guides`, `/release-date`, `/faq`, `/about`, `/contact`, `/privacy-policy`, `/terms`.
- Content changed: Neutral placeholder content only.
- Ad baseline: Fixed Adsterra-ready modules are present and disabled; no ad markup or request is emitted.
- Follow-up: Replace this entry with a real launch/configuration entry when the one-click builder fills the site for a specific game.

## 2026-10-01 — shared Worker deployment maintenance

User-authorized routing migration to `guide-pool-05` / Worker `streamacheesepull-pro`; source push is connected to the shared Cloudflare Git build via the repository deploy hook. Content and public URL identities are unchanged. Completion is tracked by the central group migration report and live source/version verification.
