"use client";

import { HeaderH1, HeaderSection } from "./Header.style";

const Header = () => {
  return (
    <HeaderSection>
      <img src="./NEWS-logo.svg" alt="News logo" />
      <HeaderH1>Top 5 Headlines By Country</HeaderH1>
    </HeaderSection>
  );
};

export default Header;
