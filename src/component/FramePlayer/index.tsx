import { useEffect, useRef, useState } from "react";

import {
  Button,
  Container,
  ControlContainer,
  Slide,
  SliderContent,
} from "./style";
import { Props } from "./types";
import { counterToTime, getCurrentFrame } from "./interface";

import { ProgressBar } from "../Slider";
import Play from "../../assets/play.svg";
import Pause from "../../assets/pause.svg";

export const FramePlayer = ({ frames, fps }: Props) => {
  const [state, setState] = useState({
    isPlaying: false,
    counter: 0,
  });
  const { isPlaying, counter } = state;

  const timerRef = useRef<number>();
  const finishCounter = counter < (1 / fps) * frames.length;

  useEffect(() => {
    if (isPlaying && finishCounter) {
      timerRef.current = setInterval(() => {
        setState((currState) => ({
          ...currState,
          counter: counter + 1,
        }));
      }, 1000) as unknown as number;
    } else if (!isPlaying && counter !== 0) {
      clearInterval(timerRef.current);
    }
    return () => clearInterval(timerRef.current);
  });

  const getWidth = () => window.innerWidth;

  const playFunction = () => {
    setState((currState) => ({
      ...currState,
      isPlaying: !isPlaying,
    }));
  };

  const PlayPauseIcon = () => {
    return isPlaying ? (
      <img src={Pause} alt="pause button" width={16} />
    ) : (
      <img src={Play} alt="play button" width={16} />
    );
  };

  return (
    <>
      <Container>
        <SliderContent
          width={getWidth() * frames.length}
          currentFrame={getCurrentFrame(fps, counter)}
        >
          {frames.map((frame, i) => (
            <Slide key={i} frame={frame} />
          ))}
        </SliderContent>
      </Container>
      <ProgressBar
        counter={counter}
        setState={setState}
        finishCounter={(1 / fps) * frames.length}
      />
      <ControlContainer>
        <Button onClick={playFunction}>
          <PlayPauseIcon />
        </Button>
        <div>{counterToTime(counter)}</div>
      </ControlContainer>
    </>
  );
};
