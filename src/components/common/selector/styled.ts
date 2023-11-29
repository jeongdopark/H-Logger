import styled from "styled-components";
import { Container } from "../input/styled";
import { THEME } from "../../../style/theme";

const SelectorContainer = styled(Container)``;

interface ISelector {
  size: "L" | "M" | "S" | "XL";
}

const Selector = styled.select<ISelector>`
  border: none;
  background-color: ${THEME.BACKGROUND_COLOR.WHITE};
  width: ${(props) => THEME.INPUT_SIZE[props.size].WIDTH};
  height: ${(props) => THEME.INPUT_SIZE[props.size].HEIGHT};
  border-radius: ${THEME.BORDER_RADIUS.M};
  padding: 5px;
  outline: none;
`;

const Option = styled.option`
  background-color: white;
`;

export const S = {
  SelectorContainer,
  Selector,
  Option,
};
