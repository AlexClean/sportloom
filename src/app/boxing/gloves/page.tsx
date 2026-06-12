import {CardBase} from "@/app/components/common";
import { META_LIST } from "@/content/generated/metaRegistry";


export default async function Page() {

    const content = META_LIST.filter(entry => entry.tags?.includes("gloves"));
    const reviewGlovesPages = content?.filter(entry => entry.contentType === "review");
    const articleGlovesPages = content?.filter(entry => entry.contentType === "article");

    const params = META_LIST?.map(item => ({ slug: item.slug.split("/") })) || [];
    console.log("Generated static params for gloves page:", params);

    return (
        <>
            <h1 className="text-3xl text-center mb-4">Boxing Gloves: Reviews, Guides & Comparisons</h1>
            <p className="text-xl text-center">Looking for the best boxing gloves? Whether you&apos;re a beginner, training on the heavy bag, or preparing for sparring, choosing the right gloves makes a huge difference. Explore our latest reviews, buying guides, and expert tips to find the perfect pair for your needs.</p>
            <br />
            <h2 className="text-2xl text-center mb-4">Best Boxing Gloves Reviews</h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 mb-4">
                {reviewGlovesPages?.map((item) => (
                    <CardBase key={item.slug}
                        href={`/${item.slug}`}
                        title={item.title}
                        excerpt={item.description}
                        metaLeft={<span className="inline-flex items-center rounded bg-blue-50 px-2 py-0.5 text-blue-700">{item.label}</span>}
                    />
                ))}
            </div>
            <h2 className="text-2xl text-center mb-4">Boxing Gloves Guides & Tips</h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {articleGlovesPages?.map((item) => (
                    <CardBase key={item.slug}
                        href={`/${item.slug}`}
                        title={item.title}
                        excerpt={item.description}
                        metaLeft={<span className="inline-flex items-center rounded bg-blue-50 px-2 py-0.5 text-blue-700">{item.label}</span>}
                    />
                ))}
            </div>
            <h2 className="text-2xl text-center my-4">How to Choose the Right Boxing Gloves</h2>
            <p className="text-xl mb-2">Choosing the right boxing gloves depends on your training type, experience level, and personal comfort. Beginners should focus on versatile boxing gloves that offer good protection and wrist support, making them suitable for general training, including bag work and light sparring. The best gloves are not always the most expensive — the key is finding a balance between fit, durability, and intended use.</p>
            <p className="text-xl mb-2">Choosing the right boxing gloves depends on your training type, experience level, and personal comfort. Beginners should focus on versatile boxing gloves that offer good protection and wrist support, making them suitable for general training, including bag work and light sparring. The best gloves are not always the most expensive — the key is finding a balance between fit, durability, and intended use.</p>
            <p className="text-xl ">For sparring, softer padding and higher weight (typically 14–16 oz) are important to reduce impact and protect both you and your partner. For heavy bag training, gloves with denser padding and stronger wrist support are a better choice, as they can handle repeated impact. Understanding these differences helps you choose boxing gloves that match your training style rather than relying on one universal option.</p>
        </>
    )
}