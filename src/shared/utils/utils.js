export const OPEN_IN_ANIMATIONS = [
  "open-in-normal",
  "open-in-slow",
  "open-in-slowest",
];
export const getRandomIntegerInRange = (range) => {
  return Math.floor(Math.random(range) * 3);
};
export const getRandomAnimationClass = (
  arr = OPEN_IN_ANIMATIONS,
  range = 3
) => {
  const ind = getRandomIntegerInRange(3);
  return arr[ind];
};
