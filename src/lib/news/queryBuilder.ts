
const GOOGLE_NEWS_RSS_URL =
  "https://news.google.com/rss/search";

export function buildGoogleNewsRssUrl(query: string): string {
  const params = new URLSearchParams({
    q: query,
    hl: "en-US",
    gl: "US",
    ceid: "US:en",
  });

  return `${GOOGLE_NEWS_RSS_URL}?${params.toString()}`;
}