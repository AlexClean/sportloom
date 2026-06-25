import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CardBase } from "@/app/components/common";
import { META_LIST } from "@/content/generated/metaRegistry";
import styles from "../styles/Home.module.css";

export const metadata: Metadata = {
    title: "Sportloom | Boxing Gear Reviews and Training Guides",
    description: "Practical boxing gear reviews, beginner training guides, glove comparisons, heavy bag advice, sparring gear, boxing shoes, and equipment buying guides.",
    alternates: {
        canonical: "https://sportloom.com",
    },
};

const mainHubs = [
    {
        href: "/boxing/training",
        title: "Boxing Training",
        text: "Beginner-friendly guides for stance, jab technique, footwork, heavy bag work, breathing, and common training mistakes.",
    },
    {
        href: "/boxing/gloves",
        title: "Boxing Gloves",
        text: "Glove guides, buying advice, size help, heavy bag gloves, sparring gloves, wrist support, and beginner recommendations.",
    },
    {
        href: "/boxing",
        title: "Boxing",
        text: "Practical guides and reviews for boxing, boxing training, and boxing gloves.",
    },
    {
        href: "/boxing/headgear/best-boxing-headgear-for-sparring-2026",
        title: "Sparring Gear",
        text: "Headgear and protective equipment advice for safer, smarter, more controlled sparring sessions.",
    },
];

const starterPath = [
    "boxing/training/boxing-stance-guide-for-beginners",
    "boxing/training/how-to-throw-a-jab-correctly",
    "boxing/training/basic-boxing-footwork-for-beginners",
    "boxing/gloves/best-boxing-gloves-for-beginners",
    "boxing/shoes/best-boxing-shoes-for-beginners",
];

const moneyPages = [
    {
        href: "/boxing/gloves/best-boxing-gloves-for-beginners",
        title: "Best Boxing Gloves for Beginners",
        text: "Start here if you need your first pair and want comfort, wrist support, and good value.",
    },
    {
        href: "/boxing/gloves/best-boxing-bag-gloves",
        title: "Best Boxing Bag Gloves",
        text: "Dedicated bag gloves and bag mitts for heavy bag rounds, feedback, and old-school training feel.",
    },
    {
        href: "/boxing/gloves/best-boxing-gloves-for-heavy-bag",
        title: "Best Boxing Gloves for Heavy Bag",
        text: "Better choices if most of your training is bag work, pads, and conditioning rounds.",
    },
    {
        href: "/boxing/shoes/best-boxing-shoes-for-beginners",
        title: "Best Boxing Shoes for Beginners",
        text: "Footwear options for balance, pivots, gym training, and beginner boxing movement.",
    },
];

function getContentBySlug(slug: string) {
    return META_LIST.find((entry) => entry.slug === slug);
}

function formatDate(date?: string) {
    if (!date) return "Sportloom guide";

    return new Intl.DateTimeFormat("en", {
        year: "numeric",
        month: "short",
        day: "numeric",
    }).format(new Date(date));
}

