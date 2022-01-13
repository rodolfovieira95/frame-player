import { useEffect, useState } from "react";
import { ProgressBar } from "../Slider";

import { Container, Slide, SliderContent } from "./style";
import { Props } from "./types";
import Play from "../../assets/play.svg";
import Pause from "../../assets/pause.svg";

export const FramePlayer = ({ frames, fps }: Props) => {
  const [state, setState] = useState({
    translate: 0,
    transition: 0.45,
    isPlaying: false,
    counter: 0,
  });
  const { translate, transition, isPlaying, counter } = state;

  const finishCounter = counter < (1 / fps) * frames.length;
  const actualBarPosition = (1280 * counter) / ((1 / fps) * frames.length);

  const getCurrentFrame = () => {
    const timeToChangeFrame = 1 / fps;
    const quociente = Math.trunc(counter / timeToChangeFrame);
    const rest = counter % timeToChangeFrame;

    return quociente;
  };

  useEffect(() => {
    isPlaying &&
      finishCounter &&
      setTimeout(
        () =>
          setState((currState) => ({
            ...currState,
            counter: currState.counter + 1,
          })),
        1000
      );
  }, [counter, isPlaying, finishCounter]);

  const getWidth = () => window.innerWidth;

  const playFunction = () => {
    setState((currState) => ({
      ...currState,
      isPlaying: !currState.isPlaying,
    }));
  };

  const PlayPauseButton = () => {
    return isPlaying ? (
      <img src={Pause} alt="play button" width={16} />
    ) : (
      <img src={Play} alt="play button" width={16} />
    );
  };

  return (
    <>
      <Container>
        <SliderContent
          customTranslate={translate}
          transition={transition}
          width={getWidth() * frames.length}
          currentFrame={getCurrentFrame()}
        >
          {frames.map((frame, i) => (
            <Slide key={i} frame={frame} />
          ))}
        </SliderContent>
      </Container>
      <ProgressBar actualPosition={actualBarPosition} />
      <div
        style={{
          margin: "20px auto",
          width: "1280px",
          display: "flex",
          gap: "20px",
        }}
      >
        <div onClick={() => playFunction()} style={{ cursor: "pointer" }}>
          <PlayPauseButton />
        </div>
        <div>{counter}</div>
      </div>
    </>
  );
};
