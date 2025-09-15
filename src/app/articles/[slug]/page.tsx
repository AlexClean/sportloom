import { InternalLinkButton } from "@/app/components/common/button/InernalLinkButton/InternalLinkButtons"
import { Link } from "lucide-react"
import Image from "next/image";
import HeroImg from "@/../public/images/articles/how-to-choose-boxing-gloves/Hero.webp"
import { Metadata } from "next";
import { getMDXPage } from "@/lib/getContentFromMDX";
import { Folders } from "@/app/_constants/constants";
import getAllSlugsFromTheFolder from "@/lib/getAllSlugsFromTheFolder";
import { notFound } from "next/navigation";
import { compileMDX } from "next-mdx-remote/rsc";
import { ArticleFrontmatter } from "@/Interfaces/ArticleFrontmatter";
import { components } from "@/mdx-components";

export const metadata: Metadata = {
    title: "How to Choose Boxing Gloves (2025 Guide for Beginners) | Sportloom",
    description:
        "Learn how to choose boxing gloves: sizes, weights, materials, and tips for beginners. Complete 2025 guide with brands and mistakes to avoid.",
    openGraph: {
        title: "How to Choose Boxing Gloves: Complete 2025 Guide for Beginners",
        description:
            "Step-by-step guide to choosing boxing gloves. Sizes, weights, materials, brands, and tips.",
        url: "https://sportloom.com/articles/how-to-choose-boxing-gloves",
        type: "article",
        images: [
            {
                url: "https://sportloom.com/images/articles/how-to-choose-boxing-gloves/How-to-choose-boxing-gloves-Hero.webp",
                width: 1200,
                height: 630,
                alt: "Boxing gloves on the ring",
            },
        ],
    },
    alternates: {
        canonical: "https://sportloom.com/articles/how-to-choose-boxing-gloves",
    },
};

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
    console.log('frontmatter from the Article is -> ', data.frontmatter);
    console.log('content from the Article is -> ', data.content);

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