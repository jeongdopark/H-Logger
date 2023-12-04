// import { IMission } from "../../types/mission";
import { dotDateFormat } from "../../utils/dateFormat";
import Button from "../common/button/Button";
import { S } from "./styled";
interface IProp {
  mission: IMission;
}

export interface IMission {
  current_weight: number | "";
  exercise_count: number;
  goal_exercise_count: number | "";
  goal_weight: number | "";
  title: string;
  period: IPeriod;
}

interface IPeriod {
  start: string;
  mid: string;
  end: string;
}

const MissionElement = ({ mission }: IProp) => {
  const GOAL_WEIGHT = Number(mission.current_weight) - Number(mission.goal_weight);
  const START_DATE = dotDateFormat(mission.period.start);
  const END_DATE = dotDateFormat(mission.period.end);
  return (
    <S.MissionElement>
      <S.MissionInfo>
        <S.MissionText>{mission.title}</S.MissionText>
        <S.MissionText>목표 감량 : {GOAL_WEIGHT}kg</S.MissionText>
        <S.MissionText>목표 운동 횟수 : {mission.goal_exercise_count}회</S.MissionText>
        <S.MissionText>
          기간 : {START_DATE} - {END_DATE}
        </S.MissionText>
      </S.MissionInfo>
      <Button size="S" text="종료" />
    </S.MissionElement>
  );
};

export default MissionElement;
