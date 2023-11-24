import { S } from "./styled";
import useRouter from "../../hooks/useRouter";

const Header = () => {
  const [routerHandler] = useRouter();

  return (
    <S.HeaderContainer>
      <S.NavElement onClick={() => routerHandler(1)}>HLogger</S.NavElement>
      <S.NavWrapper>
        <S.NavElement onClick={() => routerHandler(2)}>Calendar</S.NavElement>
        <S.NavElement onClick={() => routerHandler(3)}>Record</S.NavElement>
      </S.NavWrapper>
    </S.HeaderContainer>
  );
};

export default Header;
