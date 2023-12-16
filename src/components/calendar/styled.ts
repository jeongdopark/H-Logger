import styled from "styled-components";
import { THEME } from "../../style/theme";

const CalendarContainer = styled.div`
  width: 100%;
  height: 100%;
`;

const HeaderContainer = styled.div`
  width: 100%;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 15px;

  span {
    font-size: ${(props) => (props.theme.isMobile ? THEME.FONT_SIZE.XXXS : THEME.FONT_SIZE.XL)};
  }
`;

const DaysContainer = styled.div`
  width: 100%;
  height: 40px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  font-weight: ${THEME.FONT_WEIGHT.L};
  font-size: ${(props) => (props.theme.isMobile ? THEME.FONT_SIZE.XXXS : THEME.FONT_SIZE.XS)};
`;

interface IProps {
  validtoday: "true" | "false";
}

const CellElement = styled.div<IProps>`
  font-weight: ${THEME.FONT_WEIGHT.L};
  font-size: ${(props) => (props.theme.isMobile ? THEME.FONT_SIZE.XXXS : THEME.FONT_SIZE.XS)};
  width: 100%;
  height: ${(props) => (props.theme.isMobile ? "50px" : "150px")};
  padding: 5px;
  border-radius: ${THEME.BORDER_RADIUS.M};
  cursor: pointer;
  margin: 2px;
  &:hover {
    transition: 0.2s ease-out;
    background-color: ${THEME.BACKGROUND_COLOR.WHITE_2};
  }

  span {
    color: ${(props) => (props.validtoday === "true" ? THEME.COLOR.GREEN_2 : THEME.COLOR.BLACK)};
  }
`;

const CellRow = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
  height: 20%;
  margin: 2px;
`;

const CellContainer = styled.div`
  width: 100%;
  height: 100%;
`;

const ArrowBuntton = styled.button`
  background-color: transparent;
  width: ${(props) => (props.theme.isMobile ? "12px" : "30px")};
  height: ${(props) => (props.theme.isMobile ? "12px" : "30px")};
  border: none;
  cursor: pointer;
`;

const CellTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: ${(props) => (props.theme.isMobile ? "2px" : "5px")};
  width: 60%;
  margin: 0 auto;
  height: 100%;
  padding: 3px 0px;
`;

const TagBox = styled.div`
  padding: 5px;
  font-weight: ${THEME.FONT_WEIGHT.S};
  font-size: ${(props) => (props.theme.isMobile ? THEME.FONT_SIZE.XXXXS : THEME.FONT_SIZE.XXS)};
  background-color: ${THEME.BACKGROUND_COLOR.WHITE_3};
  color: ${THEME.BACKGROUND_COLOR.BLACK};
  border-radius: ${THEME.BORDER_RADIUS.S};
`;

const TagBoxWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${(props) => (props.theme.isMobile ? "2px" : "5px")};
`;

const MissionDivider = styled.div`
  height: 3px;
  width: 100%;
  background-color: ${THEME.BACKGROUND_COLOR.GREEN_3};
  top: 20px;
  left: 0px;
`;

const Dot = styled.div`
  width: 5px;
  height: 5px;
  background-color: ${THEME.BACKGROUND_COLOR.GREEN_2};
  border-radius: 50%;
`;

export const S = {
  Dot,
  MissionDivider,
  TagBoxWrapper,
  TagBox,
  CellTextContainer,
  ArrowBuntton,
  CellContainer,
  CellElement,
  CellRow,
  CalendarContainer,
  HeaderContainer,
  DaysContainer,
};
