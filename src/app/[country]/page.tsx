import Headlines from "../../components/Headlines";
import { CountryCode } from "../../lib/types";
import getTopFiveHeadlines from "../../services/getTopFiveHeadlines";

interface CountryPageProps {
  params: { country: CountryCode };
}

const CountryPage = async ({ params: { country } }: CountryPageProps) => {
  const topHeadlines = await getTopFiveHeadlines(country);
  return <Headlines values={topHeadlines} countryCode={country} />;
};

export default CountryPage;
