import useMissionsQuery from "../../hooks/queries/useMissionsQuery";
import MissionElement from "./MissionElement";
import Title from "../common/title/Title";
import MissionModal from "./MissionModal";
import Empty from "../common/Empty";
import { ModalContext } from "../../context/ModalProvider";
import { IMission } from "../../types/mission";
import { useContext, useState } from "react";
import { S } from "./styled";

const MissionRecord = () => {
  const { data: missions } = useMissionsQuery();
  const [modalData, setModalData] = useState<IMission>();
  const { isModalOpened } = useContext(ModalContext);
  return (
    <S.MissionContainer>
      <S.TitleWrapper>
        <Title title="미션 목록" size="M" />
      </S.TitleWrapper>
      <S.MissionScrollWrapper>
        <S.MissionWrapper>
          {missions.length === 0 && <Empty />}
          {missions.map((mission: IMission, idx: number) => {
            return <MissionElement key={idx} mission={mission} setModalData={setModalData} />;
          })}
        </S.MissionWrapper>
      </S.MissionScrollWrapper>
      {isModalOpened && <MissionModal modalData={modalData} />}
    </S.MissionContainer>
  );
};

export default MissionRecord;
