export const counterToTime = (counter: number) => {
  var date = new Date(0);
  date.setSeconds(counter); // specify value for SECONDS here

  return date.toISOString().substr(11, 8);
};

export const getCurrentFrame = (fps: number, counter: number) => {
  const timeToChangeFrame = 1 / fps;
  const quociente = Math.trunc(counter / timeToChangeFrame);
  return quociente;
};
