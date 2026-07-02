import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { META_LIST } from "@/content/generated/metaRegistry";
import styles from "@/styles/Gloves.module.css";
import { ResourceCard } from "@/app/components/common/ResourceCard/ResourceCard";

export const metadata: Metadata = {
    title: "Boxing Gloves Guides, Reviews and Comparisons | Sportloom",
    description: "Find the best boxing gloves for beginners, heavy bag training, sparring, wrist support, small hands, budgets, and real training use.",
    alternates: {
        canonical: "https://sportloom.com/boxing/gloves",
    },
};

type HubCard = {
    href: string;
    title: string;
    text: string;
    label: string;
};

type RoadmapItem = {
    title: string;
    text: string;
    href: string;
    linkLabel: string;
};

const gloveUseCases: HubCard[] = [
    {
        href: "/boxing/gloves/best-boxing-gloves-for-beginners",
        title: "Beginner Boxing Gloves",
        text: "Start here if you are buying your first pair and need simple, safe, realistic options without overpaying.",
        label: "Beginners",
    },
    {
        href: "/boxing/gloves/best-boxing-gloves-for-heavy-bag",
        title: "Heavy Bag Gloves",
        text: "Find gloves with denser padding, better wrist support, and enough protection for repeated bag impact.",
        label: "Bag Work",
    },
    {
        href: "/reviews/best-boxing-gloves-for-sparring-2026",
        title: "Sparring Gloves",
        text: "Compare softer, partner-friendly gloves for controlled sparring rounds and regular gym use.",
        label: "Sparring",
    },
    {
        href: "/reviews/best-boxing-gloves-under-100",
        title: "Boxing Gloves Under $100",
        text: "Budget-friendly gloves that make sense for beginners, fitness boxing, and casual heavy bag sessions.",
        label: "Budget",
    },
    {
        href: "/boxing/gloves/best-boxing-gloves-for-wrist-support",
        title: "Gloves for Wrist Support",
        text: "Good choices if your wrist bends on hooks, your wraps feel unstable, or bag work beats up your hands.",
        label: "Support",
    },
    {
        href: "/boxing/gloves/best-boxing-gloves-for-small-hands",
        title: "Gloves for Small Hands",
        text: "A focused guide for boxers who struggle with roomy hand compartments, loose wrists, or floating fists inside gloves.",
        label: "Fit",
    },
];

const roadmapItems: RoadmapItem[] = [
    {
        title: "1. Decide what the gloves are mainly for",
        text: "Heavy bag, sparring, fitness boxing, and all-around training do not need the same glove feel. Start with your real use case before looking at brands.",
        href: "/boxing/gloves/bag-gloves-vs-boxing-gloves",
        linkLabel: "Bag gloves vs boxing gloves",
    },
    {
        title: "2. Choose the right glove size",
        text: "Most beginners get confused by 10 oz, 12 oz, 14 oz, and 16 oz. The right size depends on your body weight, training type, and whether you spar.",
        href: "/boxing/gloves/boxing-gloves-size-guide",
        linkLabel: "Boxing gloves size guide",
    },
    {
        title: "3. Check fit before chasing premium brands",
        text: "A famous glove can still feel wrong if the hand compartment is too wide, too narrow, too long, or unstable around your wrist.",
        href: "/boxing/gloves/best-boxing-gloves-for-small-hands",
        linkLabel: "Gloves for small hands",
    },
    {
        title: "4. Match padding to your training style",
        text: "Soft padding is usually better for sparring. Denser feedback can feel better on the bag. The wrong padding type is one reason beginners feel hand pain.",
        href: "/boxing/gloves/foam-types-padding-guide",
        linkLabel: "Foam and padding guide",
    },
];

const guideSlugs = [
    "boxing/gloves/boxing-gloves-size-guide",
    "articles/how-to-choose-boxing-gloves",
    "boxing/gloves/how-much-do-boxing-gloves-cost",
    "boxing/gloves/how-long-do-boxing-gloves-last",
    "boxing/gloves/lace-up-vs-velcro-boxing-gloves",
    "boxing/gloves/foam-types-padding-guide",
    "articles/how-to-clean-boxing-gloves",
    "articles/how-to-wrap-your-hands-for-boxing",
];

const reviewSlugs = [
    "boxing/gloves/best-boxing-gloves-for-beginners",
    "boxing/gloves/best-boxing-gloves-for-heavy-bag",
    "boxing/gloves/best-boxing-bag-gloves",
    "boxing/gloves/best-boxing-gloves-for-wrist-support",
    "boxing/gloves/best-boxing-gloves-for-small-hands",
    "reviews/best-boxing-gloves-under-100",
    "reviews/best-boxing-gloves-for-sparring-2026",
    "boxing/gloves/best-boxing-gloves-for-training",
];

