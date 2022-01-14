export const counterToTime = (counter: number) => {
  var date = new Date(0);
  date.setSeconds(counter); // specify value for SECONDS here

  return date.toISOString().substr(11, 8);
};
