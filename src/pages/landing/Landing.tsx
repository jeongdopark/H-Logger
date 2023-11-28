import { S } from "./styled";
import Button from "../../components/common/button/Button";
import useLogin from "../../hooks/landing/useLogin";
import { useContext, useRef, useState } from "react";
import useOutsideClick from "../../hooks/landing/useOutsideClick";
import { SVG } from "../../components/SVG";
import { AuthContext } from "../../context/AuthProvider";
import useMovePage from "../../hooks/useMovePage";
import { PATH_NUMBER } from "../../const/path";

const Main = () => {
  const [handleGoogleLogin] = useLogin();
  const [routerHandler] = useMovePage();
  const loginModal = useRef<HTMLDivElement>(null);
  const { isLogin } = useContext(AuthContext);
  const [isInitClick, setIsInitClick] = useState<boolean>(false);
  const [isLoginBoxOpened, setIsLoginBoxOpened] = useState<boolean>(false);
  const LoginBoxHandler = () => {
    setIsInitClick(true);
    setIsLoginBoxOpened(true);
  };
  useOutsideClick({
    ref: loginModal,
    isInit: isInitClick,
    setIsInit: setIsInitClick,
    isOpened: isLoginBoxOpened,
    setIsOpened: setIsLoginBoxOpened,
  });

  return (
    <S.LandingContainer>
      {isLoginBoxOpened && (
        <S.ModalContainer>
          <S.LoginBox ref={loginModal}>
            <div onClick={handleGoogleLogin} style={{ cursor: "pointer" }}>
              {SVG.Goggle}
            </div>
            <Button text="Guest" size="L" />
          </S.LoginBox>
        </S.ModalContainer>
      )}
      <S.LandingLeftContainer>
        <S.LandingH1>
          More Systematic
          <br />
          With
          <br />
          <S.LandingSpan>Health Logger</S.LandingSpan>
        </S.LandingH1>
        <S.LandingLoginContainer>
          {isLogin ? (
            <S.ButtonWrapper>
              <Button size="L" text="Calendar" onClick={() => routerHandler({ num: PATH_NUMBER.CALENDAR })} />
              <Button size="L" text="Record" onClick={() => routerHandler({ num: PATH_NUMBER.RECORD })} />
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
