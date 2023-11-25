import Input from "../common/input/Input";
import Selector from "../common/selector/Selector";
import { EXERCISE_TIME } from "../../const/const";
import Button from "../common/button/Button";
import { S } from "./styled";

const ExerciseForm = () => {
  return (
    <S.Form>
      <Input title="운동 종목" size="L" placeholder="운동 종목을 입력해 주세요." />
      <Selector title="운동 시간" options={EXERCISE_TIME} size="L" />
      <Button size="S" text="추가" />
    </S.Form>
  );
};

export default ExerciseForm;
