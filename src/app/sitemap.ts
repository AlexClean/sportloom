import { getMetaFiles } from "@/lib/content/contentLoader";
import { MetadataRoute } from "next";
;

const baseUrl = "https://sportloom.com";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {

  const allContent = await getMetaFiles();

  const dynamicEntries = allContent?.map((item) => ({
    url: `${baseUrl}/${item.slug}`,
    lastModified: item.date ? new Date(item.date) : new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const staticEntries: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${baseUrl}/reviews`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/articles`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/boxing`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    }
  ];

     return [...staticEntries, ...dynamicEntries || []]
}
