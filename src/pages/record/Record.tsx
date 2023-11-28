import { S } from "./styled";
import UserSection from "../../components/record/UserSection";
import ScoreRecord from "../../components/record/ScoreRecord";
import WeightRecord from "../../components/record/WeightRecord";
import MissionRecord from "../../components/record/MissionRecord";
import useGetUserInfoQuery from "../../hooks/queries/useGetUserInfoQuery";
import { IUser } from "../../types/user";

const Record = () => {
  const { data: userInfo, isLoading } = useGetUserInfoQuery();
  if (isLoading) return <div>loading...</div>;
  return (
    <S.RecordContainer>
      <UserSection userInfo={userInfo as IUser} />
      <WeightRecord />
      <ScoreRecord />
      <MissionRecord />
    </S.RecordContainer>
  );
};

export default Record;
