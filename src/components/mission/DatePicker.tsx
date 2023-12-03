import { S } from "./styled";
import { useState } from "react";
import Title from "../common/title/Title";

const MissionDatePicker = ({ startDate }: { startDate: string }) => {
  const [dateRange, setDateRange] = useState([new Date(2023, 10, 30), null]);

  const [, endDate] = dateRange;
  return (
    <div>
      <Title title="미션 기간" size="S" />
      <S.CustomDatePicker
        selectsRange={true}
        startDate={
          new Date(
            Number("20" + startDate[0] + startDate[1]),
            Number(startDate[2] + startDate[3]) - 1,
            Number(startDate[4] + startDate[5])
          )
        }
        endDate={endDate}
        onChange={(update: any) => {
          setDateRange(update);
        }}
        isClearable={true}
      />
    </div>
  );
};

export default MissionDatePicker;
