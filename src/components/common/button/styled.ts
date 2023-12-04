import styled from "styled-components";
import { THEME } from "../../../style/theme";

interface IButtonProps {
  size: keyof typeof THEME.BUTTON_SIZE;
}

const Button = styled.button<IButtonProps>`
  width: ${(props) => THEME.BUTTON_SIZE[props.size].WIDTH};
  height: ${(props) => THEME.BUTTON_SIZE[props.size].HEIGHT};
  font-size: ${(props) => THEME.BUTTON_SIZE[props.size].FONT_SIZE};
  background-color: ${THEME.BACKGROUND_COLOR.GREEN_2};
  border-radius: ${THEME.BORDER_RADIUS.M};
  color: ${THEME.COLOR.WHITE};
  font-weight: ${THEME.FONT_WEIGHT.S};
  display: flex;
  justify-content: center;
  align-items: center;
  outline: none;
  border: none;
  cursor: pointer;
`;

export const S = {
  Button,
};
