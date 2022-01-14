import { render, screen } from "@testing-library/react";
import { ProgressBar } from "./index";

const setState = jest.fn();

it("renders the progressBar", () => {
  render(<ProgressBar counter={10} finishCounter={20} setState={setState} />);

  const progressBar = screen.getByRole("slider");
  expect(progressBar).toBeInTheDocument();
});
