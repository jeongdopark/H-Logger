import { S } from "./styled";
import useMovePage from "../../hooks/useMovePage";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";
import { PATH_NUMBER } from "../../const/path";

const Header = () => {
  const { isLogin, setIsLogin } = useContext(AuthContext);
  const [routerHandler] = useMovePage();

  const handleSignout = () => {
    setIsLogin(false);
    localStorage.removeItem("uid");
    routerHandler({ num: PATH_NUMBER.LANDING });
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
