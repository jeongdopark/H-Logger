import styled from "styled-components";
import { THEME } from "../../../style/theme";

export const Container = styled.div`
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

export const S = {
  Container,
  Input,
};
