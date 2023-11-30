import { S } from "./styled";
import { addDays, startOfWeek, startOfMonth, format } from "date-fns";
import { useNavigate } from "react-router-dom";
import useCalendarDataQuery from "../../hooks/queries/useCalendarQuery";
import { THEME } from "../../style/theme";
import Title from "../common/title/Title";
import { IExercise } from "../../types/calendar";
const ScoreRecord = () => {
  const { data, isLoading } = useCalendarDataQuery();
  console.log(data);

  const navigate = useNavigate();
  const routerHandler = (id: string) => {
    navigate(`/calendar/${id}`);
  };
  const monthStart = startOfMonth(new Date(2023, 0));
  let startDate = startOfWeek(monthStart);
  let Year = [
    <S.ScoreRecordUl>
      <li>Sun</li>
      <li>Mon</li>
      <li>Tue</li>
      <li>Wed</li>
      <li>Thu</li>
      <li>Fri</li>
      <li>Sat</li>
    </S.ScoreRecordUl>,
  ];
  while (true && data !== undefined) {
    let Week = [];
    for (let k = 0; k < 7; k++) {
      const date = startDate;
      const dateFormat = format(date, "yyMMdd");
      const dateData = data[dateFormat] ? data[dateFormat] : "정보 없음";
      const score = data[dateFormat] && data[dateFormat].dailyLog ? data[dateFormat].dailyLog.score : 0;

      let color = "";

      if (score === 0) {
        color = "white";
      } else if (score <= 39) {
        color = THEME.BACKGROUND_COLOR.GREEN_4;
      } else if (score <= 79) {
        color = "#A5CA93";
      } else {
        color = THEME.BACKGROUND_COLOR.GREEN_2;
      }
      Week.push(
        <S.ScoreRecordLi color={color} onClick={() => routerHandler(dateFormat)} key={dateFormat}>
          <S.HoverBox className="score-tooltip">
            <div>{format(date, "yy-MM-dd")}</div>
            {dateData === "정보 없음" ? (
              <div>정보 없음</div>
            ) : (
              <div>
                {dateData.exercise &&
                  dateData.exercise.map((e: IExercise) => {
                    return (
                      <>
                        <div>
                          {e.category} {e.time}
                        </div>
                      </>
                    );
                  })}
                {dateData.dailyLog && <div>{dateData.dailyLog.score}점</div>}
              </div>
            )}
          </S.HoverBox>
        </S.ScoreRecordLi>
      );
      startDate = addDays(startDate, 1);
      if (format(startDate, "yyMMdd") === "240101") break;
    }
    Year.push(<S.ScoreRecordUl>{Week}</S.ScoreRecordUl>);
    if (format(startDate, "yyMMdd") === "240101") break;
  }
  return (
    <S.RecordContainer>
      <S.TitleWrapper>
        <Title title="Record" size="XL" />
      </S.TitleWrapper>
      <S.ScoreRecordWrapper>{Year.map((week) => week)}</S.ScoreRecordWrapper>
    </S.RecordContainer>
  );
};

export default ScoreRecord;
