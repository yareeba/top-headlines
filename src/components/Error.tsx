import { ErrorSection } from "./Error.style";

const Error = () => {
  return (
    <ErrorSection>
      <img src="./Error.svg" alt="Error symbol" />
      <div>
        An error has occurred loading the data. Please try refreshing the page.
      </div>
    </ErrorSection>
  );
};

export default Error;
