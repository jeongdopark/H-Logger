import Title from "../common/title/Title";
import MissionElement from "./MissionElement";
import { S } from "./styled";

const MissionRecord = () => {
  return (
    <S.MissionContainer>
      <S.TitleWrapper>
        <Title title="Mission" size="XL" />
      </S.TitleWrapper>
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
