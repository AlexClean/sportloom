import { getLatestContentByType, getRelatedContentBySlugs } from "@/lib/content/contentSorter";
import CardBase from "../../common/card/CardBase";
import Image from "next/image";
import { META_INDEX } from "@/content/generated/metaRegistry";
import Link from "next/link";
import styles from "./RightSidebar.module.css";

type RightSidebarProps = {
  slug: string;
}


export default function RightSidebar({ slug }: RightSidebarProps) {

  const reviews = getLatestContentByType("review", 1, slug);
  const articles = getLatestContentByType("article", 1, slug);
  const article = META_INDEX[slug];
  const relatedArticles = getRelatedContentBySlugs(article.relatedSlugs || []);

  return (
    <aside className="content-layout__right">
      <h3 className={styles["title"]}>Latest Review</h3>
      <div className="mb-3 space-y-3 text-slate-600 dark:text-slate-300">
        {reviews.map((review) => (
          <CardBase key={review.slug}
            href={`/${review.slug}`}
            title={review.title}
            excerpt={review.description}
            metaLeft={<span className={styles["review-badge"]}>{review.contentType}</span>}
            media={<Link href={`/${review.slug}`}>
              <Image src={review.coverImage || "/images/default-cover.webp"}
                alt={review.altText || "boxing"}
                width={400}
                height={300}
                sizes="(max-width: 1024px) 100vw, 320px"
                className="h-32 w-full object-cover rounded-lg" />
            </Link>}
          />
        ))}
      </div>

      <h3 className={styles["title"]}>Latest Article</h3>
      <div className="mb-3 space-y-3 text-slate-600 dark:text-slate-300">
        {articles.map((article) => (
          <CardBase key={article.slug}
            href={`/${article.slug}`}
            title={article.title}
            excerpt={article.description}
            metaLeft={<span className={styles["article-badge"]}>{article.contentType}</span>}
            media={<Link href={`/${article.slug}`}>
              <Image src={article.coverImage || "/images/default-cover.webp"}
                alt={article.altText || "boxing"}
                width={400}
                height={300}
                sizes="(max-width: 1024px) 100vw, 320px"
                className="h-32 w-full object-cover rounded-lg" />
            </Link>}
          />
        ))}
      </div>

      <h3 className={styles["title"]}>Recommended</h3>
      <div className="mb-3 space-y-3 text-slate-600 dark:text-slate-300">
        {relatedArticles.map((article) => (
          <CardBase key={article?.slug}
            href={`/${article?.slug}`}
            title={article?.title || "Title"}
            excerpt={article?.description}
            metaLeft={<span className={article?.contentType == "review" ? styles["review-badge"] : styles["article-badge"]}>{article?.contentType}</span>}
            media={<Link href={`/${article?.slug}`}>
              <Image src={article?.coverImage || "/images/default-cover.webp"}
                alt={article?.altText || "boxing"}
                width={400}
                height={300}
                sizes="(max-width: 1024px) 100vw, 320px"
                className="h-32 w-full object-cover rounded-lg" />
            </Link>}
          />
        ))}
      </div>
    </aside>


  );
}