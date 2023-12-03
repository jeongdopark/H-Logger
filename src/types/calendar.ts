export interface ICalendar {
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
  time: "15분" | "30분" | "45분" | "1시간" | "1시간 15분" | "1시간 30분" | "1시간 45분" | "2시간";
}

export interface IMeal {
  menus: string[];
  time: "아침" | "아점" | "점심" | "점저" | "저녁" | "야식";
}
