import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { META_LIST } from "@/content/generated/metaRegistry";
import styles from "@/styles/Review.module.css";

export const metadata: Metadata = {
    title: "Boxing Gear Reviews | Sportloom",
    description: "Read practical Sportloom boxing gear reviews for gloves, shoes, headgear, heavy bag equipment, sparring gear, and beginner-friendly picks.",
    alternates: {
        canonical: "https://sportloom.com/reviews",
    },
};

type ContentMeta = (typeof META_LIST)[number];

type TopicLink = {
    href: string;
    label: string;
    text: string;
};

const topicLinks: TopicLink[] = [
    {
        href: "/boxing/gloves/best-boxing-gloves-for-beginners",
        label: "Beginner Gloves",
        text: "Start here if you need a safe first pair without overpaying.",
    },
    {
        href: "/boxing/gloves/best-boxing-gloves-for-heavy-bag",
        label: "Heavy Bag Gloves",
        text: "Gloves for bag rounds, impact comfort, and wrist support.",
    },
    {
        href: "/reviews/best-boxing-gloves-under-100",
        label: "Budget Picks",
        text: "Useful boxing gloves that make sense under $100.",
    },
    {
        href: "/reviews/best-boxing-gloves-for-sparring-2026",
        label: "Sparring Gloves",
        text: "Partner-friendly gloves for controlled sparring sessions.",
    },
    {
        href: "/boxing/shoes/best-boxing-shoes-for-beginners",
        label: "Boxing Shoes",
        text: "Footwork-focused shoes for beginners and gym training.",
    },
    {
        href: "/boxing/headgear/best-boxing-headgear-for-sparring-2026",
        label: "Headgear",
        text: "Sparring headgear by fit, visibility, and face protection.",
    },
];

const buyerGuides = [
    "boxing/gloves/boxing-gloves-size-guide",
    "boxing/gloves/best-boxing-gloves-for-wrist-support",
    "boxing/gloves/bag-gloves-vs-boxing-gloves",
    "boxing/gloves/lace-up-vs-velcro-boxing-gloves",
];

function getDateValue(entry: ContentMeta) {
    return new Date(entry.updatedAt || entry.date || "2000-01-01").getTime();
}

function formatDate(date?: string) {
    if (!date) return "Updated guide";

    return new Intl.DateTimeFormat("en", {
        year: "numeric",
        month: "short",
        day: "numeric",
    }).format(new Date(date));
}

function getPublishedReviews() {
    return META_LIST
        .filter((entry) => entry.published !== false)
        .filter((entry) => entry.contentType === "review")
        .sort((a, b) => getDateValue(b) - getDateValue(a));
}

function getContentBySlugs(slugs: string[]) {
    return slugs
        .map((slug) => META_LIST.find((entry) => entry.slug === slug && entry.published !== false))
        .filter(Boolean) as ContentMeta[];
}

function getCategoryLabel(entry: ContentMeta) {
    if (entry.category) return entry.category.replaceAll("-", " ");
    if (entry.slug.includes("headgear")) return "headgear";
    if (entry.slug.includes("shoes")) return "shoes";
    if (entry.slug.includes("gloves")) return "gloves";
    return "review";
}

