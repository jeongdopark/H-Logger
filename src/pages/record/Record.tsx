import { S } from "./styled";
import UserSection from "../../components/record/UserSection";
import ScoreRecord from "../../components/record/ScoreRecord";
import WeightRecord from "../../components/record/WeightRecord";
import MissionRecord from "../../components/record/MissionRecord";

const Record = () => {
  return (
    <S.RecordContainer>
      <UserSection />
      <WeightRecord />
      <ScoreRecord />
      <MissionRecord />
    </S.RecordContainer>
  );
};

export default Record;
