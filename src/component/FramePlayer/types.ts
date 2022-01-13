export type Props = {
  frames: Array<string>;
  fps: number;
};

export type SlideProps = {
  frame: string;
};

export type SliderContentProps = {
  customTranslate: number;
  transition: number;
  width: number;
  currentFrame: number;
};
