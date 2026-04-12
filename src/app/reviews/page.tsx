import { getMetaFiles } from "@/lib/content/contentLoader";
import ReviewCard from "../components/common/card/ReviewCard/ReviewCard";


export default async function UsersPage() {
    const content = await getMetaFiles();
    const reviews = content?.filter(entry => entry.contentType === "review");
    return (
        <div className="max-w-5xl mx-auto p-6">
            <h1 className="text-center font-semibold text-3xl mb-6">Best Boxing Gloves Reviews & Rankings</h1>
            <section className="my-8  space-y-4 text-gray-600 dark:text-gray-200 text-lg sm:text-xl">
                <p className="mx-auto m-4 max-w-4xl">
                    Looking for the best boxing gloves for training, sparring, or heavy bag workouts? In this section, we review and compare top-rated boxing gloves based on real-world performance, comfort, durability, and value.
                </p>

                <p className="mx-auto m-4 max-w-4xl">
                    Our reviews cover beginner-friendly options, premium gloves, and specialized models for different training styles. Each guide includes detailed comparisons, pros and cons, and recommendations to help you choose the right gear.
                </p>

                <p className="mx-auto m-4 max-w-4xl">
                    Whether you&apos;re just starting boxing or upgrading your equipment, browse our latest reviews below to find the best gloves for your needs.
                </p>
            </section>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {reviews?.map(review => (

                    <ReviewCard
                        key={review.slug}
                        href={`/${review.slug}`}
                        title={review.title}
                        excerpt={review.description}></ReviewCard>
                ))}
            </div>

        </div>
    )
}