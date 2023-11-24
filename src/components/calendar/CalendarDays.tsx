import { S } from "./styled";

const CalendarDays = () => {
  const days = [];
  const date = ["Sun", "Mon", "Thu", "Wed", "Thur", "Fri", "Sat"];

  for (let i = 0; i < date.length; i++) {
    days.push(<div key={i}>{date[i]}</div>);
  }

  return <S.DaysContainer>{days}</S.DaysContainer>;
};

export default CalendarDays;
