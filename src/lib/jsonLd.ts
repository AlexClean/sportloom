import { ArticleFrontmatter } from "@/Interfaces/ArticleFrontmatter";
import { ReviewMeta, ReviewProductEntry } from "@/Interfaces/reviewTypes";
import { getProductByKey } from "@/data/catalog";

export function buildReviewJsonLd(metaData: ReviewMeta | undefined, products:ReviewProductEntry[] = []) {
  return {
    '@context': 'https://schema.org',
    '@type': "ItemList",
    name: metaData?.title,
    image: metaData?.coverImage,
    description: metaData?.description,
    itemListElement: products.map((item, index) => 
      {
        const productData = getProductByKey(item.productKey);
        return {
      "@type": "ListItem",
      position: index + 1,
      name: productData?.title,
      url: productData?.affiliateUrl,
      image: productData?.image.src,
      description: item.summary,
    }
  }),
  };
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