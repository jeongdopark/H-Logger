import { IWeight } from "../../types/weight";
import { dotDateFormat } from "../../utils/dateFormat";
import { S } from "./styled";

interface pointsProps {
  x: number;
  y: number;
}

interface line {
  x1: number;
  x2: number;
  y1: number;
  y2: number;
}

interface lineGraphProps {
  points: pointsProps[];
  sortUserWeight: IWeight[];
}

const LineGraph = ({ points, sortUserWeight }: lineGraphProps): JSX.Element => {
  const lines = points.reduce((result: line[], point: pointsProps, index: number) => {
    if (index === 0) return [];
    const previous = points[index - 1];
    const line = { x1: previous.x, y1: previous.y, x2: point.x, y2: point.y };
    return [...result, line];
  }, []);

  return (
    <svg viewBox={`0 -40 556 140`} width="100%" height="100%">
      {lines.map(({ x1, x2, y1, y2 }) => (
        <S.GraphLine x1={x1} x2={x2} y1={y1} y2={y2} key={x1} />
      ))}

      {points.map(({ x, y }: any, index) => {
        const dotDate = dotDateFormat(String(sortUserWeight[index].date));
        return (
          <S.GraphLineWrapper key={dotDate}>
            <S.GraphSubCircle cx={x} cy={y} r="25" />
            <S.GraphCircle cx={x} cy={y} r="4" />

            <S.HoverRect className="hover-rect" x={x - 60} y={y + 10} rx={5} />
            <S.HoverText className="hover-rect" x={x - 25} y={y + 30} fontSize={14}>
              {dotDate}
            </S.HoverText>
            <S.HoverText className="hover-rect" x={x - 16} y={y + 50} fontSize={14}>
              {sortUserWeight[index].weight}kg
            </S.HoverText>
          </S.GraphLineWrapper>
        );
      })}
    </svg>
  );
};

export default LineGraph;
