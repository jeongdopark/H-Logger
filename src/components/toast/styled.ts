import styled from "styled-components";
import { ToastKeyType } from ".";
import { TOAST_TYPE } from "../../const";
import { THEME } from "../../style/theme";

interface IProps {
  type: ToastKeyType;
}

const Toast = styled.div<IProps>`
  position: relative;
  display: flex;
  padding: 10px;
  width: 300px;
  height: 70px;
  z-index: 999;
  top: 100px;
  margin-left: auto;

  border-radius: ${THEME.BORDER_RADIUS.S};
  color: ${THEME.COLOR.WHITE};
  background-color: ${(props) => TOAST_TYPE[props.type].BG};
  font-size: ${THEME.FONT_SIZE.M};
  align-items: center;
`;

interface IPropgress {
  duration: string;
  type: ToastKeyType;
}

const ProgressBar = styled.div<IPropgress>`
  position: absolute;
  left: 0;
  bottom: 0;
  height: 5px;
  background-color: ${(props) => TOAST_TYPE[props.type].PROGRESS_BG};
  animation: progressBar ${(props) => props.duration} linear;
  z-index: 999;

  @keyframes progressBar {
    0% {
      width: 0%;
    }
    100% {
      width: 100%;
    }
  }
`;

export const S = {
  Toast,
  ProgressBar,
};
