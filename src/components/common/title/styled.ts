import styled from "styled-components";
import { THEME } from "../../../style/theme";

interface ITitle {
  size: "XS" | "S" | "M" | "L" | "XL" | "XXL";
}

const Title = styled.div<ITitle>`
  font-weight: ${THEME.FONT_WEIGHT.M};
  font-size: ${(props) => THEME.FONT_SIZE[props.size]};
`;
export const S = { Title };
