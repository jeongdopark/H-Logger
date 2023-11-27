import Title from "../common/title/Title";
import MissionElement from "./MissionElement";
import { S } from "./styled";

const MissionRecord = () => {
  return (
    <S.MissionContainer>
      <Title title="미션 목록" />
      <S.MissionScrollWrapper>
        <S.MissionWrapper>
          <MissionElement />
          <MissionElement />
          <MissionElement />
          <MissionElement />
          <MissionElement />
          <MissionElement />
          <MissionElement />
          <MissionElement />
          <MissionElement />
        </S.MissionWrapper>
      </S.MissionScrollWrapper>
    </S.MissionContainer>
  );
};

export default MissionRecord;
