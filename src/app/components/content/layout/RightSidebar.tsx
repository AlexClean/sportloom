import { getLatestContentByType } from "@/lib/content/contentSorter";
import CardBase from "../../common/card/CardBase";
import Image from "next/image";



export default function RightSidebar() {

  const reviews = getLatestContentByType("review", 2);
  const articles = getLatestContentByType("article", 2);

  return (
    <aside className="content-layout__right bg-white p-4 text-sm dark:border-slate-800 dark:bg-slate-950">    
      <p className="mb-3 font-semibold text-slate-900 dark:text-slate-100">Recommended</p>
      <div className="space-y-3 text-slate-600 dark:text-slate-300">
        {reviews.map((review) => (
          <CardBase key={review.slug}
            href={`/${review.slug}`}
            title={review.title}
            excerpt={review.description}
            metaLeft={<span className="inline-flex items-center rounded bg-blue-50 px-2 py-0.5 text-blue-700">{review.contentType}</span>}  
            media={<Image src={review.coverImage || "/images/default-cover.webp"} 
                          alt={review.altText || "boxing"} 
                          width={400}
                          height={300}
                          className="h-32 w-full object-cover rounded-lg" />}
          />
        ))}
        {articles.map((article) => (
          <CardBase key={article.slug}
            href={`/${article.slug}`}
            title={article.title}
            excerpt={article.description}
            metaLeft={<span className="inline-flex items-center rounded bg-green-50 px-2 py-0.5 text-green-700">{article.contentType}</span>}
            media={<Image src={article.coverImage || "/images/default-cover.webp"} 
                      alt={article.altText || "boxing"} 
                      width={400}
                      height={300}
                      className="h-32 w-full object-cover rounded-lg" />}
          />
        ))}
      </div>
    </aside>

  
  );
}