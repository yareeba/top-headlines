import { render, screen } from "@testing-library/react";
import Header from "./Header";

describe("Header", () => {
  test("renders the page logo and heading", () => {
    render(<Header />);

    expect(screen.getByAltText("News logo")).toBeInTheDocument();
    expect(screen.getByText('Top 5 Headlines By Country')).toBeInTheDocument();
  });
});
