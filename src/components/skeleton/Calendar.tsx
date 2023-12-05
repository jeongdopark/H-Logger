import Shimmer from "./Shimmer";
import { S } from "./styled";

const CalendarSkeleton = () => {
  const ELEMENT = Array.from({ length: 6 }, () => Array(7).fill(true));

  return (
    <S.CellContainer_S>
      {ELEMENT.map((week) => (
        <S.CellRow_S>
          {week.map((day) => (
            <S.Cell_S>
              <Shimmer />
            </S.Cell_S>
          ))}
        </S.CellRow_S>
      ))}
    </S.CellContainer_S>
  );
};

export default CalendarSkeleton;
