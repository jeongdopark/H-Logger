import { S } from "./styled";
import { IDate } from "../../types/calendar";
import useDeleteLogMutation from "../../hooks/mutation/useDeleteLogMutation";

interface IProps {
  detailData: IDate;
  dateKey: string;
  addToast: (text: string, type: string) => {};
}

const TextRecord = ({ detailData, dateKey, addToast }: IProps) => {
  const { mutate: deleteLog } = useDeleteLogMutation();
  const deleteHandler = () => {
    deleteLog(
      { dateKey },
      {
        onSuccess: () => {
          addToast("SUCCESS", "등록 완료");
        },
        onError: () => {
          addToast("FAIL", "다시 시도해 주세요");
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
