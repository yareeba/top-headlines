import { render, screen } from "@testing-library/react";
import Headlines from "./Headlines";

const mockHeadlines = [
  {
    title:
      "Elections in J&K will be held immediately after Lok Sabha polls, announces CEC - Hindustan Times",
    author: "HT News Desk",
    source: {
      id: null,
      name: "Hindustan Times",
    },
    publishedAt: "2024-03-16T10:58:02Z",
    url: "https://www.hindustantimes.com/india-news/elections-in-j-k-will-be-held-immediately-after-lok-sabha-polls-announces-cec-101710586626786.html",
  },
  {
    title:
      "Crew Trailer: Kareena Kapoor, Tabu And Kriti Sanon Strike Gold Up In The Air - NDTV Movies",
    author: null,
    source: {
      id: null,
      name: "NDTV News",
    },
    publishedAt: "2024-03-16T11:11:49Z",
    url: "https://www.ndtv.com",
  },
];

describe("Headlines", () => {
  test("renders all the headlines that are provided", () => {
    render(<Headlines values={mockHeadlines} />);

    expect(screen.getByRole('link', { name: mockHeadlines[0].title })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: mockHeadlines[1].title })).toBeInTheDocument();
  });
});
