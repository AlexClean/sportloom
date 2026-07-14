import { MetadataRoute } from "next";
import { META_LIST } from "@/content/generated/metaRegistry";

const baseUrl = "https://sportloom.com";

function getLatestDateByPrefix(prefix: string): Date {
  const dates = META_LIST
    .filter((item) => item.slug.startsWith(prefix) && item.date)
    .map((item) => new Date(item.date!).getTime());

  return dates.length ? new Date(Math.max(...dates)) : new Date();
}

function getLatestDateByType(contentType: string): Date {
  const dates = META_LIST
    .filter((item) => item.contentType === contentType && item.date)
    .map((item) => new Date(item.date!).getTime());

  return dates.length ? new Date(Math.max(...dates)) : new Date();
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {

  const dynamicEntries = META_LIST?.map((item) => ({
    url: `${baseUrl}/${item.slug}`,
    lastModified: new Date(item.updatedAt ?? item.date ?? Date.now()),
    changeFrequency: "monthly" as const,
    priority: item.contentType === "review" ? 0.8 : 0.7,
  }));

  const staticEntries: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: getLatestDateByPrefix(""),
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${baseUrl}/reviews`,
      lastModified: getLatestDateByType("review"),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/articles`,
      lastModified: getLatestDateByType("article"),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/boxing`,
      lastModified: getLatestDateByPrefix("boxing"),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/boxing/training`,
      lastModified: getLatestDateByPrefix("boxing/training"),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/boxing/gloves`,
      lastModified: getLatestDateByPrefix("boxing/gloves"),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/boxing/brands`,
      lastModified: getLatestDateByPrefix("boxing/brands"),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/boxing/headgear`,
      lastModified: getLatestDateByPrefix("boxing/headgear"),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/boxing/shoes`,
      lastModified: getLatestDateByPrefix("boxing/shoes"),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/boxing/gloves/boxing-glove-size-calculator`,
      lastModified: getLatestDateByPrefix("boxing/gloves/boxing-glove-size-calculator"),
      changeFrequency: "weekly",
      priority: 0.8,
    }
  ];

  return [...staticEntries, ...dynamicEntries || []]
}
