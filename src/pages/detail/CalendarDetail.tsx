import MealForm from "../../components/calendarDetail/MealForm";
import Textarea from "../../components/calendarDetail/TextArea";
import ExerciseForm from "../../components/calendarDetail/ExerciseForm";
import ExerciseRecord from "../../components/calendarDetail/ExerciseRecord";
import MealRecord from "../../components/calendarDetail/MealRecord";
import { S } from "./styled";
import TextRecord from "../../components/calendarDetail/TextRecord";

const CalendarDetail = () => {
  const FormElementsArray = [
    <ExerciseForm />,
    <MealForm />,
    <Textarea title="세 줄 일기" placeholder="하루 회고를 작성해 주세요." />,
  ];
  return (
    <S.DetailContainer>
      <S.FormContainer>
        {FormElementsArray.map((component: React.ReactElement, idx: number) => (
          <S.FormWrapper key={idx}>{component}</S.FormWrapper>
        ))}
      </S.FormContainer>
      <S.RecordContainer>
        <S.RecordElement>
          <ExerciseRecord />
          <ExerciseRecord />
        </S.RecordElement>
        <S.RecordElement>
          <MealRecord />
          <MealRecord />
          <MealRecord />
        </S.RecordElement>
        <S.RecordElement>
          <TextRecord />
        </S.RecordElement>
      </S.RecordContainer>
    </S.DetailContainer>
  );
};

export default CalendarDetail;
