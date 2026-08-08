import { JSDOM } from "jsdom";
import { Readability } from "@mozilla/readability";

export interface ParsedArticle {
    title: string;
    byline: string | null;
    siteName: string | null;
    excerpt: string | null;
    textContent: string;
    content: string;
    length: number;
}

export async function parseArticle(url: string): Promise<ParsedArticle | null> {
    const response = await fetch(url, {
        redirect: "follow",
        headers: {
            "User-Agent": "Mozilla/5.0",
        },
    });

    console.log("requested URL:", url);
    console.log("final URL:", response.url);
    console.log("status:", response.status);
    console.log("content-type:", response.headers.get("content-type"));


    if (!response.ok) {
        throw new Error(`Article request failed: ${response.status}`);
    }

    const html = await response.text();
    console.log("html length:", html.length);
    console.log("html beginning:", html.slice(0, 500));
    const dom = new JSDOM(html, {
        url: response.url,
    });

    const article = new Readability(dom.window.document).parse();

    if (!article) {
        console.warn("Could not parse article:", response.url);
        return null;
    }

    const textContent = cleanText(article.textContent || "");

    if (textContent.length < 300) {
        console.warn("Extracted article is too short", response.url);
        return null;

    }

    return {
        title: article.title || "",
        byline: article.byline || "",
        siteName: article.siteName || "",
        excerpt: article.excerpt || "",
        content: article.content || "",
        textContent,
        length: textContent.length,
    };
}

function cleanText(text: string): string {
    return text
        .replace(/\s+/g, " ")
        .replace(/Advertisement/gi, "")
        .trim();
}