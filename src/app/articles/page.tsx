import { getAllArticlesSlugs } from "@/lib/getAllArticlesSlugs"
import ReviewCard from "@/app/components/reviews/ReviewCard";

export default function ReviewsList() {

    const articles = getAllArticlesSlugs();
    console.log('article is ->', articles);

    return (
        <div className="max-w-5xl mx-auto p-6">
            <h1 className="text-2xl font-bold mb-6 ml-2">This is articles List</h1>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {articles.map((slug) => (
                    <ReviewCard key={slug} segment='articles' slug={slug} />
                ))}
            </div>
        </div>
    );
}

