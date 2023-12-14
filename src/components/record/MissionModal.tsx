import { S } from "./styled";
import { IModalInfo } from "./MissionRecord";
import { dotDateFormat } from "../../utils/dateFormat";
import { ModalContext } from "../../context/ModalProvider";
import { checkMissionEnd } from "../../utils/checkMissionEnd";
import { useContext, useRef } from "react";
import Title from "../common/title/Title";
import Toast from "../toast";
import Button from "../common/button/Button";
import useToast from "../../hooks/useToast";
import BoxRecord from "./BoxRecord";
import DonutChart from "./DonutChart";
import useScrollLock from "../../hooks/useScrollLock";
import useOutsideClick from "../../hooks/useOutsideClick";
import useDeleteMissionMutation from "../../hooks/mutation/useDeleteMissionMutation";
import useFinishMissionMutation from "../../hooks/mutation/useFinishMissionMutation";

const MissionModal = ({ modalInfo }: { modalInfo: IModalInfo }) => {
  const { isInitClick, isModalOpened, setIsInitClick, setIsModalOpened } = useContext(ModalContext);
  const { mutate: deleteMission } = useDeleteMissionMutation();
  const { mutate: finishMission } = useFinishMissionMutation();
  const { openScroll } = useScrollLock();

  const missionDeleteHandler = () => {
    deleteMission(modalInfo.index, {
      onSuccess: () => {
        useToast({ content: <Toast text="삭제 완료" type="SUCCESS" /> });
        setIsModalOpened(false);
        setIsInitClick(false);
        openScroll();
      },
      onError: () => {
        useToast({ content: <Toast text="에러" type="FAIL" /> });
      },
    });
  };

  const missionFinishHandler = () => {
    if (checkMissionEnd(modalInfo.modalData.period.end)) {
      finishMission(
        {},
        {
          onSuccess: () => {
            useToast({ content: <Toast text="미션 종료" type="SUCCESS" /> });
            setIsModalOpened(false);
            setIsInitClick(false);
            openScroll();
          },
        }
      );
    } else {
      useToast({ content: <Toast text="미션 기간이 남아있습니다." type="FAIL" /> });
    }
  };

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
        <Title title={modalInfo.modalData!.title} size="L" />
        <S.MissionModalBox>
          <S.MissionModalText>
            기간 : {dotDateFormat(modalInfo.modalData?.period.start!)} -{" "}
            {dotDateFormat(modalInfo.modalData?.period.end!)}
          </S.MissionModalText>
          <S.MissionModalText>시작 체중 : {modalInfo.modalData?.current_weight}kg</S.MissionModalText>
          <S.MissionModalText>목표 체중 : {modalInfo.modalData?.goal_weight}kg</S.MissionModalText>
          <S.MissionModalText>목표 운동 횟수 : {modalInfo.modalData?.goal_exercise_count}회</S.MissionModalText>
          <S.MissionModalText>현재 운동 횟수 : {modalInfo.modalData?.exercise_count}회</S.MissionModalText>
        </S.MissionModalBox>
        <S.MiniBoxWrapper>
          <S.MiniBox>
            <BoxRecord modalInfo={modalInfo} />
          </S.MiniBox>
          <S.MiniBox>
            <DonutChart
              percent={
                Math.round(
                  (modalInfo.modalData?.exercise_count! / Number(modalInfo.modalData?.goal_exercise_count!)) * 100
                ) / 100
              }
              unit={"%"}
            />
          </S.MiniBox>
        </S.MiniBoxWrapper>
        <S.ButtonWrapper>
          <Button text="수정" size="S" />
          <Button text="삭제" size="S" onClick={missionDeleteHandler} />
          <Button text="미션 종료" size="S" onClick={missionFinishHandler} />
        </S.ButtonWrapper>
      </S.MissionModalWrapper>
    </S.MissionModalContainer>
  );
};

export default MissionModal;
