import { verdictIcons } from "../icons";
import { ReactNode } from "react";


type VerdictItemsProps = {
    icon: "circle" | "coins" | "shield" | "zap" | "badgeDollar" | "leaf" | "award" | "target" | "medal";
    title: string;
    badge: string;
    className?:string;
    children: ReactNode;
}

export default function FinalVerdictItem({icon, title, badge, className, children } : VerdictItemsProps) {

    const Icon = verdictIcons[icon];

    return (
        <li className={`rounded-xl border border-emerald-200/60 p-4 shadow-sm ${className ?? ""}`}>
            <div className="flex items-start gap-3">
                <Icon className="w-16 h-16 lg:w-10 lg:h-10"/>
                <p className="text-zinc-800">
                    <strong>{title}</strong> — {children}
                    <span className="ml-2 inline-flex items-center rounded-full bg-emerald-100 px-2.5 py-0.5 text-xs font-medium text-emerald-800">{badge}</span>
                </p>
            </div>
        </li>
    )
}