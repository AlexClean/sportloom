import ArticleCard from "../components/common/card/ArticleCard/ArticleCard";
import { capitalizeFirst } from "@/lib/string";
import { getMetaFiles } from "@/lib/content/contentLoader";

export default async function ReviewsList() {

    const content = await getMetaFiles();
    const articles = content?.filter(entry => entry.contentType === "article");

    return (
        <div className="max-w-5xl mx-auto p-6">
            <h1 className="text-center text-3xl font-bold">Boxing Guides, Tips & Training Articles</h1>
            <h2 className="text-center text-2xl font-semibold">Improve Your Training</h2>
            <section className="my-8  space-y-4 text-gray-600 dark:text-gray-200 text-lg sm:text-xl">
                <p>
                    Welcome to our boxing knowledge hub. Here you&apos;ll find detailed guides, training tips, and expert advice to help you improve your performance and choose the right equipment.
                </p>
                <p>
                    Whether you&apos;re learning the basics or refining your technique, our articles cover everything from choosing boxing gloves to wrapping your hands properly and understanding training gear.
                </p>
                <p>
                    If you&apos;re new to boxing, start with our step-by-step guides designed specifically for beginners. These articles will help you avoid common mistakes and build a strong foundation.
                </p>
                <p>
                    Our content is designed not only to inform but also to help you train smarter. From equipment choices to technique tips, you&apos;ll find practical advice you can apply immediately.
                </p>
            </section>
            <h2 className="text-center mb-8 text-2xl font-semibold">Beginner-Friendly Guides</h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {articles?.map((article) => (
                    <ArticleCard key={article.slug}
                        href={`/${article.slug}`}
                        title={capitalizeFirst(article.title)}
                        excerpt={article.description}
                        readingTime={article.readingTime}
                    />
                ))}
            </div>
        </div>
    );
}

