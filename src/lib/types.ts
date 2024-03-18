export type CountryCode = "gb" | "us" | "au" | "fr" | "in";

export interface CountrySelectOption {
  value: CountryCode;
  label: string;
}

export interface Headline {
  title: string;
  author: string | null;
  source: {
    id: string | null;
    name: string;
  };
  publishedAt: string;
  url: string;
  urlToImage?: string;
  content?: string;
}

export interface HeadlinesData {
  status: string;
  totalResults: number;
  articles: Headline[];
}
