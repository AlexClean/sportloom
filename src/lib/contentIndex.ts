import fs from "node:fs";
import path from "node:path";
import { unstable_cache } from "next/cache";
import { ContentType, ContentCategory, ContentEntry } from "@/Interfaces/types";

const CONTENT_ROOT = path.join(process.cwd(), "src", "content");
const TAGS_FILE = path.join(process.cwd(), "src", "Interfaces", "tags.ts");

type TagMap = Record<string, string>;

function getMetaFiles(dirPath: string): string[] {
  if (!fs.existsSync(dirPath)) {
    return [];
  }

  return fs.readdirSync(dirPath, { withFileTypes: true }).flatMap((entry) => {
    const fullPath = path.join(dirPath, entry.name);

    if (entry.isDirectory()) {
      return getMetaFiles(fullPath);
    }

    return entry.isFile() && entry.name === "meta.ts" ? [fullPath] : [];
  });
}

function readTagMap(): TagMap {
  if (!fs.existsSync(TAGS_FILE)) {
    return {};
  }

  const source = fs.readFileSync(TAGS_FILE, "utf-8");
  const lines = source.split(/\r?\n/);
  const tagMap: TagMap = {};
  let currentSection = "";

  for (const line of lines) {
    const sectionMatch = line.match(/^\s*([A-Z_]+)\s*:\s*\{\s*$/);
    if (sectionMatch) {
      currentSection = sectionMatch[1];
      continue;
    }

    if (currentSection && line.match(/^\s*}\s*,?\s*$/)) {
      currentSection = "";
      continue;
    }

    const valueMatch = line.match(/^\s*([A-Z_]+)\s*:\s*"([^"]+)"\s*,?\s*$/);
    if (currentSection && valueMatch) {
      tagMap[`TAGS.${currentSection}.${valueMatch[1]}`] = valueMatch[2];
    }
  }

  return tagMap;
}

function extractStringProperty(source: string, propertyName: string): string | undefined {
  const match = source.match(
    new RegExp(`${propertyName}\\s*:\\s*(["'])([\\s\\S]*?)(?<!\\\\)\\1`, "m")
  );

  return match?.[2]
    ?.replace(/\\n/g, "\n")
    ?.replace(/\\'/g, "'")
    ?.replace(/\\"/g, '"')
    ?.trim();
}

function extractArrayProperty(source: string, propertyName: string): string[] {
  const match = source.match(new RegExp(`${propertyName}\\s*:\\s*\\[([\\s\\S]*?)\\]`, "m"));
  if (!match) {
    return [];
  }

  return Array.from(match[1].matchAll(/TAGS\.[A-Z_]+\.[A-Z_]+|["'][^"']+["']/g))
    .map(([rawValue]) => rawValue.trim())
    .map((rawValue) => rawValue.replace(/^["']|["']$/g, ""));
}

function normalizeTags(rawTags: string[], tagMap: TagMap): string[] {
  return rawTags.map((tag) => tagMap[tag] ?? tag);
}

function normalizeUrl(canonical: string | undefined, contentType: ContentEntry["contentType"], slug: string): string {
  if (!canonical) {
    return `/${contentType === ContentType.Review ? "reviews" : "articles"}/${slug}`;
  }

  if (canonical.startsWith("http://") || canonical.startsWith("https://")) {
    try {
      return new URL(canonical).pathname || `/${contentType === "review" ? "reviews" : "articles"}/${slug}`;
    } catch {
      return canonical;
    }
  }

  return canonical.startsWith("/") ? canonical : `/${canonical}`;
}

function inferCategory(metaFilePath: string, title: string, slug: string, tags: string[]): ContentCategory {
  const source = `${metaFilePath} ${title} ${slug} ${tags.join(" ")}`.toLowerCase();

  if (source.includes("headgear")) {
    return "headgear";
  }

  if (source.includes("fighter") || source.includes("fighters") || source.includes("pro-boxer") || source.includes("pro boxer")) {
    return "fighters";
  }

  if (
    source.includes("training") ||
    source.includes("guides") ||
    source.includes("guide") ||
    source.includes("hand-wrap") ||
    source.includes("hand wrap")
  ) {
    return "training";
  }

  return "gloves";
}

function parseMetaFile(metaFilePath: string, tagMap: TagMap): ContentEntry | null {
  const source = fs.readFileSync(metaFilePath, "utf-8").trim();
  if (!source) {
    return null;
  }

  const slug = extractStringProperty(source, "slug");
  const title = extractStringProperty(source, "title");
  const description = extractStringProperty(source, "description");
  const canonical = extractStringProperty(source, "canonical");
  const date = extractStringProperty(source, "date");
  const image = extractStringProperty(source, "coverImage");
  const contentType = extractStringProperty(source, "contentType");
  const tags = normalizeTags(extractArrayProperty(source, "tags"), tagMap);

  if (!slug || !title || !description || (contentType !== ContentType.Review && contentType !== ContentType.Article)) {
    return null;
  }

  return {
    slug,
    url: normalizeUrl(canonical, contentType, slug),
    title,
    description,
    sport: "boxing",
    category: inferCategory(metaFilePath, title, slug, tags),
    contentType,
    tags,
    date,
    image,
  };
}

function sortEntries(entries: ContentEntry[]): ContentEntry[] {
  return [...entries].sort((left, right) => {
    if (left.date && right.date) {
      return right.date.localeCompare(left.date);
    }

    if (left.date) {
      return -1;
    }

    if (right.date) {
      return 1;
    }

    return left.title.localeCompare(right.title);
  });
}

function buildContentIndex(): ContentEntry[] {
  const tagMap = readTagMap();
  const metaFiles = getMetaFiles(CONTENT_ROOT);

  const entries = metaFiles
    .map((metaFilePath) => parseMetaFile(metaFilePath, tagMap))
    .filter((entry): entry is ContentEntry => entry !== null);

  return sortEntries(entries);
}

export const getContentIndex = unstable_cache(
  async (): Promise<ContentEntry[]> => buildContentIndex(),
  ["content-index"],
  { revalidate: 600 }
);

export async function getContentIndexBySlug(): Promise<Record<string, ContentEntry>> {
  const entries = await getContentIndex();
  return Object.fromEntries(entries.map((entry) => [entry.slug, entry]));
}
