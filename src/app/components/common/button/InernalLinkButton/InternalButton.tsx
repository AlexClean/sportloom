// components/InternalLinkButton.tsx
import Link from "next/link";
import { ReactNode } from "react";

type Props = {
  href: string;
  children: ReactNode;
};

export function InternalLinkButton({ href, children }: Props) {
  return (
    <Link
      href={href}
      className="inline-flex w-fit gap-1 rounded bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
    >
      {children}
    </Link>
  );
}
