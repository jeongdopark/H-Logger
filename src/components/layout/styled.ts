import styled from "styled-components";
import { THEME } from "../../style/theme";

const HeaderContainer = styled.header`
  width: 100%;
  position: sticky;
  top: 0px;
  height: 9vh;
  background-color: transparent;
  backdrop-filter: blur(2px);
  display: flex;
  padding: 0px 100px;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 50px;
`;

const NavElement = styled.div`
  font-size: ${THEME.FONT_SIZE.XL};
  font-weight: ${THEME.FONT_WEIGHT.L};
  cursor: pointer;
`;

const NavWrapper = styled(NavElement)`
  display: flex;
  gap: 50px;

  div {
    font-weight: ${THEME.FONT_WEIGHT.L};
    font-size: ${THEME.FONT_SIZE.M};
  }
`;

const Footer = styled.footer`
  width: 100%;
  height: 8vh;
  background-color: ${THEME.BACKGROUND_COLOR.WHITE_2};
  margin-top: 70px;
  line-height: 8vh;
  padding: 0px 100px;
`;

const LayoutContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const S = {
  LayoutContainer,
  HeaderContainer,
  NavElement,
  NavWrapper,
  Footer,
};
