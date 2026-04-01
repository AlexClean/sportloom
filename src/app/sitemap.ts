import { MetadataRoute } from "next";
import fs from "fs";
import path from "path";
import { REVIEW_META } from "@/content/reviews/reviewMeta";

const baseUrl = "https://sportloom.com";

function getSlugsFromFolder(folder: string, prefix: string) {
  const dir = path.join(process.cwd(), "src", "content", folder);
  const files = fs.readdirSync(dir); 

  return files
    .filter((file) => file.endsWith(".mdx")) 
    .map((file) => {
      const slug = file.replace(/\.mdx$/, ""); 
      return {
        url: `${baseUrl}/${prefix}/${slug}`,
        lastModified: new Date(),
        changeFrequency: "monthly" as const,
        priority: 0.7,
      };
    });
}

function getReviewsSlugs() {
  const slugs = REVIEW_META.map(review => review.slug);
  return slugs.map(slug => ({
    url: `${baseUrl}/reviews/${slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));
}

export default function sitemap(): MetadataRoute.Sitemap {
  return [
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

    ...getReviewsSlugs(),
    ...getSlugsFromFolder("articles", "articles"),
  ];
}
