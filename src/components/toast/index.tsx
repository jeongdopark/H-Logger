import { S } from "./styled";
import { TOAST_DURATION, TOAST_TYPE } from "../../const";

export type ToastKeyType = keyof typeof TOAST_TYPE;

interface IToast {
  text: string;
  type: ToastKeyType;
}

const Toast = ({ text, type }: IToast) => {
  return (
    <S.Toast type={type}>
      {text}
      <S.ProgressBar duration={TOAST_DURATION.DURATION.ANIMATION} type={type}></S.ProgressBar>
    </S.Toast>
  );
};

export default Toast;
