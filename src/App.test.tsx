import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders all the FramePlayer components", () => {
  render(<App />);
  const exhibitionArea = screen.getByTestId(/exhibition-area/i);
  expect(exhibitionArea).toBeInTheDocument();

  const progressBar = screen.getByTestId(/progress-bar/i);
  expect(progressBar).toBeInTheDocument();

  const controls = screen.getByTestId(/controls/i);
  expect(controls).toBeInTheDocument();
});
