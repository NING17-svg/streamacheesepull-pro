import { site } from "@/data/site";

export interface LocalizedNavigationItem {
  href: string;
  labels: Record<string, string>;
}

export const primaryNavigation: LocalizedNavigationItem[] = [
  { href: "/game", labels: { "en-US": "Game" } },
  { href: "/codes", labels: { "en-US": "Codes" } },
  { href: "/guides/beginner", labels: { "en-US": "Beginner Guide" } },
  { href: "/guides/first-session-cash", labels: { "en-US": "First-Session Cash" } },
  { href: "/guides/studio-expansion", labels: { "en-US": "Studio Expansion" } },
  { href: "/updates", labels: { "en-US": "Updates" } },
  { href: "/wiki-safety", labels: { "en-US": "Source Safety" } },
];

export const footerNavigation: LocalizedNavigationItem[] = [
  { href: "/game", labels: { "en-US": "Game" } },
  { href: "/codes", labels: { "en-US": "Codes" } },
  { href: "/guides/beginner", labels: { "en-US": "Beginner Guide" } },
  { href: "/guides/first-session-cash", labels: { "en-US": "First-Session Cash" } },
  { href: "/guides/studio-expansion", labels: { "en-US": "Studio Expansion" } },
  { href: "/updates", labels: { "en-US": "Updates" } },
  { href: "/wiki-safety", labels: { "en-US": "Source Safety" } },
];

export function navigationLabel(
  item: LocalizedNavigationItem,
  locale: string,
): string {
  return (
    item.labels[locale] ||
    item.labels[site.primaryLocale] ||
    Object.values(item.labels)[0]
  );
}
