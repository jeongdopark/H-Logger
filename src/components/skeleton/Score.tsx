import React from "react";
import Title from "../common/title/Title";
import Shimmer from "./Shimmer";
import { S } from "./styled";

const ScoreSkeleton = () => {
  const Year = Array.from({ length: 52 }, () => Array(7).fill(true));

  return (
    <S.ScoreContainer_S>
      <S.TitleWrapper_S>
        <Title title="Record" size="XL" />
      </S.TitleWrapper_S>
      <S.ScoreRecordWrapper_S>
        {Year.map((week, idx) => (
          <React.Fragment key={idx}>
            {week.map((idx) => {
              return <div key={idx}>1</div>;
            })}
          </React.Fragment>
        ))}
        <Shimmer />
      </S.ScoreRecordWrapper_S>
    </S.ScoreContainer_S>
  );
};

export default ScoreSkeleton;
