import { getReviewBySlug } from "./reviews";

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
    const {slug} = await params;
  try {
    const { frontmatter } = getReviewBySlug(slug);
    return {
      title: frontmatter.title,
      description: frontmatter.excerpt ?? '',
      openGraph: {
        title: frontmatter.title,
        description: frontmatter.excerpt ?? '',
        images: frontmatter.coverImage ? [frontmatter.coverImage] : [],
      },
    };
  } catch {
    return {};
  }
}