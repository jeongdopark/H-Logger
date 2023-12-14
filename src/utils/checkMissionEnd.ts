import { format } from "date-fns";

export const checkMissionEnd = (end: string) => {
  const today = format(new Date(), "yyMMdd");
  if (Number(end) <= Number(today)) return true;
  else return false;
};
