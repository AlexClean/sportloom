import { buildGoogleNewsRssUrl } from "@/lib/news/queryBuilder";
import { boxingNewsQueries } from "@/lib/news/queries";
import { XMLParser } from "fast-xml-parser";
import { NewsRssFeed } from "@/Interfaces/news/newsTypes";
import { MapNewsItemToNewsCandidate } from "@/lib/services/newsMapper";
import { selectNewsCandidates } from "@/lib/news/newsProcessor";
import  Link from "next/link";

export default async function NewsPage(){

    const url = buildGoogleNewsRssUrl(boxingNewsQueries[0].query)
    const xmlNewsResult = await fetch(url);
    const res = await xmlNewsResult.text();

    const XMLparser = new XMLParser();
    const newsObj = XMLparser.parse(res) as NewsRssFeed;
    const newsCandidates = MapNewsItemToNewsCandidate(newsObj.rss.channel.item);

    console.log("newsCandidates is ---> ", newsCandidates);

    // const selections = await selectNewsCandidates(newsCandidates);
    // console.log("selections is ---> ", selections);

    // const selectedNews = newsCandidates.filter(candidate => selections.selectedIds.includes(candidate.id));
    // console.log("selectedNews is ---> ", selectedNews);


    return(
        <section>
            <h1 className="text-center text-3xl">This is the News Page</h1>
            {/* {selectedNews.map(news => (
                <div key={news.id} className="border p-4 m-4">
                    <h2 className="text-xl font-bold">{news.title}</h2>
                    <p className="text-sm text-gray-500">published on {news.publishingDate}</p>
                    <p className="text-sm text-gray-500">you can read it on: <Link href={news.newsUrl} target="_blank">{news.source}</Link></p>
                </div>
            ))} */}
        </section>
    )
}