import { S } from "./styled";
import Button from "../common/button/Button";
import Title from "../common/title/Title";

const WeightInput = () => {
  return (
    <S.InputContainer>
      <Title title="몸무게" size="S" />
      <S.InputWrapper>
        <S.Input placeholder="몸무게를 입력해 주세요." size="L"></S.Input>
        <Button size="S" text="입력" />
      </S.InputWrapper>
    </S.InputContainer>
  );
};

export default WeightInput;
