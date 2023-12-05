import Shimmer from "./Shimmer";
import { S } from "./styled";

const MissionSkeleton = () => {
  return (
    <S.MissionContainer_S>
      <S.MissionElement_S>
        <S.MissionText_S></S.MissionText_S>
        <S.MissionText_S></S.MissionText_S>
        <S.MissionText_S></S.MissionText_S>
        <S.MissionText_S></S.MissionText_S>
        <Shimmer />
      </S.MissionElement_S>
      <S.MissionElement_S>
        <S.MissionText_S></S.MissionText_S>
        <S.MissionText_S></S.MissionText_S>
        <S.MissionText_S></S.MissionText_S>
        <S.MissionText_S></S.MissionText_S>
        <Shimmer />
      </S.MissionElement_S>
    </S.MissionContainer_S>
  );
};

export default MissionSkeleton;
