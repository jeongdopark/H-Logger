import { addMonths, format, subMonths } from "date-fns";
import { S } from "./styled";
import { SVG } from "../SVG";

interface IProps {
  currentMonth: Date;
  setCurrentMonth: React.Dispatch<React.SetStateAction<Date>>;
}

const CalendarHeader = ({ setCurrentMonth, currentMonth }: IProps) => {
  const prevMonth = () => {
    setCurrentMonth(subMonths(currentMonth, 1));
  };

  const nextMonth = () => {
    setCurrentMonth(addMonths(currentMonth, 1));
  };

  return (
    <S.HeaderContainer>
      <S.ArrowBuntton onClick={prevMonth}>{SVG.Left}</S.ArrowBuntton>
      <div>
        <span>
          {format(currentMonth, "yyyy")}
          <span>. {format(currentMonth, "M")}</span>
        </span>
      </div>
      <S.ArrowBuntton onClick={nextMonth}>{SVG.Right}</S.ArrowBuntton>
    </S.HeaderContainer>
  );
};

export default CalendarHeader;
