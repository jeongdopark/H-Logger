import { S } from "./styled";
import { TOAST_DURATION, TOAST_TYPE } from "../../const";
import { useContext, useEffect, useRef } from "react";
import { ToastDispatchContext } from "../../context/ToastProvider";

export type ToastKeyType = keyof typeof TOAST_TYPE;

export interface IToast {
  text: string;
  type: ToastKeyType;
}

const Toast = ({ text, type }: IToast) => {
  const toastTime = useRef<any>(null);
  const actions = useContext(ToastDispatchContext);

  useEffect(() => {
    toastTime.current = setTimeout(() => {
      actions?.removeToast();
    }, TOAST_DURATION.DURATION.SET_TIMEOUT);

    return () => {
      clearTimeout(toastTime.current);
    };
  }, []);
  return (
    <S.Toast type={type}>
      {text}
      <S.ProgressBar duration={TOAST_DURATION.DURATION.ANIMATION} type={type}></S.ProgressBar>
    </S.Toast>
  );
};

export default Toast;
