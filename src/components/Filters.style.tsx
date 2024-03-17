import styled from "styled-components";
import { breakpoints } from "../lib/media";

export const FiltersSection = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  font-size: 10px;

  @media only screen and (min-width: ${breakpoints.MobileMedium}px) {
    font-size: 12px;
  }

  @media only screen and (min-width: ${breakpoints.Tablet}px) {
    font-size: 24px;
  }
`;

export const FilterImage = styled.img`
  width: 50px;
  height: 50px;

  @media only screen and (min-width: ${breakpoints.Tablet}px) {
    width: 75px;
    height: 75px;
  }
`;
