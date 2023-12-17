import { S } from "./styled";
import { Suspense, useContext } from "react";
import UserSkeleton from "../../components/skeleton/User";
import RecordBoxSkeleton from "../../components/skeleton/RecordBox";
import UserSection from "../../components/record/UserSection";
import ScoreRecord from "../../components/record/ScoreRecord";
import WeightRecord from "../../components/record/WeightRecord";
import MissionRecord from "../../components/record/MissionRecord";
import MissionSkeleton from "../../components/skeleton/MIsison";
import ScoreSkeleton from "../../components/skeleton/Score";
import ErrorBoundary from "../../components/error/ErrorBoundary";
import { ModalProvider } from "../../context/ModalProvider";
import { ViewportContext } from "../../context/ViewportProvider";
const Record = () => {
  const { isMobile } = useContext(ViewportContext);
  return (
    <ErrorBoundary>
      <S.RecordContainer>
        <Suspense fallback={<UserSkeleton />}>
          <UserSection />
        </Suspense>
        <Suspense fallback={<ScoreSkeleton />}>
          <ScoreRecord isMobile={isMobile} />
        </Suspense>
        <Suspense fallback={<RecordBoxSkeleton />}>
          <WeightRecord isMobile={isMobile} />
        </Suspense>
        <ModalProvider>
          <Suspense fallback={<MissionSkeleton />}>
            <MissionRecord isMobile={isMobile} />
          </Suspense>
        </ModalProvider>
      </S.RecordContainer>
    </ErrorBoundary>
  );
};

export default Record;
