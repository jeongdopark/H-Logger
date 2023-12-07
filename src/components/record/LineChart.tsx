import { S } from "./styled";
import { IWeight } from "../../types/weight";
import { dotDateFormat } from "../../utils/dateFormat";
import { THEME } from "../../style/theme";

interface pointsProps {
  x: number;
  y: number;
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
              <svg viewBox="0 0 20px 20px" width={50} height={205} style={{ zIndex: "999" }}>
                <S.GraphLineWrapper>
                  <S.GraphCircle
                    cx="5"
                    cy={e.y}
                    r="2.5"
                    stroke={THEME.BACKGROUND_COLOR.GREEN}
                    fill={THEME.BACKGROUND_COLOR.GREEN}
                    strokeWidth="5"
                  />
                  <S.HoverRect className="hover-rect" x={10} y={e.y - 30} rx={5} />
                  <S.HoverText className="hover-rect" x={16.5} y={e.y - 15.5} fontSize={12}>
                    {String(sortUserWeight[index].weight).length === 2
                      ? String(sortUserWeight[index].weight) + ".0"
                      : sortUserWeight[index].weight}
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
        {points.map((e) => (
          <S.Circle cx={e.x + 45} cy={e.y + 32} r="8" fill="transparent" />
        ))}
      </S.SVGContainer>
    </S.ChartContainer>
  );
};

export default LineGraph;
