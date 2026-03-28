import ReviewCard from "../components/common/card/ReviewCard/ReviewCard";
import { REVIEW_META_INDEX } from "@/content/reviews/reviewMeta";


export default async function UsersPage(){

   return (
     <div className="max-w-5xl mx-auto p-6">
        <h1 className="text-center text-3xl mb-6">Latest Reviews</h1>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {REVIEW_META_INDEX.map(review =>(
                
                <ReviewCard 
                key={review.slug} 
                href={`reviews/${review.slug}`} 
                title={review.meta.title} 
                excerpt={review.meta.description}></ReviewCard>
            ))}
        </div>

     </div>
   )
}