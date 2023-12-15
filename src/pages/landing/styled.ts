import styled from "styled-components";
import { THEME } from "../../style/theme";

export const LandingContainer = styled.div`
  width: 100%;
  display: flex;
`;

export const LandingLeftContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  flex-direction: column;
`;

export const LandingRightContainer = styled.div`
  background-color: black;
  display: block;
  width: 50%;
`;

export const LandingSpan = styled.span`
  /* background: linear-gradient(to right, #007fff, #0059b2); */
  background: linear-gradient(to right, #17a34a, #00bb98);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-weight: 800;
  font-size: clamp(2.625rem, 1.2857rem + 3.5714vw, 4rem);
  margin-top: 20px;
  margin-bottom: 20px;
  max-width: 600px;
  @media ${THEME.DEVICE.small} {
    font-size: ${THEME.FONT_SIZE.XXL};
  }
`;

export const LandingH1 = styled.h1`
  font-weight: 800;
  font-size: clamp(2.625rem, 1.2857rem + 3.5714vw, 4rem);
  line-height: 1.3;
  scroll-snap-margin-top: calc(var(--MuiDocs-header-height) + 32px);
  scroll-margin-top: calc(var(--MuiDocs-header-height) + 32px);
  color: #0a1929;
  margin-top: 20px;
  margin-bottom: 20px;
  max-width: 600px;

  @media ${THEME.DEVICE.small} {
    font-size: ${THEME.FONT_SIZE.XXL};
  }
`;

const LandingLoginContainer = styled.div`
  display: flex;
  margin-top: 50px;
  justify-content: center;
  width: 60%;
`;

const LandingLoginDiv = styled.div`
  width: 130px;
  height: 50px;
  background-color: #007fff;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1em;
  font-weight: 600;
  color: white;
`;

const LoginBtnWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const LoginBtn = styled.img`
  width: 40px;
  height: 40px;
  background-color: aqua;
  margin-left: 30px;
  border-radius: 50%;
  cursor: pointer;
`;

export const ModalContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.2);
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
  backdrop-filter: blur(1.5px);
`;

const LoginBox = styled.div`
  width: 30%;
  height: 230px;
  background-color: white;
  border-radius: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.5rem;
  gap: 30px;
`;

const ButtonWrapper = styled.div`
  display: flex;
  gap: 20px;
  justify-content: center;
  width: 100%;
`;

export const S = {
  ButtonWrapper,
  LoginBox,
  LandingContainer,
  LandingLeftContainer,
  LandingRightContainer,
  LandingSpan,
  LandingH1,
  LandingLoginContainer,
  LandingLoginDiv,
  LoginBtn,
  LoginBtnWrapper,
  ModalContainer,
};
