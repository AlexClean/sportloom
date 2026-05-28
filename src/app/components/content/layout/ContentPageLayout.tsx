import type { ReactNode } from "react";
import styles from "./ContentPageLayout.module.css";

type ContentPageLayoutProps = {
  leftSidebar?: ReactNode;
  children: ReactNode;
  rightSidebar?: ReactNode;
  slug?: string;
};

export default function ContentPageLayout({
  children,
  rightSidebar
}: ContentPageLayoutProps) {
  return (
    <div className={styles.layout}>

      <div className={styles.layout__main}>
        {children}
      </div>

      <div className={styles.layout__right}>
        {rightSidebar ? (
          <>
            {rightSidebar}
          </>
        ) : null}
      </div>
    </div>
  );
}