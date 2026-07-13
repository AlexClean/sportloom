import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CardBase } from "@/app/components/common";
import { META_LIST } from "@/content/generated/metaRegistry";
import styles from "@/styles/Training.module.css";
import { formatDate } from "@/lib/services/formatters";

export const metadata: Metadata = {
    title: "Boxing Training Guides | Sportloom",
    description: "Practical boxing training guides for beginners: heavy bag work, shadow boxing, footwork, stance, breathing, jab technique, and common mistakes.",
    alternates: {
        canonical: "https://sportloom.com/boxing/training",
    },
};

const trainingRoadmap = [
    "boxing/training/boxing-stance-guide-for-beginners",
    "boxing/training/how-to-throw-a-jab-correctly",
    "boxing/training/basic-boxing-footwork-for-beginners",
    "boxing/training/how-to-shadow-box-for-beginners",
    "boxing/training/how-to-hit-a-heavy-bag-properly",
    "boxing/training/how-to-breathe-while-boxing",
];

const topicGroups = [
    {
        title: "Heavy Bag Training",
        description: "Learn how to hit the bag with better control, cleaner technique, and fewer beginner mistakes.",
        slugs: [
            "boxing/training/how-to-hit-a-heavy-bag-properly",
            "boxing/training/how-hard-should-you-hit-the-heavy-bag",
            "boxing/training/common-heavy-bag-mistakes",
            "boxing/training/best-heavy-bag-workout-for-beginners",
        ],
    },
    {
        title: "Punching Technique",
        description: "Build the basic mechanics behind stance, jab timing, breathing, and punch control.",
        slugs: [
            "boxing/training/boxing-stance-guide-for-beginners",
            "boxing/training/how-to-throw-a-jab-correctly",
            "boxing/training/how-to-breathe-while-boxing",
        ],
    },
    {
        title: "Footwork",
        description: "Improve balance, movement, distance control, and beginner-friendly boxing footwork.",
        slugs: [
            "boxing/training/basic-boxing-footwork-for-beginners",
            "fighters/oleksandr-usyk/what-makes-usyks-footwork-so-effective",
        ],
    },
    {
        title: "Shadow Boxing",
        description: "Use shadow boxing to improve coordination, rhythm, defense, and clean movement without equipment.",
        slugs: [
            "boxing/training/how-to-shadow-box-for-beginners",
            "boxing/training/shadow-boxing-benefits",
        ],
    },
];

const gearLinks = [
    {
        href: "/boxing/gloves/best-boxing-gloves-for-beginners",
        title: "Best Boxing Gloves for Beginners",
        text: "Simple glove choices for new boxers who want comfort, protection, and good value.",
    },
    {
        href: "/boxing/gloves/best-boxing-gloves-for-heavy-bag",
        title: "Best Boxing Gloves for Heavy Bag",
        text: "Better options if most of your training is bag rounds, pad work, and conditioning.",
    },
    {
        href: "/boxing/gloves/best-boxing-bag-gloves",
        title: "Best Boxing Bag Gloves",
        text: "Dedicated bag gloves and bag mitts for fighters who want a sharper training feel.",
    },
    {
        href: "/boxing/shoes/best-boxing-shoes-for-beginners",
        title: "Best Boxing Shoes for Beginners",
        text: "Footwear options for better grip, pivots, balance, and beginner footwork practice.",
    },
];

function getContentBySlug(slug: string) {
    return META_LIST.find((entry) => entry.slug === slug);
}

