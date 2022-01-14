import { counterToTime, getCurrentFrame } from "./interface";

it("test counterToTime function", () => {
  const counter = 3665;
  const time = counterToTime(counter);

  expect(time).toBe("01:01:05");
});

it("test getCurrentFrame function", () => {
  const fps = 0.2;
  const counter = 10;
  const time = getCurrentFrame(fps, counter);

  expect(time).toBe(2);
});
