import { S } from "./styled";
import Menu from "./Menu";
import { IMeal } from "../../types/calendar";

const MealRecord = ({ data }: { data: IMeal }) => {
  return (
    <S.MealRecordBox>
      <div>{data.time}</div>
      <S.MenuRecordWrapper>
        {data.menus.map((m: string, idx: number) => (
          <Menu menu={m} key={idx} />
        ))}
      </S.MenuRecordWrapper>
    </S.MealRecordBox>
  );
};

export default MealRecord;
