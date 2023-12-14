import { S } from "./styled";
import { useContext } from "react";
import { ModalContext } from "../../context/ModalProvider";
import { dotDateFormat } from "../../utils/dateFormat";
import Button from "../common/button/Button";
import { IMission } from "../../types/mission";
import { IModalInfo } from "./MissionRecord";

interface IProp {
  mission: IMission;
  setModalInfo: React.Dispatch<React.SetStateAction<IModalInfo>>;
  idx: number;
}

const MissionElement = ({ idx, mission, setModalInfo }: IProp) => {
  const { setIsInitClick, setIsModalOpened } = useContext(ModalContext);
  const GOAL_WEIGHT = Number(mission.current_weight) - Number(mission.goal_weight);
  const START_DATE = dotDateFormat(mission.period.start);
  const END_DATE = dotDateFormat(mission.period.end);
  const modalHandler = () => {
    setModalInfo({ modalData: mission, index: idx });
    setIsInitClick(true);
    setIsModalOpened(true);
  };
  return (
    <S.MissionElement onClick={modalHandler}>
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
