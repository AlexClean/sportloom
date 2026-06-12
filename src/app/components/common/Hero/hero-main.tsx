import Image from "next/image";

type HeroPops = {
    src: string;
    alt: string;
    className?: string;
};

export function HeroMain({
    src,
    alt,
    className
}: HeroPops)
 {
    return (
        <section className="mt-6 text-center">
            <h1 className="text-6xl font-bold mb-4">Welcome to Sportloom</h1>
            <Image src={src} alt={alt} className={className || "mx-auto mt-8 mb-6 rounded-lg shadow-lg"} width={1800} height={1400} />
            <h2 className="text-4xl text-gray-900 mx-auto dark:text-gray-200">
                Sportloom: Your Unbiased Guide to the World of Sport. Expert Reviews, In-Depth Articles, and Breaking News Soon.
            </h2>
        </section>
    );
}