import styled from "styled-components";
import { THEME } from "../../style/theme";

export const DetailContainer = styled.div`
  display: flex;
  width: 90%;
  flex-direction: column;
  background-color: ${THEME.BACKGROUND_COLOR.WHITE_3};
  border-radius: ${THEME.BORDER_RADIUS.M};
  padding: 20px;
`;

const FormWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  height: 50vh;
  &:not(:last-child) {
    border-right: 1px solid ${THEME.BORDER.GRAY};
  }
`;

const RecordContainer = styled.div`
  display: flex;
  gap: 20px;
  padding: 10px;
  width: 100%;
  justify-content: center;
`;

const FormContainer = styled(RecordContainer)`
  width: 100%;
  flex-direction: column;
  align-items: center;
`;

const RecordElement = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  padding: 20px 10px 10px 20px;
  gap: 10px;
  border-radius: ${THEME.BORDER_RADIUS.M};
`;

interface IModeSelector {
  modeNumber: number;
}

const ModeSelect = styled.div<IModeSelector>`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 220px;
  height: 50px;
  margin-top: 20px;
  border-radius: ${THEME.BORDER_RADIUS.M};
  background: ${THEME.BACKGROUND_COLOR.WHITE};

  div:nth-child(${(props) => props.modeNumber + 1}) {
    background-color: ${THEME.BACKGROUND_COLOR.GREEN_4};
  }

  div {
    width: 100%;
    height: 100%;
    text-align: center;
    line-height: 50px;
    border-radius: ${THEME.BORDER_RADIUS.M};
    cursor: pointer;
  }
`;

const DetailHeader = styled.div`
  gap: 10px;
  display: flex;
  width: 100%;
  justify-content: center;
  height: 60px;

  align-items: center;
  border-radius: ${THEME.BORDER_RADIUS.M} ${THEME.BORDER_RADIUS.M} 0 0;
  span {
    font-size: ${THEME.FONT_SIZE.XL};
    font-weight: ${THEME.FONT_WEIGHT.M};
  }
`;

const EmptyBox = styled.div`
  width: 250px;
`;

export const S = {
  EmptyBox,
  DetailHeader,
  ModeSelect,
  RecordElement,
  RecordContainer,
  DetailContainer,
  FormContainer,
  FormWrapper,
};
