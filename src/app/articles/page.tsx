import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { META_LIST } from "@/content/generated/metaRegistry";
import styles from "@/styles/Review.module.css";

export const metadata: Metadata = {
    title: "Boxing Articles and Training Guides | Sportloom",
    description: "Read Sportloom boxing articles: beginner training, boxing technique, gear guides, glove sizing, hand wraps, boxing shoes, and equipment comparisons.",
    alternates: {
        canonical: "https://sportloom.com/articles",
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
        href: "/boxing/training",
        label: "Training Hub",
        text: "Beginner boxing technique, heavy bag work, footwork, breathing, and realistic gym mistakes.",
    },
    {
        href: "/boxing/gloves/boxing-gloves-size-guide",
        label: "Glove Size Guides",
        text: "Understand 10, 12, 14, and 16 oz gloves before choosing your first pair.",
    },
    {
        href: "/articles/how-to-wrap-your-hands-for-boxing",
        label: "Hand Wraps",
        text: "Learn how wraps protect your knuckles, wrists, and hands during boxing training.",
    },
    {
        href: "/boxing/shoes/how-to-choose-boxing-shoes",
        label: "Boxing Shoes",
        text: "Practical shoe advice for pivots, balance, grip, and beginner footwork.",
    },
    {
        href: "/boxing/gloves/bag-gloves-vs-boxing-gloves",
        label: "Gear Education",
        text: "Learn the difference between similar boxing products before buying.",
    },
    {
        href: "/boxing/gloves/winning-ms-600-vs-cleto-reyes-training-gloves",
        label: "Comparisons",
        text: "Side-by-side articles for readers choosing between two boxing gear options.",
    },
];

const keyGuideSlugs = [
    "boxing/training/how-to-throw-a-jab-correctly",
    "boxing/training/how-to-hit-a-heavy-bag-properly",
    "boxing/training/basic-boxing-footwork-for-beginners",
    "boxing/gloves/how-much-do-boxing-gloves-cost",
];

function getDateValue(entry: ContentMeta) {
    return new Date(entry.updatedAt || entry.date || "2000-01-01").getTime();
}

function formatDate(date?: string) {
    if (!date) return "Sportloom article";

    return new Intl.DateTimeFormat("en", {
        year: "numeric",
        month: "short",
        day: "numeric",
    }).format(new Date(date));
}

function isComparisonArticle(entry: ContentMeta) {
    const title = `${entry.title || ""} ${entry.label || ""}`.toLowerCase();
    return entry.slug.includes("-vs-") || title.includes(" vs ") || entry.articleType === "comparison";
}

function getPublishedArticles() {
    return META_LIST
        .filter((entry) => entry.published !== false)
        .filter((entry) => entry.contentType === "article")
        .sort((a, b) => getDateValue(b) - getDateValue(a));
}

function getContentBySlugs(slugs: string[]) {
    return slugs
        .map((slug) => META_LIST.find((entry) => entry.slug === slug && entry.published !== false))
        .filter(Boolean) as ContentMeta[];
}

function getCategoryLabel(entry: ContentMeta) {
    if (isComparisonArticle(entry)) return "comparison";
    if (entry.slug.includes("training")) return "training";
    if (entry.slug.includes("gloves")) return "gloves";
    if (entry.slug.includes("shoes")) return "shoes";
    if (entry.slug.includes("gear")) return "gear";
    return "article";
}

