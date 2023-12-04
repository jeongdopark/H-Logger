import { S } from "./styled";
import UserSection from "../../components/record/UserSection";
import ScoreRecord from "../../components/record/ScoreRecord";
import WeightRecord from "../../components/record/WeightRecord";
import MissionRecord from "../../components/record/MissionRecord";
import useUserInfoQuery from "../../hooks/queries/useUserInfoQuery";
import { IUser } from "../../types/user";
import { IWeight } from "../../types/weight";
import useWeightQuery from "../../hooks/queries/useWeightQuery";

const Record = () => {
  const { data: userInfo, isLoading: userInfoLoading } = useUserInfoQuery();
  const { data: userWeight, isLoading: userWeightLoading } = useWeightQuery();

  if (userInfo === undefined || userWeight === undefined) return <div>loading...</div>;
  return (
    <S.RecordContainer>
      <UserSection userInfo={userInfo as IUser} />
      <WeightRecord userWeight={userWeight as IWeight[]} />
      <ScoreRecord />
      <MissionRecord />
    </S.RecordContainer>
  );
};

export default Record;
