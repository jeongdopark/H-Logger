import useUserInfoQuery from "../../hooks/queries/useUserInfoQuery";
import { S } from "./styled";

const UserSection = () => {
  const { data: userInfo } = useUserInfoQuery();

  return (
    <S.UserWrapper>
      <S.UserImg src={userInfo!.photoURL} />
      <div>{userInfo!.displayName}님</div>
    </S.UserWrapper>
  );
};

export default UserSection;
