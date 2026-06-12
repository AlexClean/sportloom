import { Metadata } from "next";
import { ReviewTemplate, ReviewHeader, ArticleHeader, ContentPageLayout, RightSidebar, ArticleTemplate } from "@/app/components/content";
import { META_LIST } from "@/content/generated/metaRegistry";
import { REVIEW_DATA_INDEX } from "@/content/reviews/reviewRegistry";

interface PageProps {
    params: Promise<{ slug: string[] }>
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string[] }> }): Promise<Metadata> {
    const { slug } = await params

    const contentMeta = META_LIST?.find(entry => entry.slug === slug.join("/"));
    if (!contentMeta) {
        return { title: "Page Not Found" };
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
            <>
                <ArticleHeader meta={page} />
                <ContentPageLayout
                    rightSidebar={<RightSidebar slug={page?.slug} />}
                >
                    <ArticleTemplate slug={page.slug} />
                </ContentPageLayout>
            </>

        )
    } else if (page?.contentType === "review") {

        const { reviewHeader } = REVIEW_DATA_INDEX[page.slug];

        return (

            <>
                <ReviewHeader {...reviewHeader} />
                <ContentPageLayout
                    rightSidebar={<RightSidebar slug={page?.slug} />}
                >
                    <ReviewTemplate slug={page.slug} />
                </ContentPageLayout>
            </>
        )
    }
}