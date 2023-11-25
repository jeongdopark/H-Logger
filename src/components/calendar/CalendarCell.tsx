import useMovePage from "../../hooks/useMovePage";
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
  const [routerHandler] = useMovePage();

  const rows = [];
  let days = [];
  let day = startDate;
  let formattedDate = "";

  while (day <= endDate) {
    for (let i = 0; i < 7; i++) {
      const dayFormat = format(day, "yyyy-MM-dd");
      const dynamic = dayFormat.split("-").join("").substring(2);
      formattedDate = format(day, "d");
      if (dayFormat === today) {
        days.push(
          <S.CellElement today={true} onClick={() => routerHandler({ num: 4, dynamic })}>
            <span>{formattedDate}</span>
            <div>today</div>
          </S.CellElement>
        );
      } else {
        days.push(
          <S.CellElement today={false} onClick={() => routerHandler({ num: 4, dynamic })}>
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
