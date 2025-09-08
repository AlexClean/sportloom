import { ArrowRight } from "lucide-react";
import { InternalLinkButton } from "../../common/button/InernalLinkButton/InternalLinkButtons";
import { ReactNode } from "react";

type CTAItemProps = {
    href: string;
    children: ReactNode
}

export default function CTAItem({href, children} : CTAItemProps) {
    return (
        <li className="flex">
            <InternalLinkButton
                href={href}
            >
                {children} <ArrowRight className="w-4 h-4 inline-block align-middle" />
            </InternalLinkButton>
        </li>
    )
}