import { S } from "./styled";
import { IExercise } from "../../types/calendar";

interface IProps {
  data: IExercise;
  index: number;
}

const ExerciseRecord = ({ data, index }: IProps) => {
  return (
    <S.ExerciseRecordBox>
      <S.ExerciseRecord>{data.category}</S.ExerciseRecord>
      <S.Diver></S.Diver>
      <S.ExerciseRecord>{data.time}</S.ExerciseRecord>
      <S.DeleteDot />
    </S.ExerciseRecordBox>
  );
};

export default ExerciseRecord;
