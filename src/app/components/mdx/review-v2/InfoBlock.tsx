import { ReviewInfoBlock } from "@/Interfaces/reviewTypes";

export default function InfoBlock({title, content}: ReviewInfoBlock) {
    return (
        <section className="scroll-mt-24 my-10">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 text-center">{title}</h2>
            <div className="mx-auto mt-4 max-w-6xl rounded-2xl border border-slate-200 bg-white p-5 shadow-sm ring-1 ring-slate-900/5">
                <p className="text-slate-700 leading-relaxed whitespace-pre-line">{content}</p>
            </div>
        </section>
    )
}