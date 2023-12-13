import { S } from "./styled";
import Menu from "./Menu";
import { IMeal } from "../../types/calendar";

interface IProps {
  data: IMeal;
  index: number;
}

const MealRecord = ({ data, index }: IProps) => {
  return (
    <S.MealRecordBox>
      <S.MealTime>{data.time}</S.MealTime>
      <S.MenuRecordWrapper>
        {data.menus.map((m: string, idx: number) => (
          <Menu menu={m} key={idx} />
        ))}
      </S.MenuRecordWrapper>
      <S.DeleteDot />
    </S.MealRecordBox>
  );
};

export default MealRecord;
