import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { META_LIST } from "@/content/generated/metaRegistry";
import styles from "@/styles/Shoes.module.css";
import { formatDate } from "@/lib/services/formatters";

export const metadata: Metadata = {
    title: "Boxing Shoes Guides, Reviews and Comparisons | Sportloom",
    description: "Learn how to choose boxing shoes, compare boxing and wrestling shoes, and find beginner-friendly footwear for training, footwork, and sparring.",
    alternates: {
        canonical: "https://sportloom.com/boxing/shoes",
    },
};

type ContentEntry = (typeof META_LIST)[number];

type PathCard = {
    href: string;
    title: string;
    text: string;
    label: string;
};

const pathCards: PathCard[] = [
    {
        href: "/boxing/shoes/best-boxing-shoes-for-beginners",
        title: "Best Shoes for Beginners",
        text: "Start with practical boxing shoe recommendations that balance grip, support, comfort, and price.",
        label: "Beginner Picks",
    },
    {
        href: "/boxing/shoes/how-to-choose-boxing-shoes",
        title: "How to Choose Boxing Shoes",
        text: "Understand sole grip, ankle height, fit, weight, and the features that actually matter in the gym.",
        label: "Buying Guide",
    },
    {
        href: "/boxing/shoes/boxing-shoes-vs-wrestling-shoes",
        title: "Boxing vs Wrestling Shoes",
        text: "Compare traction, pivoting, support, durability, and whether wrestling shoes are good enough for boxing.",
        label: "Comparison",
    },
    {
        href: "/boxing/training/basic-boxing-footwork-for-beginners",
        title: "Improve Your Footwork",
        text: "Learn the stance, balance, movement, and pivoting basics that make boxing footwear useful.",
        label: "Training",
    },
];

const faqItems = [
    {
        question: "Do beginners need boxing shoes?",
        answer: "Not for the first few sessions. Clean indoor athletic shoes can work while you learn the basics, but boxing shoes become useful when pivots, balance, lateral movement, and sparring become a regular part of training.",
    },
    {
        question: "Can you use wrestling shoes for boxing?",
        answer: "Yes. Wrestling shoes are a common budget alternative because they are light, supportive, and grippy. Their traction can feel more aggressive during pivots, so dedicated boxing shoes usually provide smoother boxing-specific movement.",
    },
    {
        question: "Should boxing shoes fit tight?",
        answer: "They should feel secure and close to the foot without crushing the toes or creating painful pressure points. Too much empty space allows the foot to slide during direction changes.",
    },
    {
        question: "Are high-top boxing shoes better than low-top shoes?",
        answer: "High-tops provide a more supported and locked-in feel. Low-tops usually feel lighter and less restrictive. The better option depends on your ankle comfort, training style, and preference rather than one design being universally superior.",
    },
    {
        question: "Can boxing shoes be used outside?",
        answer: "They can, but regular outdoor use wears down the thin outsole quickly and brings dirt onto the gym floor. Boxing shoes are best kept as indoor training footwear.",
    },
];

function isBoxingShoeContent(entry: ContentEntry) {
    const searchableText = `${entry.slug} ${entry.title || ""} ${entry.label || ""} ${entry.category || ""}`.toLowerCase();

    return entry.published !== false && (
        entry.slug.startsWith("boxing/shoes/") ||
        searchableText.includes("boxing shoe") ||
        searchableText.includes("wrestling shoe")
    );
}

function isComparison(entry: ContentEntry) {
    const title = `${entry.title || ""} ${entry.label || ""}`.toLowerCase();
    return entry.articleType === "comparison" || entry.slug.includes("-vs-") || title.includes(" vs ");
}

function sortByNewest(entries: ContentEntry[]) {
    return [...entries].sort((a, b) => new Date(b.updatedAt || b.date || 0).getTime() - new Date(a.updatedAt || a.date || 0).getTime());
}

