import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { ReviewFrontmatter } from '../Interfaces/ReviewFrontmatter'

const reviewsDir = path.join(process.cwd(), 'src', 'content', 'reviews')

export interface ReviewDoc {
  frontmatter: ReviewFrontmatter;
  content: string;        // raw MDX body
}

export function getAllReviewSlugs(): string[] {
  if (!fs.existsSync(reviewsDir)) return [];
  return fs
    .readdirSync(reviewsDir)
    .filter(f => f.endsWith('.mdx'))
    .map(f => f.replace(/\.mdx$/i, ''));
}



export async function generateStaticParams() {
  return getAllReviewSlugs().map(slug => ({ slug }));
}