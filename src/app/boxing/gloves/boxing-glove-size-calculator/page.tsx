import Link from "next/link";
import GloveSizeCalculator from "./GloveSizeCalculator";
import styles from "./GloveSizeCalculator.module.css";

export const metadata = {
  title: "Boxing Glove Size Calculator | Find Your Glove Size",
  description:
    "Use this boxing glove size calculator to find the right glove size by weight, hand size, and training type.",
};

export default function BoxingGloveSizeCalculatorPage() {
  return (
    <main className={styles.page}>
      <section className={styles.hero}>
        <p className={styles.eyebrow}>Boxing Gloves Tool</p>
        <h1>Boxing Glove Size Calculator</h1>
        <p className={styles.heroText}>
          Find the right boxing glove size based on your weight, hand circumference, and training goal.
        </p>
      </section>

      <GloveSizeCalculator />

      <section className={styles.contentSection}>
        <h2>How boxing glove sizing works</h2>
        <p>
          Boxing gloves are usually measured in ounces. Heavier gloves have more padding and are often better for sparring,
          while lighter gloves are commonly used for bag work, mitts, and fitness training.
        </p>

        <div className={styles.sizeGrid}>
          <div>
            <h3>10 oz</h3>
            <p>Best for lighter bag work, pads, and competition-style training.</p>
          </div>
          <div>
            <h3>12 oz</h3>
            <p>A good option for smaller athletes, fitness boxing, and technical drills.</p>
          </div>
          <div>
            <h3>14 oz</h3>
            <p>A safe all-around choice for many beginners and general training.</p>
          </div>
          <div>
            <h3>16 oz</h3>
            <p>Common choice for sparring and heavier athletes who need more padding.</p>
          </div>
        </div>
      </section>

      <section className={styles.contentSection}>
        <h2>What to read next</h2>
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
        </div>
      </section>
    </main>
  );
}