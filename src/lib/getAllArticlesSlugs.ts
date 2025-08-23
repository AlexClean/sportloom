import fs from 'fs'
import path from "path";

const articlesDir = path.join(process.cwd(), 'src', 'content', 'articles')

export function getAllArticlesSlugs(): string[] {
  if (!fs.existsSync(articlesDir)) return [];
  return fs
    .readdirSync(articlesDir)
    .filter(f => f.endsWith('.mdx'))
    .map(f => f.replace(/\.mdx$/i, ''));
}
