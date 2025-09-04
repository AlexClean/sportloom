import { ReviewFrontmatter } from "@/Interfaces/ReviewFrontmatter";

export function generateMetadata(frontmatter: ReviewFrontmatter) {

    return {
          title: frontmatter.title,
    description: frontmatter.description,
    openGraph: {
      title: frontmatter.title,
      description: frontmatter.description,
      type: frontmatter.category,
      url: frontmatter.canonical,
      images: frontmatter.coverImage
        ? [
            {
              url: frontmatter.coverImage,
              width: 1200,
              height: 630,
              alt: frontmatter.title,
            },
          ]
        : [],
    },
    alternates: {
      canonical: frontmatter.canonical
    }
  }
}