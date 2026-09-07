import { site } from "@/data/site";
import type { PageContent } from "@/types/content";

export const homePage: PageContent = {
  id: "home",
  translationKey: "home",
  locale: "en-US",
  routeKind: "home",
  slug: "",
  url: "/",
  pageType: "home",
  presentation: { shell: "home" },
  h1: "Stream A Cheese Pull Roblox Hub - Codes, Updates, Studio Tips",
  seoTitle: "Stream A Cheese Pull Roblox Codes, Updates, and Studio Tips",
  metaDescription:
    "Stream A Cheese Pull Roblox is a tycoon Universe by Cheesy Situation. Find active codes, the beginner studio guide, and trusted sources.",
  summary:
    "A launch hub for Stream A Cheese Pull! on Roblox: active codes, the current Universe snapshot, the beginner studio setup, and the latest updates.",
  hero: {
    eyebrow: "Unofficial launch hub",
    subtitle: site.tagline,
    ctas: [
      { label: "Game overview", href: "/game" },
      { label: "Active codes", href: "/codes" },
      { label: "Beginner guide", href: "/guides/beginner" },
      { label: "Updates", href: "/updates" },
    ],
  },
  quickAnswer:
    "Stream A Cheese Pull Roblox is a brand-new tycoon Universe published by the verified Roblox group Cheesy Situation, with Universe id 10628907188 and root Place id 124293095895786. This hub gathers the active codes, the current Universe snapshot, the beginner studio setup, and the latest updates in one place so new players can start in minutes.",
  keyFacts: [
    { label: "Universe id", value: "10628907188" },
    { label: "Root Place id", value: "124293095895786" },
    { label: "Creator", value: "Cheesy Situation (Group id 1013100488, verified)" },
    { label: "Genre", value: "Simulation / Tycoon" },
    { label: "Max players per server", value: "6" },
    { label: "Created", value: "2026-08-04" },
    { label: "Last updated", value: "2026-09-06" },
    { label: "Active codes (2026-09-07)", value: "FirstCodeEver, SPEEDIE, Kitty" },
  ],
  modules: [
    {
      id: "stream-a-cheese-pull-status-snapshot",
      type: "prose",
      heading: "Stream A Cheese Pull Roblox status snapshot right now",
      body:
        "The Stream A Cheese Pull Roblox Universe is live and accepting players as of 2026-09-07. The Universe was created on 2026-08-04 and last updated on 2026-09-06, so it has been live for roughly one month and is still receiving patches. The official game page on Roblox still hosts the in-game Store code path, the like-and-group bonus, and the four-bullet developer description that frames the core loop. Live scale numbers come straight from the Roblox Games API for the same Universe id: about 15.3M visits, 399,786 favorites, 9,570 players in the lobby, six-player servers, and a Simulation / Tycoon genre tag.",
    },
    {
      id: "stream-a-cheese-pull-active-codes",
      type: "prose",
      heading: "Active codes and the rewards they unlock",
      body:
        "Three codes are circulating right now across the official description and the dated media snapshots, all confirmed on 2026-09-07. FirstCodeEver is pinned on the official Roblox game page description and unlocks one Blue Cheese Crate in the in-game Store. SPEEDIE shows up in every dated media article and grants one Fast Worker helper. Kitty appears on one aggregator and unlocks one Cat pet. The full active-code table, the Store redemption walkthrough, and the expired-code status statement live on the codes page.",
    },
    {
      id: "stream-a-cheese-pull-entry-points",
      type: "entity-grid",
      heading: "High-priority entry routes",
      items: [
        {
          title: "Game overview",
          summary: "Identity card, core loop, and Universe scale snapshot.",
          href: "/game",
        },
        {
          title: "Active codes & rewards",
          summary: "Every current code, its reward, and the in-game Store walkthrough.",
          href: "/codes",
        },
        {
          title: "Beginner studio guide",
          summary: "First-session checklist, the like-and-group bonus, and the four-step loop.",
          href: "/guides/beginner",
        },
        {
          title: "Updates & events",
          summary: "Confirmed patch history and dated event status.",
          href: "/updates",
        },
        {
          title: "Rebirth & mystery boxes",
          summary: "Fan-wiki progression vocabulary and the decision checklist.",
          href: "/guides/rebirth",
        },
        {
          title: "Studio expansion",
          summary: "Upgrade priority order and decoration strategy.",
          href: "/guides/studio-expansion",
        },
        {
          title: "Source safety",
          summary: "Trusted links, fan-wiki vocabulary, and the do-not-run list.",
          href: "/wiki-safety",
        },
      ],
    },
    {
      id: "stream-a-cheese-pull-trusted-sources",
      type: "callout",
      tone: "confirmed",
      title: "Trusted sources",
      body:
        "Treat the official Roblox game page, the Cheesy Situation group page, and the Roblox Games API as the only hard fact sources for current-game details. The dated media articles from Beebom, Dexerto, GachaPocket, Gameluster, and Roblox Den are reliable for the active code list, while the fan wiki at stream-a-cheese-pull.wiki supports progression vocabulary only. Any stream a cheese pull script autocomplete hit points to an exploit cluster and is not a content path.",
    },
  ],
  faqIds: [
    "is-still-online",
    "who-made-stream-a-cheese-pull",
    "how-many-codes-active",
    "where-to-redeem-codes",
  ],
  relatedPageIds: [
    "streamacheesepull-game-overview",
    "streamacheesepull-codes-rewards",
    "streamacheesepull-beginner-guide",
    "streamacheesepull-rebirth-mystery-boxes",
    "streamacheesepull-studio-expansion",
    "streamacheesepull-updates-events",
    "streamacheesepull-fan-wiki-safety",
  ],
  schemaTypes: ["WebSite", "CollectionPage", "FAQPage"],
  sourceStatus: "official",
  lastReviewed: "2026-09-07",
};
