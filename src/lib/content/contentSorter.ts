import { META_LIST } from "@/content/generated/metaRegistry";

export function getLatestContentByType(contentType: string, limit: number = 3) {
  return META_LIST?.filter(entry => entry.contentType === contentType)
    .sort((a, b) => new Date(b.date || new Date()).getTime() - new Date(a.date || new Date()).getTime())
    .slice(0, limit);
}