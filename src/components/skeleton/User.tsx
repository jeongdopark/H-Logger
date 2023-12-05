import Shimmer from "./Shimmer";
import { S } from "./styled";

const UserSkeleton = () => {
  return (
    <S.UserWrapper_S>
      <S.UserImg_S>
        <Shimmer />
      </S.UserImg_S>
      <S.UserName_S>
        <Shimmer />
      </S.UserName_S>
    </S.UserWrapper_S>
  );
};

export default UserSkeleton;
