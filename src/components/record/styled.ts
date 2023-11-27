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
  border-radius: ${THEME.BORDER_RADIUS.M};
  width: 80%;
  height: 200px;
  background-color: ${THEME.BACKGROUND_COLOR.WHITE_2};
`;

const ScoreRecordWrapper = styled.div`
  display: flex;
  gap: 5px;
  width: 100%;
  height: 80%;
`;

const ScoreRecordUl = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 5px;

  li {
    height: 13px;
    border-radius: 3px;
  }
`;

const ScoreRecordLi = styled.li`
  background-color: green;
  width: 13px;
  height: 13px;
  border-radius: 3px;
  cursor: pointer;
  position: relative;

  &:hover::after {
    z-index: 999;
    content: attr(data-date); /* data-date 속성값을 내용으로 사용 */
    position: absolute; /* 현재 요소에 대해 절대적 위치 지정 */
    top: -35px;
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
  }
`;

const MissionContainer = styled(RecordContainer)`
  min-height: 350px;
`;

const MissionElement = styled.div`
  width: 60%;
  height: 90px;
  border-radius: ${THEME.BORDER_RADIUS.M};
  background-color: ${THEME.BACKGROUND_COLOR.GREEN_3};
`;

const MissionWrapper = styled.div`
  background-color: ${THEME.BACKGROUND_COLOR.WHITE};
  width: 100%;
  gap: 10px;
  flex-direction: column;
  overflow-y: scroll;
  display: flex;
  align-items: center;
`;

const MissionScrollWrapper = styled.div`
  overflow-y: scroll;
  height: 400px;
`;

export const S = {
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
