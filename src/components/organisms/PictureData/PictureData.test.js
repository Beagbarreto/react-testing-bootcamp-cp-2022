import { fireEvent, render, screen } from "@testing-library/react";
import PictureData from "./PictureData";

const setup = () => render(<PictureData />);

describe("PictureData", () => {
  it("Should render an image", () => {
    setup();
    const image = screen.getByAltText(/space image of the day/i);
    expect(image).toBeInTheDocument;
    expect(image).toHaveAttribute('src')
  });

  it("Should render an input field", () => {
    setup();
    const filterByInputEl = screen.getByRole('input');
    expect(filterByInputEl).toBeInTheDocument();
  });

  it("Input field should contain placeholder 'DD-MM-YYYY'", () => {
    setup();
    const inputPlaceholder = screen.getByPlaceholderText('DD-MM-YYYY')
    expect(inpuPlaceholder).toBeInTheDocument();
  });


  it("Input field should allow to change date", () => {
    setup();
    const inputFieldEl = screen.getAllByLabelText('input');
    expect(input.value).toBe("2022-04-29")
    fireEvent.change(input, {target: {value: '2022-04-25'}})
    expect(input.value).toBe('2022-04-25');
  });

  it('Should render title and date', () => {
    const resultsTitle = await screen.findByRole('heading', {name: /lyrid of the lake/i })
    const resultsDate = await screen.findByText("2202-04-28");
    expect(resultsTitle).toBeInTheDocument();
    expect(resultsDate).toBeVisible();
    expect(resultsDate).toBeInTheDocument();
  }); 

  it('Should render description', () => {
    const resultsDesc = await screen.queryByText("In the early hours of April 24 this bright Lyrid meteor flashed along the central Milky Way. For a moment, it cast a bright reflection across Lake Nian, Yunnan province, China. The annual Lyrid meteor shower, one of the oldest known, is active in late April, as our fair planet plows through dust left along the orbit of long-period comet Thatcher. The trail of the bright fireball points back toward the shower’s radiant in the constellation Lyra high in the northern springtime sky and off the top of the frame. Just rising in that starry sky, light from a third quarter moon also cast a glow on the peaceful waters of the lake.")
    expect(resultsDesc).toBeInTheDocument();
    expect(resultsDesc).toBeVisible();
  });

  // it("When the user selects an invalid date value, should open modal with error", () => {
  //   setup();
  // });

  // it("When there is an error other than invalid date seleccion, the message 'There was an error, please try again.' should render ", () => {
  //   setup();
  // });
});
