import Link from "next/link";
import { ReactNode } from "react";
import { ChevronDown } from "lucide-react";


function cn(...classes: (string | false | null | undefined)[]) {
  return classes.filter(Boolean).join(" ");
}

type BaseProps = {
  href: string;
  children: ReactNode;
  className?: string;
  variant?: "cta" | "text" | "anchor";

  withIcon?: boolean;       
};

export function LinkBase({
  href,
  children,
  className,
  variant = "cta",
  withIcon,
}: BaseProps) {
  const styles = {
    cta: "inline-flex items-center gap-1 w-fit rounded px-4 py-2 bg-blue-600 text-white hover:bg-blue-700 focus-visible:outline-none focus-visible:ring focus-visible:ring-blue-300",
    text: "group flex w-full items-start justify-between gap-2 rounded-xl border bg-slate-50 p-3 transition-all hover:bg-blue-50 hover:border-blue-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-300",
    anchor: "inline-flex items-center gap-1 w-fit hover:text-blue-600",
  } as const;

  return (
    <Link href={href} className={cn(styles[variant], className)}>
      <span className="line-clamp-2 text-md">{children}</span>
      {withIcon && <ChevronDown className="size-4" aria-hidden="true" />}
    </Link>
  );
}
