import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { META_LIST } from "@/content/generated/metaRegistry";
import styles from "@/styles/Brands.module.css";
import { formatDate } from "@/lib/services/formatters";

export const metadata: Metadata = {
    title: "Boxing Brand Reviews and Buying Guides | Sportloom",
    description: "Explore practical boxing brand reviews, compare gear quality, strengths, weaknesses, best products, and find the right brand for your training needs.",
    alternates: {
        canonical: "https://sportloom.com/boxing/brands",
    },
};

type ContentMeta = (typeof META_LIST)[number];

const comparisonSlugs = [
    "boxing/gloves/rival-rs11v-vs-hayabusa-t3",
    "boxing/gloves/winning-ms-600-vs-cleto-reyes-training-gloves",
];

function getDateValue(entry: ContentMeta) {
    return new Date(entry.updatedAt || entry.date || "2000-01-01").getTime();
}

function getBrandPages() {
    return META_LIST
        .filter((entry) => entry.published !== false)
        .filter((entry) => entry.slug.startsWith("boxing/brands/"))
        .sort((a, b) => getDateValue(b) - getDateValue(a));
}

function getContentBySlugs(slugs: string[]) {
    return slugs
        .map((slug) => META_LIST.find((entry) => entry.slug === slug && entry.published !== false))
        .filter(Boolean) as ContentMeta[];
}

