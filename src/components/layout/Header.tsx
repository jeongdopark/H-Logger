import { S } from "./styled";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";
import { PATH_NUMBER } from "../../const/path";
import Toast from "../toast";
import useToast from "../../hooks/useToast";
import useMovePage from "../../hooks/useMovePage";

const Header = () => {
  const { isLogin, setIsLogin } = useContext(AuthContext);
  const [routerHandler] = useMovePage();

  const handleSignout = () => {
    setIsLogin(false);
    localStorage.removeItem("uid");
    routerHandler({ num: PATH_NUMBER.LANDING });
    useToast({ content: <Toast text="로그아웃 완료" type="SUCCESS" /> });
  };

  return (
    <S.HeaderContainer>
      <S.NavElement onClick={() => routerHandler({ num: PATH_NUMBER.LANDING })}>HLogger</S.NavElement>
      {isLogin && (
        <S.NavWrapper>
          <div onClick={() => routerHandler({ num: PATH_NUMBER.CALENDAR })}>Calendar</div>
          <div onClick={() => routerHandler({ num: PATH_NUMBER.RECORD })}>Record</div>
          <div onClick={handleSignout}>Signout</div>
        </S.NavWrapper>
      )}
    </S.HeaderContainer>
  );
};

export default Header;
