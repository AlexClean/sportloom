import type { ReactNode } from "react";
import "@/./styles/content-layout.css";

type ContentPageLayoutProps = {
  leftSidebar?: ReactNode;
  children: ReactNode;
  rightSidebar?: ReactNode;
  className?: string;
};

export default function ContentPageLayout({
  leftSidebar,
  children,
  rightSidebar,
  className,
}: ContentPageLayoutProps) {
  return (
    <div className="content-layout">
      <aside className="content-layout__left">
        {leftSidebar ? (
          <>
            {leftSidebar}
          </>
        ) : null}
      </aside>

      <div className="content-layout__main">
        {children}
      </div>

      
        {rightSidebar ? (
          <>
            {rightSidebar}
          </>
        ) : null}
    </div>
  );
}