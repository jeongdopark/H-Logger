import Input from "../common/input/Input";
import Selector from "../common/selector/Selector";
import Button from "../common/button/Button";
import { EXERCISE_TIME } from "../../const";
import { S } from "./styled";
import React, { useState } from "react";
import useCreateExerciseMutation from "../../hooks/mutation/usePostExerciseMutation";

type ExerciseTimeType = (typeof EXERCISE_TIME)[number];

const ExerciseForm = ({ date }: { date: string }) => {
  const { mutate: postExercise } = useCreateExerciseMutation();
  const [exercise, setExercise] = useState<string>("");
  const [exerciseTime, setExerciseTime] = useState<ExerciseTimeType>(EXERCISE_TIME[0]);
  const submitHandler = (e: React.FormEvent) => {
    e.preventDefault();
    postExercise({ category: exercise, time: exerciseTime, dateKey: date });
  };
  return (
    <S.Form onSubmit={submitHandler}>
      <S.FormWrapper>
        <Input
          title="운동 종목"
          size="XL"
          placeholder="운동 종목을 입력해 주세요."
          value={exercise}
          setValue={setExercise}
        />
        <Selector title="운동 시간" options={EXERCISE_TIME} size="XL" setExerciseTime={setExerciseTime} />
        <Button size="S" text="추가" />
      </S.FormWrapper>
    </S.Form>
  );
};

export default ExerciseForm;
