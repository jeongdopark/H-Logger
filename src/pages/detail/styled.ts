import styled from "styled-components";
import { THEME } from "../../style/theme";

const DetailContainer = styled.div`
  display: flex;
  width: 90%;
  flex-direction: column;
  background-color: ${THEME.BACKGROUND_COLOR.WHITE_3};
  border-radius: ${THEME.BORDER_RADIUS.M};
`;

const FormContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  gap: 20px;
  padding: 10px;
`;

const FormWrapper = styled.div`
  display: flex;
  gap: 30px;
  flex-direction: column;
  justify-content: start;
  margin-top: 10px;
  padding: 10px 10px 10px 20px;
  height: 50vh;
  flex: 1;
  &:not(:last-child) {
    border-right: 1px solid ${THEME.BORDER.GRAY};
  }
`;

const RecordContainer = styled(FormContainer)``;

const RecordElement = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: start;
  padding: 20px 10px 10px 20px;
  gap: 10px;
  border-radius: ${THEME.BORDER_RADIUS.M};
`;

export const S = {
  RecordElement,
  RecordContainer,
  DetailContainer,
  FormContainer,
  FormWrapper,
};
