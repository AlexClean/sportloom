import { Metadata } from "next";
import { getArticleMDXPage, getMDXPage } from "@/lib/getContentFromMDX";
import { Folders } from "@/app/_constants/constants";
import { notFound } from "next/navigation";
import { compileMDX } from "next-mdx-remote/rsc";
import { ArticleFrontmatter } from "@/Interfaces/ArticleFrontmatter";
import { components } from "@/mdx-components";
import { buildArticleJsonLd } from "@/lib/jsonLd";
import { ARTICLE_META, ARTICLES_META_INDEX, slugIsExist } from "@/content/articles/articleMeta";

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const articleMeta = ARTICLES_META_INDEX[slug];

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

  if (!slugIsExist(slug)) {
    notFound();
  }

  //const page = await getMDXPage(Folders.Articles, slug);

  const articlePage = await getArticleMDXPage(slug);
  const articleData = await compileMDX({
    source: articlePage,
    components: components,
    options: { parseFrontmatter: false }
  });

  const articleMetaData = ARTICLES_META_INDEX[slug];
  const jsonLd = buildArticleJsonLd(articleMetaData);

  return (
    <>
      <article className="mx-auto max-w-3xl px-4 py-8">
        {articleData.content}
      </article>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    </>

  )
}