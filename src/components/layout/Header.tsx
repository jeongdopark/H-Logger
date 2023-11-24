import { S } from "./styled";
import useRouter from "../../hooks/useRouter";

const Header = () => {
  const [routerHandler] = useRouter();

  return (
    <S.HeaderContainer>
      <S.NavElement onClick={() => routerHandler(1)}>HLogger</S.NavElement>
      <S.NavWrapper>
        <div onClick={() => routerHandler(2)}>Calendar</div>
        <div onClick={() => routerHandler(3)}>Record</div>
      </S.NavWrapper>
    </S.HeaderContainer>
  );
};

export default Header;
