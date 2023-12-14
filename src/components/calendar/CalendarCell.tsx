import { S } from "./styled";
import { IExercise, IMeal } from "../../types/calendar";
import { addDays, endOfMonth, startOfWeek, startOfMonth, endOfWeek, format } from "date-fns";

import useMovePage from "../../hooks/useMovePage";
import useCalendarDataQuery from "../../hooks/queries/useCalendarQuery";
import { PATH_NUMBER } from "../../const/path";
import useMissionsQuery from "../../hooks/queries/useMissionsQuery";
import { checkPeriod } from "../../utils/checkPeriod";
import { ResponsiveContext } from "../../context/ResponsiveProvider";
import { useContext } from "react";

interface IProps {
  currentMonth: Date;
}

const CalendarCell = ({ currentMonth }: IProps) => {
  const { data: calendarData } = useCalendarDataQuery();
  const { data: missionData } = useMissionsQuery();
  const { isMobile } = useContext(ResponsiveContext);
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

      const MISSION_STATUS =
        missionData && missionData.length !== 0 && missionData[missionData.length - 1].isActive
          ? checkPeriod(
              dayFormat,
              missionData[missionData.length - 1].period.start,
              missionData[missionData.length - 1].period.end
            )
          : false;
      days.push(
        <S.CellElement
          validtoday={isToday ? "true" : "false"}
          onClick={() => routerHandler({ num: PATH_NUMBER.CALENDAR_DETAIl, dayFormat })}
        >
          {isToday ? (
            isMobile ? (
              <span>{formattedDate}</span>
            ) : (
              <span>{formattedDate} today</span>
            )
          ) : (
            <span>{formattedDate}</span>
          )}
          {MISSION_STATUS && <S.MissionDivider></S.MissionDivider>}
          {data && (
            <S.CellTextContainer>
              {data.exercise && (
                <S.TagBoxWrapper>
                  {data.exercise.map((e: IExercise, idx: number) => {
                    return isMobile ? (
                      <S.Dot></S.Dot>
                    ) : (
                      <S.TagBox key={idx}>
                        {e.category} {e.time}
                      </S.TagBox>
                    );
                  })}
                </S.TagBoxWrapper>
              )}
              {data.meal && (
                <S.TagBoxWrapper>
                  {data.meal.map((e: IMeal, idx: number) => {
                    return isMobile ? (
                      <S.Dot style={{ backgroundColor: "#fa7414ff" }}></S.Dot>
                    ) : (
                      <S.TagBox key={idx}>{e.time}</S.TagBox>
                    );
                  })}
                </S.TagBoxWrapper>
              )}
              {data.dailyLog &&
                (isMobile ? <S.TagBox>{data.dailyLog.score}</S.TagBox> : <S.TagBox>{data.dailyLog.score}점</S.TagBox>)}
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
