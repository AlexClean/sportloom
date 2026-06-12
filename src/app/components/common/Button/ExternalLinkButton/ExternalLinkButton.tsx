import Link from "next/link";
import type { ReactNode } from "react";

function cn(...classes: (string | false | null | undefined)[]) {
  return classes.filter(Boolean).join(" ");
}

const cta =
  "inline-flex items-center gap-1 w-fit rounded px-4 py-2 bg-blue-600 text-white hover:bg-blue-700 focus-visible:outline-none focus-visible:ring focus-visible:ring-blue-300";

type Props = {
  href: string;
  children: ReactNode;
  className?: string;
};

export default function ExternalLinkButton({ href, children, className }: Props) {
  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(cta, className)}
    >
      <span>{children}</span>
    </Link>
  );
}
