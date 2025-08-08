import Link from "next/link";

export default function ReviewCard({ slug }: { slug: string }) {

    return (
        <div>
            <h2 className="text-lg font-semibold capitalize">{slug.replace(/-/g, " ")}</h2>
            <p className="text-sm text-gray-600">Description will be soon</p>
            <Link
                href={`/reviews/${slug}`}
                className="mt-3 inline-block text-blue-600 hover:underline"
            >
                Read more →
            </Link>
        </div>
    )
}