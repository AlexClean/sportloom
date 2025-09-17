export interface ArticleFrontmatter {
    title: string
    description: string
    date: Date
    slug: string
    category?: string
    coverImage?: string
    readingTime?: string
    canonical: string
}