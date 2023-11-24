import styled from "styled-components";
import { THEME } from "../../style/theme";

const HeaderContainer = styled.header`
  width: 100%;
  height: 80px;
  background-color: ${THEME.BACKGROUND_COLOR.WHITE_2};
  display: flex;
  padding: 0px 40px;
  align-items: center;
  justify-content: space-between;
`;

const NavElement = styled.div`
  font-size: ${THEME.FONT_SIZE.L};
  font-weight: ${THEME.FONT_WEIGHT.L};
  cursor: pointer;
`;

const NavWrapper = styled(NavElement)`
  display: flex;
  gap: 50px;
`;

export const S = {
  HeaderContainer,
  NavElement,
  NavWrapper,
};
