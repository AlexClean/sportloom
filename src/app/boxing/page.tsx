import {CardBase} from "../components/common";
import Link from "next/link";
import { META_LIST } from "@/content/generated/metaRegistry";


export default async function Page() {

    const content = META_LIST.filter(entry => entry.tags?.includes("boxing"));
    
    return (
        <>
            <h1 className="text-3xl text-center">This is Boxing hub</h1>
            <h2 className="text-2xl text-center">All related boxing content</h2>
            <br />
            <p className="text-xl text-center mb-2">Boxing is more than just a sport — it’s a combination of technique, conditioning, and the right equipment. Whether you&apos;re just starting out or already training regularly, choosing the right gear and understanding how to use it properly is essential.</p>
            <p className="text-xl text-center mb-2">In this section, you’ll find everything related to boxing equipment, training, and guides. From boxing gloves reviews to practical tutorials and expert advice, our goal is to help you train smarter, stay safe, and get better results.</p>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {content?.map((item) => (
                    <CardBase key={item.slug}
                        href={`/${item.slug}`}
                        title={item.title}
                        excerpt={item.description}
                        metaLeft={<span className="inline-flex items-center rounded bg-blue-50 px-2 py-0.5 text-blue-700">{item.label}</span>}
                    />
                ))}
            </div>
            <p className="text-xl text-center my-4">Looking for boxing gloves? Explore our dedicated section with detailed reviews, comparisons, and practical guides to help you choose the right pair for your training style.</p>
            <p className="text-xl text-center">Whether you need gloves for beginners, sparring, or heavy bag workouts, you’ll find clear recommendations and expert advice based on real use.</p>
            <div className="mt-6 p-4 border rounded-xl mb-4">
                <h3 className="font-semibold text-lg">Boxing Gloves</h3>
                <p className="text-sm text-neutral-600 mt-1 dark:text-neutral-200">
                    Reviews, guides, and comparisons to help you choose the best boxing gloves.
                </p>
                <Link href="/boxing/gloves" className="text-blue-600 hover:underline mt-2 inline-block">
                    Explore →
                </Link>
            </div>
        </>
    )
}