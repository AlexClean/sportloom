import { verdictIcons } from "@/app/components/mdx/icons";

export type ProductCatalogItem = {
    key: string;
    title: string;
    affiliateUrl: string;
    image: {
        src: string;
        alt: string;
    };
    brand: string;
    price: string;
    specs: ProductSpecs;
}

export type ReviewMeta = {
    title: string;
    description: string;
    canonical: string;
    coverImage?: string;
    date?: string;
    readingTime?: string;
}

export type ProductSpecs = {
    weights?: string;
    material?: string;
    closure?: string;
    fit?: string;
    bestFor?: string;
}

export type ReviewHeaderData = {
    title: string;
    intro: string;
    heroSrc: string;
    heroAlt: string;
    className?: string;
};

export type ReviewQuickPickEntry = {
    productKey: string;
    badge: string;
};

export type ReviewProductEntry = {
    productKey: string;
    subtitle: string;
    badge?: string;
    summary: string;
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
    slug: string;
    meta: ReviewMeta;
    reviewHeader: ReviewHeaderData;
    preContentBlocks: ReviewInfoBlock[];
    quickPick: {
        title: string;
        quickPicks: ReviewQuickPickEntry[];
    }
    products: ReviewProductEntry[];
    postContentBlocks: ReviewInfoBlock[];
    faq: ReviewFaqItem[];
    relatedLinks: ReviewLinkItem[];
    finalVerdict: ReviewVerdictItem[];
    aboutTheAuthor: ReviewInfoBlock;
};