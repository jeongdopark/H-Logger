import { S } from "./styled";
import { useEffect, useState } from "react";
import { IWeight } from "../../types/weight";
import { WEIGHT_LINE_CONST } from "../../const";
import useWeightQuery from "../../hooks/queries/useWeightQuery";
import Title from "../common/title/Title";
import LineGraph from "./LineChart";
import RecordBoxSkeleton from "../skeleton/RecordBox";
import Empty from "../common/Empty";

interface IPoints {
  x: number;
  y: number;
}

const WeightRecord = () => {
  const { data: userWeight, isLoading: userWeightLoading } = useWeightQuery();
  const [points, setPoints] = useState<IPoints[]>();
  const [sortUserWeight, setSortUserWeight] = useState<IWeight[]>();

  useEffect(() => {
    let X_INTERVAL = userWeight ? 1100 / userWeight.length : null;
    let sum = 0;
    let average = 0;
    const point_arr = [];
    const sort_weight = userWeight ? userWeight.sort((a, b) => a.date - b.date) : [];
    for (let i = 0; i < sort_weight.length; i++) {
      sum += sort_weight[i].weight;
    }
    average = sum / sort_weight.length;

    if (userWeight && X_INTERVAL) {
      for (let i = 0; i < sort_weight.length; i++) {
        point_arr.push({
          x: WEIGHT_LINE_CONST.START_X_POS + X_INTERVAL * i,
          y: (sort_weight[i].weight - average) * WEIGHT_LINE_CONST.Y_INTERVAL,
        });
      }
    }
    setSortUserWeight([...sort_weight]);
    setPoints([...point_arr]);
  }, [userWeightLoading]);

  if (!sortUserWeight) return <RecordBoxSkeleton />;
  return (
    <>
      <S.RecordContainer>
        <S.TitleWrapper>
          <Title title="몸무게 기록" size="M" />
        </S.TitleWrapper>
        {userWeight!.length === 0 && <Empty />}
        <LineGraph points={points!} sortUserWeight={sortUserWeight!} />
      </S.RecordContainer>
    </>
  );
};

export default WeightRecord;
