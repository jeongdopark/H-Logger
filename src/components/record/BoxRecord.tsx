import { S } from "./styled";
import { THEME } from "../../style/theme";
import { IExercise } from "../../types/calendar";
import { PATH_NUMBER } from "../../const/path";
import React from "react";
import useMovePage from "../../hooks/useMovePage";
import useScrollLock from "../../hooks/useScrollLock";
import { IModalInfo } from "./MissionRecord";
import { parseDate } from "../../utils/parseDate";
import { dateFormat } from "../../utils/dateFormat";

const BoxRecord = ({ modalInfo }: { modalInfo: IModalInfo }) => {
  const [routerHandler] = useMovePage();
  const { openScroll } = useScrollLock();
  const end: any = parseDate(modalInfo.modalData?.period.end);
  const start: any = parseDate(modalInfo.modalData?.period.start);
  console.log(modalInfo.modalData?.period.start);

  const diff = (end - start) / (1000 * 60 * 60 * 24);
  console.log(diff);

  const PERIOD = Array.from({ length: diff }, (_, i) => {
    let currentDate = new Date(start);
    currentDate.setDate(start.getDate() + i);
    return Number(dateFormat(currentDate));
  });

  return (
    <S.BoxContainer>
      {PERIOD.map((date: number) => {
        return (
          <S.ScoreRecordLi
            color={
              modalInfo.modalData?.exercise[String(date)] ? THEME.BACKGROUND_COLOR.GREEN : THEME.BACKGROUND_COLOR.WHITE
            }
            onClick={() => {
              routerHandler({ num: PATH_NUMBER.CALENDAR_DETAIl, dayFormat: String(date) });
              openScroll();
            }}
          >
            <S.HoverBox className="score-tooltip">
              <div>
                {String(date)[0] +
                  String(date)[1] +
                  "." +
                  String(date)[2] +
                  String(date)[3] +
                  "." +
                  String(date)[4] +
                  String(date)[5]}
              </div>
              {modalInfo.modalData?.exercise[String(date)] ? (
                modalInfo.modalData?.exercise[String(date)].map((e: IExercise) => {
                  return (
                    <React.Fragment>
                      <div>
                        {e.category} : {e.time}
                      </div>
                    </React.Fragment>
                  );
                })
              ) : (
                <div>기록 없음</div>
              )}
            </S.HoverBox>
          </S.ScoreRecordLi>
        );
      })}
    </S.BoxContainer>
  );
};

export default BoxRecord;
