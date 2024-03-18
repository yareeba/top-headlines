import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import selectEvent from "react-select-event";
import CountrySelect from "./CountrySelect";

const mockPush = jest.fn();
jest.mock("next/navigation", () => ({
  useRouter: () => ({
    push: mockPush,
  }),
}));

beforeEach(() => {
  jest.clearAllMocks();
});

describe("CountrySelect", () => {
  test("no option is selected when no country value is provided", () => {
    render(<CountrySelect />);

    expect(screen.getByText("Select a Country...")).toBeInTheDocument();
  });

  test("option is selected when country value is provided", () => {
    render(<CountrySelect value="au" />);

    expect(screen.queryByText("Select a Country...")).not.toBeInTheDocument();
    expect(screen.getByText("Australia")).toBeInTheDocument();
  });

  test("correct option is selected on change and page is redirected", async () => {
    const user = userEvent.setup();
    render(<CountrySelect value="au" />);
    const countrySelect = screen.getByRole("combobox");

    expect(screen.getByText("Australia")).toBeInTheDocument();

    await selectEvent.select(countrySelect, "India");

    expect(screen.queryByText("Australia")).not.toBeInTheDocument();
    expect(screen.getByText("India")).toBeInTheDocument();
    expect(mockPush).toHaveBeenCalledWith("/in");
  });
});
