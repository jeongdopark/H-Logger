import { S } from "./styled";
import { IMeal } from "../../types/calendar";
import Menu from "./Menu";
import Toast from "../toast";
import useToast from "../../hooks/useToast";
import useDeleteMealMutation from "../../hooks/mutation/useDeleteMealMutation";

interface IProps {
  data: IMeal;
  index: number;
  dateKey: string;
}

const MealRecord = ({ data, index, dateKey }: IProps) => {
  const { mutate: deleteMeal } = useDeleteMealMutation();
  const deleteHandler = () => {
    deleteMeal(
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
