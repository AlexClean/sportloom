import ReviewCard from "../components/common/card/ReviewCard/ReviewCard";
import { getAllSummaries } from "@/lib/content";

export default async function UsersPage(){

    const userSlugs = await getAllSummaries('users');

   return (
     <div className="max-w-5xl mx-auto p-6">
        <h1 className="">This is Test Page for mdx with fake users</h1>
        <h2 className="mb-2">And this is cards from th content folder</h2>
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