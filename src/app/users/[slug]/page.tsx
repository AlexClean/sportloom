import { getMDXPage } from "@/lib/getContentFromMDX";
import { compileMDX } from "next-mdx-remote/rsc";
import { components } from "@/mdx-components"
import { ReviewFrontmatter } from "@/Interfaces/ReviewFrontmatter";
import { Folders } from "@/app/_constants/constants";
import { Metadata } from "next";

export async function generateMetadata({params}: {params: Promise<{ slug: string }>}):Promise<Metadata> {
  const {slug} = await params
  const page = await getMDXPage(Folders.Users, slug);

  const {frontmatter} = await compileMDX<ReviewFrontmatter>({
    source: page,
    options: {parseFrontmatter: true}
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

export default async function UserPage({params}: {params: Promise<{ slug: string }>}) {

  const { slug } = await params;
  const page = await getMDXPage(Folders.Users, slug);;

 const data = await compileMDX<ReviewFrontmatter>({
       source: page, 
       components: components,
       options: {parseFrontmatter: true}});
   return (
     <>
       {data.content}
     </>
   )
}