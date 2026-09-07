import type { PageContent, PagePresentation } from "@/types/content";

const contentShell = (variant: "reading-right-rail" = "reading-right-rail"): PagePresentation => ({
  shell: "content",
  variant,
});

const hubShell = (variant: "card-grid" = "card-grid"): PagePresentation => ({
  shell: "hub",
  variant,
});

export const fixedPages: PageContent[] = [
  // /game/ — explanation page (Stream A Cheese Pull Roblox identity and core loop)
  {
    id: "streamacheesepull-game-overview",
    translationKey: "streamacheesepull-game-overview",
    locale: "en-US",
    routeKind: "fixed",
    slug: "game",
    url: "/game",
    pageType: "explanation",
    presentation: contentShell(),
    h1: "Stream A Cheese Pull Roblox Game - Identity and Core Loop",
    seoTitle: "Stream A Cheese Pull Roblox Game: Identity, Creator, Core Loop",
    metaDescription:
      "What is Stream A Cheese Pull Roblox? It is a tycoon Universe from Cheesy Situation. Confirm creator, age, scale, and core loop from the official Roblox game page.",
    summary:
      "An identity overview for Stream A Cheese Pull! on Roblox: Universe ids, creator, live Universe scale snapshot, and the four-step core loop.",
    hero: {
      eyebrow: "Identity & status",
      subtitle:
        "Universe 10628907188, Root Place 124293095895786, Creator Cheesy Situation (verified Group, id 1013100488).",
      ctas: [
        { label: "Active codes", href: "/codes" },
        { label: "Beginner guide", href: "/guides/beginner" },
        { label: "Updates", href: "/updates" },
      ],
    },
    quickAnswer:
      "Stream A Cheese Pull! on Roblox is the tycoon Universe published by the verified group Cheesy Situation under Universe id 10628907188 and Root Place id 124293095895786, live on Roblox since 2026-08-04 and last updated on 2026-09-06. The official four-step core loop is: stream a cheese pull, expand your business, decorate your setup, and become famous.",
    keyFacts: [
      { label: "Universe id", value: "10628907188" },
      { label: "Root Place id", value: "124293095895786" },
      { label: "Creator", value: "Cheesy Situation (Group id 1013100488, verified)" },
      { label: "Created", value: "2026-08-04" },
      { label: "Updated", value: "2026-09-06" },
      { label: "Genre", value: "Simulation / Tycoon" },
      { label: "Max players per server", value: "6" },
      { label: "Visits (2026-09-07 snapshot)", value: "15,342,968" },
      { label: "Favourites (2026-09-07 snapshot)", value: "399,786" },
      { label: "Playing (2026-09-07 snapshot)", value: "9,570" },
    ],
    modules: [
      {
        id: "identity-card",
        type: "prose",
        heading: "Identity card for Stream A Cheese Pull!",
        body:
          "The Roblox Universe is officially titled Stream A Cheese Pull! (Universe id 10628907188, root Place id 124293095895786) and is published by the verified Roblox group Cheesy Situation (group id 1013100488). The developer description on the official Roblox game page reads, verbatim: \"Stream cheese pulls. Expand your business. Decorate your setup. Become famous,\" and it invites players to use code FirstCodeEver in the Store for a free Blue Cheese Crate. The Universe was created on 2026-08-04 and last updated on 2026-09-06, making it a brand-new release with no prior version, remaster, or legacy title.",
      },
      {
        id: "core-loop",
        type: "prose",
        heading: "Stream A Cheese Pull Roblox core loop at a glance",
        body:
          "The four-step core loop on Stream A Cheese Pull! Roblox matches the official description bullet by bullet. Players start a streaming studio, run cheese pulls to earn cash, expand the business with upgraded equipment and decoration slots, and chase the late-game fame tier once the studio is fully built out. The Roblox Games API confirms the genre tag as Simulation / Tycoon, and the server cap is six players per place, which is why the in-game Store and the group-and-like bonus are the main co-op touchpoints. The in-game Store is the only redemption surface for codes; no external site accepts Stream A Cheese Pull! codes.",
      },
      {
        id: "universe-scale-snapshot",
        type: "data-table",
        heading: "Universe scale snapshot from the Roblox API",
        columns: [
          { key: "field", label: "Field" },
          { key: "value", label: "2026-09-07 value" },
        ],
        rows: [
          { field: "Universe id", value: "10628907188" },
          { field: "Root Place id", value: "124293095895786" },
          { field: "Created", value: "2026-08-04" },
          { field: "Updated", value: "2026-09-06" },
          { field: "Visits", value: "15,342,968" },
          { field: "Favourites", value: "399,786" },
          { field: "Playing (live lobby)", value: "9,570" },
          { field: "Max players per server", value: "6" },
          { field: "Genre", value: "Simulation / Tycoon" },
        ],
      },
      {
        id: "creator-group",
        type: "prose",
        heading: "Creator, group, and developer confirmation",
        body:
          "Cheesy Situation is the only publisher named on the official Stream A Cheese Pull! Roblox game page and is also the verified group behind Universe 10628907188. The group page on Roblox (id 1013100488) is the creator-of-record entry for the Universe and the canonical place where Roblox lists official group members and benefits. The in-game Store, the like-and-group reward, and the Roblox notifications toggle are all wired through this group identity, so any change to the developer or publisher has to be sourced back to the same Roblox pages.",
      },
      {
        id: "next-steps",
        type: "entity-grid",
        heading: "Where to go next on Stream A Cheese Pull!",
        items: [
          {
            title: "Active codes & rewards",
            summary: "Every currently active code, its reward, and the in-game Store walkthrough.",
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
            title: "Source safety",
            summary: "Trusted link ladder and the do-not-run list.",
            href: "/wiki-safety",
          },
        ],
      },
    ],
    faqIds: [
      "what-is-stream-a-cheese-pull-roblox",
      "who-made-stream-a-cheese-pull",
      "how-old-is-stream-a-cheese-pull",
      "how-many-players-per-server",
      "where-active-codes",
    ],
    relatedPageIds: [
      "streamacheesepull-codes-rewards",
      "streamacheesepull-beginner-guide",
      "streamacheesepull-updates-events",
      "streamacheesepull-fan-wiki-safety",
    ],
    schemaTypes: ["Article", "BreadcrumbList"],
    sourceStatus: "official",
    lastReviewed: "2026-09-07",
  },

  // /codes/ — status page (active codes, rewards, redemption)
  {
    id: "streamacheesepull-codes-rewards",
    translationKey: "streamacheesepull-codes-rewards",
    locale: "en-US",
    routeKind: "fixed",
    slug: "codes",
    url: "/codes",
    pageType: "status",
    presentation: hubShell(),
    h1: "Stream A Cheese Pull Codes and Rewards (September 2026)",
    seoTitle: "Stream A Cheese Pull Codes (September 2026) - Active Rewards",
    metaDescription:
      "Stream A Cheese Pull Codes for September 2026: redeem FirstCodeEver, SPEEDIE, and Kitty in the in-game Store. Full redemption walkthrough.",
    summary:
      "Every active Stream A Cheese Pull! code, the reward it grants, the source tier, and the in-game Store redemption walkthrough.",
    hero: {
      eyebrow: "Codes & rewards",
      subtitle:
        "Three active codes confirmed on 2026-09-07. Redeem them in the in-game Store.",
      ctas: [
        { label: "Game overview", href: "/game" },
        { label: "Beginner guide", href: "/guides/beginner" },
        { label: "Updates", href: "/updates" },
      ],
    },
    quickAnswer:
      "Three Stream A Cheese Pull codes are currently active and were last confirmed across the official description and the dated media snapshots on 2026-09-07. FirstCodeEver is pinned on the official Roblox game page and unlocks one Blue Cheese Crate in the in-game Store. SPEEDIE grants one Fast Worker helper, and Kitty unlocks one Cat pet. All three are redeemed in the in-game Store, never on any external site.",
    keyFacts: [
      { label: "Codes active (2026-09-07)", value: "3" },
      { label: "Developer-confirmed code", value: "FirstCodeEver (official Roblox game page)" },
      { label: "Media-confirmed codes", value: "SPEEDIE, Kitty" },
      { label: "Redemption surface", value: "In-game Store only" },
      { label: "External redemption site", value: "None - any external site is unaffiliated" },
    ],
    modules: [
      {
        id: "active-codes-table",
        type: "data-table",
        heading: "Active codes table",
        columns: [
          { key: "code", label: "Code" },
          { key: "reward", label: "Reward" },
          { key: "source", label: "Source" },
          { key: "lastConfirmed", label: "Last confirmed" },
        ],
        rows: [
          {
            code: "FirstCodeEver",
            reward: "1 Blue Cheese Crate",
            source: "Official Roblox game page description",
            lastConfirmed: "2026-09-07",
          },
          {
            code: "SPEEDIE",
            reward: "1 Fast Worker",
            source: "Beebom, Dexerto, GachaPocket, Gameluster",
            lastConfirmed: "2026-09-07",
          },
          {
            code: "Kitty",
            reward: "1 Cat pet",
            source: "Roblox Den",
            lastConfirmed: "2026-09-07",
          },
        ],
      },
      {
        id: "redemption-walkthrough",
        type: "steps",
        heading: "How to redeem codes in the in-game Store",
        items: [
          { title: "Launch the game from your Roblox library", body: "Open Roblox and start Stream A Cheese Pull! from your library. Wait for your studio to load." },
          { title: "Open the in-game Store", body: "Find the Store icon on the in-game HUD and open it." },
          { title: "Locate the Enter Code field", body: "Inside the Store, find the text field labelled Enter Code or its equivalent redemption box." },
          { title: "Paste the code exactly", body: "Type or paste the code exactly as it appears in the table above. Codes are case-sensitive." },
          { title: "Confirm and claim", body: "Confirm the redemption. The reward is delivered to your in-game inventory immediately on success." },
        ],
      },
      {
        id: "expired-codes",
        type: "callout",
        tone: "caution",
        title: "Expired and legacy codes",
        body:
          "No expired codes have been listed by the developer on the official Stream A Cheese Pull! Roblox game page or the Cheesy Situation group page as of 2026-09-07. Because the Universe was only created on 2026-08-04, the historical code window is short and the developer has not published a previously active list. The fan-built wiki tracker at stream-a-cheese-pull.wiki/codes does track a small number of community-flagged entries, but that list is not developer-confirmed and is used here only as community context.",
      },
      {
        id: "source-tiers",
        type: "prose",
        heading: "Where the code list comes from",
        body:
          "Stream A Cheese Pull codes come from three source tiers, and each is treated differently on this page. The official Roblox game page is the only source that supports hard current-game codes and is the canonical home for FirstCodeEver and the in-game Store path. The dated media articles (Beebom, Dexerto, GachaPocket, Gameluster, Roblox Den) are reliable for the rest of the active code list and are explicitly time-stamped to the 2026-09-07 snapshot. The fan-built wiki is community-maintained and is cited only when a code is also present in an official or media snapshot, so no third-party tracker is treated as authoritative on its own.",
      },
    ],
    faqIds: [
      "how-many-codes-active",
      "where-to-redeem-codes",
      "firstcodeever-reward",
      "do-codes-expire",
    ],
    relatedPageIds: [
      "streamacheesepull-game-overview",
      "streamacheesepull-updates-events",
      "streamacheesepull-fan-wiki-safety",
      "streamacheesepull-beginner-guide",
    ],
    schemaTypes: ["Article", "BreadcrumbList", "FAQPage"],
    sourceStatus: "official",
    lastReviewed: "2026-09-07",
  },

  // /guides/beginner/ — beginner guide
  {
    id: "streamacheesepull-beginner-guide",
    translationKey: "streamacheesepull-beginner-guide",
    locale: "en-US",
    routeKind: "fixed",
    slug: "guides/beginner",
    url: "/guides/beginner",
    pageType: "guide",
    presentation: contentShell(),
    h1: "Stream A Cheese Pull How To Play: A Beginner Walkthrough",
    seoTitle: "Stream A Cheese Pull How To Play: Beginner Guide",
    metaDescription:
      "Learn Stream A Cheese Pull how to play from your first session. This beginner walkthrough covers the tutorial, code redemption, studio setup, and the core loop.",
    summary:
      "A first-session walkthrough for Stream A Cheese Pull!: tutorial, active code redemption, like-and-group bonus, and the four-step core loop.",
    hero: {
      eyebrow: "Beginner guide",
      subtitle:
        "Tutorial, active code, like-and-group bonus, and the four-step core loop.",
      ctas: [
        { label: "Active codes", href: "/codes" },
        { label: "Rebirth & mystery boxes", href: "/guides/rebirth" },
        { label: "Source safety", href: "/wiki-safety" },
      ],
    },
    quickAnswer:
      "Stream A Cheese Pull how to play starts with the in-game tutorial and the active FirstCodeEver code. Redeem the code in the in-game Store, finish the Roblox tutorial, and like the game plus join the Cheesy Situation group to unlock the bonus rewards. From there, follow the four-step core loop (stream a cheese pull, expand the business, decorate the setup, and grow your fame) until you reach your first rebirth.",
    keyFacts: [
      { label: "Game", value: "Stream A Cheese Pull! (Roblox)" },
      { label: "Genre", value: "Simulation / Tycoon" },
      { label: "Max players per server", value: "6" },
      { label: "Active code on launch", value: "FirstCodeEver (Blue Cheese Crate)" },
      { label: "Bonus path", value: "Like the game + join Cheesy Situation group" },
    ],
    modules: [
      {
        id: "first-session",
        type: "steps",
        heading: "First-session checklist",
        items: [
          { title: "Complete the in-game tutorial", body: "When you join a server for the first time, the game walks you through a short tutorial that introduces your stream corner, your worker, and your first cash counter. Stay inside the tutorial area until the prompt releases you.", doneCondition: "Tutorial prompt releases you" },
          { title: "Redeem FirstCodeEver in the in-game Store", body: "Open the Store, paste FirstCodeEver into the redemption box, and the Blue Cheese Crate lands in your inventory immediately.", doneCondition: "Blue Cheese Crate in inventory" },
          { title: "Like the game on Roblox", body: "Hit the heart icon on the official game page description.", doneCondition: "Heart icon active" },
          { title: "Join the Cheesy Situation group", body: "Join the verified group (id 1013100488) from the game page description.", doneCondition: "Group membership active" },
          { title: "Run the four-step core loop", body: "Use the bonus rewards and the cash engine to stream a cheese pull, expand the business, decorate the setup, and grow fame.", doneCondition: "Studio hits the expansion tier" },
        ],
      },
      {
        id: "core-loop",
        type: "prose",
        heading: "Studio basics: the four-step core loop",
        body:
          "Once the tutorial, code, and bonuses are in place, the studio runs on a four-step loop that the official description lists verbatim. The stream phase is the cash engine: stand in the stream corner, run the prompt, and the cheese pull starts producing cash on a short timer. The expand phase converts cash into throughput: the earliest expansion options show up in the studio menu once you have enough cash on hand, and you should buy the cheapest upgrade that unlocks a new cash-per-second tier before buying anything cosmetic. The decorate phase is where the like-plus-group bonus and the crate reward start to matter. The final phase is become famous, which the official description positions as the late-game target.",
      },
      {
        id: "rebirth-decision",
        type: "callout",
        tone: "caution",
        title: "First rebirth decision: when to restart and what carries over",
        body:
          "Once the four-step loop is humming, the next big question is whether to reset. The term rebirth is community vocabulary from the fan-built companion site stream-a-cheese-pull.wiki; the developer has not confirmed a rebirth mechanic on the official Roblox page, the Cheesy Situation group, or the public Discord as of 2026-09-07. Rebirth, as the fan wiki describes it, is a soft reset that grants a carried-over progression bonus in exchange for restarting the studio.",
      },
      {
        id: "safety-first",
        type: "callout",
        tone: "caution",
        title: "Safety first: avoid the script exploit cluster",
        body:
          "The autocomplete suggestion stream a cheese pull script is a noise cluster for third-party executors, key generators, and free Robux scams. The official page does not link to any script, executor, or external generator, and the Cheesy Situation group has not endorsed one as of 2026-09-07. Run only the official Roblox client. Anything that asks you to paste a script, log in elsewhere, or download an executor is unsafe for the account.",
      },
    ],
    faqIds: [
      "need-robux-to-progress",
      "where-redeem-codes-beginner",
      "session-length",
      "is-rebirth-official",
      "play-with-friends",
      "safe-for-younger-players",
    ],
    relatedPageIds: [
      "streamacheesepull-codes-rewards",
      "streamacheesepull-rebirth-mystery-boxes",
      "streamacheesepull-studio-expansion",
      "streamacheesepull-fan-wiki-safety",
      "streamacheesepull-game-overview",
    ],
    schemaTypes: ["Article", "BreadcrumbList", "FAQPage"],
    sourceStatus: "official",
    lastReviewed: "2026-09-07",
  },

  // /guides/rebirth/ — fan-wiki rebirth and mystery boxes page
  {
    id: "streamacheesepull-rebirth-mystery-boxes",
    translationKey: "streamacheesepull-rebirth-mystery-boxes",
    locale: "en-US",
    routeKind: "fixed",
    slug: "guides/rebirth",
    url: "/guides/rebirth",
    pageType: "guide",
    presentation: contentShell(),
    h1: "Stream A Cheese Pull Rebirth & Mystery Boxes, Explained",
    seoTitle: "Stream A Cheese Pull Rebirth & Mystery Boxes Guide",
    metaDescription:
      "Understand Stream A Cheese Pull rebirth, when to use mystery boxes, and what the fan-wiki progression terms actually mean. A grounded look at community vocabulary.",
    summary:
      "An honest read on Stream A Cheese Pull rebirth and mystery boxes: what the official sources confirm, what the fan-wiki adds, and a decision checklist.",
    hero: {
      eyebrow: "Rebirth & mystery boxes",
      subtitle:
        "Community vocabulary only. The official Roblox page does not mention a rebirth mechanic as of 2026-09-07.",
      ctas: [
        { label: "Beginner guide", href: "/guides/beginner" },
        { label: "Studio expansion", href: "/guides/studio-expansion" },
        { label: "Source safety", href: "/wiki-safety" },
      ],
    },
    quickAnswer:
      "Stream A Cheese Pull rebirth is community terminology from the fan wiki that describes restarting the studio with a carried-over progression bonus; the developer has not confirmed the mechanic on the official Roblox page or the Cheesy Situation group as of 2026-09-07. Mystery boxes are a related fan-wiki term for random reward drops. Treat both as community evidence before spending your saved cash.",
    keyFacts: [
      { label: "Rebirth status", value: "Fan-wiki vocabulary only (not on official sources as of 2026-09-07)" },
      { label: "Mystery box status", value: "Fan-wiki vocabulary only (not on official sources as of 2026-09-07)" },
      { label: "Confirmed economy signal", value: "FirstCodeEver code (Blue Cheese Crate)" },
      { label: "Source of vocabulary", value: "stream-a-cheese-pull.wiki (community, dated 2026-09-07)" },
    ],
    modules: [
      {
        id: "what-rebirth-is",
        type: "prose",
        heading: "What Stream A Cheese Pull rebirth actually does",
        body:
          "The phrase rebirth is the most-searched progression term in the Stream A Cheese Pull! fan footprint, but it does not appear on the official Roblox game page, the Cheesy Situation group, or the in-game Store copy as of 2026-09-07. This page separates what the developer has confirmed from what the fan-built companion wiki describes, so you can plan a run without betting on an unconfirmed mechanic. The Universe itself is real and current. As of 2026-09-07 the Roblox Games API multi-get reports 15,342,968 visits, 399,786 favourites, and roughly 9,570 concurrent players. The official description on the game page names the four-step core loop and lists one in-game code, FirstCodeEver, redeemable in the in-game Store. None of that copy uses the word rebirth.",
      },
      {
        id: "official-stays-quiet",
        type: "callout",
        tone: "unknown",
        title: "The official sources stay quiet on the mechanic",
        body:
          "The official Roblox game page lists creator, description, the in-game code, the like-plus-group bonus, and the in-game Store as the confirmed entry points. The Cheesy Situation group page lists the same code, group membership rewards, and notification prompts, but no rebirth mechanic. The Roblox Games API multi-get reports the studio scale (maxPlayers 6, genre Simulation / Tycoon, created 2026-08-04, updated 2026-09-06) but not a progression system. As of 2026-09-07 the only developer-confirmed economy signal is the FirstCodeEver code and its Blue Cheese Crate reward.",
      },
      {
        id: "fan-wiki-describes",
        type: "prose",
        heading: "How the fan wiki describes the reset and carry-over",
        body:
          "The fan-built companion wiki stream-a-cheese-pull.wiki uses the term rebirth to describe a soft reset that grants a carried-over progression bonus in exchange for restarting the studio. The wiki also links the term to mystery boxes and studio expansion as a single progression track. The wiki is dated 2026-09-07 and self-identifies as a community resource not affiliated with the developer, so the rebirth carry-over list should be read as a fan-reported starting point, not a developer promise.",
      },
      {
        id: "mystery-box",
        type: "prose",
        heading: "When a mystery box is worth using",
        body:
          "Mystery box is the second fan-wiki term that comes up in the Stream A Cheese Pull! community. The mechanic is described on the fan wiki but, like rebirth, is not on the official Roblox page as of 2026-09-07. The fan wiki describes mystery boxes as a random reward drop that can include cats, fast workers, themed crates, and other cosmetic items. The wiki is the only source that names a drop table. As of 2026-09-07 there is no developer-confirmed drop rate, so the safer read is to spend cash on confirmed studio upgrades and treat any box reward as a bonus, not a baseline.",
      },
      {
        id: "decision-checklist",
        type: "comparison",
        heading: "Rebirth decision checklist",
        options: [
          {
            name: "Trigger a rebirth",
            summary: "Best when the cash-per-second tier has plateaued and the next upgrade costs more than the projected fan-wiki boost is worth.",
            bestFor: "Players willing to trade saved cash for a fan-reported progression multiplier",
            badge: "Fan-wiki estimate",
          },
          {
            name: "Keep pushing cash",
            summary: "Best when the next studio upgrade is within reach and recoverable inside one play session.",
            bestFor: "Players who want to keep expanding the studio footprint without a reset",
            badge: "Confirmed path",
          },
          {
            name: "Expand the studio instead",
            summary: "Best when a confirmed expansion tier is cheaper than the next fan-wiki rebirth bonus. The studio expansion guide covers the upgrade priority order.",
            bestFor: "Players who want the official expand-your-business phase of the core loop",
            badge: "Confirmed path",
          },
        ],
      },
    ],
    faqIds: [
      "is-rebirth-confirmed",
      "what-carries-over-rebirth",
      "where-mystery-boxes-drop",
      "firstcodeever-related-to-rebirth",
      "should-reset-for-rebirth-bonus",
      "are-mystery-box-calculators-safe",
    ],
    relatedPageIds: [
      "streamacheesepull-beginner-guide",
      "streamacheesepull-studio-expansion",
      "streamacheesepull-fan-wiki-safety",
      "streamacheesepull-codes-rewards",
    ],
    schemaTypes: ["Article", "BreadcrumbList", "FAQPage"],
    sourceStatus: "official",
    lastReviewed: "2026-09-07",
  },

  // /guides/studio-expansion/ — studio expansion page
  {
    id: "streamacheesepull-studio-expansion",
    translationKey: "streamacheesepull-studio-expansion",
    locale: "en-US",
    routeKind: "fixed",
    slug: "guides/studio-expansion",
    url: "/guides/studio-expansion",
    pageType: "guide",
    presentation: contentShell(),
    h1: "Stream A Cheese Pull Studio Expansion: From First Slot To Fame",
    seoTitle: "Stream A Cheese Pull Studio Expansion: Upgrade Guide",
    metaDescription:
      "Plan your Stream A Cheese Pull studio expansion from the first decoration slot to higher payouts, with upgrade priorities, decoration strategy, and next-patch checks.",
    summary:
      "A grounded look at Stream A Cheese Pull studio expansion: the four-step core loop, upgrade priority order, decoration strategy, and how to verify the next patch.",
    hero: {
      eyebrow: "Studio expansion",
      subtitle:
        "Like-and-group bonus first, then worker and pet slots, then the cheapest footprint upgrade.",
      ctas: [
        { label: "Beginner guide", href: "/guides/beginner" },
        { label: "Rebirth & mystery boxes", href: "/guides/rebirth" },
        { label: "Updates", href: "/updates" },
      ],
    },
    quickAnswer:
      "Stream A Cheese Pull studio expansion follows the official four-step core loop: stream a cheese pull, expand the business, decorate the setup, and grow your fame. The official like-plus-group bonus funds your early upgrades, while later decoration slots and a larger studio come from spending the cash you earn inside the game. Check the most recent update before planning a late-game build, since the developer can add new tiers at any time.",
    keyFacts: [
      { label: "Confirmed free path", value: "Like + join Cheesy Situation group" },
      { label: "First cash sink", value: "Cheapest cash-per-second upgrade" },
      { label: "Late-game variable", value: "Update-driven new tiers (verify before committing)" },
      { label: "Community vocabulary", value: "Cheese wheel, cheese crates, BACKROOMS event (fan-wiki only)" },
    ],
    modules: [
      {
        id: "studio-layout",
        type: "prose",
        heading: "Studio layout overview",
        body:
          "The studio is a six-player Simulation / Tycoon with a visible layout you can read while you play. The official description frames the layout in the same four-bullet order you see on the studio floor: stream corner, expansion pads, decoration slots, fame board. The fan-built companion wiki adds dated vocabulary for some of the named objects (cheese wheel, cheese crates, the BACKROOMS event) that you may see on the floor. Treat that vocabulary as community terminology dated 2026-09-07, not developer-confirmed object names.",
      },
      {
        id: "stream-corner",
        type: "prose",
        heading: "Stream corner and the first camera",
        body:
          "The stream corner is the cash engine. It is the first object the in-game tutorial places, and it is the only object that produces cash without an upgrade. Everything else on the studio floor is downstream of this corner, so do not relocate it during a build. The fan wiki references a cheese wheel in this area, but the term is not on the official Roblox page as of 2026-09-07; treat it as a community label.",
      },
      {
        id: "decoration-slots",
        type: "prose",
        heading: "Decoration slots and unlock thresholds",
        body:
          "Decoration slots open up as you buy the cheapest studio expansion. Each slot is cosmetic, but the slots also act as visual milestones. The official description lists decorate your setup as a real phase of the loop, so the slots are a confirmed part of the studio layout. The fan wiki references cheese crates in this layer; the term is community vocabulary, not a developer object name, as of 2026-09-07.",
      },
      {
        id: "upgrade-priority",
        type: "steps",
        heading: "Upgrade priority checklist",
        items: [
          { title: "Worker and pet slots first", body: "Use the like-plus-group bonus to fill the worker and pet slots, not on decoration. The active code list (SPEEDIE for a Fast Worker, Kitty for a Cat pet) lines up with these slots." },
          { title: "Cheapest cash-per-second upgrade next", body: "Buy the cheapest upgrade that unlocks a new cash-per-second tier before anything cosmetic." },
          { title: "Mid-game: bigger studio footprint", body: "Once the worker and pet slots are full, spend on a bigger studio footprint. The official expand-your-business phase of the loop funds the cheapest confirmed upgrade." },
          { title: "Late-game: verify the next patch first", body: "Before you commit cash to a long build, re-check the updates page. The fan wiki can summarise but the developer-confirmed patch copy lives there." },
        ],
      },
      {
        id: "decoration-strategy",
        type: "callout",
        tone: "tip",
        title: "Decoration strategy and dated community vocabulary",
        body:
          "Decoration is the part of the studio where community vocabulary is most active. The fan wiki uses cheese wheel and cheese crates to label objects on the studio floor, and it references a BACKROOMS event as a late-game addition. None of these terms are on the official Roblox page as of 2026-09-07. Use the wiki terms as conversation shorthand with other players, but verify the actual object names against the active code list and the in-game Store copy. The only developer-confirmed object name in the same visual layer is the Blue Cheese Crate that FirstCodeEver grants.",
      },
      {
        id: "verify-next-patch",
        type: "prose",
        heading: "Verify the next patch before you commit",
        body:
          "Studio expansion plans have a short shelf life when a Universe is brand-new. The Roblox Games API multi-get records the latest update on 2026-09-06, which means the developer is actively shipping. The updates page is the only place to read the developer-confirmed copy. If a new upgrade tier has been added since the launch snapshot, the updates page will say so first.",
      },
    ],
    faqIds: [
      "fastest-studio-expansion-path",
      "where-to-spend-cash-first",
      "are-cheese-wheels-real",
      "is-backrooms-event-confirmed",
      "how-to-know-new-tier",
      "does-expansion-cost-robux",
    ],
    relatedPageIds: [
      "streamacheesepull-beginner-guide",
      "streamacheesepull-rebirth-mystery-boxes",
      "streamacheesepull-updates-events",
      "streamacheesepull-codes-rewards",
    ],
    schemaTypes: ["Article", "BreadcrumbList", "FAQPage"],
    sourceStatus: "official",
    lastReviewed: "2026-09-07",
  },

  // /updates/ — updates and events page
  {
    id: "streamacheesepull-updates-events",
    translationKey: "streamacheesepull-updates-events",
    locale: "en-US",
    routeKind: "fixed",
    slug: "updates",
    url: "/updates",
    pageType: "status",
    presentation: contentShell(),
    h1: "Stream A Cheese Pull Update History - Patch Notes and Events",
    seoTitle: "Stream A Cheese Pull Update Tracker - Patches and Events",
    metaDescription:
      "Stream A Cheese Pull Update Tracker for September 2026: official patch notes, Cheesy Situation group posts, and dated event status from trusted media sources.",
    summary:
      "Confirmed Stream A Cheese Pull update history and a dated event status statement. Update 5 and the BACKROOMS event are unconfirmed community references as of 2026-09-07.",
    hero: {
      eyebrow: "Updates & events",
      subtitle:
        "Confirmed patch history from the official Roblox game page, the Cheesy Situation group, and the Roblox Games API.",
      ctas: [
        { label: "Game overview", href: "/game" },
        { label: "Active codes", href: "/codes" },
        { label: "Beginner guide", href: "/guides/beginner" },
      ],
    },
    quickAnswer:
      "The latest confirmed Stream A Cheese Pull update on the official Roblox game page is dated 2026-09-06, the same date the developer refreshed the Universe on the Roblox Games API. No version label or public patch notes have been published by Cheesy Situation on the official game page or group page. Update 5 and a BACKROOMS event appear on the fan-built wiki but have not been confirmed by the developer on any official channel.",
    keyFacts: [
      { label: "Universe created", value: "2026-08-04 (Roblox Games API)" },
      { label: "Last confirmed update", value: "2026-09-06 (Roblox Games API + official description refresh)" },
      { label: "Update 5", value: "Fan-wiki reference only; not confirmed by Cheesy Situation as of 2026-09-07" },
      { label: "BACKROOMS event", value: "Fan-wiki reference only; not confirmed by Cheesy Situation as of 2026-09-07" },
    ],
    modules: [
      {
        id: "confirmed-history",
        type: "data-table",
        heading: "Confirmed update history",
        columns: [
          { key: "date", label: "Date" },
          { key: "channel", label: "Channel" },
          { key: "headline", label: "Headline change" },
          { key: "tier", label: "Source tier" },
        ],
        rows: [
          {
            date: "2026-08-04",
            channel: "Roblox Games API",
            headline: "Universe id 10628907188 created, first launch of Stream A Cheese Pull!",
            tier: "official/store",
          },
          {
            date: "2026-09-06",
            channel: "Roblox Games API",
            headline: "Universe metadata refreshed; official game page description updated by Cheesy Situation",
            tier: "official/store",
          },
        ],
      },
      {
        id: "event-status",
        type: "callout",
        tone: "unknown",
        title: "Current event status statement",
        body:
          "No live event schedule has been announced on the official Stream A Cheese Pull! Roblox game page or the Cheesy Situation group page as of 2026-09-07. The fan-built wiki at stream-a-cheese-pull.wiki/ mentions Update 5 and a BACKROOMS event, but the developer has not confirmed them on any official channel and no date or window has been attached to either reference. Treat any event ends on or next drop claim that is not on the official game page or the Cheesy Situation group page as unconfirmed until the developer publishes the same wording on those surfaces.",
      },
      {
        id: "announcement-channels",
        type: "entity-grid",
        heading: "How Cheesy Situation announces updates",
        items: [
          {
            title: "Official Roblox game page description",
            summary: "Refreshed in place. The Roblox Games API updated field moves with it. Canonical patch record.",
            badge: "official/store",
          },
          {
            title: "Cheesy Situation group page",
            summary: "Group id 1013100488. Canonical place for group-wide announcements and rewards.",
            badge: "official/store",
          },
          {
            title: "Roblox notifications",
            summary: "Turn on notifications from the game page to receive each refresh in your Roblox inbox.",
            badge: "official/store",
          },
          {
            title: "Developer Discord (secondary)",
            summary: "Cited by Beebom and Dexerto. Treated as a secondary reference link only, not a primary fact source.",
            badge: "media/interview",
          },
        ],
      },
      {
        id: "verify-claim",
        type: "prose",
        heading: "Where to verify a claim",
        body:
          "If you see a Stream A Cheese Pull update claim outside this page, cross-check it against the official Roblox game page and the Cheesy Situation group page first. The Roblox Games API multi-get for Universe id 10628907188 is the best machine-readable signal for whether the Universe metadata has actually moved. The dated media articles (Beebom, Dexerto, GachaPocket, Gameluster, Roblox Den) are reliable for the active code list and the current event snapshot, but they are not authoritative for new patch notes. The fan-built wiki is cited only as community context for progression vocabulary, not for any update confirmation.",
      },
    ],
    faqIds: [
      "when-last-update",
      "are-update-5-backrooms-real",
      "where-see-new-patches-first",
      "is-there-event-calendar",
    ],
    relatedPageIds: [
      "streamacheesepull-game-overview",
      "streamacheesepull-codes-rewards",
      "streamacheesepull-beginner-guide",
      "streamacheesepull-fan-wiki-safety",
    ],
    schemaTypes: ["Article", "BreadcrumbList", "FAQPage"],
    sourceStatus: "official",
    lastReviewed: "2026-09-07",
  },

  // /wiki-safety/ — source safety reference page
  {
    id: "streamacheesepull-fan-wiki-safety",
    translationKey: "streamacheesepull-fan-wiki-safety",
    locale: "en-US",
    routeKind: "fixed",
    slug: "wiki-safety",
    url: "/wiki-safety",
    pageType: "reference",
    presentation: contentShell(),
    h1: "Stream A Cheese Pull Wiki Safety - Trusted Links vs Exploits",
    seoTitle: "Stream A Cheese Pull Wiki Source Safety - Trusted vs Exploit",
    metaDescription:
      "Stream A Cheese Pull Wiki source safety: official links, media aggregators, fan-wiki vocabulary, and the script exploit cluster to avoid. Trusted tier ladder inside.",
    summary:
      "A Stream A Cheese Pull wiki source safety reference: the official store tier, the media tier, the fan-wiki tier, and the explicit do-not-run list for script exploit clusters.",
    hero: {
      eyebrow: "Source safety",
      subtitle:
        "Trusted tier ladder and the do-not-run list. The fan wiki is community evidence only.",
      ctas: [
        { label: "Game overview", href: "/game" },
        { label: "Active codes", href: "/codes" },
      ],
    },
    quickAnswer:
      "The safe Stream A Cheese Pull wiki sources fall into three tiers in descending order of authority. Official / store covers the Roblox game page, the Cheesy Situation group page, the in-game Store path, and the Roblox Games API multi-get for Universe id 10628907188. Media / interview covers the dated Beebom, Dexerto, GachaPocket, Gameluster, and Roblox Den articles. Wiki / reference covers the fan-built stream-a-cheese-pull.wiki companion site, which is community-maintained and is never used as a standalone current-game fact source.",
    keyFacts: [
      { label: "Official tier", value: "Roblox game page, Cheesy Situation group, Roblox Games API" },
      { label: "Media tier", value: "Beebom, Dexerto, GachaPocket, Gameluster, Roblox Den (2026-09-07 snapshot)" },
      { label: "Wiki tier", value: "stream-a-cheese-pull.wiki (community, never standalone fact source)" },
      { label: "Do not run", value: "Any stream a cheese pull script, paste, executor, or free Robux generator" },
    ],
    modules: [
      {
        id: "tier-ladder",
        type: "data-table",
        heading: "Source tier ladder",
        columns: [
          { key: "tier", label: "Tier" },
          { key: "covers", label: "What it covers" },
          { key: "use", label: "How it is used" },
        ],
        rows: [
          {
            tier: "official/store",
            covers: "Official Roblox game page, Cheesy Situation group page, in-game Store, Roblox Games API multi-get for Universe 10628907188.",
            use: "Only this tier establishes hard current-game facts (name, creator, codes, rewards, group/ like bonuses, scale numbers, genre, max players).",
          },
          {
            tier: "media/interview",
            covers: "Dated Beebom, Dexerto, GachaPocket, Gameluster, and Roblox Den articles (2026-09-07).",
            use: "Reliable for the active code snapshot and Store walkthrough; not authoritative for economy, balance, or progression beyond that date.",
          },
          {
            tier: "wiki/reference",
            covers: "Fan-built stream-a-cheese-pull.wiki companion site and its codes page.",
            use: "Community-maintained. Supports demand, fan structure, and progression vocabulary only. Never a standalone current-game fact source.",
          },
          {
            tier: "community/video",
            covers: "Roblox discussions, fan-wiki social links, creator videos.",
            use: "Demand discovery only. Never a fact source. Treat any developer-change claim as unconfirmed until the same wording appears on official surfaces.",
          },
          {
            tier: "discovery-only",
            covers: "Search snippets, autocomplete output, AI summaries that mention Stream A Cheese Pull!.",
            use: "Demand and search-language signal only. Never a fact source. Reopen the underlying source before treating any autocomplete or AI claim as a fact.",
          },
        ],
      },
      {
        id: "safe-links",
        type: "prose",
        heading: "Safe links",
        body:
          "The list below is the only set of links this site uses to back current-game claims about Stream A Cheese Pull!: Official Roblox game page (canonical link for the title, creator, description, in-game Store path, and like-and-group bonus); Cheesy Situation group page (canonical link for the creator of record and group-wide announcements); Roblox Games API multi-get (canonical machine-readable snapshot of scale numbers, genre, max players, and timestamps); dated Beebom / Dexerto / GachaPocket / Gameluster / Roblox Den articles (canonical dated snapshots for the active code list and the Store walkthrough). The developer's Discord (cited by Beebom and Dexerto and labelled Giddy Games) is included as a secondary reference link only.",
      },
      {
        id: "do-not-run",
        type: "callout",
        tone: "caution",
        title: "Do not run",
        body:
          "The Google autocomplete suggestion stream a cheese pull script (and related pastebin, mobile, or exploit variants) is an exploit cluster, not a content intent. Any link, paste, or video that offers a Stream A Cheese Pull! script, save file, cheat, or free Robux generator is not affiliated with Cheesy Situation and should not be opened, downloaded, or executed. Running these scripts can compromise your Roblox account and violates the Roblox Terms of Use. This page never links to any script or exploit site and never quotes any script body.",
      },
      {
        id: "fan-wiki-caveats",
        type: "prose",
        heading: "Fan-wiki vocabulary caveats",
        body:
          "The fan-built stream-a-cheese-pull.wiki companion site uses progression terms that have not been confirmed by Cheesy Situation on the official Roblox game page or the Cheesy Situation group page. Rebirth, mystery boxes, studio expansion, Update 5, and the BACKROOMS event are fan-wiki vocabulary and are cited only as dated community evidence. Treat any mechanic, reward, or schedule that depends on these terms as unconfirmed until the developer publishes the same wording on the official game page or the Cheesy Situation group page.",
      },
      {
        id: "verify",
        type: "steps",
        heading: "How to verify a claim",
        items: [
          { title: "Official surface check", body: "Does it appear on the official Roblox game page or the Cheesy Situation group page?" },
          { title: "Media cross-check", body: "Is it cross-confirmed by a 2026-09-07 media snapshot?" },
          { title: "API consistency check", body: "Is it consistent with the Roblox Games API multi-get for Universe id 10628907188?" },
          { title: "Apply the rule", body: "Three yes answers = current-game confirmed. A mechanics, reward, or event claim backed only by the API is downgraded to a dated status statement." },
        ],
      },
    ],
    faqIds: [
      "is-fan-wiki-official",
      "are-script-downloads-safe",
      "which-sources-authoritative",
      "can-trust-media-articles",
    ],
    relatedPageIds: [
      "streamacheesepull-game-overview",
      "streamacheesepull-codes-rewards",
      "streamacheesepull-updates-events",
    ],
    schemaTypes: ["Article", "BreadcrumbList", "FAQPage"],
    sourceStatus: "official",
    lastReviewed: "2026-09-07",
  },
];
