import useCreateMealMutation from "../../hooks/mutation/usePostMealMutation";
import Selector from "../common/selector/Selector";
import useToast from "../../hooks/useToast";
import Button from "../common/button/Button";
import Title from "../common/title/Title";
import Toast from "../toast";
import Menu from "./Menu";
import { MEAL_TIME } from "../../const";
import { useState } from "react";
import { S } from "./styled";

const MealForm = ({ date }: { date: string }) => {
  const [mealTime, setMealTime] = useState<string>("아침");
  const [meals, setMeals] = useState<string[]>([]);
  const [menu, setMenu] = useState<string>("");
  const { mutate: postMeal } = useCreateMealMutation();
  const onChangeMenu = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMenu(e.target.value);
  };

  const handleAddMenu = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setMeals([...meals, menu]);
    setMenu("");
  };

  const handleRemoveMenu = (index: number) => {
    const menus = meals.filter((_, idx) => idx !== index);
    setMeals([...menus]);
  };

  const submitHandler = (e: React.FormEvent) => {
    e.preventDefault();
    postMeal(
      { menus: meals, time: mealTime, dateKey: date },
      {
        onSuccess: () => {
          useToast({ content: <Toast text="등록 완료" type="SUCCESS" /> });
        },
        onError: () => {
          useToast({ content: <Toast text="다시 입력해 주세요." type="FAIL" /> });
        },
      }
    );
  };

  return (
    <S.Form onSubmit={submitHandler}>
      <S.FormWrapper>
        <S.InputContainer>
          <Title title="식단" size="S" />
          <S.InputWrapper>
            <S.Input value={menu} onChange={onChangeMenu} placeholder="메뉴를 하나씩 입력해 주세요." size="L"></S.Input>
            <Button size="S" text="메뉴 추가" onClick={handleAddMenu} />
          </S.InputWrapper>
        </S.InputContainer>
        <S.MenuWrapper>
          {meals.map((menu: string, idx: number) => (
            <Menu menu={menu} key={idx} onClick={() => handleRemoveMenu(idx)} />
          ))}
        </S.MenuWrapper>
        <Selector title="식사 시간" options={MEAL_TIME} size="XL" setState={setMealTime} />
        <Button size="S" text="추가" />
      </S.FormWrapper>
    </S.Form>
  );
};

export default MealForm;
