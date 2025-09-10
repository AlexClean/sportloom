export interface ReviewFrontmatter {
  title: string
  description: string
  category: string
  date: string
  updated?: string
  canonical: string
  tags?: string[]
  coverImage?: string
  affiliateUrl?: string[]
  excerpt?: string
  reviewItems: listItems[]
}

export interface listItems {
    type: string
    position: number
    name: string
    url: string
}
