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

function normalizeFrontmatter(
  data: unknown,
  fallbackSlug: string
): ReviewFrontmatter {
  const d = (data ?? {}) as Record<string, unknown>;

  const title = typeof d.title === 'string' ? d.title : '';
  const slug  = typeof d.slug  === 'string' && d.slug.trim() ? d.slug : fallbackSlug;
  const category = typeof d.category === 'string' ? d.category : 'general';
  const date = typeof d.date === 'string' ? d.date : new Date().toISOString().slice(0, 10);
  const coverImage = typeof d.coverImage === 'string' ? d.coverImage : undefined;
  const affiliateUrl = typeof d.affiliateUrl === 'string' ? d.affiliateUrl : undefined;
  const excerpt = typeof d.excerpt === 'string' ? d.excerpt : undefined;

  if (!title) {
    throw new Error(`Missing required frontmatter "title" in review "${fallbackSlug}.mdx"`);
  }

  return { title, slug, category, date, coverImage, affiliateUrl, excerpt };
}

export function getReviewBySlug(slug: string): ReviewDoc {
  const filePath = path.join(reviewsDir, `${slug}.mdx`);
  if (!fs.existsSync(filePath)) {
    throw new Error(`Review file not found: ${filePath}`);
  }
  const source = fs.readFileSync(filePath, 'utf-8');
  const { content, data } = matter(source);
  const frontmatter = normalizeFrontmatter(data, slug);
  return { frontmatter, content };
}

export function getAllReviews(): ReviewDoc[] {
  return getAllReviewSlugs().map(slug => getReviewBySlug(slug));
}