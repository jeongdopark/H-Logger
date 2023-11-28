import { S } from "./styled";
import useMovePage from "../../hooks/useMovePage";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";

const Header = () => {
  const { isLogin, setIsLogin } = useContext(AuthContext);

  const [routerHandler] = useMovePage();

  const handleSignout = () => {
    setIsLogin(false);
    localStorage.removeItem("uid");
  };

  return (
    <S.HeaderContainer>
      <S.NavElement onClick={() => routerHandler({ num: 1 })}>HLogger</S.NavElement>
      {isLogin && (
        <S.NavWrapper>
          <div onClick={() => routerHandler({ num: 2 })}>Calendar</div>
          <div onClick={() => routerHandler({ num: 3 })}>Record</div>
          <div onClick={handleSignout}>Signout</div>
        </S.NavWrapper>
      )}
    </S.HeaderContainer>
  );
};

export default Header;
