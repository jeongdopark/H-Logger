import { THEME } from "../style/theme";

export const EXERCISE_TIME = ["15분", "30분", "45분", "1시간", "1시간 15분", "1시간 30분", "1시간 45분", "2시간"];
export const MEAL_TIME = ["아침", "아점", "점심", "점저", "저녁", "야식"];
export const SCORE = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];

export const WEIGHT_LINE_CONST = {
  START_X_POS: 0,
  X_INTERVAL: 90,
  Y_INTERVAL: 15,
  X_LIMIT: 1200,
};

export const TOAST_TYPE = {
  WARN: {
    BG: THEME.BACKGROUND_COLOR.ORANGE,
    PROGRESS_BG: THEME.BACKGROUND_COLOR.ORANGE_2,
  },
  SUCCESS: {
    BG: THEME.BACKGROUND_COLOR.GREEN_2,
    PROGRESS_BG: THEME.BACKGROUND_COLOR.GREEN_4,
  },
  FAIL: {
    BG: THEME.BACKGROUND_COLOR.RED,
    PROGRESS_BG: THEME.BACKGROUND_COLOR.RED_2,
  },
};

export const TOAST_DURATION = {
  DURATION: {
    SET_TIMEOUT: 1500,
    ANIMATION: "1.5s",
  },
};

interface ISVG_VIEWBOX {
  WIDTH: number;
  HEIGHT: number;
  AVERAGE_HEIGHT: number;
  SCALE: number;
}

export const SVG_VIEWBOX: ISVG_VIEWBOX = {
  WIDTH: 1200,
  HEIGHT: 200,
  AVERAGE_HEIGHT: Math.round(200 / 2),
  SCALE: 15,
};
