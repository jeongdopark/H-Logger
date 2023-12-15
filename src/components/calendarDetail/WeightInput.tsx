import useCreateWeightMutation from "../../hooks/mutation/usePostWeightMutation";
import Button from "../common/button/Button";
import { S } from "./styled";
import React, { useState } from "react";
import Input from "../common/input/Input";

const WeightInput = ({ date, addToast }: { date: string; addToast: (type: string, text: string) => {} }) => {
  const [weight, setWeight] = useState<string>("");
  const { mutate: postWeight } = useCreateWeightMutation();
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setWeight(e.target.value);
  };
  const submitHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    postWeight(
      { weight: Number(weight)!, dateKey: date },
      {
        onSuccess: () => {
          addToast("SUCCESS", "등록 완료");
        },
        onError: () => {
          addToast("FAIL", "다시 입력해 주세요");
        },
      }
    );
  };
  return (
    <S.InputContainer>
      <S.FormWrapper>
        <Input title="몸무게" placeholder="몸무게를 입력해 주세요." size="XL" value={weight} onChange={onChange} />
        <Button size="XL" text="입력" onClick={submitHandler} />
      </S.FormWrapper>
    </S.InputContainer>
  );
};

export default WeightInput;
