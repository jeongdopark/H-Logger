export interface IMission {
  current_weight: number;
  exercise_count: number;
  goal_exercise_count: number;
  goal_weight: number;
  title: string;
  period: IPeriod;
}

interface IPeriod {
  start: string;
  mid: string;
  end: string;
}
