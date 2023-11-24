import styled from "styled-components";
import { THEME } from "../../../style/theme";

interface IButtonProps {
  size: "L";
}

const Button = styled.button<IButtonProps>`
  width: ${(props) => THEME.BUTTON_SIZE[props.size].WIDTH};
  height: ${(props) => THEME.BUTTON_SIZE[props.size].HEIGHT};
  background-color: ${THEME.BACKGROUND_COLOR.BUTTON};
  border-radius: ${THEME.BORDER_RADIUS.L};
  color: ${THEME.COLOR.WHITE};
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1em;
  font-weight: 600;
  outline: none;
  border: none;
  cursor: pointer;
`;

export const S = {
  Button,
};
