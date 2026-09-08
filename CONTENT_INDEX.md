# CONTENT_INDEX.md

## How To Use This File

Use this index to find the current role of each URL before editing. Update it whenever URLs, page roles, metadata, CTAs, schema, or internal-link responsibilities change.

## Page Inventory

The rows below are the primary-locale baseline. Localized versions keep the same
`translationKey`, use their configured locale prefix, and must appear in canonical,
hreflang, sitemap, and route-manifest validation.

| URL | File/Route | Type | Primary Keyword | Search Intent | Primary CTA | Internal-Link Role | Notes |
|---|---|---|---|---|---|---|---|
| `/` | `src/data/pages/home.ts` | Landing | Template Game guide | Find the best entry point | Open Wiki / Browse Guides | Hub | Replace with the configured game's main hub intent. |
| `/game` | `src/data/pages/fixed-pages.ts#streamacheesepull-game-overview` | Explanation | Stream A Cheese Pull Roblox identity | Confirm creator, Universe id, core loop | Codes / Beginner / Updates | Hub | Official Roblox Universe 10628907188, creator Cheesy Situation. |
| `/codes` | `src/data/pages/fixed-pages.ts#streamacheesepull-codes-rewards` | Status | Stream A Cheese Pull codes | Redeem active codes in the in-game Store | Game / Beginner / First-session cash / Updates | Answer hub | 3 active codes confirmed 2026-09-07 (FirstCodeEver, SPEEDIE, Kitty). |
| `/guides/beginner` | `src/data/pages/fixed-pages.ts#streamacheesepull-beginner-guide` | Guide | Stream A Cheese Pull how to play | First-session walkthrough | First-session cash / Codes / Rebirth / Source safety | Guide | Tutorial, code, like-and-group bonus, four-step loop. |
| `/guides/first-session-cash` | `src/data/pages/fixed-pages.ts#streamacheesepull-first-session-cash` | Guide | Stream A Cheese Pull first-session cash | Earn enough cash in the first session for the next desk tier | Codes / Beginner / Studio expansion | Guide | Desk priority order (FirstCodeEver Crate -> 2nd/3rd desk -> first helper). Source: fan-built wiki /guides/how-to-earn-cash-fast. |
| `/guides/rebirth` | `src/data/pages/fixed-pages.ts#streamacheesepull-rebirth-mystery-boxes` | Guide | Stream A Cheese Pull rebirth | Decide whether to reset the studio | Beginner / Studio expansion / Source safety | Guide | Community vocabulary only, not developer-confirmed. |
| `/guides/studio-expansion` | `src/data/pages/fixed-pages.ts#streamacheesepull-studio-expansion` | Guide | Stream A Cheese Pull studio expansion | Plan the upgrade path, worker placement, BACKROOMS decor | Beginner / Rebirth / Updates / Codes / First-session cash | Guide | Worker placement, room-by-room priority, BACKROOMS decor, Update 5 cash buffer. |
| `/updates` | `src/data/pages/fixed-pages.ts#streamacheesepull-updates-events` | Status | Stream A Cheese Pull updates | Track patches and events | Game / Codes / Beginner | Status | Update 5 and BACKROOMS treated as unconfirmed community references. |
| `/wiki-safety` | `src/data/pages/fixed-pages.ts#streamacheesepull-fan-wiki-safety` | Reference | Stream A Cheese Pull source safety | Source tier ladder and safe links | Game / Codes / Updates | Trust | Three-tier source ladder; no script/executor links. |
| `/about` | `src/data/pages/site-pages.ts` | Utility | about Template Game Guide | Trust and editorial policy | Contact | Trust | Explain unofficial status and sourcing rules. |
| `/contact` | `src/data/pages/site-pages.ts` | Utility | contact Template Game Guide | Corrections and source updates | About | Trust | Contact channel pending. |
| `/privacy-policy` | `src/data/pages/site-pages.ts` | Legal | privacy policy | Privacy and analytics | Terms | Trust | GA4 only when configured. |
| `/terms` | `src/data/pages/site-pages.ts` | Legal | terms of use | Site use expectations | Privacy Policy | Trust | Keep unofficial disclaimer clear. |

## Generated Route Families

- Fixed and tool pages: authored in `src/data/pages/*.ts` with explicit locale and final URL.
- Entity Hubs and details: generated from `src/data/entities.ts` and the generic renderer in `src/lib/entities.ts`.
- Final route inventory: `npm run routes:manifest`.
- Secondary-locale routes use the prefix configured in `src/data/site.ts`; the primary locale remains on root paths.

## Content Clusters

- Launch facts: `/game`, `/codes`, `/updates`
- First-session progression: `/guides/beginner`, `/guides/first-session-cash`, `/guides/studio-expansion`
- Community vocabulary: `/guides/rebirth`, `/wiki-safety`
- Evergreen hub and trust: `/`, `/about`, `/contact`, `/privacy-policy`, `/terms`

## Internal Linking Map

- Homepage should link to the most current high-demand pages.
- Game overview should link to /codes, /guides/beginner, /updates.
- Codes should link to /game, /guides/beginner, /guides/first-session-cash, /updates.
- Beginner guide should link to /guides/first-session-cash, /codes, /guides/rebirth, /wiki-safety.
- First-session cash should link to /codes, /guides/beginner, /guides/studio-expansion, /game.
- Studio expansion should link to /guides/beginner, /guides/rebirth, /updates, /codes, /guides/first-session-cash.
- FAQ should include all current high-demand answer pages.

## Open Questions

- Replace this section with game-specific unknowns during content configuration.
