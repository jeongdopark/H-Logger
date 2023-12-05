import { Suspense, useState } from "react";
import { S } from "./styled";
import CalendarHeader from "./CalendarHeader";
import CalendarDays from "./CalendarDays";
import CalendarCell from "./CalendarCell";
import CalendarSkeleton from "../skeleton/Calendar";

const CalendarBox = () => {
  const [currentMonth, setCurrentMonth] = useState(new Date());

  return (
    <S.CalendarContainer>
      <CalendarHeader setCurrentMonth={setCurrentMonth} currentMonth={currentMonth} />
      <CalendarDays />
      <Suspense fallback={<CalendarSkeleton />}>
        <CalendarCell currentMonth={currentMonth} />
      </Suspense>
    </S.CalendarContainer>
  );
};

export default CalendarBox;