export default function BrandsPage() {
    const brandPages = getBrandPages();
    const featuredBrands = brandPages.slice(0, 3);
    const remainingBrands = brandPages.slice(3);
    const comparisons = getContentBySlugs(comparisonSlugs);

    return (
        <main className={styles.page}>
            <section className={styles.hero}>
                <div className={styles.heroContent}>
                    <span className={styles.eyebrow}>Sportloom Boxing Brands</span>
                    <h1 className={styles.heroTitle}>Boxing brand reviews that explain what each company does best.</h1>
                    <p className={styles.heroText}>Compare boxing brands by fit, protection, materials, price, durability, and real training use before choosing gloves, headgear, shoes, or other equipment.</p>
                    <div className={styles.heroActions}>
                        <Link href="#brand-reviews" className={styles.primaryButton}>Browse brand reviews</Link>
                        <Link href="/boxing/gloves" className={styles.secondaryButton}>Explore boxing gloves</Link>
                    </div>
                </div>

                <aside className={styles.heroPanel} aria-label="What brand reviews cover">
                    <p className={styles.panelLabel}>What we compare</p>
                    <ul className={styles.heroList}>
                        <li>Fit, comfort, and wrist support</li>
                        <li>Budget, mid-range, and premium value</li>
                        <li>Best products and realistic drawbacks</li>
                    </ul>
                </aside>
            </section>

            <section className={styles.introSection} aria-labelledby="brands-intro-title">
                <div>
                    <span className={styles.sectionKicker}>Brand authority hub</span>
                    <h2 id="brands-intro-title" className={styles.sectionTitle}>Choose the brand before choosing the model</h2>
                </div>
                <div className={styles.copyBlock}>
                    <p>Brand reputation matters, but it should not replace product fit. A company can make excellent sparring gloves and average bag gloves, or strong premium gear with limited value for beginners.</p>
                    <p>These pages explain where each brand sits in the market, who it suits, which products are worth considering, and when another brand may be a better choice.</p>
                </div>
            </section>

            <section className={styles.methodSection} aria-labelledby="brand-method-title">
                <div className={styles.sectionHeader}>
                    <span className={styles.sectionKicker}>How to use this hub</span>
                    <h2 id="brand-method-title" className={styles.sectionTitle}>Start with your training needs</h2>
                    <p className={styles.sectionText}>A familiar logo does not automatically mean the best fit for your hands, budget, or type of training.</p>
                </div>

                <div className={styles.methodGrid}>
                    <article className={styles.methodCard}>
                        <span>01</span>
                        <h3>Identify your use case</h3>
                        <p>Decide whether you mainly need gear for heavy bag work, sparring, beginner training, competition, or mixed gym use.</p>
                    </article>
                    <article className={styles.methodCard}>
                        <span>02</span>
                        <h3>Compare brand strengths</h3>
                        <p>Look at fit, protection, construction, product range, price, and the compromises each brand makes.</p>
                    </article>
                    <article className={styles.methodCard}>
                        <span>03</span>
                        <h3>Choose the right model</h3>
                        <p>Use individual reviews and comparison articles to narrow the final choice after the brand makes sense.</p>
                    </article>
                </div>
            </section>

            <section id="brand-reviews" className={styles.featuredSection} aria-labelledby="brand-reviews-title">
                <div className={styles.sectionHeader}>
                    <span className={styles.sectionKicker}>Brand reviews</span>
                    <h2 id="brand-reviews-title" className={styles.sectionTitle}>Explore boxing brands</h2>
                    <p className={styles.sectionText}>Each guide covers the brand’s position, strengths, weaknesses, recommended products, and closest alternatives.</p>
                </div>

                {featuredBrands.length > 0 ? (
                    <div className={styles.featuredGrid}>
                        {featuredBrands.map((brand) => (
                            <Link key={brand.slug} href={`/${brand.slug}`} className={styles.featuredCard}>
                                <Image src={brand.coverImage || "/images/default-cover.webp"} alt={brand.altText || brand.title} width={720} height={460} sizes="(max-width: 768px) 100vw, 33vw" className={styles.featuredImage} />
                                <div className={styles.featuredContent}>
                                    <div className={styles.metaRow}>
                                        <span className={styles.brandBadge}>brand review</span>
                                        <span className={styles.contentTime}>{formatDate(brand.updatedAt || brand.date)}</span>
                                    </div>
                                    <h3 className={styles.featuredTitle}>{brand.label || brand.title}</h3>
                                    <p className={styles.featuredText}>{brand.subtitle || brand.description}</p>
                                    <span className={styles.cardLink}>Read brand review →</span>
                                </div>
                            </Link>
                        ))}
                    </div>
                ) : (
                    <div className={styles.emptyState}>
                        <h3>Brand reviews are being added</h3>
                        <p>This hub is ready to populate automatically as pages are published under <code>boxing/brands/</code>.</p>
                    </div>
                )}
            </section>

            {remainingBrands.length > 0 && (
                <section className={styles.allSection} aria-labelledby="all-brands-title">
                    <div className={styles.sectionHeader}>
                        <span className={styles.sectionKicker}>All brands</span>
                        <h2 id="all-brands-title" className={styles.sectionTitle}>More boxing brand guides</h2>
                    </div>
                    <div className={styles.brandGrid}>
                        {remainingBrands.map((brand) => (
                            <Link key={brand.slug} href={`/${brand.slug}`} className={styles.brandCard}>
                                <span className={styles.brandCardLabel}>Boxing brand</span>
                                <h3>{brand.label || brand.title}</h3>
                                <p>{brand.subtitle || brand.description}</p>
                                <span className={styles.cardMeta}>{formatDate(brand.updatedAt || brand.date)}</span>
                            </Link>
                        ))}
                    </div>
                </section>
            )}

            {comparisons.length > 0 && (
                <section className={styles.comparisonSection} aria-labelledby="brand-comparisons-title">
                    <div className={styles.sectionHeader}>
                        <span className={styles.sectionKicker}>Compare before buying</span>
                        <h2 id="brand-comparisons-title" className={styles.sectionTitle}>Popular brand and product comparisons</h2>
                        <p className={styles.sectionText}>Use detailed comparison pages when you are choosing between two specific products or brand approaches.</p>
                    </div>
                    <div className={styles.comparisonGrid}>
                        {comparisons.map((comparison) => (
                            <Link key={comparison.slug} href={`/${comparison.slug}`} className={styles.comparisonCard}>
                                <span className={styles.comparisonLabel}>VS guide</span>
                                <h3>{comparison.label || comparison.title}</h3>
                                <p>{comparison.subtitle || comparison.description}</p>
                            </Link>
                        ))}
                    </div>
                </section>
            )}

            <section className={styles.ctaSection} aria-labelledby="brands-next-title">
                <div>
                    <span className={styles.sectionKicker}>Keep researching</span>
                    <h2 id="brands-next-title" className={styles.sectionTitle}>Not sure which product category to start with?</h2>
                    <p className={styles.sectionText}>Browse the boxing gloves hub for buying guides, fit advice, product reviews, and comparisons.</p>
                </div>
                <Link href="/boxing/gloves" className={styles.primaryButton}>Visit boxing gloves hub</Link>
            </section>
        </main>
    );
}