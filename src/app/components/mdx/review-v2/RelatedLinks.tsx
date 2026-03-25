import type { ReviewLinkItem } from "@/Interfaces/reviewTypes";
import { InternalLinkButton } from "../../common/button/InernalLinkButton/InternalLinkButtons";
import { ArrowRight } from "lucide-react";

type Props = {
    links: ReviewLinkItem[];
    title?: string;
    subtitle?: string;
};

export function RelatedLinks({
    links,
    title = "Keep Learning",
    subtitle = "Try these related guides and reviews to dial in your choice and sizing:",
}: Props) {
    return (
        <section className="my-10">
            <div className="rounded-2xl border border-indigo-200 bg-indigo-50 p-5 shadow-sm ring-1 ring-indigo-900/5">
                <h2 className="text-xl sm:text-2xl font-extrabold">{title}</h2>
                <p className="mt-2 text-slate-700">{subtitle}</p>
                <ul className="mt-3 flex flex-col gap-2">
                    {links.map((link) => {
                        return (
                            <li key={link.label} className="flex">
                                <InternalLinkButton href={link.href}>
                                    {link.label} <ArrowRight className="w-4 h-4 inline-block align-middle" />
                                </InternalLinkButton>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </section>
    );
}