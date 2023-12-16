import Input from "../common/input/Input";
import Selector from "../common/selector/Selector";
import Button from "../common/button/Button";
import React, { useState } from "react";
import useCreateExerciseMutation from "../../hooks/mutation/usePostExerciseMutation";
import { EXERCISE_TIME } from "../../const";
import { S } from "./styled";

type ExerciseTimeType = (typeof EXERCISE_TIME)[number];

const ExerciseForm = ({ date, addToast }: { date: string; addToast: (text: string, type: string) => {} }) => {
  const { mutate: postExercise } = useCreateExerciseMutation();
  const [exercise, setExercise] = useState<string>("");
  const [exerciseTime, setExerciseTime] = useState<ExerciseTimeType>(EXERCISE_TIME[0]);
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setExercise(e.target.value);
  };
  const submitHandler = (e: React.FormEvent) => {
    e.preventDefault();
    setExercise("");
    setExerciseTime(EXERCISE_TIME[0]);
    postExercise(
      { category: exercise, time: exerciseTime, dateKey: date },
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
        <Input
          title="운동 종목"
          size="XL"
          placeholder="운동 종목을 입력해 주세요."
          value={exercise}
          onChange={onChange}
        />
        <Selector title="운동 시간" options={EXERCISE_TIME} size="XL" setState={setExerciseTime} />
        <Button size="XL" text="추가" />
      </S.FormWrapper>
    </S.Form>
  );
};

export default ExerciseForm;
