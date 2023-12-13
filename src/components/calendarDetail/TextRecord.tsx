import { S } from "./styled";
import { IDate } from "../../types/calendar";
import useDeleteLogMutation from "../../hooks/mutation/useDeleteLogMutation";
import useToast from "../../hooks/useToast";
import Toast from "../toast";

interface IProps {
  detailData: IDate;
  dateKey: string;
}

const TextRecord = ({ detailData, dateKey }: IProps) => {
  const { mutate: deleteLog } = useDeleteLogMutation();
  const deleteHandler = () => {
    deleteLog(
      { dateKey },
      {
        onSuccess: () => {
          useToast({ content: <Toast text="삭제 완료" type="SUCCESS" /> });
        },
        onError: () => {
          useToast({ content: <Toast text="등록된 기록이 있습니다." type="FAIL" /> });
        },
      }
    );
  };

  return (
    <S.TextRecord>
      <div>{detailData.dailyLog.log}</div>
      <S.DeleteDot onClick={deleteHandler} />
    </S.TextRecord>
  );
};

export default TextRecord;
