import Selector from "../common/selector/Selector";
import Button from "../common/button/Button";
import Title from "../common/title/Title";
import Menu from "./Menu";
import { useState } from "react";
import { MEAL_TIME } from "../../const";
import { S } from "./styled";

const MealForm = () => {
  const [meals, setMeals] = useState(["밥", "김치", "된장찌개", "고등어", "후라이"]);

  return (
    <S.Form>
      <S.FormWrapper>
        <S.InputContainer>
          <Title title="식단" size="S" />
          <S.InputWrapper>
            <S.Input placeholder="메뉴를 하나씩 입력해 주세요." size="L"></S.Input>
            <Button size="S" text="메뉴 추가" />
          </S.InputWrapper>
        </S.InputContainer>
        <S.MenuWrapper>
          {meals.map((menu: string, idx: number) => (
            <Menu menu={menu} key={idx} />
          ))}
        </S.MenuWrapper>

        <Selector title="식사 시간" options={MEAL_TIME} size="XL" />
        <Button size="S" text="추가" />
      </S.FormWrapper>
    </S.Form>
  );
};

export default MealForm;
