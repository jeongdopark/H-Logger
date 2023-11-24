import { useState } from "react";
import { S } from "./styled";
import CalendarHeader from "./CalendarHeader";
import CalendarDays from "./CalendarDays";
import CalendarCell from "./CalendarCell";

const CalendarBox = () => {
  const [currentMonth, setCurrentMonth] = useState(new Date());

  return (
    <S.CalendarContainer>
      <CalendarHeader setCurrentMonth={setCurrentMonth} currentMonth={currentMonth} />
      <CalendarDays />
      <CalendarCell currentMonth={currentMonth} />
    </S.CalendarContainer>
  );
};

export default CalendarBox;
