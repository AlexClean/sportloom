import { InternalLinkButton } from "./common/button/InernalLinkButton/InternalLinkButtons";

export default function ReviewCard({ segment, slug }: { segment: string, slug: string }) {

    return (
        <div className="flex flex-col gap-2 border rounded-2xl border-gray-100 p-3">
            <h2 className="text-lg font-semibold capitalize">{slug.replace(/-/g, " ")}</h2>
            <p className="text-sm text-gray-600 dark:text-gray-200">Best boxing gloves for beginners 2025</p>
            <InternalLinkButton
            href={`/${segment}/${slug}`}>
                Read more →
            </InternalLinkButton>
        </div>
    )
}