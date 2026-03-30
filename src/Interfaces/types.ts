// export type BoxingReviewSpecs = {
//   weights?: string;   // "12–16 oz"
//   material?: string;  // "Genuine leather"
//   closure?: string;   // "Velcro"
//   fit?: string;       // "Snug / roomy"
//   bestFor?: string;   // "Heavy bag, technique"
// };

export type Summary = {
  title: string;
  description: string;
  slug: string;
  date?: string;
  cover?: string;
  type: "review" | "article";
  readingTime?: string;
}

export type ContentType = "review" | "article";

export type BaseMeta = {
  slug: string;
  title: string;
  description: string;
  canonical: string;

  coverImage?: string;
  date?: string;
  readingTime?: string;

  tags?: string[];
  category?: string;

  contentType: ContentType;
  chanhedAt?: string;
  featured?: boolean;
  published?: boolean;
};