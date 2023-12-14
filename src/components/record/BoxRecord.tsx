import { S } from "./styled";
import { THEME } from "../../style/theme";
import { IExercise } from "../../types/calendar";
import { PATH_NUMBER } from "../../const/path";
import React from "react";
import useMovePage from "../../hooks/useMovePage";
import useScrollLock from "../../hooks/useScrollLock";
import { IModalInfo } from "./MissionRecord";

const BoxRecord = ({ modalInfo }: { modalInfo: IModalInfo }) => {
  const [routerHandler] = useMovePage();
  const { openScroll } = useScrollLock();

  const PERIOD = Array.from(
    { length: Number(modalInfo.modalData?.period.end) - Number(modalInfo.modalData?.period.start) + 1 },
    (_, i) => Number(modalInfo.modalData?.period.start) + i
  );

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
