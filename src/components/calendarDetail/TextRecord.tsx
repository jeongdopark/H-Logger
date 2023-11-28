import { ICalendar } from "../../types/calendar";
import { S } from "./styled";

const TextRecord = ({ detailData }: { detailData: ICalendar }) => {
  console.log(detailData);

  return (
    <S.TextRecord>
      <span>세 줄 일기</span>
      <div>{detailData.dailyLog.log}</div>
      <div>{detailData.dailyLog.score}점</div>
    </S.TextRecord>
  );
};

export default TextRecord;
