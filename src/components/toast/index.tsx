import { S } from "./styled";
import { TOAST_DURATION, TOAST_TYPE } from "../../const";
import { useContext, useEffect, useRef } from "react";
import { ToastContext } from "../../context/ToastProvider";

export type ToastKeyType = keyof typeof TOAST_TYPE;

export interface IToast {
  text: string;
  type: ToastKeyType;
  id: number;
}

const Toast = ({ text, type, id }: IToast) => {
  const toastTime = useRef<any>(null);
  const { removeToast } = useContext(ToastContext);
  const handleRemove = () => {
    removeToast(id);
  };
  useEffect(() => {
    toastTime.current = setTimeout(() => {
      handleRemove();
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
