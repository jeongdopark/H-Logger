import Button from "../../components/common/button/Button";
import useLogin from "../../hooks/landing/useLogin";
import useMovePage from "../../hooks/useMovePage";
import useScrollLock from "../../hooks/useScrollLock";
import useOutsideClick from "../../hooks/useOutsideClick";
import { S } from "./styled";
import { SVG } from "../../components/SVG";
import { AuthContext } from "../../context/AuthProvider";
import { PATH_NUMBER } from "../../const/path";
import { ToastContext } from "../../context/ToastProvider";
import { ResponsiveContext } from "../../App";
import { useContext, useRef, useState } from "react";

const Main = () => {
  const [isLoginBoxOpened, setIsLoginBoxOpened] = useState<boolean>(false);
  const [isInitClick, setIsInitClick] = useState<boolean>(false);
  const { isMobile } = useContext(ResponsiveContext);
  const loginModal = useRef<HTMLDivElement>(null);
  const { setIsLogin } = useContext(AuthContext);
  const { isLogin } = useContext(AuthContext);
  const [handleGoogleLogin] = useLogin();
  const [routerHandler] = useMovePage();
  const { openScroll } = useScrollLock();
  const LoginBoxHandler = () => {
    setIsInitClick(true);
    setIsLoginBoxOpened(true);
  };
  const { addToast } = useContext(ToastContext);
  useOutsideClick({
    ref: loginModal,
    isInit: isInitClick,
    setIsInit: setIsInitClick,
    isOpened: isLoginBoxOpened,
    setIsOpened: setIsLoginBoxOpened,
  });

  const GuestLogin = () => {
    localStorage.setItem("uid", import.meta.env.VITE_GUEST_ID);
    openScroll();
    setIsLogin(true);
    routerHandler({ num: PATH_NUMBER.CALENDAR });
    addToast("SUCCESS", "로그인 성공");
  };

  return (
    <S.LandingContainer>
      {isLoginBoxOpened && (
        <S.ModalContainer>
          <S.LoginBox ref={loginModal}>
            <div onClick={handleGoogleLogin} style={{ cursor: "pointer" }}>
              {SVG.Goggle}
            </div>
            <Button text="Guest" size="L" onClick={GuestLogin} />
          </S.LoginBox>
        </S.ModalContainer>
      )}
      <S.LandingLeftContainer>
        <S.LandingH1>
          Visualize Wellness
          <br />
          With
          <br />
          <S.LandingSpan>Health Logger</S.LandingSpan>
        </S.LandingH1>

        <S.LandingLoginContainer>
          {isLogin ? (
            <S.ButtonWrapper>
              <Button
                size={isMobile ? "MO" : "L"}
                text="Calendar"
                onClick={() => routerHandler({ num: PATH_NUMBER.CALENDAR })}
              />
              <Button
                size={isMobile ? "MO" : "L"}
                text="Record"
                onClick={() => routerHandler({ num: PATH_NUMBER.RECORD })}
              />
            </S.ButtonWrapper>
          ) : (
            <Button size="L" text="Get Start" onClick={LoginBoxHandler} />
          )}
        </S.LandingLoginContainer>
      </S.LandingLeftContainer>
    </S.LandingContainer>
  );
};

export default Main;
