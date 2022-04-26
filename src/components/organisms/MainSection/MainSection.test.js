import { getByTestId, render, screen } from "@testing-library/react";
import MainSection from "./MainSection";
import { MainSectionCont } from "./MainSection.styles";

const setup = () => render(<MainSection />);

describe("MainSection", () => {
  it("should render a Header with title", () => {
    setup();
    const heading = screen.getByRole("heading", {
      name: /len's daily space report/i,
    });
    expect(heading).toBeInTheDocument;
  });

  it("should render Picture data component inside Main section", () => {
    setup();
    const mainContainer = getByTestId(MainSectionCont);
    const pictureDataComponent =
      within(appHeader).getAllByTestId("picturedata");

    expect(pictureDataComponent).toBeInTheDocument;
  });

  it("should render a footer with text", () => {
    setup();
    const footer = screen.getByRole("heading", {
      name: /project created during wizeline academy react testing bootcamp/i,
    });
    expect(footer).toBeInTheDocument;
  });
});
