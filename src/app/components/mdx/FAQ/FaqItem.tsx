import { ReactNode } from "react";

type FaqItemProps = {
    question: string;
    children: ReactNode
}

export default function FaqItem({question, children} : FaqItemProps) {
    return (
        <div className="p-5">
            <h3 className="font-semibold">{question}</h3>
            <p className="mt-2 text-slate-700">{children}</p>
        </div>
    )
}