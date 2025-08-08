import { MDXRemote } from "next-mdx-remote/rsc";


export default function TestMdxProps() {
    
  return (
    <MDXRemote
          source={`# Hello Test MDX
            This is from TestMDx

            ## This is Header 2
            `}     />
  )
}