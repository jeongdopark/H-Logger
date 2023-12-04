import styled from "styled-components";
import { THEME } from "../../style/theme";

const UserWrapper = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  width: 80%;
  gap: 20px;
  div {
    font-size: ${THEME.FONT_SIZE.XL};
  }
`;

const UserImg = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
`;

const RecordContainer = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: ${THEME.BORDER_RADIUS.M};

  align-items: center;
  width: 100%;
  height: 200px;
  background-color: ${THEME.BACKGROUND_COLOR.WHITE_2};
`;

const ScoreRecordWrapper = styled.div`
  display: flex;
  gap: 5px;

  justify-content: center;
`;

const ScoreRecordUl = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 5px;

  li {
    font-weight: ${THEME.FONT_WEIGHT.L};
    font-size: ${THEME.FONT_SIZE.XXS};
    height: 13px;
    border-radius: 3px;
  }
`;

interface IScoreColor {
  color: string;
}

const ScoreRecordLi = styled.li<IScoreColor>`
  background-color: ${(props) => props.color};
  width: 13px;
  height: 13px;
  border-radius: 3px;
  cursor: pointer;
  position: relative;

  &:hover .score-tooltip {
    display: block;
  }
`;

const MissionContainer = styled(RecordContainer)`
  display: block;
  height: auto;
  min-height: 350px;
  padding-bottom: 30px;
`;

const MissionElement = styled.div`
  width: 60%;
  height: 90px;
  border-radius: ${THEME.BORDER_RADIUS.M};
  background-color: ${THEME.BACKGROUND_COLOR.GREEN_3};
`;

const MissionWrapper = styled.div`
  background-color: ${THEME.BACKGROUND_COLOR.WHITE_2};
  width: 100%;
  gap: 10px;
  flex-direction: column;
  overflow-y: scroll;
  display: flex;
  align-items: center;
  padding: 20px 0px;
`;

const MissionScrollWrapper = styled.div`
  overflow-y: scroll;
  height: 400px;
`;

const HoverBox = styled.div`
  z-index: 999;
  position: absolute; /* 현재 요소에 대해 절대적 위치 지정 */
  top: -85px;
  left: 50%; /* 부모 요소의 가로 중앙에 위치시키기 위해 left를 50%로 설정 */
  transform: translateX(-50%); /* 요소 자체의 너비의 절반만큼 왼쪽으로 이동 */
  white-space: nowrap; /* 텍스트 줄바꿈 방지 */

  /* 박스 스타일링 */
  background-color: #333; /* 배경색 */
  color: white; /* 텍스트 색상 */
  padding: 8px 12px; /* 내부 여백 */
  border-radius: 4px; /* 모서리 둥글게 */
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25); /* 그림자 효과 */

  /* 텍스트 스타일링 */
  text-align: center; /* 텍스트 가운데 정렬 */
  font-size: 14px; /* 폰트 크기 */
  width: 150px;
  height: 80px;
  display: none;
`;

const TitleWrapper = styled.div`
  display: flex;
  justify-content: start;
  width: 100%;
  padding: 20px 0px 0px 20px;
`;

const GraphLine = styled.line`
  stroke: ${THEME.BACKGROUND_COLOR.GREEN_4};
  stroke-width: 3;
`;

const GraphCircle = styled.circle`
  z-index: 999;
  fill: ${THEME.BACKGROUND_COLOR.GREEN_2};
`;

const GraphSubCircle = styled.circle`
  fill: transparent;
`;

const GraphLineWrapper = styled.g`
  &:hover .hover-rect {
    visibility: visible;
    opacity: 1;
  }
`;

const CircleWrapper = styled.div`
  position: relative;
  cursor: pointer;
`;

const HoverRect = styled.rect`
  width: 120px;
  height: 50px;
  visibility: hidden;
  opacity: 0;
  fill: ${THEME.BACKGROUND_COLOR.GREEN_3};
  transition: 0.2s ease-in-out;
`;

const HoverText = styled.text`
  visibility: hidden;
  opacity: 0;
  fill: white;
  transition: 0.3s ease-in-out;
`;

const ChartWrapper = styled.div`
  width: 1000px;
  height: 300px;
  display: flex;
  justify-content: center;
  border-radius: 7px;
  padding: 10px;
`;

export const S = {
  ChartWrapper,
  GraphSubCircle,
  HoverText,
  GraphLineWrapper,
  HoverRect,
  CircleWrapper,
  GraphLine,
  GraphCircle,
  TitleWrapper,
  HoverBox,
  MissionScrollWrapper,
  MissionWrapper,
  ScoreRecordLi,
  ScoreRecordWrapper,
  ScoreRecordUl,
  RecordContainer,
  UserWrapper,
  UserImg,
  MissionContainer,
  MissionElement,
};
