import { ReactNode } from "react";

type CTAProps = {
    title: string;
    subtitle: string;
    children: ReactNode
}


export default function CTA({
    title, subtitle, children
}: CTAProps){

    return(
        <section id="keep-learning" className="my-12">
            <div className="rounded-2xl border border-indigo-200 bg-indigo-50 p-5 shadow-sm ring-1 ring-indigo-900/5">
              <h2 className="text-xl sm:text-2xl font-extrabold">{title}</h2>
              <p className="mt-2 text-slate-700">{subtitle}</p>
              <ul className="mt-3">
                {children}
              </ul>
            </div>
          </section>
    )
}