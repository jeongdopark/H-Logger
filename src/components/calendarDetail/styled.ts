import styled from "styled-components";
import { THEME } from "../../style/theme";

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 7px;
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

const Menu = styled.li`
  height: 30px;
  line-height: 20px;
  padding: 5px 10px;
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
  width: 50%;
`;

const TextareaWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const ExerciseRecordBox = styled.div`
  background-color: ${THEME.BACKGROUND_COLOR.WHITE};
  width: 90%;
  border-radius: ${THEME.BORDER_RADIUS.M};
  padding: 10px;
`;

const MealRecordBox = styled(ExerciseRecordBox)``;

const TextRecord = styled(ExerciseRecordBox)`
  padding: 20px;
`;

const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 80%;
  gap: 30px;
`;
export const S = {
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
};
