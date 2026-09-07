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
    "Unofficial US English guide hub for Stream A Cheese Pull! on Roblox (Universe 10628907188). Codes, beginner walkthrough, rebirth and mystery boxes, studio expansion, updates, and disambiguation from real-world cheese-pull ASMR and exploit scripts.",
  tagline:
    "Codes, beginner walkthrough, rebirth and mystery boxes, studio expansion, and updates for the Cheesy Situation Roblox tycoon.",
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
      label: "Official website",
      href: "https://example.com",
      description: "Replace this with the game publisher or developer website.",
    },
  ],
  disclaimer:
    "This is an unofficial fan guide template. Replace placeholder facts with official sources before launch.",
};
