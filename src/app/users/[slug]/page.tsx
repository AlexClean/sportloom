import { CustomMDX } from "@/app/components/common/mdx/mdx-remote";
import { getContentMdx } from "@/lib/mdx";

export default async function UserId({params}: {params: Promise<{ slug: string }>}) {

  const { slug } = await params;
  const content = await getContentMdx("users", slug);;

  return (
    <CustomMDX
      source= {content}
    />
  )
}