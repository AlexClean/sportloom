import getAllSlugsFromTheFolder from "@/lib/getAllSlugsFromTheFolder";
import { notFound } from "next/navigation";

import Link from "next/link";


export const dynamicParams = false;

export async function generateStaticParams() {
  const reviews = getAllSlugsFromTheFolder('reviews');
  return reviews.map(slug => ({ slug }));
}


export default async function ReviewPage({ params }: { params: Promise<{ slug: string }> }) {

  const { slug } = await params;
  const reviews = getAllSlugsFromTheFolder('reviews');
  if (!reviews.includes(slug)) {
    notFound();
  }



  return (
    <>
      <h1>This Page is obsolete</h1>
      <p>Please check out the new reviews section for updated content and features.</p>
      <p><Link href="/reviews">Go to Reviews</Link></p>
    </>
  );
}
