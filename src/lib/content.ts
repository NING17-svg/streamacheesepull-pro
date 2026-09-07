import type { FAQItem, PageContent, RouteKind } from "@/types/content";
import { entityFamilies } from "@/data/entities";
import { faqItems } from "@/data/faq";
import { fixedPages } from "@/data/pages/fixed-pages";
import { homePage } from "@/data/pages/home";
import { buildEntityPages } from "@/lib/entities";
import { normalizePath } from "@/lib/localization";

const pages: PageContent[] = [
  homePage,
  ...fixedPages,
  ...buildEntityPages(entityFamilies),
];

export interface FinalRouteManifestEntry {
  id: string;
  translationKey: string;
  locale: string;
  routeKind: RouteKind;
  url: string;
  alternates: Record<string, string>;
}

export function getAllPages(): PageContent[] {
  return pages;
}

export function getIndexablePages(): PageContent[] {
  return pages;
}

export function getPageByUrl(url: string): PageContent | undefined {
  const normalized = normalizePath(url);
  return pages.find((page) => page.url === normalized);
}

export function getPageBySlug(slug: string): PageContent | undefined {
  const normalizedSlug = slug.replace(/^\/+|\/+$/g, "");
  return pages.find((page) => page.slug === normalizedSlug);
}

export function getPageById(id: string): PageContent | undefined {
  return pages.find((page) => page.id === id);
}

export function getLanguageAlternates(
  page: PageContent,
  sourcePages: PageContent[] = pages,
): Record<string, string> {
  return Object.fromEntries(
    sourcePages
      .filter((candidate) => candidate.translationKey === page.translationKey)
      .map((candidate) => [candidate.locale, candidate.url]),
  );
}

export function getFinalRouteManifest(
  sourcePages: PageContent[] = pages,
): FinalRouteManifestEntry[] {
  return sourcePages
    .map((page) => ({
      id: page.id,
      translationKey: page.translationKey,
      locale: page.locale,
      routeKind: page.routeKind,
      url: page.url,
      alternates: getLanguageAlternates(page, sourcePages),
    }))
    .sort((left, right) => left.url.localeCompare(right.url));
}

export function getFaqsForPage(page: PageContent): FAQItem[] {
  return faqItems.filter((item) => item.pageIds.includes(page.id));
}

export function getRecentUpdates(
  locale: string,
  limit = 5,
  sourcePages: PageContent[] = pages,
): PageContent[] {
  const safeLimit = Math.max(0, Math.floor(limit));
  return sourcePages
    .filter(
      (page) =>
        page.locale === locale &&
        page.pageType !== "home" &&
        page.pageType !== "faq" &&
        page.pageType !== "site" &&
        page.routeKind !== "tool",
    )
    .sort((left, right) => {
      if (left.lastReviewed !== right.lastReviewed) {
        return left.lastReviewed < right.lastReviewed ? 1 : -1;
      }
      return left.url.localeCompare(right.url);
    })
    .slice(0, safeLimit);
}

export function getRelatedPages(page: PageContent): PageContent[] {
  return page.relatedPageIds
    .map((id) => pages.find((candidate) => candidate.id === id))
    .filter((candidate): candidate is PageContent => Boolean(candidate));
}
