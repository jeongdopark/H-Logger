import { S } from "./styled";
import { checkMission } from "../../utils/checkMission";
import { IExercise, IMeal } from "../../types/calendar";
import { addDays, endOfMonth, startOfWeek, startOfMonth, endOfWeek, format } from "date-fns";

import useMovePage from "../../hooks/useMovePage";
import useCalendarDataQuery from "../../hooks/queries/useCalendarQuery";
import useCurrentMissionQuery from "../../hooks/queries/useCurrentMissionQuery";
import { PATH_NUMBER } from "../../const/path";

interface IProps {
  currentMonth: Date;
}

const CalendarCell = ({ currentMonth }: IProps) => {
  const { data: calendarData } = useCalendarDataQuery();
  const { data: missionData } = useCurrentMissionQuery();

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
      // start, end, mid, true, false

      const MISSION_STATUS =
        missionData && Object.keys(missionData).length !== 0
          ? checkMission(dayFormat, missionData.period.start, missionData.period.mid, missionData.period.end)
          : "false";
      days.push(
        <S.CellElement
          validtoday={isToday ? "true" : "false"}
          onClick={() => routerHandler({ num: PATH_NUMBER.CALENDAR_DETAIl, dayFormat })}
        >
          {isToday ? <span>{formattedDate} today</span> : <span>{formattedDate}</span>}
          {MISSION_STATUS === "start" && <span> </span>}
          {MISSION_STATUS !== "false" && <S.MissionDivider></S.MissionDivider>}
          {data && (
            <S.CellTextContainer>
              {data.exercise && (
                <S.TagBoxWrapper>
                  {data.exercise.map((e: IExercise, idx: number) => (
                    <S.TagBox key={idx}>
                      {e.category} {e.time}
                    </S.TagBox>
                  ))}
                </S.TagBoxWrapper>
              )}
              {data.meal && (
                <S.TagBoxWrapper>
                  {data.meal.map((e: IMeal, idx: number) => (
                    <S.TagBox key={idx}>{e.time}</S.TagBox>
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
    rows.push(<S.CellRow key={format(day, "yyyy-MM-dd")}>{days}</S.CellRow>);
    days = [];
  }
  return <S.CellContainer>{rows}</S.CellContainer>;
};

export default CalendarCell;
