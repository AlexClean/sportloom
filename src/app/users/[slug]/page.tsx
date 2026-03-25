import { compileMDX } from "next-mdx-remote/rsc";
import { ReviewFrontmatter } from "@/Interfaces/ReviewFrontmatter";
import { Folders } from "@/app/_constants/constants";
import { Metadata } from "next";
import { getReviewPage } from "@/lib/getReviewPage";
import { AffiliateDisclosure, FAQSection, FinalVerdict, QuickPicks, RelatedLinks, ReviewHeader } from "@/app/components/mdx/review-v2";
import QuickPickItem from "@/app/components/mdx/review-v2/QuickPickItem";
import { ReviewInfoBlock, ReviewProduct, ReviewQuickPickItem } from "@/Interfaces/reviewTypes";
import ReviewItem from "@/app/components/mdx/review-v2/ReviewItem";
import InfoBlock from "@/app/components/mdx/review-v2/InfoBlock";



export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const page = await getReviewPage(Folders.Users, slug);

  const { frontmatter } = await compileMDX<ReviewFrontmatter>({
    source: page,
    options: { parseFrontmatter: true }
  });

  return {
    title: frontmatter.title,
    description: frontmatter.description,
    openGraph: {
      title: frontmatter.title,
      description: frontmatter.description,
      type: "article",
      url: frontmatter.canonical,
      images: frontmatter.coverImage
        ? [{ url: frontmatter.coverImage, width: 1200, height: 630, alt: frontmatter.title }]
        : [],
    },
    alternates: { canonical: frontmatter.canonical },
  };
}

async function getPageData(slug: string) {
  try {
    const userData = await import(`@/content/users/${slug}/data.ts`);
    return userData;
  } catch (error) {
    console.error(`Error fetching user data for slug: ${slug}`, error);
    return null;
  }
}

export default async function UserPage({ params }: { params: Promise<{ slug: string }> }) {

  const { slug } = await params;
  const { reviewData: { reviewHeader, quickPick, preContentBlock, products, postContentBlock, finalVerdict } } = await getPageData(slug);

  return (
    <article className="review-grid">
      <ReviewHeader {...reviewHeader} />
      <div className="review-main bg-slate-50 rounded-xl p-6 dark:text-black">
        <AffiliateDisclosure />
        <QuickPicks title={quickPick.title} >
          {quickPick.quickPicks.map((product: ReviewQuickPickItem) => (
            <QuickPickItem key={product.name} name={product.name} badge={product.badge} amazonUrl={product.amazonUrl} anchorHref={product.anchorHref} price={product.price} />
          ))}
        </QuickPicks>
        {preContentBlock.map((infoBlock: ReviewInfoBlock) => (
            <InfoBlock key={infoBlock.title} {...infoBlock} />
        ))}
        {products.map((product: ReviewProduct) => (
            <ReviewItem key={product.title} {...product} />
        ))}
        {postContentBlock.map((infoBlock: ReviewInfoBlock) => (
            <InfoBlock key={infoBlock.title} {...infoBlock} />
        ))}
        <FinalVerdict items = {finalVerdict} />
      </div>
    </article>

  );
}