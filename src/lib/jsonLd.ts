import { ArticleFrontmatter } from "@/Interfaces/ArticleFrontmatter";
import { ReviewFrontmatter } from "@/Interfaces/ReviewFrontmatter";

export function buildReviewJsonLd(frontmatter: ReviewFrontmatter) {
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

export function buildArticleJsonLd(frontmatter: ArticleFrontmatter) {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: frontmatter.title,
    description: frontmatter.description,
    datePublished: frontmatter.date,
    dateModified: frontmatter.date,
    url: frontmatter.canonical,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": frontmatter.canonical,
    },
    image: frontmatter.coverImage ? [frontmatter.coverImage] : undefined,
    author: {
      "@type": "Organization",
      name: "SportLoom",
      url: "https://sportloom.com",
    },
    publisher: {
      "@type": "Organization",
      name: "SportLoom",
      logo: {
        "@type": "ImageObject",
        url: "https://sportloom.com/favicon.ico",
      },
    },
  }
}