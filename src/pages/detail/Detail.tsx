import MealForm from "../../components/calendarDetail/MealForm";
import Textarea from "../../components/calendarDetail/Textarea";
import ExerciseForm from "../../components/calendarDetail/ExerciseForm";
import ExerciseRecord from "../../components/calendarDetail/ExerciseRecord";
import MealRecord from "../../components/calendarDetail/MealRecord";
import TextRecord from "../../components/calendarDetail/TextRecord";
import WeightInput from "../../components/calendarDetail/WeightInput";
import useCalendarDataQuery from "../../hooks/queries/useCalendarQuery";
import Button from "../../components/common/button/Button";
import useMovePage from "../../hooks/useMovePage";
import { S } from "./styled";
import { IExercise, IMeal } from "../../types/calendar";
import { useState } from "react";
import { useParams } from "react-router-dom";
import DonutChart from "../../components/record/DonutChart";

const CalendarDetail = () => {
  const { id } = useParams() as { id: string };
  const [modeNumber, setModeNumber] = useState(0);
  const { data: calendarData, isLoading } = useCalendarDataQuery();
  const [routerHandler] = useMovePage();

  const modeNumberHandler = (e: React.MouseEvent) => {
    const target = e.target as HTMLElement;
    const key = target.dataset.key !== undefined ? Number(target.dataset.key) : modeNumber;
    setModeNumber(key);
  };

  const FormArray = [
    <ExerciseForm date={id!} />,
    <MealForm date={id!} />,
    <Textarea title="하루 기록" placeholder="하루를 기록해 주세요." date={id!} />,
    <WeightInput date={id!} />,
  ];

  if (isLoading) return <div>Loading...</div>;

  return (
    <S.DetailContainer>
      <S.DetailHeader>
        <span>{id[2] + id[3] + "월 " + id[4] + id[5] + "일"}</span>
        <Button text="미션 생성" size="S" onClick={() => routerHandler({ num: 5, dayFormat: id })} />
      </S.DetailHeader>
      <S.FormContainer>
        <S.ModeSelect onClick={(e) => modeNumberHandler(e)} modeNumber={modeNumber}>
          <div data-key={0}>운동</div>
          <div data-key={1}>식단</div>
          <div data-key={2}>일지</div>
          <div data-key={3}>몸무게</div>
        </S.ModeSelect>
        <S.FormWrapper>{FormArray[modeNumber]}</S.FormWrapper>
      </S.FormContainer>

      <S.RecordContainer>
        {calendarData[id]?.exercise ? (
          <S.RecordElement>
            <S.ExerciseRecordBox>운동</S.ExerciseRecordBox>
            {calendarData[id]?.exercise.map((data: IExercise, index: number) => (
              <ExerciseRecord data={data} key={index} index={index} />
            ))}
          </S.RecordElement>
        ) : (
          <S.ExerciseRecordBox>운동</S.ExerciseRecordBox>
        )}
        {calendarData[id]?.meal ? (
          <S.RecordElement>
            <S.MealRecordBox>식단</S.MealRecordBox>
            {calendarData[id]?.meal.map((data: IMeal, index: number) => (
              <MealRecord data={data} key={index} index={index} />
            ))}
          </S.RecordElement>
        ) : (
          <S.MealRecordBox>식단</S.MealRecordBox>
        )}
        {calendarData[id]?.dailyLog ? (
          <S.RecordElement>
            <S.ExerciseRecordBox>일기</S.ExerciseRecordBox>
            <TextRecord detailData={calendarData[id]!} />
            <S.ChartWrapper>
              <DonutChart percent={calendarData[id].dailyLog.score * 0.01} unit={"점"} />
            </S.ChartWrapper>
          </S.RecordElement>
        ) : (
          <S.ExerciseRecordBox>일기</S.ExerciseRecordBox>
        )}
      </S.RecordContainer>
    </S.DetailContainer>
  );
};

export default CalendarDetail;
