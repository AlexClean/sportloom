import { howToChooseBoxingGloves } from "./how-to-choose-boxing-gloves/meta";
import { boxingGlovesSizeGuide } from "./boxing-gloves-size-guide/meta";
import { howToWrapYourHandsForBoxing } from "./how-to-wrap-your-hands-for-boxing/meta";
import { howToCleanBoxingGloves } from "./how-to-clean-boxing-gloves/meta";
import { ArticleMeta } from "@/Interfaces/articleTypes";

export const ARTICLE_META = [
    {
        slug: howToChooseBoxingGloves.slug,
        meta: howToChooseBoxingGloves,
    },
    {
        slug: boxingGlovesSizeGuide.slug,
        meta: boxingGlovesSizeGuide,
    },
    {
        slug: howToWrapYourHandsForBoxing.slug,
        meta: howToWrapYourHandsForBoxing,
    },
    {
        slug: howToCleanBoxingGloves.slug,
        meta: howToCleanBoxingGloves,
    },
];

export const ARTICLES_META_INDEX: Record<string, ArticleMeta> = {
    [howToChooseBoxingGloves.slug]: howToChooseBoxingGloves,
    [boxingGlovesSizeGuide.slug]: boxingGlovesSizeGuide,
    [howToWrapYourHandsForBoxing.slug]: howToWrapYourHandsForBoxing,
    [howToCleanBoxingGloves.slug]: howToCleanBoxingGloves,
}

export function slugIsExist(slug: string) {
    const _slug = ARTICLE_META.find(element => element.slug == slug)?.slug;
    if (!_slug) return false;
    return true;
}