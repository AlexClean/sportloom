import { RelatedLinkItem } from "@/Interfaces/types";
import { InlineLink } from "../Button/InernalLinkButton/InternalLinkButtons";
import { ArrowRight } from "lucide-react";

type Props = {
    links: RelatedLinkItem[] | undefined;
    title?: string;
    subtitle?: string;
    className?: string;
};

export function RelatedLinks({
    links,
    title = "Keep Learning",
    subtitle = "Try these related guides and reviews to dial in your choice and sizing:",
    className,
}: Props) {
    return (
        <section className="my-10 ">
            <div className={`rounded-2xl border border-indigo-200 p-5 shadow-sm ring-1 ring-indigo-900/5 ${className || ''}`}>
                <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 text-center">{title}</h2>
                <p className="mt-1 text-md text-slate-500 dark:text-slate-100 text-center">{subtitle}</p>
                <ul className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
                    {links?.map((link) => {
                        return (
                            <li key={link.label} className="flex">
                                <InlineLink href={link.href} className="text-sm group-hover:slate-100 dark:text-slate-100 dark:hover:text-slate-200 dark:bg-black dark:hover:bg-slate-700  not-dark:border-transparent text-slate-700 hover:text-slate-900 ">
                                    {link.label} <ArrowRight className="mt-0.5 size-4 shrink-0 text-slate-400 transition-transform group-hover:translate-x-1 group-hover:text-slate-600 dark:group-hover:text-slate-200 "/>
                                </InlineLink>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </section>
    );
}