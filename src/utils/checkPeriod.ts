export const checkPeriod = (target: string, start: string, end: string) => {
  if (Number(target) < Number(start) || Number(target) > Number(end)) return false;
  else return true;
};
