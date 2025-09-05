import type { MDXComponents } from 'mdx/types'
import ReviewItem from './app/components/mdx/reviews/ReviewItem'
import ConsItem from './app/components/mdx/reviews/ConsItem'
import ProsItem from './app/components/mdx/reviews/ProsItem'
import ReviewHeader from './app/components/mdx/reviews/ReviewHeader'
import QuickPickItem from './app/components/mdx/reviews/QuickPickItem'
import QuickPicks from './app/components/mdx/reviews/QuickPics'

export const components: MDXComponents = {
    ReviewHeader,
    ReviewItem,
    ConsItem,
    ProsItem,
    QuickPickItem,
    QuickPicks
}
