"use client";

import { countryMapping } from "../lib/constants";
import { CountryCode, Headline } from "../lib/types";
import {
  HeadlineFooter,
  HeadlineItem,
  HeadlineNumber,
  HeadlineTitle,
  HeadlinesCountryHeadingH2,
  HeadlinesGrid,
  HeadlinesSection,
} from "./Headlines.style";

interface HeadlinesProps {
  values: Headline[];
  countryCode: CountryCode;
}

const Headlines: React.FC<HeadlinesProps> = ({ values, countryCode }) => {
  return (
    <HeadlinesSection>
      <HeadlinesCountryHeadingH2>{countryMapping[countryCode]}</HeadlinesCountryHeadingH2>
      <HeadlinesGrid>
        {values.map((headline, index) => {
          const publishedAtDate = new Date(headline.publishedAt);
          return (
            <HeadlineItem key={headline.title}>
              <HeadlineNumber>{index + 1}</HeadlineNumber>
              <div>
                <HeadlineTitle as="a" target="_blank" href={headline.url}>
                  {headline.title}
                </HeadlineTitle>
                <HeadlineFooter>
                  <div>{headline.author}</div>
                  <div>{publishedAtDate.toLocaleString()}</div>
                </HeadlineFooter>
              </div>
            </HeadlineItem>
          );
        })}
      </HeadlinesGrid>
    </HeadlinesSection>
  );
};

export default Headlines;
