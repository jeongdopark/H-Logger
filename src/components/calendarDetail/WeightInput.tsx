import useCreateWeightMutation from "../../hooks/mutation/usePostWeightMutation";
import Button from "../common/button/Button";
import useToast from "../../hooks/useToast";
import Title from "../common/title/Title";
import Toast from "../toast";
import { S } from "./styled";
import React, { useState } from "react";

const WeightInput = ({ date }: { date: string }) => {
  const [weight, setWeight] = useState<string>();
  const { mutate: postWeight } = useCreateWeightMutation();
  const onChangeWeight = (e: React.ChangeEvent<HTMLInputElement>) => {
    setWeight(e.target.value);
  };

  const submitHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    postWeight(
      { weight: Number(weight)!, dateKey: date },
      {
        onSuccess: () => {
          useToast({ content: <Toast text="등록 완료" type="SUCCESS" /> });
        },
        onError: () => {
          useToast({ content: <Toast text="등록된 기록이 있습니다." type="FAIL" /> });
        },
      }
    );
  };
  return (
    <S.InputContainer>
      <Title title="몸무게" size="S" />
      <S.InputWrapper>
        <S.Input placeholder="몸무게를 입력해 주세요." size="L" value={weight} onChange={onChangeWeight}></S.Input>
        <Button size="S" text="입력" onClick={submitHandler} />
      </S.InputWrapper>
    </S.InputContainer>
  );
};

export default WeightInput;
