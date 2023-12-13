import { IDate } from "../../types/calendar";
import { S } from "./styled";

interface IProps {
  detailData: IDate;
}

const TextRecord = ({ detailData }: IProps) => {
  return (
    <S.TextRecord>
      <div>{detailData.dailyLog.log}</div>
      <S.DeleteDot />
    </S.TextRecord>
  );
};

export default TextRecord;
