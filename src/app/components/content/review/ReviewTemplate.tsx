import { ReviewInfoBlock, ReviewProductEntry, ReviewQuickPickEntry } from "@/Interfaces/reviewTypes";
import { AffiliateDisclosure, FAQSection, FinalVerdict, QuickPicks, RelatedLinks, ReviewHeader } from "../../mdx/review-v2";
import InfoBlock from "../../mdx/review-v2/InfoBlock";
import QuickPickItem from "../../mdx/review-v2/QuickPickItem";
import ReviewItem from "../../mdx/review-v2/ReviewItem";
import { getProductByKey } from "@/data/catalog";
import { buildReviewJsonLd } from "@/lib/jsonLd";
import { REVIEW_DATA_INDEX } from "@/content/reviews/reviewRegistry";
import { getMetaFiles } from "@/lib/content/contentLoader";
import { notFound } from "next/navigation";


type ReviewTemplateProps = {
    slug: string;
}


export default async function ReviewTemplate({ slug }: ReviewTemplateProps) {

    const metaFiles = await getMetaFiles();
    const reviewMetaData = metaFiles?.find(entry => entry.slug === slug);
    if (!reviewMetaData) {
        return notFound();
    }
    const { reviewHeader, quickPick, preContentBlocks, products, postContentBlocks, finalVerdict, faq, aboutTheAuthor } = REVIEW_DATA_INDEX[slug];
    const jsonLd = buildReviewJsonLd(reviewMetaData);

    const relatedLinks = reviewMetaData.relatedSlugs;

    return (
        <>
            <article className="review-grid">
                <ReviewHeader {...reviewHeader} />
                <div className="review-main bg-slate-50 rounded-xl p-6 dark:text-black">
                    <AffiliateDisclosure />
                    <QuickPicks title={quickPick.title} >
                        {quickPick.quickPicks.map((product: ReviewQuickPickEntry) => {
                            const productData = getProductByKey(product.productKey);
                            return (
                                <QuickPickItem key={productData?.key} name={productData?.title} badge={product.badge} amazonUrl={productData?.affiliateUrl} anchorHref={productData?.key ?? '#default'} price={productData?.price} />
                            )
                        }
                        )}
                    </QuickPicks>
                    {preContentBlocks.map((infoBlock: ReviewInfoBlock) => (
                        <InfoBlock key={infoBlock.title} {...infoBlock} />
                    ))}
                    {products.map((product: ReviewProductEntry) => (
                        <ReviewItem key={product.productKey} {...product} />
                    ))}
                    {postContentBlocks.map((infoBlock: ReviewInfoBlock) => (
                        <InfoBlock key={infoBlock.title} {...infoBlock} />
                    ))}
                    <FinalVerdict items={finalVerdict} />
                    <RelatedLinks className="bg-indigo-50" links={relatedLinks} />
                    <FAQSection items={faq} />
                    <InfoBlock title={aboutTheAuthor.title} content={aboutTheAuthor.content} />
                </div>
            </article>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        </>
    );
}