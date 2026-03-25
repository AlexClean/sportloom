import type { ReviewVerdictItem } from "@/Interfaces/reviewTypes";
import { verdictIcons } from "../icons";



export function FinalVerdict({items}: { items: ReviewVerdictItem[] }) {

    return (
        <section aria-labelledby="final-verdict">
            <header>
                <h2 id="final-verdict">Final Verdict</h2>
            </header>
            <ul className="grid gap-3">
                {items.map((item, index) => {
                    const Icon = verdictIcons[item.icon];
                    return (
                        <li className="rounded-xl border border-emerald-200/60 p-4 shadow-sm" key={index}>
                            <div className="flex items-start gap-3">
                                {verdictIcons[item.icon] && (
                                    <Icon className="w-16 h-16 lg:w-10 lg:h-10" />
                                )}

                                <p className="text-zinc-800">
                                    <strong>{item.title}</strong> — {item.text}
                                    <span className="ml-2 inline-flex items-center rounded-full bg-emerald-100 px-2.5 py-0.5 text-xs font-medium text-emerald-800">{item.badge}</span>
                                </p>
                            </div>
                        </li>
                    )
                })}
            </ul>
        </section>
    );
}

