import type { NextConfig } from "next";
import createMDX from '@next/mdx'

const withMDX = createMDX({
  // Add markdown plugins here, as desired
})

const nextConfig: NextConfig = {
  /* config options here */
  pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],

  async redirects() {
    return [
      {
        source: "/reviews/best-boxing-gloves-for-heavy-bag-2025",
        destination: "/boxing/gloves/best-boxing-gloves-for-heavy-bag",
        permanent: true
      },
      {
        source:"/articles/boxing-gloves-size-guide",
        destination:"/boxing/gloves/boxing-gloves-size-guide",
        permanent:true
      }
    ]
  }

};


export default withMDX(nextConfig);