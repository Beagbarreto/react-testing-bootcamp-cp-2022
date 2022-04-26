import { render, screen } from "@testing-library/react";
import App from "./App";
import MainSection from "./components/organisms/MainSection/MainSection";

test("renders learn react link", () => {
  render(<App />);
  const mainSection = screen.getByTestId(<MainSection />);
  expect(mainSection).toBeInTheDocument();
});
