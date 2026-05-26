import { getLatestContentByType, getRelatedContentBySlugs } from "@/lib/content/contentSorter";
import CardBase from "../../common/card/CardBase";
import Image from "next/image";
import { META_INDEX } from "@/content/generated/metaRegistry";
import Link from "next/link";

type RightSidebarProps = {
  slug: string;
}


export default function RightSidebar({ slug }: RightSidebarProps) {

  const reviews = getLatestContentByType("review", 1);
  const articles = getLatestContentByType("article", 1);
  const article = META_INDEX[slug];
  const relatedArticles = getRelatedContentBySlugs(article.relatedSlugs || []);

  return (
    <aside className="content-layout__right bg-white p-4 text-sm dark:border-slate-800 dark:bg-slate-950">
      <h3 className="mb-3 text-lg text-center font-semibold text-slate-900 dark:text-slate-100">Latest Review</h3>
      <div className="mb-3 space-y-3 text-slate-600 dark:text-slate-300">
        {reviews.map((review) => (
          <CardBase key={review.slug}
            href={`/${review.slug}`}
            title={review.title}
            excerpt={review.description}
            metaLeft={<span className="inline-flex items-center rounded bg-blue-50 px-2 py-0.5 text-blue-700">{review.contentType}</span>}
            media={<Link href={`/${review.slug}`}>
              <Image src={review.coverImage || "/images/default-cover.webp"}
                alt={review.altText || "boxing"}
                width={400}
                height={300}
                className="h-32 w-full object-cover rounded-lg" />
            </Link>}
          />
        ))}
      </div>

      <h3 className="mb-3 text-center text-lg font-semibold text-slate-900 dark:text-slate-100">Latest Article</h3>
      <div className="mb-3 space-y-3 text-slate-600 dark:text-slate-300">
        {articles.map((article) => (
          <CardBase key={article.slug}
            href={`/${article.slug}`}
            title={article.title}
            excerpt={article.description}
            metaLeft={<span className="inline-flex items-center rounded bg-green-50 px-2 py-0.5 text-green-700">{article.contentType}</span>}
            media={<Link href={`/${article.slug}`}>
              <Image src={article.coverImage || "/images/default-cover.webp"}
                alt={article.altText || "boxing"}
                width={400}
                height={300}
                className="h-32 w-full object-cover rounded-lg" />
            </Link>}
          />
        ))}
      </div>

      <h3 className="mb-3 text-center text-lg font-semibold text-slate-900 dark:text-slate-100">Recommended</h3>
      <div className="mb-3 space-y-3 text-slate-600 dark:text-slate-300">
        {relatedArticles.map((article) => (
          <CardBase key={article?.slug}
            href={`/${article?.slug}`}
            title={article?.title || "Title"}
            excerpt={article?.description}
            metaLeft={<span className="inline-flex items-center rounded bg-green-50 px-2 py-0.5 text-green-700">{article?.contentType}</span>}
            media={<Link href={`/${article?.slug}`}>
              <Image src={article?.coverImage || "/images/default-cover.webp"}
                alt={article?.altText || "boxing"}
                width={400}
                height={300}
                className="h-32 w-full object-cover rounded-lg" />
            </Link>}
          />
        ))}
      </div>
    </aside>


  );
}