import Title from "../common/title/Title";
import LineGraph from "./LineChart";
import { S } from "./styled";

const WeightRecord = () => {
  const points = [
    { x: -180, y: (80 - 76) * 6 },
    { x: -90, y: (82 - 76) * 6 },
    { x: 0, y: (84 - 76) * 6 },
    { x: 90, y: (80 - 76) * 6 },
    { x: 180, y: (83 - 76) * 6 },
    { x: 270, y: (81 - 76) * 6 },
    { x: 360, y: (79 - 76) * 6 },
    { x: 450, y: (78 - 76) * 6 },
    { x: 540, y: (79 - 76) * 6 },
    { x: 630, y: (77 - 76) * 6 },
    { x: 720, y: (79 - 76) * 6 },
  ];

  return (
    <>
      <S.RecordContainer>
        <S.TitleWrapper>
          <Title title="Weight" size="XL" />
        </S.TitleWrapper>
        <LineGraph points={points} />
      </S.RecordContainer>
    </>
  );
};

export default WeightRecord;
