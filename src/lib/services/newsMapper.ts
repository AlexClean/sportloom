import { NewsItem, NewsCandidate } from "@/Interfaces/news/newsTypes";

export function MapNewsItemToNewsCandidate(newsItems: NewsItem[]): NewsCandidate[] {
  return newsItems.map((item) => ({
    id: item.guid,
    title: item.title,
    publishingDate: item.pubDate,
    source: item.source,
    newsUrl: item.link,
  }));
}