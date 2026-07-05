import Link from "next/link";
import styles from "./ResourceCard.module.css";

export type ResourceType = "calculator" | "guide" | "review" | "comparison" | "chart" | "tool";

interface ResourceCardProps {
  title: string;
  description: string;
  href: string;
  type?: ResourceType;
  eyebrow?: string;
  ctaLabel?: string;
  className?: string;
}

const typeLabels: Record<ResourceType, string> = {
  calculator: "Free Calculator",
  guide: "Guide",
  review: "Review",
  comparison: "Comparison",
  chart: "Size Chart",
  tool: "Free Tool",
};


export function ResourceCard({
  title,
  description,
  href,
  type = "tool",
  eyebrow,
  ctaLabel = "Open resource",
  className = "",
}: ResourceCardProps) {
  const label = eyebrow ?? typeLabels[type];

  return (
    <section className={`${styles.card} ${className}`}>
      <div className={styles.content}>
        <p className={styles.eyebrow}>{label}</p>
        <h3 className={styles.title}>
          <Link href={href}>{title}</Link>
        </h3>
        <p className={styles.description}>{description}</p>

        <Link className={styles.cta} href={href}>
          {ctaLabel} <span aria-hidden="true">→</span>
        </Link>
      </div>
    </section>
  );
}