import { AffiliateDisclosure, FAQSection, FinalVerdict, QuickPicks, RelatedLinks, ReviewHeader } from "@/app/components/mdx/review-v2";
import QuickPickItem from "@/app/components/mdx/review-v2/QuickPickItem";
import { ReviewInfoBlock, ReviewProductEntry, ReviewQuickPickEntry } from "@/Interfaces/reviewTypes";
import ReviewItem from "@/app/components/mdx/review-v2/ReviewItem";
import InfoBlock from "@/app/components/mdx/review-v2/InfoBlock";
import { getProductByKey } from "@/data/catalog";
import { REVIEW_DATA_INDEX } from "@/content/users/reviewRegistry";
import { REVIEW_META_INDEX } from "@/content/users/reviewMeta";


export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const reviewMetaData = REVIEW_META_INDEX.find(review => review.slug === slug)?.meta;
  return {
    title: reviewMetaData?.title ?? "Review",
    description: reviewMetaData?.description ?? "Review of sports products",
    openGraph: {
      title: reviewMetaData?.title ?? "Review", 
      description: reviewMetaData?.description ?? "Review of sports products",
      type: "article",
      siteName: "SportLoom",
      url: reviewMetaData?.canonical ?? undefined,
      images: reviewMetaData?.coverImage ? [{ url: reviewMetaData.coverImage, width: 1200, height: 630, alt: reviewMetaData.title }] : [],
    },
    alternates: { canonical: reviewMetaData?.canonical ?? undefined },
  };
}

export const dynamicParams = false;

export async function generateStaticParams() {
  return REVIEW_META_INDEX.map(review => ({ slug: review.slug }));
}

export default async function UserPage({ params }: { params: Promise<{ slug: string }> }) {

  const { slug } = await params;
  const { reviewHeader, quickPick, preContentBlocks, products, postContentBlocks, finalVerdict, faq, relatedLinks, aboutTheAuthor } = REVIEW_DATA_INDEX[slug];

  return (
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
        <RelatedLinks links={relatedLinks} />
        <FAQSection items={faq} />
        <InfoBlock title={aboutTheAuthor.title} content={aboutTheAuthor.content} />
      </div>
    </article>
  );
}