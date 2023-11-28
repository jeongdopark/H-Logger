import { S } from "./styled";
import Menu from "./Menu";
import { IMeal } from "../../types";

const MealRecord = ({ data }: { data: IMeal }) => {
  return (
    <S.MealRecordBox>
      <div>{data.time}</div>
      <S.MenuWrapper>
        {data.menu.map((m: string, idx: number) => (
          <Menu menu={m} key={idx} />
        ))}
      </S.MenuWrapper>
    </S.MealRecordBox>
  );
};

export default MealRecord;
