import ReviewCard from "../components/common/card/ReviewCard/ReviewCard";
//import { getAllSummaries } from "@/lib/content";
import {getAllSummaries} from "@/lib/reviewService";

export default async function UsersPage(){

    const userSlugs = await getAllSummaries('users');

   return (
     <div className="max-w-5xl mx-auto p-6">
        <h1 className="text-center text-3xl mb-6">This is Test Page for mdx to make changes</h1>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {userSlugs.map(user =>(
                
                <ReviewCard 
                key={user.slug} 
                href={`users/${user.slug}`} 
                title={user.title} 
                excerpt={user.description}></ReviewCard>
            ))}
        </div>

     </div>
   )
}