import { THEME } from "../../style/theme";
import styled from "styled-components";

const MissionContainer = styled.div`
  padding: 25px;
  background-color: ${THEME.BACKGROUND_COLOR.WHITE_3};
  border-radius: ${THEME.BORDER_RADIUS.M};
`;

const MissionFormContainer = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 100%;
  height: 100%;
  gap: 20px;

  align-items: ${(props) => (props.theme.isMobile ? "center" : "normal")};
`;

const WeightWrapper = styled.div`
  display: flex;
  gap: 25px;

  flex-direction: ${(props) => (props.theme.isMobile ? "column" : "row")};
`;

const ButtonWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
`;

export const S = { MissionContainer, MissionFormContainer, WeightWrapper, ButtonWrapper };
