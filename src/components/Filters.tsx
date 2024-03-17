"use client";

import { CountryCode } from "../lib/types";
import CountrySelect from "./CountrySelect";
import { FilterImage, FiltersSection } from "./Filters.style";

interface FiltersProps {
  countryValue?: CountryCode;
}

const Filters: React.FC<FiltersProps> = ({ countryValue }) => {
  return (
    <FiltersSection>
      <FilterImage src="./Top-5-logo.svg" alt="Top 5 logo" />
      <span>General Headlines in</span>
      <CountrySelect value={countryValue} />
    </FiltersSection>
  );
};

export default Filters;
