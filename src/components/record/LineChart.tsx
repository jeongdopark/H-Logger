import { S } from "./styled";
import { IWeight } from "../../types/weight";
import { dotDateFormat } from "../../utils/dateFormat";
import { SVG_VIEWBOX } from "../../const";

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
  console.log(SVG_VIEWBOX.AVERAGE_HEIGHT / 75);

  const test = [
    {
      x: 0,
      y:
        SVG_VIEWBOX.AVERAGE_HEIGHT +
        (SVG_VIEWBOX.AVERAGE_HEIGHT - 75 * (SVG_VIEWBOX.AVERAGE_HEIGHT / 75)) * 10 -
        SVG_VIEWBOX.UP,
    },
    {
      x: 130,
      y:
        SVG_VIEWBOX.AVERAGE_HEIGHT +
        (SVG_VIEWBOX.AVERAGE_HEIGHT - 74 * (SVG_VIEWBOX.AVERAGE_HEIGHT / 75)) * 10 -
        SVG_VIEWBOX.UP,
    },
    {
      x: 260,
      y:
        SVG_VIEWBOX.AVERAGE_HEIGHT +
        (SVG_VIEWBOX.AVERAGE_HEIGHT - 76 * (SVG_VIEWBOX.AVERAGE_HEIGHT / 75)) * 10 -
        SVG_VIEWBOX.UP,
    },
  ];
  console.log(test);

  const lines = test.reduce((result: line[], point: pointsProps, index: number) => {
    if (index === 0) return [];
    const previous = test[index - 1];
    const line = { x1: previous.x, y1: previous.y, x2: point.x, y2: point.y };
    return [...result, line];
  }, []);
  console.log(lines);

  return (
    <svg viewBox={`0 0 ${SVG_VIEWBOX.WIDTH} ${SVG_VIEWBOX.HEIGHT}`} width="90%" height="100%">
      {lines.map(({ x1, x2, y1, y2 }) => (
        <S.GraphLine x1={x1} x2={x2} y1={y1} y2={y2} key={x1} />
      ))}

      {test.map(({ x, y }: any, index) => {
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