export default function TrainingPage() {
    const trainingArticles = META_LIST
        .filter((entry) => entry.slug.startsWith("boxing/training/") || entry.category === "boxing-training")
        .filter((entry) => entry.published !== false)
        .sort((a, b) => new Date(b.updatedAt || b.date || 0).getTime() - new Date(a.updatedAt || a.date || 0).getTime());

    const featuredArticles = trainingArticles.slice(0, 3);
    const roadmapArticles = trainingRoadmap.map(getContentBySlug).filter(Boolean);

    return (
        <main className={styles.page}>
            <section className={styles.hero}>
                <div className={styles.heroContent}>
                    <span className={styles.eyebrow}>Boxing Training Hub</span>
                    <h1 className={styles.heroTitle}>Boxing Training Guides</h1>
                    <p className={styles.heroText}>
                        Learn practical boxing skills, improve technique, avoid common beginner mistakes, and get more from every training session. Whether you are working on the heavy bag, shadow boxing, footwork, or basic punching mechanics, these guides are designed to help you train smarter.
                    </p>
                    <div className={styles.heroActions}>
                        <Link href="#training-guides" className={styles.primaryButton}>Browse training guides</Link>
                        <Link href="#beginner-roadmap" className={styles.secondaryButton}>Start as a beginner</Link>
                    </div>
                </div>
            </section>

            {featuredArticles.length > 0 && (
                <section className={styles.featuredSection} aria-labelledby="featured-training">
                    <div className={styles.sectionHeader}>
                        <span className={styles.sectionKicker}>Latest</span>
                        <h2 id="featured-training" className={styles.sectionTitle}>Featured Training Guides</h2>
                        <p className={styles.sectionText}>Fresh practical guides for boxing beginners and intermediate athletes.</p>
                    </div>

                    <div className={styles.featuredGrid}>
                        {featuredArticles.map((article) => (
                            <Link key={article.slug} href={`/${article.slug}`} className={styles.featuredCard}>
                                <Image src={article.coverImage || "/images/default-cover.webp"} alt={article.altText || article.title} width={640} height={420} sizes="(max-width: 768px) 100vw, 33vw" className={styles.featuredImage} />
                                <div className={styles.featuredContent}>
                                    <div className={styles.metaRow}>
                                        <span className={styles.trainingBadge}>Training</span>
                                        <span className={styles.trainingTime}>{formatDate(article.updatedAt || article.date)}</span>
                                    </div>
                                    <h3 className={styles.featuredTitle}>{article.title}</h3>
                                    <p className={styles.featuredText}>{article.description}</p>
                                </div>
                            </Link>
                        ))}
                    </div>
                </section>
            )}

            <section className={styles.introSection}>
                <div>
                    <span className={styles.sectionKicker}>Beginner-friendly</span>
                    <h2 className={styles.sectionTitle}>Boxing Training for Beginners</h2>
                </div>
                <div className={styles.copyBlock}>
                    <p>
                        Many beginners spend too much time looking for the perfect routine and not enough time building the basic skills that make boxing feel natural. The biggest improvements usually come from simple things: stance, balance, breathing, footwork, punch mechanics, and controlled bag work.
                    </p>
                    <p>
                        A good boxing training program does not need to be complicated. Most beginners improve fastest when they focus on a few core skills, repeat them consistently, and avoid turning every round into a power test.
                    </p>
                    <p>
                        This hub brings the main Sportloom boxing training guides together so readers can move from beginner confusion to structured practice without jumping between random tips.
                    </p>
                </div>
            </section>

            <section className={styles.topicSection} aria-labelledby="browse-by-topic">
                <div className={styles.sectionHeader}>
                    <span className={styles.sectionKicker}>Browse</span>
                    <h2 id="browse-by-topic" className={styles.sectionTitle}>Browse Training Guides by Topic</h2>
                    <p className={styles.sectionText}>Use these groups as mini-hubs inside the training section.</p>
                </div>

                <div className={styles.topicGrid}>
                    {topicGroups.map((group) => (
                        <article key={group.title} className={styles.topicCard}>
                            <h3 className={styles.topicTitle}>{group.title}</h3>
                            <p className={styles.topicText}>{group.description}</p>
                            <ul className={styles.topicLinks}>
                                {group.slugs.map((slug) => {
                                    const article = getContentBySlug(slug);
                                    if (!article) return null;

                                    return (
                                        <li key={slug}>
                                            <Link href={`/${article.slug}`}>{article.label || article.title}</Link>
                                        </li>
                                    );
                                })}
                            </ul>
                        </article>
                    ))}
                </div>
            </section>

            <section id="beginner-roadmap" className={styles.roadmapSection} aria-labelledby="roadmap-title">
                <div className={styles.sectionHeader}>
                    <span className={styles.sectionKicker}>Roadmap</span>
                    <h2 id="roadmap-title" className={styles.sectionTitle}>New to Boxing? Start Here</h2>
                    <p className={styles.sectionText}>This order gives beginners a simple path: position first, then punches, movement, bag work, and breathing.</p>
                </div>

                <ol className={styles.roadmapList}>
                    {roadmapArticles.map((article, index) => (
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

            <section id="training-guides" className={styles.guidesSection} aria-labelledby="all-training-guides">
                <div className={styles.sectionHeader}>
                    <span className={styles.sectionKicker}>All guides</span>
                    <h2 id="all-training-guides" className={styles.sectionTitle}>All Boxing Training Articles</h2>
                    <p className={styles.sectionText}>Sorted by the newest published or updated guide.</p>
                </div>

                <div className={styles.cardGrid}>
                    {trainingArticles.map((article) => (
                        <CardBase key={article.slug}
                            href={`/${article.slug}`}
                            title={article.title}
                            excerpt={article.description}
                            metaLeft={<span className={styles.trainingBadge}>{article.contentType}</span>}
                            metaRight={<span className={styles.trainingTime}>{formatDate(article.updatedAt || article.date)}</span>}
                            media={<Link href={`/${article.slug}`}><Image src={article.coverImage || "/images/default-cover.webp"} alt={article.altText || article.title} width={420} height={280} sizes="(max-width: 768px) 100vw, 320px" className={styles.cardImage} /></Link>}
                        />
                    ))}
                </div>
            </section>

            <section className={styles.gearSection} aria-labelledby="gear-title">
                <div className={styles.sectionHeader}>
                    <span className={styles.sectionKicker}>Gear support</span>
                    <h2 id="gear-title" className={styles.sectionTitle}>Recommended Gear for Training</h2>
                    <p className={styles.sectionText}>Training content should teach first, but good gear pages help readers solve real problems when equipment becomes part of the issue.</p>
                </div>

                <div className={styles.gearGrid}>
                    {gearLinks.map((item) => (
                        <Link key={item.href} href={item.href} className={styles.gearCard}>
                            <h3>{item.title}</h3>
                            <p>{item.text}</p>
                        </Link>
                    ))}
                </div>
            </section>

            <section className={styles.closingSection}>
                <h2 className={styles.sectionTitle}>What Makes Boxing Training Different?</h2>
                <div className={styles.copyBlock}>
                    <p>
                        Boxing training is not only about throwing harder punches. Good training teaches you how to stay balanced, move without wasting energy, breathe under pressure, and repeat basic skills until they hold up when you are tired.
                    </p>
                    <p>
                        That is why these guides focus on realistic beginner problems: hitting the heavy bag too hard, losing stance after punching, holding your breath, getting tired too quickly, or shadow boxing without purpose. Fixing those habits usually matters more than adding another random drill.
                    </p>
                </div>
            </section>
        </main>
    );
}
