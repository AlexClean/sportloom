import  getContentFromMDX from "@/lib/getContentFromMDX";
import { compileMDX } from "next-mdx-remote/rsc";
import { components } from "@/mdx-components"
import { ReviewFrontmatter } from "@/Interfaces/ReviewFrontmatter";
import { generateMetadata } from "@/lib/generateMetadata";

export default async function UserId({params}: {params: Promise<{ slug: string }>}) {

  const { slug } = await params;
  const page = await getContentFromMDX("users", slug);;

 const data = await compileMDX<ReviewFrontmatter>({
       source: page, 
       components: components,
       options: {parseFrontmatter: true}});

  console.log("frontmatter from Users -> ", data.frontmatter)
  const metadata = generateMetadata(data.frontmatter)

  console.log('metadata is ->', metadata)
   return (
     <>
     <h1>{data.frontmatter.title}</h1>
       {data.content}
     </>
   )
}