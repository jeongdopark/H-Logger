import { S } from "./styled";
import Button from "../../components/common/button/Button";
import useLogin from "../../hooks/landing/useLogin";

const Main = () => {
  const [handleGoogleLogin] = useLogin();
  return (
    <S.LandingContainer>
      <S.LandingLeftContainer>
        <S.LandingH1>
          More Systematic
          <br />
          With
          <br />
          <S.LandingSpan>Health Logger</S.LandingSpan>
        </S.LandingH1>
        <S.LandingLoginContainer>
          <Button size="L" text="Get Start" onClick={handleGoogleLogin} />
        </S.LandingLoginContainer>
      </S.LandingLeftContainer>
    </S.LandingContainer>
  );
};

export default Main;
