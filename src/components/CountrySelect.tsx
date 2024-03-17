"use client";

import { useRouter } from "next/navigation";
import Select from "react-select";
import { CountryCode, CountrySelectOption } from "../lib/types";
import { useState } from "react";

const countrySelectOptions: CountrySelectOption[] = [
  { value: "gb", label: "United Kingdom" },
  { value: "us", label: "United States" },
  { value: "au", label: "Australia" },
  { value: "fr", label: "France" },
  { value: "in", label: "India" },
];

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
