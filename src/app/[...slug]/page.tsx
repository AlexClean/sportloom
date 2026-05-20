import ArticleTemplate from "../components/content/article/ArticleTemplate";
import { Metadata } from "next";
import ReviewTemplate from "../components/content/review/ReviewTemplate";
import { META_LIST } from "@/content/generated/metaRegistry";
import ContentPageLayout from "../components/content/layout/ContentPageLayout";
import RightSidebar from "../components/content/layout/RightSidebar";
import LeftSidebar from "../components/content/layout/LeftSidebar";

interface PageProps {
    params: Promise<{ slug: string[] }>
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string[] }> }): Promise<Metadata> {
    const { slug } = await params

    const contentMeta = META_LIST?.find(entry => entry.slug === slug.join("/"));
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

    const params = META_LIST?.map(item => ({ slug: item.slug.split("/") })) || [];
    return params;
}

export default async function Page({ params }: PageProps) {

    const { slug } = await params;
    const page = META_LIST?.find(entry => entry.slug === slug.join("/"));

    if (page?.contentType === "article") {
        return (
            <ContentPageLayout
                leftSidebar={<LeftSidebar />}
                rightSidebar={<RightSidebar />}
            >
                <ArticleTemplate slug={page.slug} />
            </ContentPageLayout>
        )
    } else if (page?.contentType === "review") {
        return (
            <ReviewTemplate slug={page.slug} />
        )
    }
}