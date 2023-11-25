import { S } from "./styled";
import useMovePage from "../../hooks/useMovePage";

const Header = () => {
  const [routerHandler] = useMovePage();

  return (
    <S.HeaderContainer>
      <S.NavElement onClick={() => routerHandler({ num: 1 })}>HLogger</S.NavElement>
      <S.NavWrapper>
        <div onClick={() => routerHandler({ num: 2 })}>Calendar</div>
        <div onClick={() => routerHandler({ num: 3 })}>Record</div>
      </S.NavWrapper>
    </S.HeaderContainer>
  );
};

export default Header;
