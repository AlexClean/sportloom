import Link from "next/link";
import { InternalLinkButton } from "./components/common/button/InernalLinkButton/InternalLinkButtons";

export default function Home() {
  return (
    <div className="space-y-12">
      <section className="text-center">
        <h1 className="text-4xl font-bold mb-4">Welcome to Sportloom</h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto dark:text-gray-200">
          Discover the best boxing gloves, sports nutrition, and gear — all reviewed and ranked. Stay updated with the latest news in the world of sports.
        </p>
      </section>
      <section>
        <h2 className="text-2xl font-semibold mb-6 text-center">Featured Reviews</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Link href="/reviews/best-boxing-gloves-for-beginners-2025" className="block p-6 rounded-xl shadow hover:shadow-lg transition bg-white dark:bg-gray-800">
            <h3 className="text-xl font-bold mb-2">Best Boxing Gloves for Beginners (2025)</h3>
            <p className="text-gray-600 dark:text-gray-300">Our top picks to help you start boxing with the right protection and comfort.</p>
          </Link>
          <Link href="/reviews/best-boxing-gloves-for-heavy-bag-2025"
            className="block p-6 rounded-xl shadow hover:shadow-lg transition bg-white dark:bg-gray-800">
            <h3 className="text-xl font-bold mb-2">Best Boxing Gloves for Heavy Bag (2025)</h3>
            <p className="text-gray-600 dark:text-gray-300">Tested gloves that can withstand powerful bag workouts and protect your hands.</p>
          </Link>
        </div>
      </section>
      {/* Guides */}
      <section>
        <h2 className="text-2xl font-semibold mb-6 text-center">Guides & Articles</h2>
        <div className="flex flex-col md:flex-row gap-6">
          <Link href="/articles/how-to-choose-boxing-gloves" className="flex-1 p-6 rounded-xl bg-gray-100 hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600 transition">
            <h3 className="font-bold text-lg mb-2">How to Choose Boxing Gloves</h3>
            <p className="text-gray-600 dark:text-gray-300">A complete guide on sizes, padding, and types of gloves.</p>
          </Link>
          <Link rel="nofollow" href="/articles" className="flex-1 p-6 rounded-xl bg-gray-100 hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600 transition">
            <h3 className="font-bold text-lg mb-2">Boxing Gloves Size Guide</h3>
            <p className="text-gray-600 dark:text-gray-300">Find the perfect fit for training, sparring, or competition.</p>
          </Link>
        </div>
      </section>
      {/*Carousel with Reviews and Articles in the Future*/}
      <section className="bg-gray-100 p-6 rounded-xl text-center">
        <h2 className="text-2xl font-semibold mb-2 dark:text-gray-800">Start Exploring</h2>
        <p className="mb-4 text-gray-600">Browse reviews, read sports news, or explore categories below.</p>
        <div className="flex flex-wrap justify-center gap-4 dark:text-gray-800">
          <InternalLinkButton href="/reviews">Product Reviews</InternalLinkButton>
          <InternalLinkButton href="/articles">Read our Articles</InternalLinkButton>
        </div>
      </section>
      {/* Trust Section */}
      <section className="text-center max-w-2xl mx-auto">
        <h2 className="text-2xl font-semibold mb-4">Why SportLoom?</h2>
        <p className="text-gray-600 dark:text-gray-300">
          At SportLoom, we provide honest reviews and expert guides to help you choose the right gear.
          Our recommendations are based on real testing, and we only link to trusted stores like Amazon.
        </p>
      </section>
    </div>
  );
}
