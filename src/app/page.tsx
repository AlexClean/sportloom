import { InternalLinkButton } from "./components/common/button/InernalLinkButton/InternalLinkButtons";
import HeroMain from "./components/common/hero/hero-main";
import MainParagraph from "./components/common/paragraph/main-paragraph";
import ReviewCard from "./components/common/card/ReviewCard/ReviewCard";
import ArticleCard from "./components/common/card/ArticleCard/ArticleCard";
import { capitalizeFirst } from "@/lib/string";
import { getMetaFiles } from "@/lib/content/contentLoader";
import InfoBlock from "./components/mdx/review-v2/InfoBlock";

export default async function Home() {

  const content = await getMetaFiles();

  const reviews = content?.filter(entry => entry.contentType === "review" && entry.date).sort((a, b) => new Date(b.date || new Date()).getTime() - new Date(a.date || new Date()).getTime()).slice(0, 3) || [];
  const articles = content?.filter(entry => entry.contentType === "article" && entry.date).sort((a, b) => new Date(b.date || new Date()).getTime() - new Date(a.date || new Date()).getTime()).slice(0, 3) || [];

  return (
    <div className="space-y-12">
      <HeroMain src="/images/Hero_main.webp" alt="Sportloom Hero Image" />
      <InfoBlock title="Top Rated Sports Gloves, Boxing Gear & Training Equipment" content="Sportloom reviews top rated sports gloves, boxing gloves, headgear, and training gear for beginners and serious athletes.
          Our guides help you compare protection, comfort, durability, price, and real training use before choosing your next piece of sports equipment." />
      <section>
        <h2 className="text-2xl font-semibold mb-6 text-center">Featured Reviews</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {reviews.map((review) => (
            <ReviewCard
              key={review.slug}
              href={`/${review.slug}`}
              title={review.title}
              excerpt={review.description}></ReviewCard>
          ))}

        </div>
      </section>
      {/* Guides */}
      <section>
        <h2 className="text-2xl font-semibold mb-6 text-center">Guides & Articles</h2>
        <div className="flex flex-col md:flex-row gap-6">
          {articles.map((article) => (
            <ArticleCard key={article.slug}
              href={`/${article.slug}`}
              title={capitalizeFirst(article.title)}
              excerpt={article.description}
              readingTime={article.readingTime}
            />
          ))}
        </div>
      </section>
      <MainParagraph />
      {/*Carousel with Reviews and Articles in the Future*/}
      <section className="not-dark:bg-gray-100 p-6 rounded-xl text-center">
        <h2 className="text-2xl font-semibold mb-2 not-dark:text-gray-800">Start Exploring</h2>
        <p className="mb-4 not-dark:text-gray-600">Browse reviews, read sports news, or explore categories below.</p>
        <div className="flex flex-wrap justify-center gap-4 dark:text-gray-800">
          <InternalLinkButton href="/reviews">Product Reviews</InternalLinkButton>
          <InternalLinkButton href="/articles">Read our Articles</InternalLinkButton>
        </div>
        <div className="flex flex-wrap justify-center gap-4 dark:text-gray-800 mt-4">
          <InternalLinkButton href="/boxing">Browse Boxing related content</InternalLinkButton>
          <InternalLinkButton href="/boxing/gloves">Browse gloves related content</InternalLinkButton>
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
