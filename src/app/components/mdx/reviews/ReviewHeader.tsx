import Image from "next/image";

export default function QuickPickItem({
    title, intro, heroSrc, heroAlt, className,
}: { title: string; intro: string; heroSrc: string; heroAlt: string; className?: string }) {
    return (
        <header className={["review-header rounded-2xl text-center", className].filter(Boolean).join(" ")}>
            <h1 className="mx-auto m-4 max-w-4xl text-3xl sm:text-4xl font-extrabold">{title}</h1>
            <p className="mx-auto m-4 max-w-4xl text-lg sm:text-xl">{intro}</p>
            <Image
                src={heroSrc}
                alt={heroAlt}
                width={1224}
                height={740}
                className="m-auto rounded-xl max-w-full h-auto"
                priority />
        </header>
    );
}