export default function ArticlesPage() {
    const articles = getPublishedArticles();
    const latestArticles = articles.slice(0, 3);
    const trainingArticles = articles.filter((entry) => entry.slug.startsWith("boxing/training/")).slice(0, 6);
    const comparisonArticles = articles.filter(isComparisonArticle).slice(0, 4);
    const keyGuides = getContentBySlugs(keyGuideSlugs);
    const remainingArticles = articles.filter((entry) => !latestArticles.some((latest) => latest.slug === entry.slug)).slice(0, 24);

    return (
        <main className={styles.page}>
            <section className={styles.hero}>
                <div className={styles.heroContent}>
                    <span className={styles.eyebrow}>Sportloom Articles</span>
                    <h1 className={styles.heroTitle}>Boxing articles for smarter training and better gear choices.</h1>
                    <p className={styles.heroText}>Read practical boxing guides for beginners: technique, heavy bag training, footwork, glove sizing, hand protection, shoe advice, and product comparisons.</p>
                    <div className={styles.heroActions}>
                        <Link href="#latest-articles" className={styles.primaryButton}>Browse articles</Link>
                        <Link href="/boxing/training" className={styles.secondaryButton}>Go to training hub</Link>
                    </div>
                </div>
                <aside className={styles.heroPanel} aria-label="Article focus">
                    <p className={styles.panelLabel}>Article focus</p>
                    <ul className={styles.heroList}>
                        <li>Beginner-friendly boxing advice</li>
                        <li>Practical training problems</li>
                        <li>Gear education before buying</li>
                    </ul>
                </aside>
            </section>

            <section className={styles.introSection} aria-labelledby="article-path-title">
                <div>
                    <span className={styles.sectionKicker}>Content library</span>
                    <h2 id="article-path-title" className={styles.sectionTitle}>Not just a blog archive</h2>
                </div>
                <div className={styles.copyBlock}>
                    <p>This page should help Google and readers understand the structure of your boxing content. It connects training articles, gear education, comparison pages, and older article URLs that still have value.</p>
                    <p>Use it as a broad article library. More specific hubs like Boxing Training or Boxing Gloves should handle stronger topical clusters.</p>
                </div>
            </section>

            <section className={styles.topicSection} aria-labelledby="article-topics-title">
                <div className={styles.sectionHeader}>
                    <span className={styles.sectionKicker}>Topics</span>
                    <h2 id="article-topics-title" className={styles.sectionTitle}>Explore by article type</h2>
                    <p className={styles.sectionText}>Send readers to the most useful section instead of forcing them through one long chronological list.</p>
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

            {latestArticles.length > 0 && (
                <section id="latest-articles" className={styles.featuredSection} aria-labelledby="latest-articles-title">
                    <div className={styles.sectionHeader}>
                        <span className={styles.sectionKicker}>Latest</span>
                        <h2 id="latest-articles-title" className={styles.sectionTitle}>Latest articles</h2>
                        <p className={styles.sectionText}>Newest and recently updated articles appear first.</p>
                    </div>
                    <div className={styles.featuredGrid}>
                        {latestArticles.map((article) => (
                            <Link key={article.slug} href={`/${article.slug}`} className={styles.featuredCard}>
                                <Image src={article.coverImage || "/images/default-cover.webp"} alt={article.altText || article.title} width={640} height={420} sizes="(max-width: 768px) 100vw, 33vw" className={styles.featuredImage} />
                                <div className={styles.featuredContent}>
                                    <div className={styles.metaRow}>
                                        <span className={styles.articleBadge}>{getCategoryLabel(article)}</span>
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

            {keyGuides.length > 0 && (
                <section className={styles.guidesSection} aria-labelledby="key-guides-title">
                    <div className={styles.sectionHeader}>
                        <span className={styles.sectionKicker}>Best starting points</span>
                        <h2 id="key-guides-title" className={styles.sectionTitle}>Key beginner guides</h2>
                    </div>
                    <div className={styles.guideGrid}>
                        {keyGuides.map((guide) => (
                            <Link key={guide.slug} href={`/${guide.slug}`} className={styles.guideCard}>
                                <span className={styles.cardLabel}>{getCategoryLabel(guide)}</span>
                                <h3>{guide.label || guide.title}</h3>
                                <p>{guide.subtitle || guide.description}</p>
                            </Link>
                        ))}
                    </div>
                </section>
            )}

            {trainingArticles.length > 0 && (
                <section className={styles.allSection} aria-labelledby="training-guides-title">
                    <div className={styles.sectionHeader}>
                        <span className={styles.sectionKicker}>Training</span>
                        <h2 id="training-guides-title" className={styles.sectionTitle}>Boxing training articles</h2>
                    </div>
                    <div className={styles.cardGrid}>
                        {trainingArticles.map((article) => (
                            <Link key={article.slug} href={`/${article.slug}`} className={styles.compactCard}>
                                <span className={styles.cardLabel}>training</span>
                                <h3>{article.label || article.title}</h3>
                                <p>{article.subtitle || article.description}</p>
                                <span className={styles.cardMeta}>{formatDate(article.updatedAt || article.date)}</span>
                            </Link>
                        ))}
                    </div>
                </section>
            )}

            {comparisonArticles.length > 0 && (
                <section className={styles.allSection} aria-labelledby="comparison-guides-title">
                    <div className={styles.sectionHeader}>
                        <span className={styles.sectionKicker}>VS</span>
                        <h2 id="comparison-guides-title" className={styles.sectionTitle}>Comparison articles</h2>
                    </div>
                    <div className={styles.guideGrid}>
                        {comparisonArticles.map((article) => (
                            <Link key={article.slug} href={`/${article.slug}`} className={styles.guideCard}>
                                <span className={styles.cardLabel}>comparison</span>
                                <h3>{article.label || article.title}</h3>
                                <p>{article.subtitle || article.description}</p>
                            </Link>
                        ))}
                    </div>
                </section>
            )}

            {remainingArticles.length > 0 && (
                <section className={styles.allSection} aria-labelledby="all-articles-title">
                    <div className={styles.sectionHeader}>
                        <span className={styles.sectionKicker}>Archive</span>
                        <h2 id="all-articles-title" className={styles.sectionTitle}>All articles</h2>
                    </div>
                    <div className={styles.linkList}>
                        {remainingArticles.map((article) => (
                            <Link key={article.slug} href={`/${article.slug}`} className={styles.listItem}>
                                <span>{article.label || article.title}</span>
                                <small>{formatDate(article.updatedAt || article.date)}</small>
                            </Link>
                        ))}
                    </div>
                </section>
            )}
        </main>
    );
}
