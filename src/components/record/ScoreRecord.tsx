import { S } from "./styled";
import Title from "../common/title/Title";
import { addDays, startOfWeek, startOfMonth, format } from "date-fns";
import { useNavigate } from "react-router-dom";

const ScoreRecord = () => {
  const navigate = useNavigate();
  const routerHandler = (id: string) => {
    navigate(`/calendar/${id}`);
  };
  const monthStart = startOfMonth(new Date(2023, 0));
  let startDate = startOfWeek(monthStart);
  let Year = [
    <S.ScoreRecordUl>
      <li>Sun</li>
      <li></li>
      <li>Tue</li>
      <li></li>
      <li>Thur</li>
      <li></li>
      <li>Sat</li>
    </S.ScoreRecordUl>,
  ];
  while (true) {
    let Week = [];
    for (let k = 0; k < 7; k++) {
      const date = startDate;
      Week.push(
        <S.ScoreRecordLi
          data-date={format(date, "yyyy-MM-dd")}
          onClick={() => routerHandler(format(date, "yyMMdd"))}
        ></S.ScoreRecordLi>
      );
      startDate = addDays(startDate, 1);
      if (format(startDate, "yyMMdd") === "240101") break;
    }
    Year.push(<S.ScoreRecordUl>{Week}</S.ScoreRecordUl>);
    if (format(startDate, "yyMMdd") === "240101") break;
  }
  return (
    <S.RecordContainer>
      <Title title="점수 기록" />
      <S.ScoreRecordWrapper>{Year.map((week) => week)}</S.ScoreRecordWrapper>
    </S.RecordContainer>
  );
};

export default ScoreRecord;
