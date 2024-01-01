export const calculateScale = (max: number, min: number): number => {
  const sub = max - min;
  console.log(sub);

  if (sub >= 20) {
    return 3;
  }
  if (sub >= 15) {
    return 4.5;
  }
  if (sub >= 10) {
    return 6;
  }
  if (sub >= 5) {
    return 9;
  }
  if (sub >= 0) {
    return 13;
  }
  return 15;
};
