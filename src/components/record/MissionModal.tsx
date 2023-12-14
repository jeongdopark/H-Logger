import { S } from "./styled";
import { IMission } from "./MissionElement";
import { useContext, useRef } from "react";
import { ModalContext } from "../../context/ModalProvider";
import { dotDateFormat } from "../../utils/dateFormat";
import useOutsideClick from "../../hooks/useOutsideClick";
import Title from "../common/title/Title";
import BoxRecord from "./BoxRecord";
import DonutChart from "./DonutChart";
import Button from "../common/button/Button";

const MissionModal = ({ modalData }: { modalData: IMission | undefined }) => {
  const { isInitClick, isModalOpened, setIsInitClick, setIsModalOpened } = useContext(ModalContext);
  const missionModal = useRef<HTMLDivElement>(null);
  useOutsideClick({
    ref: missionModal,
    isInit: isInitClick,
    setIsInit: setIsInitClick,
    isOpened: isModalOpened,
    setIsOpened: setIsModalOpened,
  });
  return (
    <S.MissionModalContainer>
      <S.MissionModalWrapper ref={missionModal}>
        <Title title={modalData!.title} size="L" />
        <S.MissionModalBox>
          <S.MissionModalText>
            기간 : {dotDateFormat(modalData?.period.start!)} - {dotDateFormat(modalData?.period.end!)}
          </S.MissionModalText>
          <S.MissionModalText>시작 체중 : {modalData?.current_weight}kg</S.MissionModalText>
          <S.MissionModalText>목표 체중 : {modalData?.goal_weight}kg</S.MissionModalText>
          <S.MissionModalText>목표 운동 횟수 : {modalData?.goal_exercise_count}회</S.MissionModalText>
          <S.MissionModalText>현재 운동 횟수 : {modalData?.exercise_count}회</S.MissionModalText>
        </S.MissionModalBox>
        <S.MiniBoxWrapper>
          <S.MiniBox>
            <BoxRecord modalData={modalData} />
          </S.MiniBox>
          <S.MiniBox>
            <DonutChart
              percent={Math.round((modalData?.exercise_count! / Number(modalData?.goal_exercise_count!)) * 100) / 100}
              unit={"%"}
            />
          </S.MiniBox>
        </S.MiniBoxWrapper>
        <S.ButtonWrapper>
          <Button text="수정" size="S" />
          <Button text="삭제" size="S" />
          <Button text="미션 종료" size="S" />
        </S.ButtonWrapper>
      </S.MissionModalWrapper>
    </S.MissionModalContainer>
  );
};

export default MissionModal;
