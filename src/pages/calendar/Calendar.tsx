import { S } from "./styled";
import CalendarBox from "../../components/calendar/CalendarBox";
import ErrorBoundary from "../../components/error/ErrorBoundary";

const Calendar = () => {
  return (
    <ErrorBoundary>
      <S.CalendarContainer>
        <CalendarBox />
      </S.CalendarContainer>
    </ErrorBoundary>
  );
};

export default Calendar;
