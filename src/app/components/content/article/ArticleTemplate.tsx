import { InternalLinkButton } from "../../common/button/InernalLinkButton/InternalLinkButtons";
import { RelatedLinks } from "../../mdx/review-v2";
import { compileMDX } from "next-mdx-remote/rsc";
import { components } from "@/mdx-components";
import { buildArticleJsonLd } from "@/lib/jsonLd";
import { getArticleMDXPageV2 } from "@/lib/content/articleMdxLoader";
import { RelatedLinkItem } from "@/Interfaces/types";
import { META_INDEX } from "@/content/generated/metaRegistry";

type ArticleTemplateProps = {
    slug: string;
}

export default async function ArticleTemplate({ slug }: ArticleTemplateProps) {

    const articlePage = await getArticleMDXPageV2(slug);
    const articleData = await compileMDX({
        source: articlePage,
        components: components,
        options: { parseFrontmatter: false }
    });

    const articleMetaData = META_INDEX[slug];
    const jsonLd = buildArticleJsonLd(articleMetaData);

    const relatedReviewLinks: RelatedLinkItem[] | undefined = articleMetaData?.relatedSlugs

    return (
        <>
            <article className="article-shell">
                {articleData.content}
                <RelatedLinks title="Related Articles and Reviews" subtitle="Check it now" links={relatedReviewLinks} />
                <footer className="mt-12 flex justify-around">
                    <InternalLinkButton href="/reviews" className="inline-block rounded-xl bg-blue-600 px-5 py-3 font-medium text-white hover:bg-blue-700">Browse all Reviews</InternalLinkButton>
                    <InternalLinkButton href="/articles" className="inline-block rounded-xl bg-blue-600 px-5 py-3 font-medium text-white hover:bg-blue-700">Browse all Articles</InternalLinkButton>
                </footer>
            </article>

            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        </>

    )
}