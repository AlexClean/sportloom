import { ReactNode } from "react";
import styles from "./RecommendedGear.module.css";

type RecommendedGearProps = {
  title: string;
  subtitle?: string;
  children: ReactNode;
};

export function RecommendedGear({ title, subtitle, children }: RecommendedGearProps) {
  return (
    <section className={styles.gear}>
      <div className={styles.header}>
        <h2 className={styles.title}>{title}</h2>
        {subtitle && (
          <p className={styles.subtitle}>{subtitle}</p>
        )}
      </div>

      <div className={styles.grid}>
        {children}
      </div>
    </section>
  );
}