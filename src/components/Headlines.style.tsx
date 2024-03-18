import styled from "styled-components";
import { breakpoints } from "../lib/media";

export const HeadlinesSection = styled.section`
  display: flex;
  flex-direction: column;
  gap: 16px;
  align-items: center;
`;

export const HeadlinesCountryHeadingH2 = styled.h2`
  font-size: 48px;
  font-weight: bold;
  margin: 16px 0;
`;

export const HeadlinesGrid = styled.div`
  display: grid;
  padding: 0 16px 16px 16px;
  row-gap: 24px;
  column-gap: 24px;

  @media only screen and (min-width: ${breakpoints.Tablet}px) {
    grid-template-columns: repeat(2, 1fr);
    padding: 16px 32px;
    row-gap: 36px;
    column-gap: 36px;
  }

  @media only screen and (min-width: ${breakpoints.Desktop}px) {
    padding: 16px 128px;
  }

  @media only screen and (min-width: ${breakpoints.DesktopLarge}px) {
    padding: 16px 350px;
  }
`;

export const HeadlineItem = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 8px;

  &:nth-child(5) {
    @media only screen and (min-width: ${breakpoints.Tablet}px) {
      grid-column: span 2;
    }
  }
`;

export const HeadlineNumber = styled.div`
  font-size: 48px;
  font-weight: bold;
  padding-right: 16px;

  @media only screen and (min-width: ${breakpoints.Tablet}px) {
    font-size: 64px;
  }
`;

export const HeadlineTitle = styled.div`
  font-size: 16px;
  text-decoration: none;
  color: black;

  &:hover {
    text-decoration: underline;
  }

  @media only screen and (min-width: ${breakpoints.Tablet}px) {
    font-size: 24px;
  }
`;

export const HeadlineFooter = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 12px;
  color: gray;
  margin-top: 4px;

  @media only screen and (min-width: ${breakpoints.Tablet}px) {
    font-size: 16px;
  }
`;
