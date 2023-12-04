import { EXERCISE_TIME, MEAL_TIME } from "../const";

export interface ICalendar {
  [key: string]: IDate;
}

interface IDate {
  dailyLog: IDailyLog;
  exercise: IExercise[];
  meal: IMeal[];
}

export interface IDailyLog {
  log: string;
  score: number;
}

export interface IExercise {
  category: string;
  time: (typeof EXERCISE_TIME)[number];
}

export interface IMeal {
  menus: string[];
  time: (typeof MEAL_TIME)[number];
}
