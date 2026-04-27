import { ShoppingCart } from "lucide-react";
import { AnchorLink } from "../../common/button/InernalLinkButton/InternalLinkButtons";
import Link from "next/link";

export default function QuickPickItem({
  badge, name, amazonUrl, anchorHref, price, className,
}: {
  badge?: string; name?: string; amazonUrl?: string; anchorHref: string; price?: string; className?: string;
}) {
  return (
    <li className={["flex flex-col sm:flex-row items-start sm:items-center justify-between rounded-xl bg-slate-50 hover:bg-white p-4", className].filter(Boolean).join(" ")}>
      <div>
        <p className="text-sm text-slate-500">{badge}</p>
        <h3 className="text-lg sm:text-2xl font-semibold dark:text-black">{name}</h3>
        <div className="mt-1 flex flex-wrap items-center gap-3 sm:gap-4">
          <Link href={amazonUrl ? amazonUrl : "https://amzn.to/3P49VqQ"} target="_blank" rel="sponsored noopener nofollow" className="inline-flex items-center gap-1 text-blue-600 hover:text-blue-800 font-medium">
            <ShoppingCart className="h-4 w-4"/>Amazon
          </Link>
          <AnchorLink href={"#" + anchorHref} className="inline-flex items-center gap-1 text-slate-800 font-medium">
            See Full Review
          </AnchorLink>
        </div>
      </div>
      <span className="mt-2 sm:mt-0 text-slate-800 font-semibold">{price}</span>
    </li>
  );
}
