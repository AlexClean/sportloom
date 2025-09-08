import { ReactNode } from "react"

type InfoBlockProps = {
    title:string;
    id?:string;
    children:ReactNode;
    containerClassName?:string;
    titleClassName?:string;
}

export default function InfoBlock({title, id, containerClassName, titleClassName, children} : InfoBlockProps) {
    return (
        <section id={id} className="my-12">
            <div className={`mx-auto max-w-3xl rounded-2xl border p-6 ${containerClassName ?? ""}`}>
                <h2 className={`text-xl sm:text-2xl font-extrabold ${titleClassName ?? ""}`}>{title}</h2>
                <div className="mt-4 flex items-start gap-4">
                    <div className="text-slate-800 leading-relaxed">
                        {children}
                    </div>
                </div>
            </div>
        </section>
    )
}