import MealForm from "../../components/calendarDetail/MealForm";
import Textarea from "../../components/calendarDetail/Textarea";
import ExerciseForm from "../../components/calendarDetail/ExerciseForm";
import ExerciseRecord from "../../components/calendarDetail/ExerciseRecord";
import MealRecord from "../../components/calendarDetail/MealRecord";
import TextRecord from "../../components/calendarDetail/TextRecord";
import WeightInput from "../../components/calendarDetail/WeightInput";
import useCalendarDataQuery from "../../hooks/queries/useGetCalendarQuery";
import { ICalendar, IExercise, IMeal } from "../../types/calendar";
import { useEffect, useState } from "react";
import { S } from "./styled";
import { useParams } from "react-router-dom";

const CalendarDetail = () => {
  const { id } = useParams();

  const [modeNumber, setModeNumber] = useState(0);
  const [detailData, setDetailData] = useState<ICalendar>();
  const { data: calendarData, isLoading, isFetched } = useCalendarDataQuery();

  useEffect(() => {
    if (isFetched) {
      setDetailData(calendarData![id!]);
    }
  }, [isFetched]);

  const modeNumberHandler = (e: React.MouseEvent) => {
    const target = e.target as HTMLElement;
    const key = target.dataset.key !== undefined ? Number(target.dataset.key) : modeNumber;
    setModeNumber(key);
  };

  const FormArray = [
    <ExerciseForm />,
    <MealForm />,
    <Textarea title="세 줄 일지" placeholder="하루 일지를 작성해 주세요." />,
    <WeightInput />,
  ];

  if (isLoading) return <div>Loading...</div>;

  return (
    <S.DetailContainer>
      <S.FormContainer>
        <S.ModeSelect onClick={(e) => modeNumberHandler(e)} modeNumber={modeNumber}>
          <div data-key={0}>운동</div>
          <div data-key={1}>식단</div>
          <div data-key={2}>일지</div>
          <div data-key={3}>몸무게</div>
        </S.ModeSelect>
        <S.FormWrapper>{FormArray[modeNumber]}</S.FormWrapper>
      </S.FormContainer>
      {detailData && (
        <S.RecordContainer>
          <S.RecordElement>
            {detailData?.exercise.map((data: IExercise) => (
              <ExerciseRecord data={data} />
            ))}
          </S.RecordElement>
          <S.RecordElement>
            {detailData?.meal.map((data: IMeal) => (
              <MealRecord data={data} />
            ))}
          </S.RecordElement>
          <S.RecordElement>
            <TextRecord detailData={detailData!} />
          </S.RecordElement>
        </S.RecordContainer>
      )}
    </S.DetailContainer>
  );
};

export default CalendarDetail;
