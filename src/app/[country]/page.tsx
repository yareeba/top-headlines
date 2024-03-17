import Headlines from "../../components/Headlines";
import { CountryCode } from "../../lib/types";
import getTopFiveHeadlines from "../../services/getTopFiveHeadlines";

interface CountryPageProps {
  params: { country: CountryCode };
}

const CountryPage = async ({ params }: CountryPageProps) => {
  const topHeadlines = await getTopFiveHeadlines(params.country);
  return (
    <Headlines values={topHeadlines} />
  );
};

export default CountryPage;
