import styled from "styled-components";
import { THEME } from "../../style/theme";

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

interface IInputProps {
  // todo IProps과 props 같은데 어떻게 tyep 설정해줄 수 있을까 ?
  size: "L" | "M" | "S";
}

const Input = styled.input<IInputProps>`
  border: none;
  background-color: ${THEME.BACKGROUND_COLOR.WHITE};
  width: ${(props) => THEME.INPUT_SIZE[props.size].WIDTH};
  height: ${(props) => THEME.INPUT_SIZE[props.size].HEIGHT};
  border-radius: ${THEME.BORDER_RADIUS.M};
  padding: 5px;
  outline: none;
`;

const InputWrapper = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
`;

const MenuWrapper = styled.div`
  display: flex;
  gap: 5px;
  width: 320px;
  min-height: 100px;
  justify-content: center;
  padding: 10px 5px;
  flex-wrap: wrap;
  border-radius: ${THEME.BORDER_RADIUS.M};
  background-color: ${THEME.BACKGROUND_COLOR.WHITE};
`;

const MenuRecordWrapper = styled(MenuWrapper)`
  min-height: auto;
  width: 100%;
  justify-content: start;
  padding: 10px 15px;
`;

const Menu = styled.li`
  height: 30px;
  line-height: 20px;
  padding: 5px 10px;
  cursor: pointer;
  border-radius: ${THEME.BORDER_RADIUS.M};
  font-size: ${THEME.FONT_SIZE.XS};
  font-weight: ${THEME.FONT_WEIGHT.S};
  background-color: ${THEME.BACKGROUND_COLOR.GREEN_2};
  color: ${THEME.COLOR.WHITE};
`;

const Textarea = styled.textarea`
  border: none;
  background-color: ${THEME.BACKGROUND_COLOR.WHITE};
  width: 320px;
  height: 200px;
  border-radius: ${THEME.BORDER_RADIUS.M};
  padding: 5px;
  outline: none;
  resize: none;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 25px;
  height: 100%;
  width: 100%;
`;

const TextareaWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const ExerciseRecordBox = styled.div`
  background-color: ${THEME.BACKGROUND_COLOR.WHITE};
  width: ${(props) => (props.theme.isMobile ? "250px" : "320px")};
  border-radius: ${THEME.BORDER_RADIUS.M};
  padding: 15px 10px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  position: relative;
`;

const ExerciseRecord = styled.div`
  padding: 10px;
  text-align: center;
  width: 40%;
`;

const Diver = styled.div`
  width: 1px;
  height: 100%;
  background-color: ${THEME.BORDER.GRAY};
`;

const MealRecordBox = styled(ExerciseRecordBox)`
  width: ${(props) => (props.theme.isMobile ? "250px" : "320px")};
  display: flex;
  justify-content: center;
  align-items: center;
`;

const MealTime = styled.div`
  width: 35px;
  text-align: center;
`;

const TextRecord = styled(ExerciseRecordBox)`
  padding: 20px;
  width: 320px;
`;

const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 80%;
  gap: 30px;
`;

const ChartWrapper = styled.div`
  width: 100%;
  height: 100px;
  margin-top: 25px;
`;

const DeleteDot = styled.div`
  position: absolute;
  top: 5px;
  right: 5px;
  width: 8px;
  height: 8px;
  background-color: #ff6259ff;
  border-radius: 50%;
  cursor: pointer;
`;

export const S = {
  DeleteDot,
  ExerciseRecord,
  ChartWrapper,
  MenuRecordWrapper,
  FormWrapper,
  TextRecord,
  MealRecordBox,
  ExerciseRecordBox,
  TextareaWrapper,
  Form,
  Textarea,
  Menu,
  MenuWrapper,
  InputWrapper,
  Input,
  InputContainer,
  Diver,
  MealTime,
};
