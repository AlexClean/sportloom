import type { MDXComponents } from 'mdx/types'
import ReviewItem from './app/components/mdx/reviews/ReviewItem'
import ConsItem from './app/components/mdx/reviews/ConsItem'
import ProsItem from './app/components/mdx/reviews/ProsItem'
import ReviewHeader from './app/components/mdx/reviews/ReviewHeader'
import QuickPickItem from './app/components/mdx/reviews/QuickPickItem'
//import QuickPicks from './app/components/mdx/reviews/QuickPics'
//import FinalVerdict from './app/components/mdx/reviews/FinalVerdict'
import FinalVerdictItem from './app/components/mdx/reviews/FinalVerdictItem'
import CTA from './app/components/mdx/CTA/Cta'
import CTAItem from './app/components/mdx/CTA/CTAItem'
import FAQ from './app/components/mdx/FAQ/Faq'
import FaqItem from './app/components/mdx/FAQ/FaqItem'
import InfoBlock from './app/components/mdx/Text/InfoBlock'
import Image from 'next/image'
import { InternalLinkButton } from './app/components/common/button/InernalLinkButton/InternalLinkButtons'
import Link from 'next/link'
import {
   //ReviewHeader,
   AffiliateDisclosure,
//   QuickPicks,
//   ComparisonTable,
//   ProductSections,
//   FinalVerdict,
//   FAQSection,
//   RelatedLinks,
   AuthorBlock
 } from "@/app/components/mdx/review-v2";



export const components: MDXComponents = {
    AffiliateDisclosure,
    AuthorBlock,
    //ReviewHeader,
    ReviewItem,
    ConsItem,
    ProsItem,
    QuickPickItem,
    FinalVerdictItem,
    CTA,
    CTAItem,
    FAQ,
    FaqItem,
    InfoBlock,
    Image,
    InternalLinkButton,
    Link
}
