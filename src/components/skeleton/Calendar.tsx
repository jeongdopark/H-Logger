import Shimmer from "./Shimmer";
import { S } from "./styled";

const CalendarSkeleton = () => {
  const ELEMENT = Array.from({ length: 6 }, () => Array(7).fill(true));

  return (
    <S.CellContainer_S>
      {ELEMENT.map((week, idx) => (
        <S.CellRow_S key={idx}>
          {week.map((day, idx) => (
            <S.Cell_S key={idx}>
              <Shimmer />
            </S.Cell_S>
          ))}
        </S.CellRow_S>
      ))}
    </S.CellContainer_S>
  );
};

export default CalendarSkeleton;
