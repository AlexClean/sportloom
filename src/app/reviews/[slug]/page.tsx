import { notFound } from 'next/navigation';
import { MDXRemote } from 'next-mdx-remote/rsc';
import { getAllReviewSlugs, getReviewBySlug } from '@/lib/reviews';
import Link from 'next/link';

export async function generateStaticParams() {
  return getAllReviewSlugs().map(slug => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
    const {slug} = await params;
  try {
    const { frontmatter } = getReviewBySlug(slug);
    console.log('slug is ' + slug)
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

export default async function ReviewPage({ params }: { params: Promise<{ slug: string }> }) {
    const {slug} = await params;
  try {
    const { frontmatter, content } = getReviewBySlug(slug);

    return (
      <article className="prose mx-auto py-10">
        <h1>{frontmatter.title}</h1>
        {frontmatter.coverImage && (
            <img src={frontmatter.coverImage} alt="" className="rounded-lg" /> 
        )}
        <MDXRemote source={content} />
        {frontmatter.affiliateUrl && (
          <Link
            href={frontmatter.affiliateUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn mt-6 inline-block"
          >
            Buy on Amazon
          </Link>
        )}
      </article>
    );
  } catch {
    notFound();
  }
}