export default function HomePage() {
    const publishedContent = META_LIST
        .filter((entry) => entry.published !== false)
        .sort((a, b) => new Date(b.updatedAt || b.date || 0).getTime() - new Date(a.updatedAt || a.date || 0).getTime());

    const latestArticles = publishedContent.filter((entry) => entry.contentType === "article").slice(0, 3);
    const latestReviews = publishedContent.filter((entry) => entry.contentType === "review").slice(0, 3);
    const starterArticles = starterPath.map(getContentBySlug).filter(Boolean);

    return (
        <main className={styles.page}>
            <section className={styles.hero}>
                <div className={styles.heroContent}>
                    <span className={styles.eyebrow}>Boxing Gear and Training</span>
                    <h1 className={styles.heroTitle}>Train smarter. Choose better boxing gear.</h1>
                    <p className={styles.heroText}>
                        Sportloom helps beginner and intermediate boxers understand what actually matters: gloves that protect your hands, shoes that help your footwork, training guides that fix common mistakes, and gear reviews written around real gym situations.
                    </p>
                    <div className={styles.heroActions}>
                        <Link href="/boxing/training" className={styles.primaryButton}>Start training guides</Link>
                        <Link href="/boxing/gloves/best-boxing-gloves-for-beginners" className={styles.secondaryButton}>Find beginner gloves</Link>
                    </div>
                </div>
                <div className={styles.heroImage}>
                    <Image src="/images/Hero.webp" alt="Boxer training on a heavy bag with boxing gloves" width={900} height={900} priority sizes="(max-width: 767px) 100vw, 40vw" className={styles.heroPhoto} />
                </div>
            </section>

            <section className={styles.introSection}>
                <div>
                    <span className={styles.sectionKicker}>Start here</span>
                    <h2 className={styles.sectionTitle}>Boxing advice without the noise</h2>
                </div>
                <div className={styles.copyBlock}>
                    <p>
                        Most beginners do not need complicated routines or the most expensive gear. They need simple explanations, practical equipment choices, and a clear path from basic technique to better training sessions.
                    </p>
                    <p>
                        Sportloom is built around that idea: useful boxing content, honest product comparisons, and internal guides that help readers move from one question to the next without getting lost.
                    </p>
                </div>
            </section>

            <section className={styles.hubSection} aria-labelledby="main-hubs">
                <div className={styles.sectionHeader}>
                    <span className={styles.sectionKicker}>Explore</span>
                    <h2 id="main-hubs" className={styles.sectionTitle}>Main Sportloom Hubs</h2>
                    <p className={styles.sectionText}>Use these sections to find training advice, boxing gear guides, and focused equipment reviews.</p>
                </div>

                <div className={styles.hubGrid}>
                    {mainHubs.map((hub) => (
                        <Link key={hub.href} href={hub.href} className={styles.hubCard}>
                            <h3>{hub.title}</h3>
                            <p>{hub.text}</p>
                        </Link>
                    ))}
                </div>
            </section>

            {latestReviews.length > 0 && (
                <section className={styles.featuredSection} aria-labelledby="latest-reviews">
                    <div className={styles.sectionHeader}>
                        <span className={styles.sectionKicker}>Reviews</span>
                        <h2 id="latest-reviews" className={styles.sectionTitle}>Latest Boxing Gear Reviews</h2>
                        <p className={styles.sectionText}>Commercial pages for gloves, shoes, headgear, and practical buying decisions.</p>
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
                                    <h3 className={styles.featuredTitle}>{review.title}</h3>
                                    <p className={styles.featuredText}>{review.description}</p>
                                </div>
                            </Link>
                        ))}
                    </div>
                </section>
            )}

            <section className={styles.gearSection} aria-labelledby="popular-guides">
                <div className={styles.sectionHeader}>
                    <span className={styles.sectionKicker}>Buying guides</span>
                    <h2 id="popular-guides" className={styles.sectionTitle}>Popular Gear Guides</h2>
                    <p className={styles.sectionText}>Pages that help readers choose the right equipment for their training situation.</p>
                </div>

                <div className={styles.gearGrid}>
                    {moneyPages.map((page) => (
                        <Link key={page.href} href={page.href} className={styles.gearCard}>
                            <h3>{page.title}</h3>
                            <p>{page.text}</p>
                        </Link>
                    ))}
                </div>
            </section>

            <section id="beginner-roadmap" className={styles.roadmapSection} aria-labelledby="beginner-title">
                <div className={styles.sectionHeader}>
                    <span className={styles.sectionKicker}>Roadmap</span>
                    <h2 id="beginner-title" className={styles.sectionTitle}>Beginner Boxing Roadmap</h2>
                    <p className={styles.sectionText}>A simple reading path for new boxers: technique first, then movement, gloves, and shoes.</p>
                </div>

                <ol className={styles.roadmapList}>
                    {starterArticles.map((article, index) => (
                        <li key={article!.slug} className={styles.roadmapItem}>
                            <span className={styles.roadmapNumber}>{String(index + 1).padStart(2, "0")}</span>
                            <div>
                                <Link href={`/${article!.slug}`} className={styles.roadmapLink}>{article!.label || article!.title}</Link>
                                <p>{article!.subtitle || article!.description}</p>
                            </div>
                        </li>
                    ))}
                </ol>
            </section>

            {latestArticles.length > 0 && (
                <section className={styles.guidesSection} aria-labelledby="latest-guides">
                    <div className={styles.sectionHeader}>
                        <span className={styles.sectionKicker}>Articles</span>
                        <h2 id="latest-guides" className={styles.sectionTitle}>Latest Boxing Articles</h2>
                        <p className={styles.sectionText}>Fresh informational pages sorted by newest published or updated content.</p>
                    </div>

                    <div className={styles.cardGrid}>
                        {latestArticles.map((article) => (
                            <CardBase key={article.slug}
                                href={`/${article.slug}`}
                                title={article.title}
                                excerpt={article.description}
                                metaLeft={<span className={styles.articleBadge}>{article.contentType}</span>}
                                metaRight={<span className={styles.contentTime}>{formatDate(article.updatedAt || article.date)}</span>}
                                media={<Link href={`/${article.slug}`}><Image src={article.coverImage || "/images/default-cover.webp"} alt={article.altText || article.title} width={420} height={280} sizes="(max-width: 768px) 100vw, 320px" className={styles.cardImage} /></Link>}
                            />
                        ))}
                    </div>
                </section>
            )}

            <section className={styles.closingSection}>
                <div className={styles.sectionHeader}>
                    <span className={styles.sectionKicker}>Sportloom method</span>
                    <h2 className={styles.sectionTitle}>Practical boxing content built for search and readers</h2>
                </div>
                <div className={styles.copyBlock}>
                    <p>
                        The goal is not to publish random boxing content. Each guide should support a larger cluster: training questions, glove buying intent, gear comparisons, beginner problems, and practical gym situations.
                    </p>
                    <p>
                        That structure helps readers stay on the site longer and gives Google clearer topical signals around boxing training and equipment.
                    </p>
                </div>
            </section>
        </main>
    );
}
