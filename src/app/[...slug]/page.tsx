import { getMetaFiles } from "@/lib/content/contentLoader"
import ArticleTemplate from "../components/content/article/ArticleTemplate";
import { Metadata } from "next";
import ReviewTemplate from "../components/content/review/ReviewTemplate";


interface PageProps {
    params: Promise<{ slug: string[] }>
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string[] }> }): Promise<Metadata> {
    const { slug } = await params
    const content = await getMetaFiles();
    const contentMeta = content?.find(entry => entry.slug === slug.join("/"));
    if(!contentMeta){
        return {title: "Page Not Found"};
    }

    return {
        title: contentMeta?.title,
        description: contentMeta?.description,
        openGraph: {
            title: contentMeta?.title,
            description: contentMeta?.description,
            type: "article",
            url: contentMeta?.canonical,
            images: contentMeta?.coverImage
                ? [{ url: contentMeta.coverImage, width: 1200, height: 630, alt: contentMeta.title }]
                : [],
        },
        alternates: { canonical: contentMeta?.canonical },
    };
}

export const dynamicParams = false;

export async function generateStaticParams() {
    const content = await getMetaFiles();
    const params = content?.map(item => ({ slug: item.slug.split("/") })) || [];
    return params;
}

export default async function Page({ params }: PageProps) {

    const { slug } = await params;
    console.log("slug ->", slug);
    const content = await getMetaFiles();
    const page = content?.find(entry => entry.slug === slug.join("/"));
    if (page?.contentType === "article") {
        return (
            <ArticleTemplate slug={page.slug} />
        )
    } else if (page?.contentType === "review") {
        return (
            <ReviewTemplate slug={page.slug} />
        )
    }
}