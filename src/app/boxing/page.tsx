import { getMetaFiles } from "@/lib/content/contentLoader"
import Link from "next/link";
import CardBase from "../components/common/card/CardBase";

interface PageProps {
    params: Promise<{ slug: string[] }>
}


export default async function Page({ params }: PageProps) {

    const { slug } = await params;
    const content = await getMetaFiles();
    const gearPages = content?.filter(entry => entry.tags?.includes("boxing"));

    return (
        <>
            <h1 className="text-3xl text-center">This is Boxing hub</h1>
            <h2 className="text-2xl text-center">All related boxing content</h2>
            <br />
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {gearPages?.map((item) => (
                    <CardBase key={item.slug}
                        href={item.slug}
                        title={item.title}
                        excerpt={item.description}
                        metaLeft={<span className="inline-flex items-center rounded bg-blue-50 px-2 py-0.5 text-blue-700">{item.label}</span>}
                    />
                ))}
            </div>

        </>
    )
}