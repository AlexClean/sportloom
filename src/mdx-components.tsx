import type { MDXComponents } from 'mdx/types'
import Image from 'next/image'
import Link from 'next/link'
import { ProductMention, RecommendedGear, GloveSizeCalculator, ResourceCard } from './app/components/common'

export const components: MDXComponents = {
    Image: (props) => <Image {...props} alt={props.alt || "Image"} width={Number(props.width) || 1024} height={Number(props.height) || 740} />,
    Link,
    ProductMention,
    RecommendedGear,
    GloveSizeCalculator,
    ResourceCard
}
