import Link from "next/link";
import Image from "next/image";
import { GloveSizeCalculator } from "@/app/components/common/GloveSizeCalculator/GloveSizeCalculator";
import styles from "@/app/components/common/GloveSizeCalculator/GloveSizeCalculator.module.css";
import { ArticleHeader, ContentPageLayout, RightSidebar } from "@/app/components/content";
import { ProductMention, RecommendedGear, ResourceCard } from "@/app/components/common";
import { META_LIST } from "@/content/generated/metaRegistry";

export const metadata = {
    title: "Boxing Glove Size Calculator | Find Your Glove Size",
    description:
        "Use this boxing glove size calculator to find the right glove size by weight, hand size, and training type.",
    alternates: {
        canonical: "https://sportloom.com/boxing/gloves/boxing-glove-size-calculator"
    }
};

export default function BoxingGloveSizeCalculatorPage() {

    const meta = META_LIST?.find(entry => entry.slug === "boxing/gloves/boxing-glove-size-calculator");
    if(!meta) {
        return NotFound();
    }
    return (
        <>
        <ArticleHeader meta={meta} />

            <ContentPageLayout
                rightSidebar={<RightSidebar slug="boxing/gloves/boxing-glove-size-calculator" />}
            >
                <article className={styles.page}>
                    <GloveSizeCalculator />

                    <ResourceCard
                        title="Not sure if the calculator result feels right?"
                        description="Learn how boxing gloves should actually fit before buying your first pair."
                        href="/boxing/gloves/how-tight-should-boxing-gloves-fit"
                        ctaLabel="Read the Fit Guide"
                    />

                    <section className={styles.contentSection}>
                        <h2>Understanding Boxing Glove Sizes</h2>
                        <p>
                            Choosing the right boxing glove size is about more than just your body weight. Your training goals, hand size, and the type of boxing you do all influence which glove weight feels best. A heavier glove isn&apos;t automatically better, and a lighter glove isn&apos;t always faster if it compromises protection.
                        </p>

                        <p>
                            As a general rule, beginners usually train in 12 oz, 14 oz, or 16 oz gloves. Lighter gloves are commonly used for pad work and speed-focused sessions, while heavier gloves provide more cushioning during heavy bag training and sparring. The calculator above gives you a practical starting point, but personal comfort and your coach&apos;s recommendations should always come first.
                        </p>

                        <div className={styles.sizeGrid}>
                            <div>
                                <h3>10 oz</h3>
                                <p>Best suited for competition, mitt work, and lighter athletes.</p>
                            </div>

                            <div>
                                <h3>12 oz</h3>
                                <p>A popular choice for technical training, pads, and lighter bag work.</p>
                            </div>

                            <div>
                                <h3>14 oz</h3>
                                <p>A versatile all-around option for many recreational boxers.</p>
                            </div>

                            <div>
                                <h3>16 oz</h3>
                                <p>The standard choice for sparring and maximum hand protection during longer sessions.</p>
                            </div>
                        </div>

                        <p>
                            If you&apos;re still unsure after using the calculator, our detailed guides below explain glove sizing, fit, and how to choose the right pair for your training.
                        </p>
                    </section>

                    <RecommendedGear
                        title="Recommended Beginner Gloves"
                        subtitle="These are excellent choices if you're buying your first pair."
                    >
                        <ProductMention
                            type="inline"
                            productKey="sanabul-essential"
                            badge="Budget Pick"
                            reason="Great for beginners starting with bag work and general boxing classes."
                        />

                        <ProductMention
                            type="inline"
                            productKey="hayabusa-s4"
                            badge="Upgrade Pick"
                            reason="A solid step up if you want better wrist support and long-term durability."
                        />
                    </RecommendedGear>

                    <section className={styles.contentSection}>
                        <h2>What to Read Next</h2>
                        <div className={styles.linkCards}>
                            <Link href="/boxing/gloves/how-tight-should-boxing-gloves-fit">
                                How Tight Should Boxing Gloves Fit?
                            </Link>
                            <Link href="/boxing/gloves/best-boxing-gloves-for-beginners">
                                Best Boxing Gloves for Beginners
                            </Link>
                            <Link href="/boxing/gloves/best-boxing-gloves-for-wide-hands">
                                Best Boxing Gloves for Wide Hands
                            </Link>
                            <Link href="/reviews/best-boxing-gloves-under-100">
                                Best Boxing Gloves Under $100
                            </Link>
                            <Link href="/boxing/gloves/boxing-glove-size-guide">
                                Boxing Gloves Size Guide
                            </Link>
                            <Link href="/reviews/best-boxing-gloves-for-sparring-2026">
                                Best Boxing Gloves for Sparring
                            </Link>
                        </div>
                    </section>

                </article>
            </ContentPageLayout>
        </>

    );
}

function NotFound() {
    return (
        <div className="max-w-5xl mx-auto p-6">
            <h1 className="text-center font-semibold text-3xl mb-6">Page Not Found</h1>
            <p className="mx-auto m-4 max-w-4xl text-center">
                Sorry, we couldn&apos;t find the page you were looking for. Please check the URL or return to the homepage.
            </p>
        </div>
    );
}