const faqItems = [
    {
        question: "What boxing gloves should a beginner buy first?",
        answer: "Most beginners should start with comfortable all-around training gloves, usually 12–16 oz depending on body size and training type. If you will spar, ask your coach before buying because many gyms require 16 oz gloves.",
    },
    {
        question: "Are heavy bag gloves different from regular boxing gloves?",
        answer: "Yes. Dedicated bag gloves usually feel denser and are built for repeated impact on the bag. Regular training gloves can still work, especially for beginners, but serious bag work benefits from stronger wrist support and more durable padding.",
    },
    {
        question: "What size boxing gloves do I need?",
        answer: "For general training, many adults use 12 oz, 14 oz, or 16 oz gloves. Lighter gloves feel faster on pads and bags, while 16 oz gloves are more common for sparring and extra protection.",
    },
    {
        question: "Should I buy lace-up or Velcro boxing gloves?",
        answer: "Velcro gloves are easier for beginners because you can put them on without help. Lace-up gloves can feel more secure, but they are less convenient for normal gym training unless you use lace converters.",
    },
    {
        question: "How much should I spend on boxing gloves?",
        answer: "A beginner can often find usable gloves under $100. If you train several times per week, better mid-range or premium gloves can be worth it for wrist support, comfort, durability, and hand protection.",
    },
    {
        question: "Can I use the same boxing gloves for bag work and sparring?",
        answer: "You can when you are starting, but it is not ideal long term. Bag work wears down padding, and sparring gloves should stay soft and partner-friendly. Many regular boxers eventually keep separate gloves for bag work and sparring.",
    },
];

function formatDate(date?: string) {
    if (!date) return "Sportloom guide";

    return new Intl.DateTimeFormat("en", {
        year: "numeric",
        month: "short",
        day: "numeric",
    }).format(new Date(date));
}

function getContentBySlugs(slugs: string[]) {
    return slugs
        .map((slug) => META_LIST.find((entry) => entry.slug === slug && entry.published !== false))
        .filter(Boolean);
}

function getPublishedGloveContent() {
    return META_LIST
        .filter((entry) => entry.published !== false)
        .filter((entry) => entry.slug.startsWith("boxing/gloves/") || entry.slug.startsWith("reviews/best-boxing-gloves") || entry.slug === "articles/how-to-choose-boxing-gloves" || entry.slug === "articles/boxing-gloves-size-guide" || entry.slug === "articles/how-to-clean-boxing-gloves" || entry.slug === "articles/how-to-wrap-your-hands-for-boxing")
        .sort((a, b) => new Date(b.updatedAt || b.date || 0).getTime() - new Date(a.updatedAt || a.date || 0).getTime());
}

function isComparisonArticle(entry: (typeof META_LIST)[number]) {
    const title = `${entry.title || ""} ${entry.label || ""}`.toLowerCase();
    return entry.slug.includes("-vs-") || title.includes(" vs ") || entry.articleType === "comparison";
}

