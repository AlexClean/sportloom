import { getMDXPage } from "@/lib/getContentFromMDX";
import { compileMDX } from "next-mdx-remote/rsc";
import { components } from "@/mdx-components"
import { ReviewFrontmatter } from "@/Interfaces/ReviewFrontmatter";
import { Folders } from "@/app/_constants/constants";
import { Metadata } from "next";
import getAllSlugsFromTheFolder from "@/lib/getAllSlugsFromTheFolder";
import { notFound } from "next/navigation";


// export const metadata: Metadata = {
//   title: "Best Boxing Gloves for Beginners 2025 (Tested & Reviewed) | Sportloom",
//   description:
//     "Best boxing gloves for beginners in 2025. We tested Hayabusa, Venum, Everlast & Adidas to find top picks for comfort, wrist support, speed & value.",
//   openGraph: {
//     title: "Best Boxing Gloves for Beginners 2025 – Tested & Reviewed",
//     description:
//       "We tested Hayabusa, Venum, Everlast & Adidas gloves for comfort, wrist support, speed & value. See the winners.",
//     url: "https://sportloom.com/reviews/best-boxing-gloves-for-beginners-2025",
//     type: "article",
//     images: [
//       {
//         url: "https://sportloom.com/images/reviews/best-boxing-gloves-for-beginners-2025/Hero.webp",
//         width: 1200,
//         height: 630,
//         alt: "Best boxing gloves for beginners 2025",
//       },
//     ],
//   },
//   alternates: {
//     canonical:
//       "https://sportloom.com/reviews/best-boxing-gloves-for-beginners-2025",
//   },
// };

export async function generateMetadata({params}: {params: Promise<{ slug: string }>}):Promise<Metadata> {
  const {slug} = await params
  const page = await getMDXPage(Folders.Reviews, slug);

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

export const dynamicParams = false;

export async function generateStaticParams(){
  const reviews = getAllSlugsFromTheFolder('reviews');
  return reviews.map(slug => ({slug}));
}


export default async function ReviewPage({params}: {params: Promise<{ slug: string }>}) {

  const {slug} = await params;
  const reviews = getAllSlugsFromTheFolder('reviews');
  if(!reviews.includes(slug)){
    notFound();
  }

  const page = await getMDXPage(Folders.Reviews, slug);
   const data = await compileMDX<ReviewFrontmatter>({
       source: page, 
       components: components,
       options: {parseFrontmatter: true}});

  // const jsonLd = {
  //   "@context": "https://schema.org",
  //   "@type": "ItemList",
  //   name: "Best Boxing Gloves for Beginners 2025 – Tested & Reviewed",
  //   description:
  //     "We tested Hayabusa, Venum, Everlast & Adidas gloves to find the best boxing gloves for beginners in 2025.",
  //   itemListElement: [
  //     {
  //       "@type": "ListItem",
  //       position: 1,
  //       name: "Hayabusa S4 PU Leather",
  //       url: "https://amzn.to/4mGDSbN",
  //     },
  //     {
  //       "@type": "ListItem",
  //       position: 2,
  //       name: "Venum Challenger 2.0",
  //       url: "https://amzn.to/4mzheSu",
  //     },
  //     {
  //       "@type": "ListItem",
  //       position: 3,
  //       name: "Everlast Powerlock 2",
  //       url: "https://amzn.to/4fAkzyx",
  //     },
  //     {
  //       "@type": "ListItem",
  //       position: 4,
  //       name: "Adidas Speed TILT 150",
  //       url: "https://amzn.to/45vQknP",
  //     },
  //   ],
  // };

  return (
    <>
      {data.content}
      {/* <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} /> */}
    </>
  
  );
}
