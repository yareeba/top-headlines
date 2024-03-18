import Filters from "../../components/Filters";
import { CountryCode } from "../../lib/types";

interface CountryLayoutProps {
  children: React.ReactNode;
  params: { country: CountryCode };
}

const CountryLayout: React.FC<CountryLayoutProps> = ({ children, params }) => {
  return (
    <>
      <Filters countryValue={params.country} />
      {children}
    </>
  );
};

export default CountryLayout;
