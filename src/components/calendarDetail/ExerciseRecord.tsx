import { S } from "./styled";
import { IExercise } from "../../types/calendar";
import useDeleteExerciseMutation from "../../hooks/mutation/useDeleteExerciseMutation";
import { ToastType } from "../../types/toast";
interface IProps {
  data: IExercise;
  index: number;
  dateKey: string;
  addToast: (type: ToastType, text: string) => void;
}

const ExerciseRecord = ({ data, index, dateKey, addToast }: IProps) => {
  const { mutate: deleteExercise } = useDeleteExerciseMutation();
  const deleteHandler = () => {
    deleteExercise(
      { dateKey, index },
      {
        onSuccess: () => {
          addToast("SUCCESS", "삭제 완료");
        },
        onError: () => {
          addToast("FAIL", "다시 시도해 주세요");
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
