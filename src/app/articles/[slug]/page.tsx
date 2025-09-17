import { Metadata } from "next";
import { getMDXPage } from "@/lib/getContentFromMDX";
import { Folders } from "@/app/_constants/constants";
import getAllSlugsFromTheFolder from "@/lib/getAllSlugsFromTheFolder";
import { notFound } from "next/navigation";
import { compileMDX } from "next-mdx-remote/rsc";
import { ArticleFrontmatter } from "@/Interfaces/ArticleFrontmatter";
import { components } from "@/mdx-components";
import { buildArticleJsonLd } from "@/lib/jsonLd";


export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const page = await getMDXPage(Folders.Articles, slug);

  const { frontmatter } = await compileMDX<ArticleFrontmatter>({
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

export const dynamicParams = false;

export async function generateStaticParams() {
  const reviews = getAllSlugsFromTheFolder(Folders.Articles);
  return reviews.map(slug => ({ slug }));
}

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
    const {slug} = await params;

    const articles = getAllSlugsFromTheFolder(Folders.Articles);
    if(!articles.includes(slug)){
        notFound();
    }

    const page = await getMDXPage(Folders.Articles, slug);
    const data = await compileMDX<ArticleFrontmatter>({
        source: page,
        components: components,
        options: {parseFrontmatter: true}
    });

    const jsonLd = buildArticleJsonLd(data.frontmatter);

    return (
        <>
            {data.content}
            <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify(jsonLd)}}/>
        </>

    )
}