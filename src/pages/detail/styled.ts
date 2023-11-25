import styled from "styled-components";
import { THEME } from "../../style/theme";

const DetailContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 70%;
  // edit
  height: 60vh;
  background-color: ${THEME.BACKGROUND_COLOR.WHITE_3};
  border-radius: ${THEME.BORDER_RADIUS.M};
`;

export const S = {
  DetailContainer,
};
