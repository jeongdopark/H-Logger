import useMovePage from "../../hooks/useMovePage";
import { S } from "./styled";
import { addDays, endOfMonth, startOfWeek, startOfMonth, endOfWeek, format } from "date-fns";
import useCalendarDataQuery from "../../hooks/queries/useCalendarQuery";
import { IExercise, IMeal } from "../../types/calendar";

interface IProps {
  currentMonth: Date;
}

const CalendarCell = ({ currentMonth }: IProps) => {
  const { data: calendarData, isLoading } = useCalendarDataQuery();
  const today = format(new Date(), "yyMMdd");
  const monthStart = startOfMonth(currentMonth);
  const monthEnd = endOfMonth(monthStart);
  const startDate = startOfWeek(monthStart);
  const endDate = endOfWeek(monthEnd);
  const [routerHandler] = useMovePage();

  const rows = [];
  let days = [];
  let day = startDate;
  let formattedDate = "";

  while (day <= endDate && calendarData) {
    for (let i = 0; i < 7; i++) {
      const dayFormat = format(day, "yyMMdd");
      const isToday = today === dayFormat;
      const data = calendarData![dayFormat];

      formattedDate = format(day, "d");

      days.push(
        <S.CellElement today={isToday} onClick={() => routerHandler({ num: 4, dayFormat })}>
          {isToday ? <span>{formattedDate} ●</span> : <span>{formattedDate}</span>}
          {data && (
            <S.CellTextContainer>
              {data.exercise && (
                <S.TagBoxWrapper>
                  {data.exercise.map((e: IExercise) => (
                    <S.TagBox>
                      {e.category} {e.time}
                    </S.TagBox>
                  ))}
                </S.TagBoxWrapper>
              )}
              {data.meal && (
                <S.TagBoxWrapper>
                  {data.meal.map((e: IMeal) => (
                    <S.TagBox>{e.time}</S.TagBox>
                  ))}
                </S.TagBoxWrapper>
              )}
              {data.dailyLog && <S.TagBox>{data.dailyLog.score}점</S.TagBox>}
            </S.CellTextContainer>
          )}
        </S.CellElement>
      );

      day = addDays(day, 1);
    }
    rows.push(<S.CellRow>{days}</S.CellRow>);
    days = [];
  }
  return <S.CellContainer>{rows}</S.CellContainer>;
};

export default CalendarCell;
