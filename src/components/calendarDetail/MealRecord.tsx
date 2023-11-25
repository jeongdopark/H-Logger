import { S } from "./styled";
import Menu from "./Menu";

const MealRecord = () => {
  const menus = ["밥", "김치", "된장찌개", "고등어"];
  return (
    <S.MealRecordBox>
      <div>아침</div>
      <S.MenuWrapper>
        {menus.map((menu: string, idx: number) => (
          <Menu menu={menu} key={idx} />
        ))}
      </S.MenuWrapper>
    </S.MealRecordBox>
  );
};

export default MealRecord;
