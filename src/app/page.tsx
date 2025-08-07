
export default function Home() {
  return (
     <div className="space-y-12">
      <section className="text-center">
        <h1 className="text-4xl font-bold mb-4">Welcome to Sportloom</h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Discover the best boxing gloves, sports nutrition, and gear — all reviewed and ranked. Stay updated with the latest news in the world of sports.
        </p>
      </section>

      <section className="bg-gray-100 p-6 rounded-xl text-center">
        <h2 className="text-2xl font-semibold mb-2">Start Exploring</h2>
        <p className="mb-4 text-gray-600">Browse reviews, read sports news, or explore categories below.</p>
        <div className="flex flex-wrap justify-center gap-4">
          <a href="/reviews" className="btn">Product Reviews</a>
          <a href="/news" className="btn">Latest News</a>
          <a href="/categories/boxing" className="btn">Boxing Gear</a>
        </div>
      </section>
    </div>
  );
}
