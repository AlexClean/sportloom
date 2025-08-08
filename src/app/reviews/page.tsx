import { getAllReviewSlugs } from "../../../lib/reviews"
import ReviewCard from "../components/reviews/ReviewCard";

export default function ReviewsList() {

    const reviews = getAllReviewSlugs();
    return (
        <div className="max-w-5xl mx-auto p-6">
            <h1 className="text-2xl font-bold mb-6">This is review List</h1>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {reviews.map((slug) => (
                    <ReviewCard key={slug} slug={slug} />
                ))}
            </div>
        </div>
    );
}