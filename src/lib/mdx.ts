import fs from "fs/promises";
import path from "node:path";

export async function getContentMdx(folder: string, slug: string) {
  const filePath = path.join(process.cwd(), "src/content/", folder, `${slug}.mdx`);
  const content =await fs.readFile(filePath, "utf8");

  return content; // ReactNode
}
