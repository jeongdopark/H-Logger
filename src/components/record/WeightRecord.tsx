import { useEffect, useState } from "react";
import { IWeight } from "../../types/weight";
import Title from "../common/title/Title";
import LineGraph from "./LineChart";
import { S } from "./styled";
import { WEIGHT_LINE_CONST } from "../../const";

interface IPoints {
  x: number;
  y: number;
}

const WeightRecord = ({ userWeight }: { userWeight: IWeight[] }) => {
  const [points, setPoints] = useState<IPoints[]>();
  const [sortUserWeight, setSortUserWeight] = useState<IWeight[]>();
  let X_INTERVAL = 1100 / userWeight.length;
  useEffect(() => {
    let sum = 0;
    let average = 0;
    const point_arr = [];
    const sort_weight = userWeight.sort((a, b) => a.date - b.date);
    for (let i = 0; i < sort_weight.length; i++) {
      sum += sort_weight[i].weight;
    }
    average = sum / sort_weight.length;

    for (let i = 0; i < sort_weight.length; i++) {
      point_arr.push({
        x: WEIGHT_LINE_CONST.START_X_POS + X_INTERVAL * i,
        y: (sort_weight[i].weight - average) * WEIGHT_LINE_CONST.Y_INTERVAL,
      });
    }
    setSortUserWeight([...sort_weight]);
    setPoints([...point_arr]);
  }, []);

  if (!points) return <div>Loading...</div>;
  return (
    <>
      <S.RecordContainer>
        <S.TitleWrapper>
          <Title title="Weight" size="XL" />
        </S.TitleWrapper>
        <LineGraph points={points!} sortUserWeight={sortUserWeight!} />
      </S.RecordContainer>
    </>
  );
};

export default WeightRecord;
