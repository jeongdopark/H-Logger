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
    font-size: ${THEME.FONT_SIZE.L};
  }
`;

const DaysContainer = styled.div`
  width: 100%;
  height: 40px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  font-weight: ${THEME.FONT_WEIGHT.L};
  font-size: ${THEME.FONT_SIZE.XS};
`;

interface IProps {
  today: boolean;
}

const CellElement = styled.div<IProps>`
  font-weight: ${THEME.FONT_WEIGHT.L};
  font-size: ${THEME.FONT_SIZE.XS};
  background-color: ${(props) => (props.today ? THEME.BACKGROUND_COLOR.GREEN_2 : THEME.BACKGROUND_COLOR.WHITE)};
  width: 100%;
  height: 150px;
  padding: 5px;
  border-radius: ${THEME.BORDER_RADIUS.M};
  cursor: pointer;
  margin: 2px;

  &:hover {
    transition: 0.2s ease-out;
    background-color: ${(props) => (props.today ? THEME.BACKGROUND_COLOR.GREEN : THEME.BACKGROUND_COLOR.WHITE_3)};
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
  width: 30px;
  height: 30px;
  border: none;
  cursor: pointer;
`;

export const S = {
  ArrowBuntton,
  CellContainer,
  CellElement,
  CellRow,
  CalendarContainer,
  HeaderContainer,
  DaysContainer,
};
