import styled from "styled-components";
import { THEME } from "../../../style/theme";

interface IButtonProps {
  size: "L" | "S";
}

const Button = styled.button<IButtonProps>`
  width: ${(props) => THEME.BUTTON_SIZE[props.size].WIDTH};
  height: ${(props) => THEME.BUTTON_SIZE[props.size].HEIGHT};
  font-size: ${(props) => THEME.BUTTON_SIZE[props.size].FONT_SIZE};
  background-color: ${THEME.BACKGROUND_COLOR.GREEN};
  border-radius: ${THEME.BORDER_RADIUS.M};
  color: ${THEME.COLOR.WHITE};
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 700;
  outline: none;
  border: none;
  cursor: pointer;
`;

export const S = {
  Button,
};
