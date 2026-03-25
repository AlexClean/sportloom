import { ReactNode } from "react";

type Props = {
    children: ReactNode;
    title?: string;
};

export function QuickPicks({
    children,
    title = "Quick Picks",
}: Props) {

    return (
        <section className="review-main p-3 rounded-2xl border border-blue-200/60 bg-white mt-6 text-[17px] leading-7 sm:text-lg sm:leading-8">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-center">{title}</h2>
            <ul className="mt-6 space-y-4 max-w-3xl mx-auto">{children}</ul>
        </section>
    );
}