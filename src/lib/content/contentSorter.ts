import { META_LIST } from "@/content/generated/metaRegistry";
import { RelatedLinkItem } from "@/Interfaces/types";

export function getLatestContentByType(contentType: string, limit: number = 3) {
  return META_LIST?.filter(entry => entry.contentType === contentType)
    .sort((a, b) => new Date(b.date || new Date()).getTime() - new Date(a.date || new Date()).getTime())
    .slice(0, limit);
}

export function getRelatedContentBySlugs(relatedLinks: RelatedLinkItem[]) {

  const relatedContent = relatedLinks.map(link =>
    META_LIST?.find(entry => normalizeSlug(entry.slug) === normalizeSlug(link.href))
  )
  return relatedContent;
}

function normalizeSlug(value: string) {
  return value.startsWith("/") ? value.slice(1) : value;
}