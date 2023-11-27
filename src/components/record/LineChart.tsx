import styled from "styled-components";
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
}

const LineGraph = ({ points }: lineGraphProps): JSX.Element => {
  const lines = points.reduce((result: line[], point: pointsProps, index: number) => {
    if (index === 0) return [];
    const previous = points[index - 1];
    const line = { x1: previous.x, y1: previous.y, x2: point.x, y2: point.y };
    return [...result, line];
  }, []);

  return (
    <svg viewBox={`0 -40 556 140`} width="100%" height="100%">
      {lines.map(({ x1, x2, y1, y2 }) => (
        <GraphLine x1={x1} x2={x2} y1={y1} y2={y2} />
      ))}

      {points.map(({ x, y }: any, index) => {
        return (
          <>
            <GraphCircle cx={x} cy={y} r="2" />
            <Text x={x - 10} y={y - 15} isLastIndex={points.length === index + 1}></Text>
          </>
        );
      })}
    </svg>
  );
};

const GraphLine = styled.line`
  stroke: ${THEME.BACKGROUND_COLOR.GREEN_4};
  stroke-width: 2;
`;

const GraphCircle = styled.circle`
  fill: ${THEME.BACKGROUND_COLOR.GREEN_2};
`;

const Text = styled.text<{ isLastIndex: boolean }>`
  fill: ${(props) => (props.isLastIndex ? "#f00" : "rgb(112, 112, 112)")};
`;

export default LineGraph;
