import { S } from "./styled";
import { addDays, endOfMonth, startOfWeek, startOfMonth, endOfWeek, format } from "date-fns";

interface IProps {
  currentMonth: Date;
}

const CalendarCell = ({ currentMonth }: IProps) => {
  const today = format(new Date(), "yyyy-MM-dd");
  const monthStart = startOfMonth(currentMonth);
  const monthEnd = endOfMonth(monthStart);
  const startDate = startOfWeek(monthStart);
  const endDate = endOfWeek(monthEnd);

  const rows = [];
  let days = [];
  let day = startDate;
  let formattedDate = "";

  while (day <= endDate) {
    for (let i = 0; i < 7; i++) {
      if (format(day, "yyyy-MM-dd") === today) {
        days.push(
          <S.CellElement today={true}>
            <span>{formattedDate}</span>
            <div>today</div>
          </S.CellElement>
        );
      } else {
        formattedDate = format(day, "d");
        days.push(
          <S.CellElement today={false}>
            <span>{formattedDate}</span>
          </S.CellElement>
        );
      }

      day = addDays(day, 1);
    }
    rows.push(<S.CellRow>{days}</S.CellRow>);
    days = [];
  }
  return <S.CellContainer>{rows}</S.CellContainer>;
};

export default CalendarCell;
