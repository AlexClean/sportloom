import { verdictIcons } from "@/app/components/mdx/icons";
import { BoxingReviewSpecs } from "./types";

export type ReviewHeaderData = {
    title: string;
    intro: string;
    heroSrc: string;
    heroAlt: string;
    className?: string;
};

export type ReviewQuickPickItem = {
    name: string;
    badge: string;
    amazonUrl: string;
    anchorHref: string;
    price: string;
    className?: string;
};

export type ReviewProduct = {
    title: string;
    subtitle: string;
    imgUrl: string;
    badge?: string;
    price?: string;
    anchor?: string;
    amazonUrl: string;
    summary?: string;
    whyItStandsOut?: string;
    fitAndComfort?: string;
    useCase?: string;
    bottomLine?: string;
    specs?: BoxingReviewSpecs;
    className?: string;
    details: ReviewDetails[];
};

export type ReviewDetails = {
    label: string;
    content: string;
};

export type ReviewInfoBlock = {
    title: string;
    content: string;
};


export type ReviewFaqItem = {
    question: string;
    answer: string;
};

export type ReviewLinkItem = {
    href: string;
    label: string;
};

export type ReviewVerdictItem = {
    title: string;
    badge: string;
    text: string;
    icon: keyof typeof verdictIcons;
};

export type ReviewPageData = {
    reviewHeader: ReviewHeaderData;
    preContentBlock: ReviewInfoBlock[];
    quickPick: {
        title: string;
        quickPicks: ReviewQuickPickItem[];
    }
    products: ReviewProduct[];
    postContentBlock: ReviewInfoBlock[];
    faq: ReviewFaqItem[];
    relatedLinks: ReviewLinkItem[];
    finalVerdict: ReviewVerdictItem[];
};