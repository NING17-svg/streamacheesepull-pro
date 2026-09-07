import type { SiteLocaleConfig } from "@/types/localization";

export interface SiteOfficialSource {
  label: string;
  href: string;
  description: string;
}

export interface SiteConfig {
  name: string;
  brandMark?: string;
  gameName: string;
  domain: string;
  baseUrl: string;
  description: string;
  tagline: string;
  primaryLocale: string;
  locales: SiteLocaleConfig[];
  author: string;
  gaMeasurementId: string;
  bingSiteAuthCode: string;
  officialSources: SiteOfficialSource[];
  disclaimer: string;
}

export const site: SiteConfig = {
  name: "Stream A Cheese Pull! Guide",
  brandMark: "SC",
  gameName: "Stream A Cheese Pull!",
  domain: "streamacheesepull.pro",
  baseUrl: (process.env.NEXT_PUBLIC_SITE_URL || "https://streamacheesepull.pro").replace(/\/$/, ""),
  description:
    "Unofficial US English guide hub for Stream A Cheese Pull! on Roblox (Universe 10628907188). Codes, beginner studio guide, rebirth and mystery boxes, studio expansion, updates, and disambiguation from real-world cheese-pull ASMR and exploit scripts.",
  tagline:
    "Active codes, beginner studio guide, rebirth and mystery boxes, studio expansion, and updates for the Cheesy Situation Roblox tycoon.",
  primaryLocale: "en-US",
  locales: [
    {
      code: "en-US",
      label: "English",
      pathPrefix: "",
      htmlLang: "en-US",
      openGraphLocale: "en_US",
      ui: {
        searchOpen: "Search",
        searchClose: "Close search",
        searchPlaceholder: "Search this guide",
        searchSubmit: "Search",
        searchLoading: "Loading search…",
        searchError: "Search is unavailable right now.",
        searchNoResults: "No matching pages found.",
        recentUpdates: "Recent updates",
        lastReviewed: "Last reviewed",
      },
    },
  ],
  author: "Streamacheesepull.pro",
  gaMeasurementId: process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || "",
  bingSiteAuthCode: process.env.NEXT_PUBLIC_BING_SITE_AUTH_CODE || "",
  officialSources: [
    {
      label: "Official Stream A Cheese Pull! Roblox game page",
      href: "https://www.roblox.com/games/124293095895786/Stream-A-Cheese-Pull",
      description:
        "Roblox store page for Universe 10628907188, Root Place 124293095895786, Creator Cheesy Situation. Hosts the FirstCodeEver code and the in-game Store redemption path.",
    },
    {
      label: "Roblox Games API (Universe 10628907188)",
      href: "https://games.roblox.com/v1/games?universeIds=10628907188",
      description:
        "Identity snapshot for the Universe: created 2026-08-04, updated 2026-09-06, genre Simulation / Tycoon, maxPlayers 6, visits 15,342,968, favourites 399,786, playing 9,570.",
    },
    {
      label: "Cheesy Situation Roblox group page",
      href: "https://www.roblox.com/groups/1013100488",
      description:
        "Verified creator group behind Stream A Cheese Pull! (group id 1013100488).",
    },
  ],
  disclaimer:
    "streamacheesepull.pro is an unofficial fan guide. It is not affiliated with Roblox Corporation or Cheesy Situation. Game facts are checked against the official Roblox game page, the Cheesy Situation group page, and the Roblox Games API; refer to the official game page for the live game and active codes.",
};
