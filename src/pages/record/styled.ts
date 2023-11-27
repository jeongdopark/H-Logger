import styled from "styled-components";
import { THEME } from "../../style/theme";

const RecordContainer = styled.div`
  display: flex;
  align-items: center;
  width: 90%;
  flex-direction: column;
  gap: 50px;
  border-radius: ${THEME.BORDER_RADIUS.M};
`;

export const S = {
  RecordContainer,
};
