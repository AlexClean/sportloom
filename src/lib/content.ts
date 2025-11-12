import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import { Summary } from "@/Interfaces/types";
import { unstable_cache } from "next/cache";


const CONTENT_ROOT = path.join(process.cwd(), "src", "content");


function readSummaries(folder: "reviews" | "articles" | "users") : Summary[] {
    const dir = path.join(CONTENT_ROOT, folder);
    const files = fs.existsSync(dir) ? fs.readdirSync(dir) : [];

    return files.filter((f) => f.endsWith('.mdx'))
    .map((f) => {
        const slug = f.replace(/\.mdx$/, "");
        const fullPath = path.join(dir, f);
        const source = fs.readFileSync(fullPath, "utf-8");
        const {data} = matter(source);

        return {
            slug,
            title: data.title ?? slug.replace(/-/g, " "),
            description: data.description ?? " ",
            date: data.date ?? null,
            cover: data.cover ?? null,
            type: folder === "reviews" ? "review" : "article",
        } satisfies Summary
    });
}


export const getAllSummaries = unstable_cache(
    async(folder: "reviews" | "articles" | "users") => {
        return readSummaries(folder);
    },
    ["content-summaries"],
    {revalidate:  600}
);
