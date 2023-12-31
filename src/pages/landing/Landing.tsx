import Button from "../../components/common/button/Button";
import useLogin from "../../hooks/landing/useLogin";
import useMovePage from "../../hooks/useMovePage";
import useScrollLock from "../../hooks/useScrollLock";
import useOutsideClick from "../../hooks/useOutsideClick";
import { S } from "./styled";
import { SVG } from "../../components/SVG";
import { AuthContext } from "../../context/AuthProvider";
import { PATH_NUMBER } from "../../const/path";
import { ToastDispatchContext } from "../../context/ToastProvider";
import { useContext, useRef, useState } from "react";
import { ViewportContext } from "../../context/ViewportProvider";

const Main = () => {
  const [isLoginBoxOpened, setIsLoginBoxOpened] = useState<boolean>(false);
  const [isInitClick, setIsInitClick] = useState<boolean>(false);
  const { isMobile } = useContext(ViewportContext);
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
  const actions = useContext(ToastDispatchContext);
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
    actions?.addToast("SUCCESS", "로그인");
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
