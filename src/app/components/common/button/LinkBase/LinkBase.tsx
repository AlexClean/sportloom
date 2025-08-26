import Link from "next/link";
import { ReactNode } from "react";
import { ChevronDown } from "lucide-react";

// простая утилита для классов
function cn(...classes: (string | false | null | undefined)[]) {
  return classes.filter(Boolean).join(" ");
}

type BaseProps = {
  href: string;
  children: ReactNode;
  className?: string;
  variant?: "cta" | "text" | "anchor";
  // доп. опции
  withIcon?: boolean;       // для якорей/текстовых ссылок — шеврон
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
    text: "inline-flex items-center gap-1 w-fit text-blue-600 hover:text-blue-700 underline underline-offset-2",
    anchor: "inline-flex items-center gap-1 w-fit hover:text-blue-600",
  } as const;

  return (
    <Link href={href} className={cn(styles[variant], className)}>
      <span>{children}</span>
      {withIcon && <ChevronDown className="size-4" aria-hidden="true" />}
    </Link>
  );
}
