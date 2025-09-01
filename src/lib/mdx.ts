import fs from "node:fs/promises";
import path from "node:path";
import { compileMDX } from "next-mdx-remote/rsc";

const mdxComponents = {
  // h2: (p:any) => <h2 className="text-2xl font-bold" {...p} />,
};

export async function getContentMdx(folder: string, slug: string) {
  const filePath = path.join(process.cwd(), "src/content/", folder, `${slug}.mdx`);

  const source = await fs.readFile(filePath, "utf8");

  const { content } = await compileMDX({
    source,
    components: mdxComponents,
    options: { parseFrontmatter: false },
  });

  return content; // ReactNode
}