export default function BoxingGlovesPage() {
    const gloveContent = getPublishedGloveContent();
    const latestGloveContent = gloveContent.slice(0, 6);
    const reviewPages = getContentBySlugs(reviewSlugs);
    const guidePages = getContentBySlugs(guideSlugs);
    const comparisonPages = gloveContent.filter(isComparisonArticle).slice(0, 4);

    return (
        <main className={styles.page}>
            <section className={styles.hero}>
                <div className={styles.heroContent}>
                    <span className={styles.eyebrow}>Boxing Gloves Hub</span>
                    <h1 className={styles.heroTitle}>Boxing gloves guides, reviews, and honest buying advice.</h1>
                    <p className={styles.heroText}>Find the right boxing gloves for your hands, budget, and training style. Sportloom covers beginner gloves, heavy bag gloves, sparring gloves, glove sizes, wrist support, padding, fit, and product comparisons.</p>
                    <div className={styles.heroActions}>
                        <Link href="/boxing/gloves/best-boxing-gloves-for-beginners" className={styles.primaryButton}>Best beginner gloves</Link>
                        <Link href="/boxing/gloves/boxing-gloves-size-guide" className={styles.secondaryButton}>Find your glove size</Link>
                    </div>
                </div>
                <div className={styles.heroPanel} aria-label="Boxing glove buying shortcuts">
                    <p className={styles.panelLabel}>Choose by problem</p>
                    <ul className={styles.heroList}>
                        <li><Link href="/boxing/gloves/best-boxing-gloves-for-heavy-bag">My hands hurt on the heavy bag</Link></li>
                        <li><Link href="/boxing/gloves/best-boxing-gloves-for-wrist-support">My wrists need more support</Link></li>
                        <li><Link href="/boxing/gloves/best-boxing-gloves-for-small-hands">Most gloves feel too roomy</Link></li>
                        <li><Link href="/reviews/best-boxing-gloves-under-100">I want good gloves under $100</Link></li>
                    </ul>
                </div>
            </section>

            <section className={styles.introSection} aria-labelledby="gloves-intro-title">
                <div>
                    <span className={styles.sectionKicker}>Start Here</span>
                    <h2 id="gloves-intro-title" className={styles.sectionTitle}>How to use this boxing gloves hub</h2>
                </div>
                <div className={styles.copyBlock}>
                    <p>Most people do not need the most expensive boxing gloves. They need gloves that match their training. A beginner hitting the heavy bag twice a week has different needs than someone sparring every Friday or comparing Winning, Cleto Reyes, Hayabusa, Rival, and Fairtex.</p>
                    <p>This page is built as a decision hub. Use the cards below if you already know your problem. Use the roadmap if you are still confused about glove size, padding, wrist support, or whether you need separate gloves for bag work and sparring.</p>
                </div>
            </section>
            <ResourceCard
                type="calculator"
                title="Boxing Glove Size Calculator"
                description="Find your ideal glove size based on body weight, hand circumference, and training type."
                href="/boxing/gloves/boxing-glove-size-calculator"
                ctaLabel="Open calculator"
            />

            <section className={styles.topicSection} aria-labelledby="use-case-title">
                <div className={styles.sectionHeader}>
                    <span className={styles.sectionKicker}>Choose by Use Case</span>
                    <h2 id="use-case-title" className={styles.sectionTitle}>What kind of boxing gloves do you need?</h2>
                    <p className={styles.sectionText}>The fastest way to choose gloves is to start with the way you train: beginner classes, heavy bag work, sparring, budget buying, wrist support, or hand fit.</p>
                </div>

                <div className={styles.topicGrid}>
                    {gloveUseCases.map((card) => (
                        <Link key={card.href} href={card.href} className={styles.topicCard}>
                            <span className={styles.cardLabel}>{card.label}</span>
                            <h3 className={styles.topicTitle}>{card.title}</h3>
                            <p className={styles.topicText}>{card.text}</p>
                        </Link>
                    ))}
                </div>
            </section>

            <section className={styles.roadmapSection} aria-labelledby="roadmap-title">
                <div className={styles.sectionHeader}>
                    <span className={styles.sectionKicker}>Buying Roadmap</span>
                    <h2 id="roadmap-title" className={styles.sectionTitle}>How to choose boxing gloves without wasting money</h2>
                    <p className={styles.sectionText}>Before you compare brands, get these four decisions right. This prevents the most common beginner buying mistakes.</p>
                </div>

                <ol className={styles.roadmapList}>
                    {roadmapItems.map((item, index) => (
                        <li key={item.title} className={styles.roadmapItem}>
                            <span className={styles.roadmapNumber}>{index + 1}</span>
                            <div>
                                <h3>{item.title}</h3>
                                <p>{item.text}</p>
                                <Link href={item.href} className={styles.roadmapLink}>{item.linkLabel}</Link>
                            </div>
                        </li>
                    ))}
                </ol>
            </section>

            {reviewPages.length > 0 && (
                <section className={styles.featuredSection} aria-labelledby="reviews-title">
                    <div className={styles.sectionHeader}>
                        <span className={styles.sectionKicker}>Reviews</span>
                        <h2 id="reviews-title" className={styles.sectionTitle}>Best boxing gloves reviews</h2>
                        <p className={styles.sectionText}>Commercial guides for readers who are close to buying and want practical recommendations by training type.</p>
                    </div>

                    <div className={styles.featuredGrid}>
                        {reviewPages.map((page) => (
                            <Link key={page!.slug} href={`/${page!.slug}`} className={styles.featuredCard}>
                                <Image src={page!.coverImage || "/images/default-cover.webp"} alt={page!.altText || page!.title} width={640} height={420} sizes="(max-width: 768px) 100vw, 33vw" className={styles.featuredImage} />
                                <div className={styles.featuredContent}>
                                    <div className={styles.metaRow}>
                                        <span className={styles.reviewBadge}>Review</span>
                                        <span className={styles.contentTime}>{formatDate(page!.updatedAt || page!.date)}</span>
                                    </div>
                                    <h3 className={styles.featuredTitle}>{page!.label || page!.title}</h3>
                                    <p className={styles.featuredText}>{page!.subtitle || page!.description}</p>
                                </div>
                            </Link>
                        ))}
                    </div>
                </section>
            )}

            {guidePages.length > 0 && (
                <section className={styles.guidesSection} aria-labelledby="guides-title">
                    <div className={styles.sectionHeader}>
                        <span className={styles.sectionKicker}>Guides</span>
                        <h2 id="guides-title" className={styles.sectionTitle}>Boxing gloves guides and tips</h2>
                        <p className={styles.sectionText}>Evergreen articles that answer glove sizing, cost, closure type, durability, cleaning, wrapping, and padding questions.</p>
                    </div>

                    <div className={styles.guideGrid}>
                        {guidePages.map((page) => (
                            <Link key={page!.slug} href={`/${page!.slug}`} className={styles.guideCard}>
                                <span className={styles.cardLabel}>{page!.contentType === "review" ? "Review" : "Guide"}</span>
                                <h3>{page!.label || page!.title}</h3>
                                <p>{page!.subtitle || page!.description}</p>
                            </Link>
                        ))}
                    </div>
                </section>
            )}

            {comparisonPages.length > 0 && (
                <section className={styles.comparisonSection} aria-labelledby="comparison-title">
                    <div className={styles.sectionHeader}>
                        <span className={styles.sectionKicker}>Comparisons</span>
                        <h2 id="comparison-title" className={styles.sectionTitle}>Boxing glove comparisons</h2>
                        <p className={styles.sectionText}>Use these side-by-side articles when you are choosing between two specific gloves and want the tradeoffs explained clearly.</p>
                    </div>

                    <div className={styles.comparisonGrid}>
                        {comparisonPages.map((page) => (
                            <Link key={page.slug} href={`/${page.slug}`} className={styles.comparisonCard}>
                                <span className={styles.cardLabel}>VS</span>
                                <h3>{page.label || page.title}</h3>
                                <p>{page.subtitle || page.description}</p>
                            </Link>
                        ))}
                    </div>
                </section>
            )}

            {latestGloveContent.length > 0 && (
                <section className={styles.latestSection} aria-labelledby="latest-title">
                    <div className={styles.sectionHeader}>
                        <span className={styles.sectionKicker}>Latest</span>
                        <h2 id="latest-title" className={styles.sectionTitle}>Latest boxing glove content</h2>
                        <p className={styles.sectionText}>Recently updated glove guides, reviews, and comparisons from Sportloom.</p>
                    </div>

                    <div className={styles.latestList}>
                        {latestGloveContent.map((page) => (
                            <Link key={page.slug} href={`/${page.slug}`} className={styles.latestItem}>
                                <span>{page.contentType === "review" ? "Review" : isComparisonArticle(page) ? "Comparison" : "Guide"}</span>
                                <strong>{page.label || page.title}</strong>
                                <small>{formatDate(page.updatedAt || page.date)}</small>
                            </Link>
                        ))}
                    </div>
                </section>
            )}

            <section className={styles.faqSection} aria-labelledby="faq-title">
                <div className={styles.sectionHeader}>
                    <span className={styles.sectionKicker}>FAQ</span>
                    <h2 id="faq-title" className={styles.sectionTitle}>Boxing gloves FAQ</h2>
                    <p className={styles.sectionText}>Fast answers for beginners choosing their first serious pair of gloves.</p>
                </div>

                <div className={styles.faqList}>
                    {faqItems.map((item) => (
                        <details key={item.question} className={styles.faqItem}>
                            <summary>{item.question}</summary>
                            <p>{item.answer}</p>
                        </details>
                    ))}
                </div>
            </section>

            <section className={styles.closingSection} aria-labelledby="closing-title">
                <div className={styles.sectionHeader}>
                    <span className={styles.sectionKicker}>Sportloom Gloves</span>
                    <h2 id="closing-title" className={styles.sectionTitle}>A better way to choose boxing gloves</h2>
                </div>
                <div className={styles.copyBlock}>
                    <p>Boxing gloves are one of the easiest pieces of gear to overthink. Some beginners buy the cheapest pair and wonder why their wrists hurt. Others buy expensive gloves before they know whether they need bag gloves, sparring gloves, or a simple all-around training pair.</p>
                    <p>The best boxing gloves are not always the most expensive gloves. They are the gloves that fit your hands, protect your wrists, match your training, and make sense for how often you actually box. That is why this hub separates reviews, guides, and comparisons instead of putting every glove into one giant list.</p>
                    <p>If you are new, start with the beginner glove guide and the size guide. If you already train on the heavy bag, look at heavy bag gloves and wrist support. If you are stuck between two brands, use the comparison section before buying.</p>
                </div>
            </section>
        </main>
    );
}
