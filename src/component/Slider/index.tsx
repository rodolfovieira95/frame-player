import { CurrentProgress, ProgressBackground, SliderPointer } from "./style";

type Props = {
  actualPosition: number;
};

export const ProgressBar = ({ actualPosition }: Props) => {
  let pos1: number = 0,
    pos2: number = 0,
    pos3: number,
    pos4: number;
  function dragMouseDown(e: any) {
    console.log("mouse down");
    e = e || window.event;
    e.preventDefault();
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
  }

  function elementDrag(e: any) {
    e = e || window.event;
    e.preventDefault();
    // calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    // set the element's new position:
    // elmnt.style.top = elmnt.offsetTop - pos2 + "px";
    // elmnt.style.left = elmnt.offsetLeft - pos1 + "px";
  }

  function closeDragElement() {
    // stop moving when mouse button is released:
    document.onmouseup = null;
    document.onmousemove = null;
  }

  return (
    <ProgressBackground>
      <CurrentProgress width={actualPosition} />
      <SliderPointer
        onClick={(e) => console.log(e.nativeEvent.offsetX)}
        onMouseDown={(e) => dragMouseDown(e)}
        pos1={pos1}
        pos2={pos2}
      />
    </ProgressBackground>
  );
};
