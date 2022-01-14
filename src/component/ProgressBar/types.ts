import { Dispatch, SetStateAction } from "react";

export type Props = {
  counter: number;
  finishCounter: number;
  setState: Dispatch<
    SetStateAction<{
      isPlaying: boolean;
      counter: number;
    }>
  >;
};
