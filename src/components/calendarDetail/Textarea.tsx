import useCreateDailyLogMutation from "../../hooks/mutation/usePostLogMutation";
import Selector from "../common/selector/Selector";
import Button from "../common/button/Button";
import Title from "../common/title/Title";
import React, { useState } from "react";
import { SCORE } from "../../const";
import { S } from "./styled";

interface IProps {
  title: string;
  placeholder: string;
  date: string;
  addToast: (type: string, text: string) => {};
}

const Textarea = ({ title, placeholder, date, addToast }: IProps) => {
  const { mutate: postLog } = useCreateDailyLogMutation();
  const [score, setScore] = useState<number>(10);
  const [dailyLog, setDailyLog] = useState<string>("");
  const onChangeLog = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setDailyLog(e.target.value);
  };
  const submitHandler = (e: React.FormEvent) => {
    e.preventDefault();
    setScore(10);
    setDailyLog("");
    postLog(
      { log: dailyLog, score, dateKey: date },
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
    <S.Form onSubmit={submitHandler}>
      <S.FormWrapper>
        <S.TextareaWrapper>
          <Title title={title} size="S" />
          <S.Textarea placeholder={placeholder} value={dailyLog} onChange={onChangeLog} />
        </S.TextareaWrapper>
        <Selector title="점수" options={SCORE} size="XL" setState={setScore} />
        <Button text="추가" size="XL" />
      </S.FormWrapper>
    </S.Form>
  );
};

export default Textarea;