export default function BoxingShoesPage() {
    const shoeContent = sortByNewest(META_LIST.filter(isBoxingShoeContent));
    const reviews = shoeContent.filter((entry) => entry.contentType === "review");
    const guides = shoeContent.filter((entry) => entry.contentType === "article" && !isComparison(entry));
    const comparisons = shoeContent.filter(isComparison);
    const latestContent = shoeContent.slice(0, 6);

    return (
        <main className={styles.page}>
            <section className={styles.hero}>
                <div className={styles.heroContent}>
                    <span className={styles.eyebrow}>Boxing Shoes Hub</span>
                    <h1 className={styles.heroTitle}>Boxing shoes for better grip, balance, and footwork.</h1>
                    <p className={styles.heroText}>Learn what makes boxing footwear different, how a secure fit should feel, whether wrestling shoes are a good alternative, and which options make sense for beginner and intermediate boxers.</p>
                    <div className={styles.heroActions}>
                        <Link href="/boxing/shoes/best-boxing-shoes-for-beginners" className={styles.primaryButton}>See beginner picks</Link>
                        <Link href="/boxing/shoes/how-to-choose-boxing-shoes" className={styles.secondaryButton}>Read the buying guide</Link>
                    </div>
                </div>
                <div className={styles.heroImage}>
                    <Image src="/images/articles/how-to-choose-boxing-shoes/Hero.webp" alt="Boxing shoes used for boxing training, footwork, and sparring" width={900} height={900} priority sizes="(max-width: 767px) 100vw, 40vw" className={styles.heroPhoto} />
                </div>
            </section>

            <section className={styles.categorySection} aria-labelledby="shoes-start-title">
                <div className={styles.sectionHeader}>
                    <span className={styles.sectionKicker}>Start Here</span>
                    <h2 id="shoes-start-title" className={styles.sectionTitle}>Choose the right path</h2>
                    <p className={styles.sectionText}>Start with a buying guide, compare footwear types, browse beginner recommendations, or improve the footwork that makes boxing shoes valuable.</p>
                </div>
                <div className={styles.categoryGrid}>
                    {pathCards.map((card) => (
                        <Link key={card.href} href={card.href} className={styles.categoryCard}>
                            <span className={styles.cardLabel}>{card.label}</span>
                            <h3>{card.title}</h3>
                            <p>{card.text}</p>
                        </Link>
                    ))}
                </div>
            </section>

            {latestContent.length > 0 && (
                <section className={styles.featuredSection} aria-labelledby="latest-shoe-content-title">
                    <div className={styles.sectionHeader}>
                        <span className={styles.sectionKicker}>Latest Content</span>
                        <h2 id="latest-shoe-content-title" className={styles.sectionTitle}>Boxing shoe reviews and guides</h2>
                        <p className={styles.sectionText}>The newest Sportloom content about boxing footwear, fit, traction, training use, and buying decisions.</p>
                    </div>
                    <div className={styles.featuredGrid}>
                        {latestContent.map((entry) => (
                            <Link key={entry.slug} href={`/${entry.slug}`} className={styles.featuredCard}>
                                <Image src={entry.coverImage || "/images/default-cover.webp"} alt={entry.altText || entry.title} width={640} height={420} sizes="(max-width: 768px) 100vw, 33vw" className={styles.featuredImage} />
                                <div className={styles.featuredContent}>
                                    <div className={styles.metaRow}>
                                        <span className={entry.contentType === "review" ? styles.reviewBadge : styles.articleBadge}>{entry.contentType === "review" ? "Review" : isComparison(entry) ? "Comparison" : "Guide"}</span>
                                        <span className={styles.contentTime}>{formatDate(entry.updatedAt || entry.date)}</span>
                                    </div>
                                    <h3 className={styles.featuredTitle}>{entry.label || entry.title}</h3>
                                    <p className={styles.featuredText}>{entry.subtitle || entry.description}</p>
                                </div>
                            </Link>
                        ))}
                    </div>
                </section>
            )}

            {reviews.length > 0 && (
                <section className={styles.guidesSection} aria-labelledby="shoe-reviews-title">
                    <div className={styles.sectionHeader}>
                        <span className={styles.sectionKicker}>Buying Pages</span>
                        <h2 id="shoe-reviews-title" className={styles.sectionTitle}>Boxing shoe reviews</h2>
                        <p className={styles.sectionText}>Use-case recommendations for readers who are ready to compare options and buy the right pair.</p>
                    </div>
                    <div className={styles.guideGrid}>
                        {reviews.map((entry) => (
                            <Link key={entry.slug} href={`/${entry.slug}`} className={styles.guideCard}>
                                <span className={styles.cardLabel}>Review</span>
                                <h3>{entry.label || entry.title}</h3>
                                <p>{entry.subtitle || entry.description}</p>
                            </Link>
                        ))}
                    </div>
                </section>
            )}

            {guides.length > 0 && (
                <section className={styles.guidesSection} aria-labelledby="shoe-guides-title">
                    <div className={styles.sectionHeader}>
                        <span className={styles.sectionKicker}>Learn Before Buying</span>
                        <h2 id="shoe-guides-title" className={styles.sectionTitle}>Boxing shoe guides</h2>
                        <p className={styles.sectionText}>Understand fit, sole design, ankle support, traction, durability, and realistic gym use before choosing a pair.</p>
                    </div>
                    <div className={styles.guideGrid}>
                        {guides.map((entry) => (
                            <Link key={entry.slug} href={`/${entry.slug}`} className={styles.guideCard}>
                                <span className={styles.cardLabel}>Guide</span>
                                <h3>{entry.label || entry.title}</h3>
                                <p>{entry.subtitle || entry.description}</p>
                            </Link>
                        ))}
                    </div>
                </section>
            )}

            {comparisons.length > 0 && (
                <section className={styles.comparisonSection} aria-labelledby="shoe-comparisons-title">
                    <div className={styles.sectionHeader}>
                        <span className={styles.sectionKicker}>Compare Options</span>
                        <h2 id="shoe-comparisons-title" className={styles.sectionTitle}>Boxing shoe comparisons</h2>
                        <p className={styles.sectionText}>Side-by-side guidance for readers deciding between different footwear types or final product choices.</p>
                    </div>
                    <div className={styles.comparisonGrid}>
                        {comparisons.map((entry) => (
                            <Link key={entry.slug} href={`/${entry.slug}`} className={styles.comparisonCard}>
                                <span className={styles.cardLabel}>Comparison</span>
                                <h3>{entry.label || entry.title}</h3>
                                <p>{entry.subtitle || entry.description}</p>
                            </Link>
                        ))}
                    </div>
                </section>
            )}

            <section className={styles.faqSection} aria-labelledby="boxing-shoes-faq-title">
                <div className={styles.sectionHeader}>
                    <span className={styles.sectionKicker}>FAQ</span>
                    <h2 id="boxing-shoes-faq-title" className={styles.sectionTitle}>Boxing shoes FAQ</h2>
                    <p className={styles.sectionText}>Practical answers to the questions beginners usually ask before buying boxing footwear.</p>
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

            <section className={styles.closingSection} aria-labelledby="boxing-shoes-guide-title">
                <div className={styles.sectionHeader}>
                    <span className={styles.sectionKicker}>Sportloom Footwear</span>
                    <h2 id="boxing-shoes-guide-title" className={styles.sectionTitle}>Choose shoes for the way you actually train</h2>
                </div>
                <div className={styles.copyBlock}>
                    <p>Boxing shoes do not improve technique by themselves, but the right pair can make good movement easier to repeat. A thin sole keeps you connected to the floor, a secure upper reduces sliding inside the shoe, and boxing-specific traction helps you push, stop, and pivot with more control.</p>
                    <p>Beginners often focus only on ankle height or appearance. Fit and outsole behavior usually matter more. A shoe that is too loose can feel unstable, while a sole that grips too aggressively may make pivots feel awkward. Your gym floor, foot shape, training frequency, and budget should guide the choice.</p>
                    <p>Start with the beginner recommendations when you need a shortlist. Read the choosing guide when you are unsure about fit and features. Use the comparisons when you are deciding whether a cheaper crossover shoe is enough or a dedicated boxing model makes more sense.</p>
                </div>
            </section>
        </main>
    );
}
