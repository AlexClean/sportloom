import ArticleCard from "../components/common/card/ArticleCard/ArticleCard";
import { capitalizeFirst } from "@/lib/string";
import { getAllSummaries } from "@/lib/content";
import { Folders } from "../_constants/constants";

export default async function ReviewsList() {

    const articles = await getAllSummaries(Folders.Articles);
    
    return (
        <div className="max-w-5xl mx-auto p-6">
            <h1 className="text-2xl font-bold mb-6 ml-2">This is articles List</h1>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {articles.map((article) => (
                    <ArticleCard key={article.slug} 
                    href={`articles/${article.slug}`} 
                    title={capitalizeFirst(article.title)} 
                    excerpt={article.description}
                    readingTime="7 minutes"
                    />
                ))}
            </div>
        </div>
    );
}

