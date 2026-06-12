
type Props = {
    title?: string;
    description?: string;
};


export function HowWeChoose({title, description}: Props) {
    return (
        <section aria-labelledby="how-we-chose" id="how-we-chose" className="scroll-mt-24 my-10">
            <h2 id="how-we-chose" className="text-2xl sm:text-3xl font-extrabold dark:text-slate-100 text-slate-900 text-center">{title}</h2>
            <div className="mx-auto mt-4 max-w-5xl rounded-2xl border border-blue-200/60 not-dark:bg-white p-5 shadow-sm ring-1 ring-blue-900/5">
                <p className="text-slate-700 leading-relaxed">{description}</p>
            </div>
        </section>
    )
}