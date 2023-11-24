import styled from "styled-components";
import { THEME } from "../../style/theme";

const CalendarContainer = styled.div`
  width: 90%;
  height: 100%;
  display: flex;
  justify-content: center;
  border: 1px solid ${THEME.BORDER.GRAY};
  border-radius: ${THEME.BORDER_RADIUS.M};
`;
export const S = {
  CalendarContainer,
};
