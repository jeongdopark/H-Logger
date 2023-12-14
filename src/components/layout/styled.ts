import styled from "styled-components";
import { THEME } from "../../style/theme";

const HeaderContainer = styled.header`
  width: 100%;
  position: sticky;
  top: 0px;
  height: 9vh;
  background-color: transparent;
  backdrop-filter: blur(1px);
  -webkit-backdrop-filter: blur(1px);
  display: flex;
  padding: 0px 100px;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 30px;
  z-index: 9999;
  border-bottom: 0.5px solid ${THEME.BORDER.GRAY};
  @media ${THEME.DEVICE.small} {
    padding: 0px 15px;
  }
`;

const NavElement = styled.div`
  font-size: ${THEME.FONT_SIZE.XXL};
  font-weight: ${THEME.FONT_WEIGHT.L};
  cursor: pointer;

  @media ${THEME.DEVICE.small} {
    font-size: ${THEME.FONT_SIZE.L};
  }
`;

const NavWrapper = styled(NavElement)`
  display: flex;
  gap: 50px;
  @media ${THEME.DEVICE.small} {
    gap: 10px;
  }

  div {
    font-weight: ${THEME.FONT_WEIGHT.L};
    font-size: ${THEME.FONT_SIZE.M};

    @media ${THEME.DEVICE.small} {
      font-size: ${THEME.FONT_SIZE.XXS};
    }
  }
`;

const Footer = styled.footer`
  width: 100%;
  height: 8vh;
  border-top: 0.5px solid ${THEME.BORDER.GRAY};
  margin-top: 70px;
  line-height: 8vh;
  padding: 0px 100px;

  @media ${THEME.DEVICE.small} {
    text-align: center;
    padding: 0px 10px;
    font-size: ${THEME.FONT_SIZE.XXS};
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
