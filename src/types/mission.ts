import { IExercise } from "./calendar";

export interface IMission {
  current_weight: number | "";
  exercise_count: number;
  goal_exercise_count: number | "";
  goal_weight: number | "";
  title: string;
  period: IPeriod;
  exercise: MissionExerciseType;
  isActive: boolean;
}

type MissionExerciseType = {
  [key: string]: IExercise[];
};

interface IPeriod {
  start: string;
  mid: string;
  end: string;
}
