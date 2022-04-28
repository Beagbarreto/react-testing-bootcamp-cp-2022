import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
//  COMPONENTS
import { InputField, Loader } from "./index";

describe("Atoms", () => {
  it("Input field should render placeholder with the format YYYY/MM/DD", () => {
    render(<InputField />);
    const placeholder = screen.getByPlaceholderText("YYYY/MM/DD");
    expect(<InputField />).toHaveAttribute("placeholder");
    expect(placeholder).toBeInTheDocument();
  });

  // it("Input fiel should display the error message: 'There was an error, please try again.' when fetching the API and there is an unexpected error", () => {
  //   setup();
  //   // const heading = screen.getByRole("heading", {
  //   //   name: /len's daily space report/i,
  //   // });
  //   // expect(heading).toBeInTheDocument;
  // });

  it("Should render a loader image/gif", () => {
    render(<Loader />);
    const loaderImg = screen.getByAltText(/planet loader/i);
    expect(loaderImg).toBeInTheDocument();
  });

  //modal
  //should display error message
  //should have close button
  //should close on click
});
