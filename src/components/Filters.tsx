"use client";

import { CountryCode } from "../lib/types";
import CountrySelect from "./CountrySelect";
import { CountrySelectWrapper, FilterImage, FiltersSection } from "./Filters.style";

interface FiltersProps {
  countryValue?: CountryCode;
}

const Filters: React.FC<FiltersProps> = ({ countryValue }) => {
  return (
    <FiltersSection>
      <FilterImage src="./Top-5-logo.svg" alt="Top 5 logo" />
      <span>General Headlines in</span>
      <CountrySelectWrapper>
        <CountrySelect value={countryValue} />
      </CountrySelectWrapper>
    </FiltersSection>
  );
};

export default Filters;
