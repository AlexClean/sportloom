import { ReactNode } from "react"


export default function FAQ({children} : {children: ReactNode}){

    return(
        <section id="faq">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-center">Frequently Asked Questions</h2>
            <div className="mx-auto mt-6 max-w-4xl divide-y divide-slate-200 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
                {children}
            </div>
        </section>
    )
}