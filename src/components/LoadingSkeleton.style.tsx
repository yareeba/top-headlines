import styled, { keyframes } from "styled-components";

const skeletonLoading = keyframes`
  0% {
    background-color: hsl(200, 20%, 80%);
  }
  100% {
    background-color: hsl(200, 20%, 95%);
  }
`;

export const LoadingSkeletonSection = styled.section`
  width: 100%;
  height: 400px;
  margin-top: 16px;

  animation: ${skeletonLoading} 1s linear infinite alternate;
  animation-delay: 1000ms;
`;
