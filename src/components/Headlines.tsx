"use client";

import { Headline } from "../lib/types";
import {
  HeadlineFooter,
  HeadlineInformation,
  HeadlineItem,
  HeadlineNumber,
  HeadlineTitle,
  HeadlinesSection,
} from "./Headlines.style";

interface HeadlinesProps {
  values: Headline[];
}

const Headlines: React.FC<HeadlinesProps> = ({ values }) => {
  return (
    <HeadlinesSection>
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
    </HeadlinesSection>
  );
};

export default Headlines;
