//

import { IUser } from "../../types/user";
import { S } from "./styled";

const UserSection = ({ userInfo }: { userInfo: IUser }) => {
  return (
    <S.UserWrapper>
      <S.UserImg src={userInfo.photoURL} />
      <div>{userInfo.displayName}님</div>
    </S.UserWrapper>
  );
};

export default UserSection;
