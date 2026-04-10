import { Metadata } from "next";
import { getArticleMDXPage } from "@/lib/getContentFromMDX";
import { notFound } from "next/navigation";
import { compileMDX } from "next-mdx-remote/rsc";
import { components } from "@/mdx-components";
import { buildArticleJsonLd } from "@/lib/jsonLd";
import { ARTICLE_META, ARTICLES_META_INDEX, slugIsExist } from "@/content/articles/articleMeta";
import { REVIEW_META } from "@/content/reviews/reviewMeta";
import { RelatedLinks } from "@/app/components/mdx/review-v2";

import { TAGS } from "@/Interfaces/tags";
import { InternalLinkButton } from "@/app/components/common/button/InernalLinkButton/InternalLinkButtons";
import { RelatedLinkItem } from "@/Interfaces/types";

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params

  const articleMeta = ARTICLES_META_INDEX['articles/'+ slug];

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
  const articles = ARTICLE_META.map(meta => meta.slug);
  return articles.map(slug => ({ slug }));
}

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  // if (!slugIsExist(slug)) {
  //   notFound();
  // }

  const articlePage = await getArticleMDXPage(slug);
  const articleData = await compileMDX({
    source: articlePage,
    components: components,
    options: { parseFrontmatter: false }
  });

  const articleMetaData = ARTICLES_META_INDEX['articles/'+ slug];
  const jsonLd = buildArticleJsonLd(articleMetaData);

  const relatedArticleLinks: RelatedLinkItem[] = ARTICLE_META.filter(article => article.meta.tags?.
    find(tag => tag == TAGS.USE_CASE.BEGINNERS)).
    map(article => ({ href: article.meta.canonical, label: article.meta.label }));

  const relatedReviewLinks: RelatedLinkItem[] = REVIEW_META.filter(review => review.meta.tags?.find(tag => tag == TAGS.USE_CASE.BEGINNERS)).map(review => ({ href: review.meta.canonical, label: review.meta.label }));

  const links = [...relatedArticleLinks.slice(0, 2), ...relatedReviewLinks.slice(0, 2)];

  return (
    <>
      <article className="mx-auto max-w-3xl px-4 py-8">
        {articleData.content}
        <RelatedLinks title="Related Articles and Reviews" subtitle="Check it now" links={links} />
        <footer className="mt-12 flex justify-around">
          <InternalLinkButton href="/reviews" className="inline-block rounded-xl bg-blue-600 px-5 py-3 font-medium text-white hover:bg-blue-700">Browse all Reviews</InternalLinkButton>
          <InternalLinkButton href="/articles" className="inline-block rounded-xl bg-blue-600 px-5 py-3 font-medium text-white hover:bg-blue-700">Browse all Articles</InternalLinkButton>
        </footer>
      </article>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    </>

  )
}