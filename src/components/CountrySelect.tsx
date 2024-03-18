"use client";

import { useRouter } from "next/navigation";
import Select from "react-select";
import { CountryCode, CountrySelectOption } from "../lib/types";
import { useState } from "react";
import { countryMapping } from "../lib/constants";

const countrySelectOptions: CountrySelectOption[] = Object.keys(
  countryMapping
).map((countryCode: CountryCode) => ({
  value: countryCode,
  label: countryMapping[countryCode],
}));

interface CountrySelectProps {
  value?: CountryCode;
}

export default function CountrySelect({ value }: CountrySelectProps) {
  const [selectedOption, setSelectedOption] = useState<CountrySelectOption>(
    value && countrySelectOptions.find((option) => option.value === value)
  );
  const { push } = useRouter();

  const onChange = (selectedOption: CountrySelectOption) => {
    setSelectedOption(selectedOption);
    push(`/${selectedOption.value}`);
  };

  return (
    <Select
      aria-label="Select a country"
      instanceId="country-select"
      onChange={onChange}
      options={countrySelectOptions}
      value={selectedOption}
      placeholder="Select a Country..."
    />
  );
}
