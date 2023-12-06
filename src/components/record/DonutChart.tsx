import { THEME } from "../../style/theme";
import { S } from "./styled";

const DonutChart = ({ percent }: { percent: number }) => {
  console.log(percent);

  return (
    <S.DonutChartContainer>
      <svg viewBox="0, 0, 200, 200" width="100%" height="100%">
        <circle cx="100" cy="100" r="90" fill="none" stroke="white" strokeWidth={20} />
        <S.AnimationCircle
          cx="100"
          cy="100"
          r="90"
          fill="none"
          stroke={THEME.BACKGROUND_COLOR.GREEN_3}
          strokeWidth="20"
          strokeDasharray={`${2 * Math.PI * 90 * percent} ${2 * Math.PI * 90 * (1 - percent)}`}
          strokeDashoffset={2 * Math.PI * 90 * 0.25}
        />
        <text x={80} y={110} fontSize={30} fontWeight={700}>
          {percent * 100}%
        </text>
      </svg>
    </S.DonutChartContainer>
  );
};

export default DonutChart;
