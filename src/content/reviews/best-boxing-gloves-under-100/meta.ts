import { ReviewMeta } from "@/Interfaces/reviewTypes";
import { TAGS } from "@/Interfaces/tags";

export const bestBoxingGlovesUnder100: ReviewMeta = {
  slug: "best-boxing-gloves-under-100",
  label: "Best boxing gloves under 100$",
  title: "Best Boxing Gloves Under $100 (2026) – Top Budget Picks Tested",
  description: "Looking for the best boxing gloves under $100? We tested and reviewed the top budget boxing gloves for beginners, sparring, and heavy bag training.",
  canonical: "https://sportloom.com/reviews/best-boxing-gloves-under-100",
  coverImage: "",
  contentType: "review",
  date: "2026-04-01",
  readingTime: "8 min",
  tags: [TAGS.USE_CASE.BEGINNERS, TAGS.PRODUCT.BOXING_GEAR, TAGS.PRICE.UNDER_100]
};

bestBoxingGlovesUnder100.coverImage = `/images/reviews/${bestBoxingGlovesUnder100.slug}-hero.webp`