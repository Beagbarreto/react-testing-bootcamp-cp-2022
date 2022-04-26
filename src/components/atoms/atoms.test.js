import { render, screen } from "@testing-library/react";
import MainSection from "./MainSection";

const setup = () => render(<MainSection />);

describe("Atoms", () => {
  it("Input field should render placeholder with the format YYYY-MM-DD", () => {
    setup();
    // const heading = screen.getByRole("heading", {
    //   name: /len's daily space report/i,
    // });
    // expect(heading).toBeInTheDocument;
  });

  it("Input fiel should display the error message: 'There was an error, please try again.' when fetching the API and there is an unexpected error", () => {
    setup();
    // const heading = screen.getByRole("heading", {
    //   name: /len's daily space report/i,
    // });
    // expect(heading).toBeInTheDocument;
  });
});
