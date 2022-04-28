import { render, screen } from "@testing-library/react";
import MainSection from "./MainSection";

const setup = () => render(<MainSection />);

describe("MainSection", () => {
  it("Should render an image title", () => {
    setup();
    const heading = screen.getByRole("heading", {
      name: /len's daily space report/i,
    });
    expect(heading).toBeInTheDocument;
  });

  it("Should render an image", () => {
    setup();
    // const heading = screen.getByRole("heading", {
    //   name: /len's daily space report/i,
    // });
    // expect(heading).toBeInTheDocument;
  });

  it("Should render date with the format YYYY-MM-DD", () => {
    setup();
    // const heading = screen.getByRole("heading", {
    //   name: /len's daily space report/i,
    // });
    // expect(heading).toBeInTheDocument;
  });

  it("Should display the error message: 'There was an error, please try again.' when fetching the API and there is an unexpected error", () => {
    setup();
    // const heading = screen.getByRole("heading", {
    //   name: /len's daily space report/i,
    // });
    // expect(heading).toBeInTheDocument;
  });

  it("When the user selects an invalid date value and clicks on the show button, the app should show a message from the API response", () => {
    setup();
    // const heading = screen.getByRole("heading", {
    //   name: /len's daily space report/i,
    // });
    // expect(heading).toBeInTheDocument;
  });
});
