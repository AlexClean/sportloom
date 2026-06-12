import { ShoppingCart } from "lucide-react";
import { AnchorLink } from "../Button";
import Link from "next/link";

export function QuickPickItem({
  badge, name, amazonUrl, anchorHref, price, className,
}: {
  badge?: string; name?: string; amazonUrl?: string; anchorHref: string; price?: string; className?: string;
}) {
  return (
    <li className={["flex flex-col sm:flex-row items-start sm:items-center justify-between rounded-xl dark:bg-black bg-slate-50 p-4", className].filter(Boolean).join(" ")}>
      <div className="dark:bg-black">
        <p className="text-sm not-dark:text-slate-500">{badge}</p>
        <h3 className="text-lg sm:text-2xl font-semibold">{name}</h3>
        <div className="mt-1 flex flex-wrap items-center gap-3 sm:gap-4">
          <Link href={amazonUrl ? amazonUrl : "https://amzn.to/3P49VqQ"} target="_blank" rel="sponsored noopener nofollow" className="inline-flex items-center gap-1 text-blue-600 hover:text-blue-800 font-medium">
            <ShoppingCart className="h-4 w-4"/>Amazon
          </Link>
          <AnchorLink href={"#" + anchorHref} className="inline-flex items-center gap-1 not-dark:text-slate-800 font-medium">
            See Full Review
          </AnchorLink>
        </div>
      </div>
      <span className="mt-2 sm:mt-0 not-dark:text-slate-800 font-semibold">{price}</span>
    </li>
  );
}
