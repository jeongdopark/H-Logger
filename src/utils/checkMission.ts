// start, mid, end, true, false

export const checkMission = (target: string, start: string, mid: string, end: string) => {
  if (target === start) return "start";
  if (target === mid) return "mid";
  if (target === end) return "end";
  if (Number(target) > Number(end) || Number(target) < Number(start)) {
    return "false";
  } else {
    return "true";
  }
};
