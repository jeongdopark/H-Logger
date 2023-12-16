import styled from "styled-components";
import { THEME } from "../../style/theme";
import UserSkeleton from "./User";
import ScoreSkeleton from "./Score";
import RecordBoxSkeleton from "./RecordBox";
import MissionSkeleton from "./MIsison";

const RecordPageSkeleton = () => {
  return (
    <RecordContainer>
      <UserSkeleton />
      <ScoreSkeleton />
      <RecordBoxSkeleton />
      <MissionSkeleton />
    </RecordContainer>
  );
};

export default RecordPageSkeleton;

const RecordContainer = styled.div`
  display: flex;
  width: 90%;
  flex-direction: column;
  gap: 50px;
  border-radius: ${THEME.BORDER_RADIUS.M};
`;
