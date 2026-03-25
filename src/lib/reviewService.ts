import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { unstable_cache } from "next/dist/server/web/spec-extension/unstable-cache";

type Summary = {
  slug: string;
  title: string;
  description: string;
  date: string | null;
  cover: string | null;
  readingTime: string | null;
  type: "review" | "article";
};

const CONTENT_ROOT = path.join(process.cwd(), "src", "content");

function readSummaries(folder: "reviews" | "articles" | "users"): Summary[] {
  const dir = path.join(CONTENT_ROOT, folder);

  if (!fs.existsSync(dir)) {
    return [];
  }

  const entries = fs.readdirSync(dir, { withFileTypes: true });

  return entries
    .filter((entry) => entry.isDirectory())
    .map((entry) => {
      const slug = entry.name;
      const mdxPath = path.join(dir, slug, "page.mdx");

      if (!fs.existsSync(mdxPath)) {
        return null;
      }

      const source = fs.readFileSync(mdxPath, "utf-8");
      const { data } = matter(source);

      return {
        slug,
        title: data.title ?? slug.replace(/-/g, " "),
        description: data.description ?? "",
        date: data.date ?? null,
        cover: data.coverImage ?? data.cover ?? null,
        readingTime: data.readingTime ?? null,
        type: folder === "reviews" ? "review" : "article",
      } satisfies Summary;
    })
    .filter((item): item is Summary => item !== null)
    .sort((a, b) => {
      const aTime = a.date ? new Date(a.date).getTime() : 0;
      const bTime = b.date ? new Date(b.date).getTime() : 0;
      return bTime - aTime;
    });
}

export const getAllSummaries = unstable_cache(
    async(folder: "reviews" | "articles" | "users") => {
        return readSummaries(folder);
    },
    ["content-summaries"],
    {revalidate:  600}
);