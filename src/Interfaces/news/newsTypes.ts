export interface NewsFeedQuery {
  id: string;
  category: NewsCategory;
  query: string;
  enabled: boolean;
}

export type NewsCategory =
  | "fight-announcement"
  | "fight-result"
  | "title-fight"
  | "fight-event"
  | "fighter-news";


export interface NewsItem {
  description: string;
  guid: string;
  title: string;
  link: string;
  pubDate: string;
  source: string;
}

export interface NewsChannel {
  copyright: string;
  description: string;
  generator: string;
  image:{
    height: string;
    link: string;
    title: string;
    url: string;
    width: string;
  }
  item: NewsItem[];
    url: string;
  language: string;
  lastBuildDate: string;
  link: string;
  title: string;
  webMaster: string;
}

export interface NewsRssFeed {
  rss: {
    channel: NewsChannel;
  };
}

export interface NewsCandidate {
  id: string;
  title: string;
  publishingDate: string;
  source: string;
  newsUrl: string;
}