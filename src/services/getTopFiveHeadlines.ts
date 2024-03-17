import { CountryCode, Headline, HeadlinesData } from "../lib/types";

export const CACHE_INVALIDATION_15_MINUTES = 900;

const getTopFiveHeadlines = async (countryCode: CountryCode): Promise<Headline[]> => {
  const res = await fetch(
    `https://newsapi.org/v2/top-headlines?country=${countryCode}&apiKey=${process.env.NEWS_API_KEY}`
  , { next: { revalidate: CACHE_INVALIDATION_15_MINUTES } });

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  const data = await res.json() as HeadlinesData;
  return data.articles.slice(0, 5);
}

export default getTopFiveHeadlines;
