import { breakpoints } from "../lib/media";
import styled from "styled-components";

export const HeaderSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

export const HeaderH1 = styled.h1`
  @media only screen and (min-width: ${breakpoints.Tablet}px) {
    font-size: 48px;
    margin: 16px 0;
  }
`;
