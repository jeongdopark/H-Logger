import { IMission } from "./MissionElement";
import { S } from "./styled";
import useMovePage from "../../hooks/useMovePage";
import { PATH_NUMBER } from "../../const/path";
import { THEME } from "../../style/theme";

const BoxRecord = ({ modalData }: { modalData: IMission | undefined }) => {
  const [routerHandler] = useMovePage();

  const PERIOD = Array.from(
    { length: Number(modalData?.period.end) - Number(modalData?.period.start) + 1 },
    (_, i) => Number(modalData?.period.start) + i
  );
  console.log(PERIOD);

  return (
    <S.BoxContainer>
      {PERIOD.map((date: number) => (
        <S.ScoreRecordLi
          color={THEME.BACKGROUND_COLOR.GREEN}
          onClick={() => routerHandler({ num: PATH_NUMBER.CALENDAR_DETAIl, dayFormat: String(date) })}
        >
          <S.HoverBox className="score-tooltip">
            <div>{date}</div>
          </S.HoverBox>
        </S.ScoreRecordLi>
      ))}
    </S.BoxContainer>
  );
};

export default BoxRecord;
