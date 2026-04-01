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
  label: string;
  title: string;
  description: string;
  canonical: string;

  coverImage?: string;
  date?: string;
  readingTime?: string;

  tags?: string[];
  category?: string;

  contentType: ContentType;
  updatedAt?: string;
  featured?: boolean;
  published?: boolean;
};