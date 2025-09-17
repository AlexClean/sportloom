import ReviewCard from "@/app/components/common/card/ReviewCard/ReviewCard";
import { getAllSummaries } from "@/lib/content";
import { Folders } from "../_constants/constants";

export default async function ReviewsList() {

    const reviews = await getAllSummaries(Folders.Reviews);

    return (
        <div className="max-w-5xl mx-auto p-6">
            <h1 className="text-2xl font-bold mb-6 ml-2">This is review List</h1>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {reviews.map((review) => (
                    <ReviewCard 
                    key={review.slug} 
                    title={review.title} 
                    excerpt={review.description} 
                    href={`${Folders.Reviews}/${review.slug}`} />
                ))}
            </div>
        </div>
    );
}