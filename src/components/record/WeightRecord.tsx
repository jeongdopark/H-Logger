import { S } from "./styled";
import { useEffect, useRef, useState } from "react";
import { IWeight } from "../../types/weight";
import { calculateScale } from "../../utils/calculateScale";
import { SVG_VIEWBOX, WEIGHT_LINE_CONST } from "../../const";
import useWeightQuery from "../../hooks/queries/useWeightQuery";
import Title from "../common/title/Title";
import LineGraph from "./LineChart";
import RecordBoxSkeleton from "../skeleton/RecordBox";
import Empty from "../common/Empty";

interface IPoints {
  x: number;
  y: number;
}

const WeightRecord = ({ isMobile }: { isMobile: boolean }) => {
  const { data: userWeight, isLoading: userWeightLoading } = useWeightQuery();
  const [points, setPoints] = useState<IPoints[]>();
  const [sortUserWeight, setSortUserWeight] = useState<IWeight[]>();
  const scale = useRef(1);
  useEffect(() => {
    let min = Infinity;
    let max = -Infinity;
    let X_INTERVAL = userWeight
      ? isMobile
        ? WEIGHT_LINE_CONST.X_LIMIT_MOBILE / userWeight.length
        : WEIGHT_LINE_CONST.X_LIMIT / userWeight.length
      : null;
    let sum = 0;
    let average = 0;
    const point_arr = [];
    const sort_weight = userWeight ? userWeight.sort((a, b) => a.date - b.date) : [];

    for (let i = 0; i < sort_weight.length; i++) {
      if (min > sort_weight[i].weight) min = sort_weight[i].weight;
      if (max < sort_weight[i].weight) max = sort_weight[i].weight;
      sum += sort_weight[i].weight;
    }

    scale.current = calculateScale(max, min);
    console.log(scale.current);

    average = sum / sort_weight.length;

    if (userWeight && X_INTERVAL) {
      for (let i = 0; i < sort_weight.length; i++) {
        point_arr.push({
          x: WEIGHT_LINE_CONST.START_X_POS + X_INTERVAL * i,
          y:
            SVG_VIEWBOX.AVERAGE_HEIGHT +
            (SVG_VIEWBOX.AVERAGE_HEIGHT - sort_weight[i].weight * (SVG_VIEWBOX.AVERAGE_HEIGHT / average)) *
              scale.current,
        });
      }
    }
    setSortUserWeight([...sort_weight]);
    setPoints([...point_arr]);
  }, [userWeightLoading]);

  if (!sortUserWeight) return <RecordBoxSkeleton />;
  return (
    <>
      <S.WeightChartContainer>
        <S.TitleWrapper>
          <Title title="몸무게" size={isMobile ? "XS" : "L"} />
        </S.TitleWrapper>
        {userWeight!.length === 0 && <Empty />}
        <LineGraph points={points!} sortUserWeight={sortUserWeight!} />
      </S.WeightChartContainer>
    </>
  );
};

export default WeightRecord;
