import getContentFromMDX from "@/lib/getContentFromMDX";
import { CustomMDX } from "@/app/components/common/mdx/mdx-remote";

export default async function TestMdxProps() {
    const page =await getContentFromMDX('users', 'testmdx');
  return (
    <CustomMDX
          source={page}
           />
  )
}