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

        <header className="mb-8">
            <h1 className="text-3xl text-center md:text-4xl font-extrabold tracking-tight">{title}</h1>
            <p className="mt-2 text-base text-neutral-600 dark:text-neutral-400">{subtitle}</p>
            <div className="my-3 text-sm text-neutral-500">
                <time dateTime={date}>{setDatetimeAttribute(date)}</time>
            </div>
            <figure className="mb-8">
                <Image
                    src={heroSrc}
                    alt={heroAlt}
                    width={920}
                    height={613}
                    className="w-full rounded-xl object-cover"
                    loading="eager"
                    priority
                />
                <figcaption className="mt-2 text-xs text-neutral-500">Photo: Sportloom</figcaption>
            </figure>
        </header>
    )
}


const setDatetimeAttribute = (dateString: string | undefined): string => {
    if (!dateString) return "";
    const date = new Date(dateString);

    const options = {
        year: "numeric",
        month: "long",
        day: "numeric"
    } as const;

    return date.toLocaleDateString('us-US', options)
}