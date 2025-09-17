import getAllSlugsFromTheFolder from "@/lib/getAllSlugsFromTheFolder";
import ReviewCard from "../components/common/card/ReviewCard/ReviewCard";

export default async function UsersPage(){

    const userSlugs = getAllSlugsFromTheFolder('users');

   return (
     <div className="text-center">
        <h1 className="">This is Test Page for mdx with fake users</h1>
        <h2 className="mb-2">And this is cards from th content folder</h2>
        <ul className="flex gap-2 justify-center">
            {userSlugs.map(user=>(
                
                <ReviewCard key={user} href={`users/${user}`} title={"Title for the User"} ></ReviewCard>
            ))}
        </ul>

     </div>
   )
}