import { openai } from "@/lib/services/openAiClient";

export interface NewsCandidate {
  id: string;
  title: string;
}

interface NewsSelectionResult {
  selectedIds: string[];
}

export async function selectNewsCandidates(
  candidates: NewsCandidate[],
): Promise<NewsSelectionResult> {
  if (candidates.length === 0) {
    return { selectedIds: [] };
  }

  const response = await openai.responses.create({
    model: "gpt-5-mini",

    input: [
      {
        role: "system",
        content: `
You are a news editor for Sportloom, a boxing website.

Select only important professional boxing news.

Include:
- newly announced professional fights
- confirmed fight results
- title fights
- major event updates
- important boxer news

Exclude:
- fitness articles
- celebrities doing boxing workouts
- crime stories where boxing is incidental
- amateur local stories
- articles only loosely related to boxing

Return no more than 3 news IDs.
        `.trim(),
      },
      {
        role: "user",
        content: JSON.stringify(candidates),
      },
    ],

    text: {
      format: {
        type: "json_schema",
        name: "news_selection",
        strict: true,
        schema: {
          type: "object",
          properties: {
            selectedIds: {
              type: "array",
              items: {
                type: "string",
              },
              maxItems: 3,
            },
          },
          required: ["selectedIds"],
          additionalProperties: false,
        },
      },
    },
  });

  return JSON.parse(response.output_text) as NewsSelectionResult;
}