import { S } from "./styled";
import { IExercise } from "../../types/calendar";
import useDeleteExerciseMutation from "../../hooks/mutation/useDeleteExerciseMutation";
import useToast from "../../hooks/useToast";
import Toast from "../toast";
interface IProps {
  data: IExercise;
  index: number;
  dateKey: string;
}

const ExerciseRecord = ({ data, index, dateKey }: IProps) => {
  const { mutate: deleteExercise } = useDeleteExerciseMutation();
  const deleteHandler = () => {
    deleteExercise(
      { dateKey, index },
      {
        onSuccess: () => {
          useToast({ content: <Toast text="삭제 완료" type="SUCCESS" /> });
        },
        onError: () => {
          useToast({ content: <Toast text="등록된 기록이 있습니다." type="FAIL" /> });
        },
      }
    );
  };
  return (
    <S.ExerciseRecordBox>
      <S.ExerciseRecord>{data.category}</S.ExerciseRecord>
      <S.Diver></S.Diver>
      <S.ExerciseRecord>{data.time}</S.ExerciseRecord>
      <S.DeleteDot onClick={deleteHandler} />
    </S.ExerciseRecordBox>
  );
};

export default ExerciseRecord;
