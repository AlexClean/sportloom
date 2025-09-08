import { ReactNode } from "react";

type FinalVerdictProps = {
    className?: string;
    children: ReactNode;
}

export default function FinalVerdict({className, children}: FinalVerdictProps){
    return (
        <section className={`${className ?? ""}`} aria-labelledby="final-verdict">
            <header>
                <h2 id="final-verdict">Final Verdict</h2>
            </header>
            <ul className="grid gap-3">
                {children}
            </ul>
        </section>
    )
}