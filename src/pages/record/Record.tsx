import { S } from "./styled";
import { Suspense } from "react";
import UserSkeleton from "../../components/skeleton/User";
import RecordBoxSkeleton from "../../components/skeleton/RecordBox";
import UserSection from "../../components/record/UserSection";
import ScoreRecord from "../../components/record/ScoreRecord";
import WeightRecord from "../../components/record/WeightRecord";
import MissionRecord from "../../components/record/MissionRecord";
import MissionSkeleton from "../../components/skeleton/MIsison";
import ScoreSkeleton from "../../components/skeleton/Score";

const Record = () => {
  return (
    <S.RecordContainer>
      <Suspense fallback={<UserSkeleton />}>
        <UserSection />
      </Suspense>
      <Suspense fallback={<ScoreSkeleton />}>
        <ScoreRecord />
      </Suspense>
      <Suspense fallback={<RecordBoxSkeleton />}>
        <WeightRecord />
      </Suspense>
      <Suspense fallback={<MissionSkeleton />}>
        <MissionRecord />
      </Suspense>
    </S.RecordContainer>
  );
};

export default Record;
