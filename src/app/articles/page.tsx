import { getAllArticlesSlugs } from "@/lib/getAllArticlesSlugs";
import ArticleCard from "../components/common/card/ArticleCard/ArticleCard";
import { capitalizeFirst } from "@/lib/string";

export default function ReviewsList() {

    const articles = getAllArticlesSlugs();

    return (
        <div className="max-w-5xl mx-auto p-6">
            <h1 className="text-2xl font-bold mb-6 ml-2">This is articles List</h1>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {articles.map((slug) => (
                    <ArticleCard key={slug} 
                    href={`articles/${slug}`} 
                    title={capitalizeFirst(slug.replace(/-/g, " "))} 
                    excerpt="A practical buyer’s guide on sizes, padding, and use cases."
                    readingTime="7 minutes"
                    />
                ))}
            </div>
        </div>
    );
}

