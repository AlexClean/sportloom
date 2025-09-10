import { ReviewFrontmatter } from "@/Interfaces/ReviewFrontmatter";

export default function buildReviewJsonLd(frontmatter: ReviewFrontmatter){
    const jsonLd = {
    '@context': 'https://schema.org',
    '@type': "ItemList",
    name: frontmatter.title,
    image: frontmatter.coverImage,
    description: frontmatter.description,
    itemListElement: frontmatter.reviewItems?.map((item) => ({
        "@type": item.type,
        position: item.position,
        name: item.name,
        url: item.url
    }))
  }
  return jsonLd;
}