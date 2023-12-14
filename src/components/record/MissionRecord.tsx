import useMissionsQuery from "../../hooks/queries/useMissionsQuery";
import MissionElement from "./MissionElement";
import Title from "../common/title/Title";
import MissionModal from "./MissionModal";
import Empty from "../common/Empty";
import { ModalContext } from "../../context/ModalProvider";
import { IMission } from "../../types/mission";
import { useContext, useState } from "react";
import { S } from "./styled";

export interface IModalInfo {
  modalData: IMission;
  index: number;
}

const MissionRecord = ({ isMobile }: { isMobile: boolean }) => {
  const { data: missions } = useMissionsQuery();
  const [modalInfo, setModalInfo] = useState<IModalInfo>({
    modalData: {} as IMission,
    index: 0,
  });
  const { isModalOpened } = useContext(ModalContext);
  return (
    <S.MissionContainer>
      <S.TitleWrapper>
        <Title title="미션 목록" size={isMobile ? "XS" : "L"} />
      </S.TitleWrapper>
      <S.MissionScrollWrapper>
        <S.MissionWrapper>
          {missions.length === 0 && <Empty />}
          {missions.map((mission: IMission, idx: number) => {
            return <MissionElement key={idx} mission={mission} setModalInfo={setModalInfo} idx={idx} />;
          })}
        </S.MissionWrapper>
      </S.MissionScrollWrapper>
      {isModalOpened && <MissionModal modalInfo={modalInfo} />}
    </S.MissionContainer>
  );
};

export default MissionRecord;
