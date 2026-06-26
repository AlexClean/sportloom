import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { META_LIST } from "@/content/generated/metaRegistry";
import styles from "./Boxing.module.css";

export const metadata: Metadata = {
    title: "Boxing Gear Reviews, Training Guides and Comparisons | Sportloom",
    description: "Explore Sportloom boxing guides: gloves, shoes, headgear, beginner training, heavy bag advice, sparring gear, buying guides, and product comparisons.",
    alternates: {
        canonical: "https://sportloom.com/boxing",
    },
};

type ContentCard = {
    href: string;
    title: string;
    text: string;
    label?: string;
};

const categoryCards: ContentCard[] = [
    {
        href: "/boxing/gloves",
        title: "Boxing Gloves",
        text: "Find beginner gloves, heavy bag gloves, sparring gloves, wrist support picks, size guides, and practical buying advice.",
        label: "Gear",
    },
    {
        href: "/boxing/training",
        title: "Boxing Training",
        text: "Learn stance, jab technique, footwork, breathing, heavy bag work, shadowboxing, and common beginner mistakes.",
        label: "Training",
    },
    {
        href: "/boxing/shoes/how-to-choose-boxing-shoes",
        title: "Boxing Shoes",
        text: "Understand boxing shoe grip, ankle support, footwork, beginner options, and when real boxing shoes are worth it.",
        label: "Footwork",
    },
    {
        href: "/boxing/headgear/best-boxing-headgear-for-sparring-2026",
        title: "Boxing Headgear",
        text: "Compare sparring headgear by visibility, cheek protection, face coverage, comfort, and beginner-friendly value.",
        label: "Sparring",
    },
    {
        href: "/boxing/gloves/best-boxing-gloves-for-beginners",
        title: "Beginner Boxing Gear",
        text: "Start here if you are buying your first gloves and want simple, practical recommendations without overpaying.",
        label: "Beginners",
    },
    {
        href: "/reviews/best-boxing-gloves-under-100",
        title: "Budget Picks Under $100",
        text: "Good value boxing gloves for beginners, fitness boxing, heavy bag sessions, and casual gym training.",
        label: "Budget",
    },
    {
        href: "/boxing/gloves/best-boxing-bag-gloves",
        title: "Heavy Bag Gear",
        text: "Bag gloves, hand protection, wraps, and practical advice for harder heavy bag rounds and safer impact training.",
        label: "Heavy Bag",
    },
    {
        href: "/boxing/gloves/winning-ms-600-vs-cleto-reyes-training-gloves",
        title: "Boxing Comparisons",
        text: "Side-by-side product comparisons for readers choosing between two serious gear options before buying.",
        label: "VS",
    },
];

const buyingGuideSlugs = [
    "boxing/gloves/boxing-gloves-size-guide",
    "articles/how-to-choose-boxing-gloves",
    "boxing/shoes/how-to-choose-boxing-shoes",
    "boxing/gloves/how-much-do-boxing-gloves-cost",
    "boxing/gloves/lace-up-vs-velcro-boxing-gloves",
    "boxing/gloves/how-long-do-boxing-gloves-last",
];

