import { format } from "date-fns";

export const dateFormat = (date: Date) => {
  return format(date, "yyMMdd");
};

export const dotDateFormat = (date: string) => {
  return date[2] + date[3] + "." + date[4] + date[5];
};
