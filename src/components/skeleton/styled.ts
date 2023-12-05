import styled, { keyframes } from "styled-components";
import { UserWrapper, RecordContainer, MissionContainer, TitleWrapper } from "../record/styled";
import { THEME } from "../../style/theme";
import ScoreRecord from "../record/ScoreRecord";

const UserWrapper_S = styled(UserWrapper)``;

const UserName_S = styled.div`
  position: relative;
  overflow: hidden;
  width: 150px;
  height: 50px;
  background-color: ${THEME.BACKGROUND_COLOR.WHITE_2};
`;

const UserImg_S = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  position: relative;
  overflow: hidden;
  background-color: ${THEME.BACKGROUND_COLOR.WHITE_2};
`;

const RecordBox_S = styled(RecordContainer)`
  position: relative;
  overflow: hidden;
  background-color: ${THEME.BACKGROUND_COLOR.WHITE_2};
`;

const MissionContainer_S = styled(MissionContainer)`
  background-color: ${THEME.BACKGROUND_COLOR.WHITE_2};
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
  height: 450px;
`;

const MissionElement_S = styled.div`
  border-radius: ${THEME.BORDER_RADIUS.M};
  width: 550px;
  height: 130px;
  background-color: ${THEME.BACKGROUND_COLOR.WHITE};
  display: flex;
  flex-direction: column;
  padding: 15px;
  gap: 5px;
  position: relative;
  overflow: hidden;
`;

const MissionText_S = styled.div`
  width: 200px;
  height: 30px;
  background-color: ${THEME.BACKGROUND_COLOR.WHITE_2};
`;

const ShortloadingAnimation = keyframes`
  0% {
    transform: translateX(0);
  }
  50%,
  100% {
    transform: translateX(15vw);
  }
`;

const ShimmerWrapper = styled.div`
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 30px;
  height: 100%;
  background: linear-gradient(to right, ${THEME.BACKGROUND_COLOR.WHITE_2}, #f2f2f2);
  animation: ${ShortloadingAnimation} 1.5s infinite linear;
`;

const ScoreContainer_S = styled(RecordContainer)``;

const TitleWrapper_S = styled(TitleWrapper)``;

const ScoreRecordWrapper_S = styled(ScoreRecord)`
  position: relative;
  overflow: hidden;
`;

const CellContainer_S = styled.div`
  width: 100%;
  height: 100%;
`;

const WeekContainer_S = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
  height: 20%;
  margin: 2px;
`;

const CellRow_S = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
  height: 20%;
  margin: 2px;
`;

const Cell_S = styled.div`
  width: 100%;
  height: 150px;
  padding: 5px;
  border-radius: ${THEME.BORDER_RADIUS.M};
  cursor: pointer;
  margin: 2px;
  background-color: ${THEME.BACKGROUND_COLOR.WHITE_2};
  position: relative;
  overflow: hidden;
`;

export const S = {
  CellRow_S,
  Cell_S,
  WeekContainer_S,
  CellContainer_S,
  ScoreRecordWrapper_S,
  TitleWrapper_S,
  ScoreContainer_S,
  MissionText_S,
  MissionElement_S,
  ShimmerWrapper,
  UserName_S,
  MissionContainer_S,
  UserWrapper_S,
  UserImg_S,
  RecordBox_S,
};
