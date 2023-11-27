import Title from "../common/title/Title";
import LineGraph from "./LineChart";
import { S } from "./styled";

const WeightRecord = () => {
  const points = [
    { x: -60, y: (80 - 76) * 6 },
    { x: 0, y: (82 - 76) * 6 },
    { x: 60, y: (84 - 76) * 6 },
    { x: 120, y: (83 - 76) * 6 },
    { x: 180, y: (81 - 76) * 6 },
    { x: 240, y: (79 - 76) * 6 },
    { x: 300, y: (78 - 76) * 6 },
    { x: 360, y: (79 - 76) * 6 },
    { x: 420, y: (77 - 76) * 6 },
    { x: 480, y: (79 - 76) * 6 },
    { x: 540, y: (80 - 76) * 6 },
  ];

  return (
    <>
      <S.RecordContainer>
        <Title title="Weight" />
        <LineGraph points={points} />
      </S.RecordContainer>
    </>
  );
};

export default WeightRecord;
