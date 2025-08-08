import getAllSlugsFromTheFolder from "@/lib/getAllSlugsFromTheFolder";
import ReviewCard from "../components/reviews/ReviewCard";

export default async function UsersPage(){

    const userSlugs = getAllSlugsFromTheFolder('users');

   return (
     <div>
        Here we have all users and 
        <h2>And Id from non struct annotation</h2>
        <ul>
            {userSlugs.map(user=>(
                
                <ReviewCard key={user} segment="users" slug={user}></ReviewCard>
            ))}
        </ul>

     </div>
   )
}