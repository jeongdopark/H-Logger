import useMissionsQuery from "../../hooks/queries/useMissionsQuery";
import MissionElement from "./MissionElement";
import Title from "../common/title/Title";
import { IMission } from "../../types/mission";
import { S } from "./styled";

const MissionRecord = () => {
  const { data: missions, isLoading } = useMissionsQuery();

  if (missions === undefined) return <div>Loading...</div>;

  return (
    <S.MissionContainer>
      <S.TitleWrapper>
        <Title title="Mission" size="XL" />
      </S.TitleWrapper>
      <S.MissionScrollWrapper>
        <S.MissionWrapper>
          {missions.map((mission: IMission, idx: number) => {
            return <MissionElement key={idx} mission={mission} />;
          })}
        </S.MissionWrapper>
      </S.MissionScrollWrapper>
    </S.MissionContainer>
  );
};

export default MissionRecord;
