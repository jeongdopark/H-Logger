import { S } from "./styled";
import { IMeal } from "../../types/calendar";
import Menu from "./Menu";
import useDeleteMealMutation from "../../hooks/mutation/useDeleteMealMutation";
import { ToastType } from "../../types/toast";

interface IProps {
  data: IMeal;
  index: number;
  dateKey: string;
  addToast: (type: ToastType, text: string) => void;
}

const MealRecord = ({ data, index, dateKey, addToast }: IProps) => {
  const { mutate: deleteMeal } = useDeleteMealMutation();
  const deleteHandler = () => {
    deleteMeal(
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
    <S.MealRecordBox>
      <S.MealTime>{data.time}</S.MealTime>
      <S.MenuRecordWrapper>
        {data.menus.map((m: string, idx: number) => (
          <Menu menu={m} key={idx} />
        ))}
      </S.MenuRecordWrapper>
      <S.DeleteDot onClick={deleteHandler} />
    </S.MealRecordBox>
  );
};

export default MealRecord;
