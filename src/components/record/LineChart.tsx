import { S } from "./styled";
import { IWeight } from "../../types/weight";
import { dotDateFormat } from "../../utils/dateFormat";
import { SVG_VIEWBOX } from "../../const";
import { THEME } from "../../style/theme";

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
  const POLYLINE_POINT = points.map((e) => `${e.x + 45}, ${e.y + 32}`).join(" ");

  return (
    <S.ChartContainer>
      <ul>
        {points.map((e, index) => {
          const dotDate = dotDateFormat(String(sortUserWeight[index].date));

          return (
            <S.ChartLi x={e.x} y={e.y}>
              <svg viewBox="0 0 20px 20px" width={100} height={205}>
                <S.GraphLineWrapper>
                  <S.GraphCircle
                    cx="5"
                    cy={e.y}
                    r="2.5"
                    stroke={THEME.BACKGROUND_COLOR.GREEN}
                    fill={THEME.BACKGROUND_COLOR.GREEN}
                    strokeWidth="5"
                  />
                  <S.HoverRect className="hover-rect" x={10} y={e.y - 40} rx={5} />
                  <S.HoverText className="hover-rect" x={25} y={e.y - 20} fontSize={14}>
                    {sortUserWeight[index].weight}kg
                  </S.HoverText>
                </S.GraphLineWrapper>
              </svg>
              <S.ChartText>{dotDate}</S.ChartText>
            </S.ChartLi>
          );
        })}
      </ul>
      <S.SVGContainer viewBox="0 0 100px 100px " width="100%" height="100%">
        <S.Polyline
          points={POLYLINE_POINT}
          fill="none"
          stroke={THEME.BACKGROUND_COLOR.GREEN_4}
          strokeWidth="6"
        ></S.Polyline>
        {points.map((e, index) => (
          <S.Circle cx={e.x + 45} cy={e.y + 32} r="8" fill="transparent" />
        ))}
      </S.SVGContainer>
    </S.ChartContainer>
  );
};

export default LineGraph;
