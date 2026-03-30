import { BaseMeta } from "./types";

export type ArticleMeta = BaseMeta & {
  contentType: "article";

  articleType?: "guide" | "how-to" | "comparison";
};