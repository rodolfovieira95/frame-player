import styled from "styled-components";
import { SlideProps, SliderContentProps } from "./types";

export const ExhibitionArea = styled.div`
  position: relative;
  width: 1280px;
  height: 720px;
  margin: 0 auto;
  overflow: hidden;
  background-color: black;
`;

export const FramesContainer = styled.div<SliderContentProps>`
  transform: translateX(-${(props) => 1280 * props.currentFrame}px);
  transition: transform ease-out 0s;
  height: 100%;
  width: ${(props) => props.width}px;
  display: flex;
`;

export const Frame = styled.div<SlideProps>`
  height: auto;
  width: 1280px;
  background-image: url(${(props) => props.frame});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
`;

export const Controls = styled.div`
  margin: 20px auto;
  width: 1280px;
  display: flex;
  gap: 20px;
`;

export const Button = styled.div`
  cursor: pointer;
`;
