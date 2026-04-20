import { BaseMeta } from "@/Interfaces/types";
import Image from "next/image";


type ArticleHeaderProps = {
    meta: BaseMeta;
};


export default function ArticleHeader({ meta }: ArticleHeaderProps) {
    const { title, subtitle, date, coverImage, altText } = meta;
    const heroSrc = coverImage || "/images/default-article-cover.jpg";
    const heroAlt = altText || title;

    return (
        <>
            <header className="mb-8">
                <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight">{title}</h1>
                <p className="mt-2 text-base text-neutral-600 dark:text-neutral-400">{subtitle}</p>
                <div className="mt-3 text-sm text-neutral-500"><time dateTime={date}>{date}</time></div>
            </header>
            <figure className="mb-8">
                <Image
                    src={heroSrc}
                    alt={heroAlt}
                    width={120}
                    height={613}
                    className="w-full rounded-xl object-cover"
                    loading="eager"
                    priority
                />
                <figcaption className="mt-2 text-xs text-neutral-500">Photo: Sportloom</figcaption>
            </figure>
        </>
    )
}