export default function ReviewsPage() {
    const reviews = getPublishedReviews();
    const featuredReviews = reviews.slice(0, 3);
    const allReviews = reviews.slice(3);
    const guides = getContentBySlugs(buyerGuides);

    return (
        <main className={styles.page}>
            <section className={styles.hero}>
                <div className={styles.heroContent}>
                    <span className={styles.eyebrow}>Sportloom Reviews</span>
                    <h1 className={styles.heroTitle}>Boxing gear reviews that help you buy the right equipment.</h1>
                    <p className={styles.heroText}>Find practical reviews for boxing gloves, heavy bag gear, sparring equipment, shoes, and headgear. The goal is simple: understand what fits your training before you spend money.</p>
                    <div className={styles.heroActions}>
                        <Link href="#latest-reviews" className={styles.primaryButton}>Browse reviews</Link>
                        <Link href="/boxing/gloves/best-boxing-gloves-for-beginners" className={styles.secondaryButton}>Start with beginner gloves</Link>
                    </div>
                </div>
                <aside className={styles.heroPanel} aria-label="Review focus">
                    <p className={styles.panelLabel}>Review focus</p>
                    <ul className={styles.heroList}>
                        <li>Real training use cases</li>
                        <li>Budget, mid-range, and premium picks</li>
                        <li>Clear downsides, not fake perfection</li>
                    </ul>
                </aside>
            </section>

            <section className={styles.introSection} aria-labelledby="review-path-title">
                <div>
                    <span className={styles.sectionKicker}>Start here</span>
                    <h2 id="review-path-title" className={styles.sectionTitle}>Choose by training situation</h2>
                </div>
                <div className={styles.copyBlock}>
                    <p>Most readers do not need a random list of products. They need to know which glove, shoe, or headguard makes sense for their hand shape, budget, training style, and level.</p>
                    <p>This page works as a review index and buying path. Use it when you are comparing options, choosing your first setup, or deciding whether a premium product is actually worth it.</p>
                </div>
            </section>

            <section className={styles.topicSection} aria-labelledby="review-topics-title">
                <div className={styles.sectionHeader}>
                    <span className={styles.sectionKicker}>Topics</span>
                    <h2 id="review-topics-title" className={styles.sectionTitle}>Popular review categories</h2>
                    <p className={styles.sectionText}>These are the review paths most useful for beginner and intermediate boxers.</p>
                </div>
                <div className={styles.topicGrid}>
                    {topicLinks.map((item) => (
                        <Link key={item.href} href={item.href} className={styles.topicCard}>
                            <h3>{item.label}</h3>
                            <p>{item.text}</p>
                        </Link>
                    ))}
                </div>
            </section>

            {featuredReviews.length > 0 && (
                <section id="latest-reviews" className={styles.featuredSection} aria-labelledby="featured-reviews-title">
                    <div className={styles.sectionHeader}>
                        <span className={styles.sectionKicker}>Latest</span>
                        <h2 id="featured-reviews-title" className={styles.sectionTitle}>Latest gear reviews</h2>
                        <p className={styles.sectionText}>Newest review pages, sorted by update date so refreshed content stays visible.</p>
                    </div>
                    <div className={styles.featuredGrid}>
                        {featuredReviews.map((review) => (
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

            <section className={styles.guidesSection} aria-labelledby="buyer-guides-title">
                <div className={styles.sectionHeader}>
                    <span className={styles.sectionKicker}>Before buying</span>
                    <h2 id="buyer-guides-title" className={styles.sectionTitle}>Read these buying guides first</h2>
                    <p className={styles.sectionText}>Use these guides if you are not sure about glove size, wrist support, closure type, or bag-glove differences.</p>
                </div>
                <div className={styles.guideGrid}>
                    {guides.map((guide) => (
                        <Link key={guide.slug} href={`/${guide.slug}`} className={styles.guideCard}>
                            <span className={styles.cardLabel}>Guide</span>
                            <h3>{guide.label || guide.title}</h3>
                            <p>{guide.subtitle || guide.description}</p>
                        </Link>
                    ))}
                </div>
            </section>

            {allReviews.length > 0 && (
                <section className={styles.allSection} aria-labelledby="all-reviews-title">
                    <div className={styles.sectionHeader}>
                        <span className={styles.sectionKicker}>Archive</span>
                        <h2 id="all-reviews-title" className={styles.sectionTitle}>All reviews</h2>
                    </div>
                    <div className={styles.cardGrid}>
                        {allReviews.map((review) => (
                            <Link key={review.slug} href={`/${review.slug}`} className={styles.compactCard}>
                                <span className={styles.cardLabel}>{getCategoryLabel(review)}</span>
                                <h3>{review.label || review.title}</h3>
                                <p>{review.subtitle || review.description}</p>
                                <span className={styles.cardMeta}>{formatDate(review.updatedAt || review.date)}</span>
                            </Link>
                        ))}
                    </div>
                </section>
            )}
        </main>
    );
}
