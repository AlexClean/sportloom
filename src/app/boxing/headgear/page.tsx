import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { META_LIST } from "@/content/generated/metaRegistry";
import styles from "@/styles/Headgear.module.css";
import { formatDate } from "@/lib/services/formatters";

export const metadata: Metadata = {
    title: "Boxing Headgear Guides, Reviews and Buying Advice | Sportloom",
    description: "Compare boxing headgear for sparring, beginners, face protection, visibility, secure fit, and realistic gym use.",
    alternates: {
        canonical: "https://sportloom.com/boxing/headgear",
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

const headgearUseCases: HubCard[] = [
    {
        href: "/boxing/headgear/best-boxing-headgear-for-sparring-2026",
        title: "Best Headgear for Sparring",
        text: "Compare practical headguards for visibility, cheek coverage, secure fit, comfort, and regular sparring use.",
        label: "Sparring",
    },
    {
        href: "/boxing/headgear/best-boxing-headgear-for-sparring-2026",
        title: "Headgear for Beginners",
        text: "Start with stable, easy-to-adjust protection that does not feel excessively bulky or block your vision.",
        label: "Beginners",
    },
    {
        href: "/boxing/headgear/best-boxing-headgear-for-sparring-2026",
        title: "Cheek vs Full-Face Headgear",
        text: "Understand the tradeoff between a more natural field of view and extra protection around the nose and face.",
        label: "Coverage",
    },
    {
        href: "/boxing/headgear/best-boxing-headgear-for-sparring-2026",
        title: "Headgear with Better Visibility",
        text: "Learn why seeing punches clearly often matters more than choosing the thickest-looking headguard.",
        label: "Visibility",
    },
    {
        href: "/boxing/headgear/how-to-choose-boxing-headgear",
        title: "How to Choose Boxing Headgear",
        text: "Use fit, closure, coverage, training intensity, and sparring frequency to narrow down the right design.",
        label: "Buying Guide",
    },
    {
        href: "/reviews/best-boxing-gloves-for-sparring-2026",
        title: "Complete Your Sparring Setup",
        text: "Pair good headgear with partner-friendly sparring gloves and controlled gym habits instead of relying on padding alone.",
        label: "Sparring Gear",
    },
];

const roadmapItems: RoadmapItem[] = [
    {
        title: "1. Start with your sparring level",
        text: "A beginner usually needs stable fit and simple adjustment. Frequent sparring makes weight, ventilation, and visibility much more important.",
        href: "/boxing/headgear/how-to-choose-boxing-headgear",
        linkLabel: "How to choose headgear",
    },
    {
        title: "2. Choose the right coverage style",
        text: "Cheek protectors preserve a more natural boxing feel. Full-face and face-bar designs add facial coverage but can feel bulkier.",
        href: "/boxing/headgear/best-boxing-headgear-for-sparring-2026",
        linkLabel: "Compare coverage styles",
    },
    {
        title: "3. Prioritize fit over brand name",
        text: "Headgear that slides, rotates, or presses painfully is distracting. Measure your head and use the manufacturer sizing chart before buying.",
        href: "/boxing/headgear/how-to-choose-boxing-headgear",
        linkLabel: "How to choose headgear",
    },
    {
        title: "4. Build a sensible sparring setup",
        text: "Headgear can reduce cuts and facial bruising, but controlled intensity, good defense, and suitable sparring gloves still matter more.",
        href: "/reviews/best-boxing-gloves-for-sparring-2026",
        linkLabel: "Best sparring gloves",
    },
];

const supportingSlugs = [
    "boxing/headgear/best-boxing-headgear-for-sparring-2026",
    "reviews/best-boxing-gloves-for-sparring-2026",
    "boxing/gloves/best-boxing-gloves-for-training",
    "boxing/gloves/how-tight-should-boxing-gloves-fit",
    "boxing/training/how-often-should-you-train-boxing",
    "boxing/training/basic-boxing-footwork-for-beginners",
];

const faqItems = [
    {
        question: "What is the best boxing headgear for sparring?",
        answer: "The best choice depends on your priorities. Rival RHG100 is a strong all-around option, Winning FG-5000 suits buyers who want premium face protection, and Venum Elite is a more accessible beginner-friendly pick.",
    },
    {
        question: "Should beginners wear headgear for sparring?",
        answer: "Beginners commonly use headgear during controlled sparring because it helps reduce cuts, bruising, and direct facial contact. It does not make hard sparring safe or prevent every concussion.",
    },
    {
        question: "Is full-face boxing headgear better?",
        answer: "Full-face headgear gives more protection around the nose and front of the face, but it can feel heavier and may reduce visibility. Cheek-style headgear usually feels more natural for regular boxing sparring.",
    },
    {
        question: "How tight should boxing headgear fit?",
        answer: "It should feel secure enough not to rotate when touched, but it should not create painful pressure points. A loose headguard becomes distracting and can obstruct your vision during sparring.",
    },
    {
        question: "Does boxing headgear prevent concussions?",
        answer: "No. Headgear is mainly useful for reducing cuts, bruising, and some facial impact. Controlled sparring, defense, coaching, and sensible intensity remain essential.",
    },
    {
        question: "How much should I spend on boxing headgear?",
        answer: "Beginners can find usable options around the budget-to-mid-range level. Boxers who spar regularly may benefit from paying more for a lighter profile, stronger fit system, better visibility, and durable construction.",
    },
];

function getContentBySlugs(slugs: string[]) {
    return slugs
        .map((slug) => META_LIST.find((entry) => entry.slug === slug && entry.published !== false))
        .filter((entry): entry is (typeof META_LIST)[number] => Boolean(entry));
}

function getPublishedHeadgearContent() {
    return META_LIST
        .filter((entry) => entry.published !== false)
        .filter((entry) => entry.slug.startsWith("boxing/headgear/"))
        .sort((a, b) => new Date(b.updatedAt || b.date || 0).getTime() - new Date(a.updatedAt || a.date || 0).getTime());
}

export default function BoxingHeadgearPage() {
    const headgearContent = getPublishedHeadgearContent();
    const featuredHeadgearContent = headgearContent.slice(0, 6);
    const supportingContent = getContentBySlugs(supportingSlugs);

    return (
        <main className={styles.page}>
            <section className={styles.hero}>
                <div className={styles.heroContent}>
                    <span className={styles.eyebrow}>Boxing Headgear Hub</span>
                    <h1 className={styles.heroTitle}>Boxing headgear guides, reviews, and practical sparring advice.</h1>
                    <p className={styles.heroText}>Choose boxing headgear that protects your face without ruining visibility, comfort, or movement. Sportloom covers sparring headguards, beginner options, cheek protection, full-face designs, fit, and complete sparring setups.</p>
                    <div className={styles.heroActions}>
                        <Link href="/boxing/headgear/best-boxing-headgear-for-sparring-2026" className={styles.primaryButton}>Best sparring headgear</Link>
                        <Link href="/reviews/best-boxing-gloves-for-sparring-2026" className={styles.secondaryButton}>Build a sparring setup</Link>
                    </div>
                </div>

                <div className={styles.heroPanel} aria-label="Boxing headgear buying shortcuts">
                    <p className={styles.panelLabel}>Choose by priority</p>
                    <ul className={styles.heroList}>
                        <li><Link href="/boxing/headgear/best-boxing-headgear-for-sparring-2026">I need reliable sparring protection</Link></li>
                        <li><Link href="/boxing/headgear/how-to-choose-boxing-headgear">I want more face or nose coverage</Link></li>
                        <li><Link href="/boxing/headgear/best-boxing-headgear-for-sparring-2026">I do not want blocked vision</Link></li>
                        <li><Link href="/boxing/headgear/best-boxing-headgear-for-sparring-2026">I need a beginner-friendly option</Link></li>
                    </ul>
                </div>
            </section>

            <section className={styles.introSection} aria-labelledby="headgear-intro-title">
                <div>
                    <span className={styles.sectionKicker}>Start Here</span>
                    <h2 id="headgear-intro-title" className={styles.sectionTitle}>How to use this boxing headgear hub</h2>
                </div>
                <div className={styles.copyBlock}>
                    <p>Boxing headgear is easy to choose badly. A thick-looking model can still slide around, block hooks from view, press against your forehead, or feel exhausting after several rounds.</p>
                    <p>This page is organized around the decisions that actually matter: your sparring level, the type of facial coverage you want, how securely the headguard fits, and whether you can still see punches clearly.</p>
                </div>
            </section>

            <section className={styles.topicSection} aria-labelledby="use-case-title">
                <div className={styles.sectionHeader}>
                    <span className={styles.sectionKicker}>Choose by Need</span>
                    <h2 id="use-case-title" className={styles.sectionTitle}>What kind of boxing headgear do you need?</h2>
                    <p className={styles.sectionText}>Start with the problem you are trying to solve: beginner confidence, regular sparring, facial coverage, visibility, fit, or the rest of your sparring equipment.</p>
                </div>

                <div className={styles.topicGrid}>
                    {headgearUseCases.map((card) => (
                        <Link key={card.title} href={card.href} className={styles.topicCard}>
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
                    <h2 id="roadmap-title" className={styles.sectionTitle}>How to choose boxing headgear without wasting money</h2>
                    <p className={styles.sectionText}>Work through these four decisions before comparing individual models or premium brands.</p>
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

            {featuredHeadgearContent.length > 0 && (
                <section className={styles.featuredSection} aria-labelledby="headgear-content-title">
                    <div className={styles.sectionHeader}>
                        <span className={styles.sectionKicker}>Headgear Content</span>
                        <h2 id="headgear-content-title" className={styles.sectionTitle}>Boxing headgear reviews and guides</h2>
                        <p className={styles.sectionText}>Published Sportloom content focused specifically on boxing headgear, sparring protection, fit, and buying decisions.</p>
                    </div>

                    <div className={styles.featuredGrid}>
                        {featuredHeadgearContent.map((page) => (
                            <Link key={page.title} href={`/${page.slug}`} className={styles.featuredCard}>
                                <Image src={page.coverImage || "/images/default-cover.webp"} alt={page.altText || page.title} width={640} height={420} sizes="(max-width: 768px) 100vw, 50vw" className={styles.featuredImage} />
                                <div className={styles.featuredContent}>
                                    <div className={styles.metaRow}>
                                        <span className={styles.reviewBadge}>{page.contentType === "review" ? "Review" : "Guide"}</span>
                                        <span className={styles.contentTime}>{formatDate(page.updatedAt || page.date)}</span>
                                    </div>
                                    <h3 className={styles.featuredTitle}>{page.label || page.title}</h3>
                                    <p className={styles.featuredText}>{page.subtitle || page.description}</p>
                                </div>
                            </Link>
                        ))}
                    </div>
                </section>
            )}

            {supportingContent.length > 0 && (
                <section className={styles.guidesSection} aria-labelledby="supporting-title">
                    <div className={styles.sectionHeader}>
                        <span className={styles.sectionKicker}>Related Sparring Guides</span>
                        <h2 id="supporting-title" className={styles.sectionTitle}>Build a safer, more practical sparring setup</h2>
                        <p className={styles.sectionText}>Headgear works best as one part of a complete setup that includes suitable gloves, controlled training, good fit, and realistic sparring habits.</p>
                    </div>

                    <div className={styles.guideGrid}>
                        {supportingContent.map((page) => (
                            <Link key={page.slug} href={`/${page.slug}`} className={styles.guideCard}>
                                <span className={styles.cardLabel}>{page.contentType === "review" ? "Review" : "Guide"}</span>
                                <h3>{page.label || page.title}</h3>
                                <p>{page.subtitle || page.description}</p>
                            </Link>
                        ))}
                    </div>
                </section>
            )}

            <section className={styles.faqSection} aria-labelledby="faq-title">
                <div className={styles.sectionHeader}>
                    <span className={styles.sectionKicker}>FAQ</span>
                    <h2 id="faq-title" className={styles.sectionTitle}>Boxing headgear FAQ</h2>
                    <p className={styles.sectionText}>Direct answers to common questions about sparring protection, fit, coverage, and buying decisions.</p>
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
                    <span className={styles.sectionKicker}>Sportloom Headgear</span>
                    <h2 id="closing-title" className={styles.sectionTitle}>Choose protection you can actually train in</h2>
                </div>
                <div className={styles.copyBlock}>
                    <p>The most protective-looking headgear is not automatically the best choice. If it moves, overheats quickly, or blocks your view, it can make sparring more frustrating rather than more controlled.</p>
                    <p>For most boxers, the right balance is secure fit, useful cheek and forehead coverage, enough visibility to defend properly, and a profile that stays comfortable across several rounds.</p>
                    <p>Start with the sparring headgear guide, decide whether cheek or full-face protection fits your situation, and complete the setup with appropriate sparring gloves and sensible gym habits.</p>
                </div>
            </section>
        </main>
    );
}
