import { NewsFeedQuery } from "@/Interfaces/news/newsTypes";

export const boxingNewsQueries: NewsFeedQuery[] = [
  {
    id: "fight-announcements",
    category: "fight-announcement",
    query:
      'boxing ("fight announced" OR "bout announced" OR "set to fight" OR "will face") when:7d',
    enabled: true,
  },
  {
    id: "fight-results",
    category: "fight-result",
    query:
      'boxing ("fight result" OR "wins by knockout" OR "wins by decision" OR defeats) when:7d',
    enabled: true,
  },
  {
    id: "title-fights",
    category: "title-fight",
    query:
      'boxing ("world title" OR "title fight" OR "championship fight" OR "title defense") when:7d',
    enabled: true,
  },
  {
    id: "fight-events",
    category: "fight-event",
    query:
      'boxing ("weigh-in" OR undercard OR "press conference" OR "fight card") when:7d',
    enabled: true,
  },
  {
    id: "fighter-news",
    category: "fighter-news",
    query:
      "boxing (boxer OR champion OR heavyweight OR lightweight OR welterweight) when:7d",
    enabled: true,
  },
];