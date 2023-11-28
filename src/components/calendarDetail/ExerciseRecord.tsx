import { S } from "./styled";
import { IExercise } from "../../types";

const ExerciseRecord = ({ data }: { data: IExercise }) => {
  return (
    <S.ExerciseRecordBox>
      <div>{data.category}</div>
      <div>{data.time}</div>
    </S.ExerciseRecordBox>
  );
};

export default ExerciseRecord;
