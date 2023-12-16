import styled from "styled-components";
import { THEME } from "../../style/theme";

const HeaderContainer = styled.header`
  width: 100%;
  position: sticky;
  top: 0px;
  height: 9vh;
  background-color: transparent;
  backdrop-filter: blur(3px);
  -webkit-backdrop-filter: blur(3px);
  display: flex;
  padding: ${(props) => (props.theme.isMobile ? "0px 15px" : "0px 100px")};
  align-items: center;
  justify-content: space-between;
  margin-bottom: 30px;
  z-index: 9999;
  border-bottom: 0.5px solid ${THEME.BORDER.GRAY};
`;

const NavElement = styled.div`
  font-size: ${(props) => (props.theme.isMobile ? THEME.FONT_SIZE.L : THEME.FONT_SIZE.XXL)};
  font-weight: ${THEME.FONT_WEIGHT.L};
  cursor: pointer;
`;

const NavWrapper = styled(NavElement)`
  display: flex;
  gap: ${(props) => (props.theme.isMobile ? "10px" : "50px")};

  div {
    font-weight: ${THEME.FONT_WEIGHT.L};
    font-size: ${(props) => (props.theme.isMobile ? THEME.FONT_SIZE.XXS : THEME.FONT_SIZE.M)};
  }
`;

const Footer = styled.footer`
  width: 100%;
  height: 8vh;
  border-top: 0.5px solid ${THEME.BORDER.GRAY};
  margin-top: 70px;
  line-height: 8vh;
  padding: ${(props) => (props.theme.isMobile ? "0px 15px" : "0px 100px")};
  font-size: ${(props) => (props.theme.isMobile ? THEME.FONT_SIZE.XXS : THEME.FONT_SIZE.S)};
  a {
    color: ${THEME.COLOR.BLACK};
  }
`;

const LayoutContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  min-height: 100vh;
  justify-content: space-between;
`;

export const S = {
  LayoutContainer,
  HeaderContainer,
  NavElement,
  NavWrapper,
  Footer,
};
