import { THEME } from "../../style/theme";
import { S } from "./styled";

interface IProps {
  percent: number;
  unit: string;
}

const DonutChart = ({ percent, unit }: IProps) => {
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
      </svg>
      <S.SVGText>
        {percent * 100}
        {unit}
      </S.SVGText>
    </S.DonutChartContainer>
  );
};

export default DonutChart;
