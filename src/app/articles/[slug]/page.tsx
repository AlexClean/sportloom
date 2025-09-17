import { Metadata } from "next";
import { getMDXPage } from "@/lib/getContentFromMDX";
import { Folders } from "@/app/_constants/constants";
import getAllSlugsFromTheFolder from "@/lib/getAllSlugsFromTheFolder";
import { notFound } from "next/navigation";
import { compileMDX } from "next-mdx-remote/rsc";
import { ArticleFrontmatter } from "@/Interfaces/ArticleFrontmatter";
import { components } from "@/mdx-components";


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

    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Article",
        headline: "How to Choose Boxing Gloves: Complete Guide for Beginners",
        datePublished: "2025-08-21",
        author: {
            "@type": "Organization",
            name: "Sportloom",
        },
        publisher: {
            "@type": "Organization",
            name: "Sportloom",
            logo: {
                "@type": "ImageObject",
                url: "https://sportloom.com/favicon.ico",
            },
        },
        image: [
            "https://sportloom.com/images/articles/how-to-choose-boxing-gloves/How-to-choose-boxing-gloves-Hero.webp",
        ],
        description:
            "Learn how to choose boxing gloves: sizes, weights, materials, and tips for beginners.",
    };

    return (
        <>
            {data.content}
            <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify(jsonLd)}}/>
        </>

    )
}