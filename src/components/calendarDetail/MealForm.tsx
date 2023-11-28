import { useState } from "react";
import Selector from "../common/selector/Selector";
import Button from "../common/button/Button";
import { MEAL_TIME } from "../../const/const";
import { S } from "./styled";
import Menu from "./Menu";

const MealForm = () => {
  const [meals, setMeals] = useState(["밥", "김치", "된장찌개", "고등어", "밥", "김치", "된장찌개", "고등어"]);

  return (
    <S.Form>
      <S.InputContainer>
        <div>식단</div>
        <S.InputWrapper>
          <S.Input placeholder="메뉴를 하나씩 입력해 주세요." size="L"></S.Input>
          <Button size="S" text="메뉴 추가" />
        </S.InputWrapper>
        <S.MenuWrapper>
          {meals.map((menu: string, idx: number) => (
            <Menu menu={menu} key={idx} />
          ))}
        </S.MenuWrapper>
      </S.InputContainer>
      <Selector title="식사 시간" options={MEAL_TIME} size="L" />
      <Button size="S" text="추가" />
    </S.Form>
  );
};

export default MealForm;
