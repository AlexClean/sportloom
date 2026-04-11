import { RelatedLinkItem } from "@/Interfaces/types";
import { InlineLink, InternalLinkButton } from "../../common/button/InernalLinkButton/InternalLinkButtons";
import { ArrowRight } from "lucide-react";
import ExternalLinkButton from "../../common/button/ExternalLinkButton/ExternalLinkButton";

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
                <h2 className="text-2xl font-bold text-slate-900 text-center">{title}</h2>
                <p className="mt-1 text-md text-slate-500 text-center">{subtitle}</p>
                <ul className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
                    {links?.map((link) => {
                        return (
                            <li key={link.label} className="flex">
                                <InlineLink href={link.href} className="text-sm">
                                    {link.label} <ArrowRight className="mt-0.5 size-4 shrink-0 text-slate-400 transition-transform group-hover:translate-x-1 group-hover:text-slate-600" />
                                </InlineLink>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </section>
    );
}