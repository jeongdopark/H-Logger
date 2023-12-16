import { styled } from "styled-components";
import { THEME } from "../../style/theme";
import CalendarDays from "../calendar/CalendarDays";
import CalendarHeader from "../calendar/CalendarHeader";
import { useState } from "react";
import CalendarSkeleton from "./Calendar";

const CalendarPageSkeleton = () => {
  const [currentMonth, setCurrentMonth] = useState(new Date());
  return (
    <CalendarContainer>
      <CalendarWrapper>
        <CalendarHeader setCurrentMonth={setCurrentMonth} currentMonth={currentMonth} />
        <CalendarDays />
        <CalendarSkeleton />
      </CalendarWrapper>
    </CalendarContainer>
  );
};

const CalendarContainer = styled.div`
  width: 90%;
  height: 100%;
  display: flex;
  justify-content: center;
  border: 1px solid ${THEME.BORDER.GRAY};
  border-radius: ${THEME.BORDER_RADIUS.M};
`;

const CalendarWrapper = styled.div`
  width: 100%;
  height: 100%;
`;

export default CalendarPageSkeleton;
