import { ReviewProductEntry } from "@/Interfaces/reviewTypes";
import { BaseMeta } from "@/Interfaces/types";
import { getProductByKey } from "@/data/catalog";

export function buildReviewJsonLd(metaData: BaseMeta | undefined, products:ReviewProductEntry[] = []) {
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

export function buildArticleJsonLd(metaData: BaseMeta | undefined) {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: metaData?.title,
    description: metaData?.description,
    datePublished: metaData?.date,
    dateModified: metaData?.date,
    url: metaData?.canonical,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": metaData?.canonical,
    },
    image: metaData?.coverImage ? [metaData?.coverImage] : undefined,
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