export type Summary = {
  title: string;
  description: string;
  slug: string;
  date?: string;
  cover?: string;
  type: "review" | "article";
  readingTime?: string;
}

export type RelatedLinkItem = {
    href: string;
    label: string;
};

export const ContentType = {
  Review: "review",
  Article: "article"
} as const

export type ContentType = typeof ContentType[keyof typeof ContentType]


export type BaseMeta = {
  slug: string;
  label: string;
  title: string;
  subtitle?: string;
  description: string;
  canonical: string;

  coverImage?: string;
  altText?:string;
  date?: string;
  readingTime?: string;
  relatedSlugs?: RelatedLinkItem[];

  tags?: string[];
  category?: string;

  contentType: ContentType;
  updatedAt?: string;
  featured?: boolean;
  published?: boolean;
};


export const ContentCategory = {
  Gloves: "gloves",
  Training: "training",
  Fighters: "fighters",
  Headgear: "headgear"
}
export type ContentCategory = typeof ContentCategory[keyof typeof ContentCategory];


export type ContentEntry = {
  slug: string;
  url: string;
  title: string;
  description: string;
  sport: "boxing";
  category: ContentCategory;
  contentType: ContentType;
  tags: string[];
  date?: string;
  image?: string;
}
