import { S } from "./styled";
import Button from "../../components/common/button/Button";

const Main = () => {
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
          <Button size="L" text="Get Start" />
        </S.LandingLoginContainer>
      </S.LandingLeftContainer>
      <S.LandingRightContainer></S.LandingRightContainer>
    </S.LandingContainer>
  );
};

export default Main;
