import { getMDXPage } from "@/lib/getContentFromMDX";
import { compileMDX } from "next-mdx-remote/rsc";
import { components } from "@/mdx-components"
import { ReviewFrontmatter } from "@/Interfaces/ReviewFrontmatter";
import { Folders } from "@/app/_constants/constants";
import { Metadata } from "next";
import getAllSlugsFromTheFolder from "@/lib/getAllSlugsFromTheFolder";
import { notFound } from "next/navigation";
import buildReviewJsonLd from "@/lib/jsonLd";

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const page = await getMDXPage(Folders.Reviews, slug);

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

export const dynamicParams = false;

export async function generateStaticParams() {
  const reviews = getAllSlugsFromTheFolder('reviews');
  return reviews.map(slug => ({ slug }));
}


export default async function ReviewPage({ params }: { params: Promise<{ slug: string }> }) {

  const { slug } = await params;
  const reviews = getAllSlugsFromTheFolder('reviews');
  if (!reviews.includes(slug)) {
    notFound();
  }

  const page = await getMDXPage(Folders.Reviews, slug);
  const data = await compileMDX<ReviewFrontmatter>({
    source: page,
    components: components,
    options: { parseFrontmatter: true }
  });

  const jsonLd = buildReviewJsonLd(data.frontmatter);

  return (
    <>
      {data.content}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    </>
  );
}