const faqItems = [
    {
        question: "What boxing gear should a beginner buy first?",
        answer: "Most beginners should start with comfortable boxing gloves, hand wraps, and basic training shoes. Headgear only becomes important when you begin controlled sparring.",
    },
    {
        question: "Are expensive boxing gloves worth it?",
        answer: "Expensive gloves can be worth it if you train often, spar regularly, or need better wrist support and hand protection. Casual beginners can usually start with a good budget or mid-range pair.",
    },
    {
        question: "Should beginners focus on training guides or gear reviews first?",
        answer: "Start with technique and safety guides, then use gear reviews when you know your main use case: heavy bag, sparring, fitness boxing, or general training.",
    },
    {
        question: "Do I need boxing shoes for beginner training?",
        answer: "You do not need boxing shoes for your first session, but they become useful when you start learning pivots, footwork, balance, and sparring movement.",
    },
    {
        question: "What is the best Sportloom section to start with?",
        answer: "If you are new, start with the Boxing Training hub. If you already need equipment, start with Boxing Gloves or Beginner Boxing Gear.",
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

function getPublishedBoxingContent() {
    return META_LIST
        .filter((entry) => entry.published !== false)
        .filter((entry) => entry.slug === "boxing" || entry.slug.startsWith("boxing/") || entry.slug.startsWith("articles/") || entry.slug.startsWith("reviews/"))
        .sort((a, b) => new Date(b.updatedAt || b.date || 0).getTime() - new Date(a.updatedAt || a.date || 0).getTime());
}

function isComparisonArticle(entry: (typeof META_LIST)[number]) {
    const title = `${entry.title || ""} ${entry.label || ""}`.toLowerCase();
    return entry.slug.includes("-vs-") || title.includes(" vs ") || entry.articleType === "comparison";
}

function getContentBySlugs(slugs: string[]) {
    return slugs
        .map((slug) => META_LIST.find((entry) => entry.slug === slug && entry.published !== false))
        .filter(Boolean);
}

export default function BoxingPage() {
    const publishedContent = getPublishedBoxingContent();
    const latestReviews = publishedContent.filter((entry) => entry.contentType === "review").slice(0, 3);
    const latestTraining = publishedContent.filter((entry) => entry.contentType === "article" && entry.slug.startsWith("boxing/training/")).slice(0, 3);
    const latestComparisons = publishedContent.filter(isComparisonArticle).slice(0, 3);
    const buyingGuides = getContentBySlugs(buyingGuideSlugs);

    return (
        <main className={styles.page}>
            <section className={styles.hero}>
                <div className={styles.heroContent}>
                    <span className={styles.eyebrow}>Boxing Hub</span>
                    <h1 className={styles.heroTitle}>Boxing gear, training guides, and real buying advice.</h1>
                    <p className={styles.heroText}>Sportloom helps beginner and intermediate boxers choose better gloves, train smarter, avoid common gear mistakes, and compare equipment before spending money.</p>
                    <div className={styles.heroActions}>
                        <Link href="/boxing/training" className={styles.primaryButton}>Start training</Link>
                        <Link href="/boxing/gloves/best-boxing-gloves-for-beginners" className={styles.secondaryButton}>Find beginner gloves</Link>
                    </div>
                </div>
                <div className={styles.heroImage}>
                    <Image src="/images/Hero.webp" alt="Boxing gloves and training gear for Sportloom boxing guides" width={900} height={900} priority sizes="(max-width: 767px) 100vw, 40vw" className={styles.heroPhoto} />
                </div>
            </section>

            <section className={styles.categorySection} aria-labelledby="looking-for-title">
                <div className={styles.sectionHeader}>
                    <span className={styles.sectionKicker}>Start here</span>
                    <h2 id="looking-for-title" className={styles.sectionTitle}>What are you looking for?</h2>
                    <p className={styles.sectionText}>Choose the path that matches your situation: first pair of gloves, heavy bag training, sparring, shoes, headgear, or product comparisons.</p>
                </div>

                <div className={styles.categoryGrid}>
                    {categoryCards.map((card) => (
                        <Link key={card.href} href={card.href} className={styles.categoryCard}>
                            {card.label && <span className={styles.cardLabel}>{card.label}</span>}
                            <h3>{card.title}</h3>
                            <p>{card.text}</p>
                        </Link>
                    ))}
                </div>
            </section>

            {latestReviews.length > 0 && (
                <section className={styles.featuredSection} aria-labelledby="latest-reviews-title">
                    <div className={styles.sectionHeader}>
                        <span className={styles.sectionKicker}>Reviews</span>
                        <h2 id="latest-reviews-title" className={styles.sectionTitle}>Latest Reviews</h2>
                        <p className={styles.sectionText}>Fresh buying pages for gloves, shoes, headgear, bag gear, and beginner-friendly equipment choices.</p>
                    </div>

                    <div className={styles.featuredGrid}>
                        {latestReviews.map((review) => (
                            <Link key={review.slug} href={`/${review.slug}`} className={styles.featuredCard}>
                                <Image src={review.coverImage || "/images/default-cover.webp"} alt={review.altText || review.title} width={640} height={420} sizes="(max-width: 768px) 100vw, 33vw" className={styles.featuredImage} />
                                <div className={styles.featuredContent}>
                                    <div className={styles.metaRow}>
                                        <span className={styles.reviewBadge}>Review</span>
                                        <span className={styles.contentTime}>{formatDate(review.updatedAt || review.date)}</span>
                                    </div>
                                    <h3 className={styles.featuredTitle}>{review.label || review.title}</h3>
                                    <p className={styles.featuredText}>{review.subtitle || review.description}</p>
                                </div>
                            </Link>
                        ))}
                    </div>
                </section>
            )}

            {latestTraining.length > 0 && (
                <section className={styles.featuredSection} aria-labelledby="training-title">
                    <div className={styles.sectionHeader}>
                        <span className={styles.sectionKicker}>Training</span>
                        <h2 id="training-title" className={styles.sectionTitle}>Latest Training Guides</h2>
                        <p className={styles.sectionText}>Practical boxing advice for beginners: not theory, but what usually goes wrong in real gym sessions.</p>
                    </div>

                    <div className={styles.featuredGrid}>
                        {latestTraining.map((article) => (
                            <Link key={article.slug} href={`/${article.slug}`} className={styles.featuredCard}>
                                <Image src={article.coverImage || "/images/default-cover.webp"} alt={article.altText || article.title} width={640} height={420} sizes="(max-width: 768px) 100vw, 33vw" className={styles.featuredImage} />
                                <div className={styles.featuredContent}>
                                    <div className={styles.metaRow}>
                                        <span className={styles.articleBadge}>Training</span>
                                        <span className={styles.contentTime}>{formatDate(article.updatedAt || article.date)}</span>
                                    </div>
                                    <h3 className={styles.featuredTitle}>{article.label || article.title}</h3>
                                    <p className={styles.featuredText}>{article.subtitle || article.description}</p>
                                </div>
                            </Link>
                        ))}
                    </div>
                </section>
            )}

            {buyingGuides.length > 0 && (
                <section className={styles.guidesSection} aria-labelledby="buying-guides-title">
                    <div className={styles.sectionHeader}>
                        <span className={styles.sectionKicker}>Buying Guides</span>
                        <h2 id="buying-guides-title" className={styles.sectionTitle}>Popular Buying Guides</h2>
                        <p className={styles.sectionText}>Evergreen guides that answer the questions people ask before buying boxing equipment.</p>
                    </div>

                    <div className={styles.guideGrid}>
                        {buyingGuides.map((guide) => (
                            <Link key={guide!.slug} href={`/${guide!.slug}`} className={styles.guideCard}>
                                <span className={styles.cardLabel}>Guide</span>
                                <h3>{guide!.label || guide!.title}</h3>
                                <p>{guide!.subtitle || guide!.description}</p>
                            </Link>
                        ))}
                    </div>
                </section>
            )}

            {latestComparisons.length > 0 && (
                <section className={styles.comparisonSection} aria-labelledby="comparison-title">
                    <div className={styles.sectionHeader}>
                        <span className={styles.sectionKicker}>VS Articles</span>
                        <h2 id="comparison-title" className={styles.sectionTitle}>Latest Boxing Comparisons</h2>
                        <p className={styles.sectionText}>Side-by-side guides for readers choosing between two gloves, shoes, or pieces of boxing gear.</p>
                    </div>

                    <div className={styles.comparisonGrid}>
                        {latestComparisons.map((article) => (
                            <Link key={article.slug} href={`/${article.slug}`} className={styles.comparisonCard}>
                                <span className={styles.cardLabel}>Comparison</span>
                                <h3>{article.label || article.title}</h3>
                                <p>{article.subtitle || article.description}</p>
                            </Link>
                        ))}
                    </div>
                </section>
            )}

            <section className={styles.faqSection} aria-labelledby="faq-title">
                <div className={styles.sectionHeader}>
                    <span className={styles.sectionKicker}>FAQ</span>
                    <h2 id="faq-title" className={styles.sectionTitle}>Boxing Gear and Training FAQ</h2>
                    <p className={styles.sectionText}>Fast answers for beginners trying to choose the right starting point.</p>
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

            <section className={styles.closingSection} aria-labelledby="boxing-guide-title">
                <div className={styles.sectionHeader}>
                    <span className={styles.sectionKicker}>Sportloom Boxing</span>
                    <h2 id="boxing-guide-title" className={styles.sectionTitle}>A practical boxing hub for gear and training</h2>
                </div>
                <div className={styles.copyBlock}>
                    <p>Boxing can feel confusing when you are new. One article says you need premium gloves, another says any gloves are fine, and a third tells you to buy shoes, wraps, headgear, a jump rope, and a heavy bag before you even learn your stance. Sportloom is built to make that process simpler.</p>
                    <p>This boxing hub connects the most important parts of the site: beginner training guides, glove reviews, gear comparisons, boxing shoe advice, heavy bag content, and sparring equipment. The goal is not to push every reader toward the most expensive option. The goal is to help you understand what actually matters for your level, your hands, your training style, and your budget.</p>
                    <p>If you are just starting, begin with basic technique and beginner gear. If you already train on the heavy bag, look at glove support, hand wraps, and bag-focused reviews. If you are close to buying and stuck between two products, the comparison articles will usually be the most useful path.</p>
                </div>
            </section>
        </main>
    );
}
