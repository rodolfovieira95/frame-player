import styled from "styled-components";
import { SlideProps, SliderContentProps } from "./types";

export const SliderContent = styled.div<SliderContentProps>`
  transform: translateX(-${(props) => 1280 * (2 * props.currentFrame)}px);
  transition: transform ease-out ${(props) => props.transition}s;
  height: 100%;
  width: ${(props) => props.width}px;
  display: flex;
`;

export const Slide = styled.div<SlideProps>`
  height: 100%;
  width: 100%;
  background-image: url(${(props) => props.frame});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
`;

export const Container = styled.div`
  position: relative;
  width: 1280px;
  height: 720px;
  margin: 0 auto;
  overflow: hidden;
`;
