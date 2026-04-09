import { getMetaFiles } from "@/lib/content/contentLoader"
import ArticleTemplate from "../components/content/article/ArticleTemplate";
import { Metadata } from "next";


interface PageProps {
    params: Promise<{ slug: string[] }>
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string[] }> }): Promise<Metadata> {
    const { slug } = await params
    const content = await getMetaFiles();
    const articleMeta = content?.find(entry => entry.slug === slug.join("/"));
    console.log("from metaData ->", articleMeta);
    return {
        title: articleMeta?.title,
        description: articleMeta?.description,
        openGraph: {
            title: articleMeta?.title,
            description: articleMeta?.description,
            type: "article",
            url: articleMeta?.canonical,
            images: articleMeta?.coverImage
                ? [{ url: articleMeta.coverImage, width: 1200, height: 630, alt: articleMeta.title }]
                : [],
        },
        alternates: { canonical: articleMeta?.canonical },
    };
}

export const dynamicParams = false;

export async function generateStaticParams() {
    const articles = await getMetaFiles();
    const params = articles?.map(item => ({ slug: item.slug.split("/") })) || [];
    console.log("static params -> ", params);
    return params;
}

export default async function Page({ params }: PageProps) {

    const { slug } = await params;
    const content = await getMetaFiles();
    const page = content?.find(entry => entry.slug === slug.join("/"));
    if (page?.contentType === "article") {
        return (
            <ArticleTemplate slug={page.slug} />
        )
    }
}