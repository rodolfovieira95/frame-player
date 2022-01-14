import { ProgressContainer } from "./style";
import { Props } from "./types";

export const ProgressBar = ({ counter, setState, finishCounter }: Props) => {
  const onChangeHandler = (value: number) => {
    setState((currState) => ({
      ...currState,
      counter: value,
    }));
  };

  return (
    <ProgressContainer>
      <input
        type="range"
        min={0}
        max={finishCounter}
        style={{ width: "1280px", margin: "auto" }}
        value={counter}
        onChange={(ev) => onChangeHandler(ev.target.valueAsNumber)}
      />
    </ProgressContainer>
  );
};
