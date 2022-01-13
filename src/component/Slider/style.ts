import styled from "styled-components";
import { CurrentProgressProps, SliderPointerProps } from "./types";

export const ProgressBackground = styled.div`
  background-color: grey;
  width: 1280px;
  height: 8px;
  margin: auto;
  display: flex;
  align-items: center;
`;

export const CurrentProgress = styled.div<CurrentProgressProps>`
  background-color: red;
  width: ${(props) => props.width}px;kf
  height: 8px;
  display: flex;
  align-items: center;
`;

export const SliderPointer = styled.div<SliderPointerProps>`
  height: 25px;
  width: 25px;
  background-color: red;
  border-radius: 50%;
  display: inline-block;
  z-index: 9999;
  position: absolute;
  top: ${(props) => props.pos1}px;
  left: ${(props) => props.pos2}px;
`;
