import { S } from "./styled";
import React, { useContext, useState } from "react";
import Title from "../common/title/Title";
import { ResponsiveContext } from "../../App";

interface IProps {
  startDate: string;
  endDate: Date | undefined;
  setEndDate: React.Dispatch<React.SetStateAction<Date | undefined>>;
}

const MissionDatePicker = ({ startDate, endDate, setEndDate }: IProps) => {
  const [, setDateRange] = useState([new Date(2023, 10, 30), null]);
  const { isMobile } = useContext(ResponsiveContext);

  return (
    <div>
      <Title title="미션 기간" size={isMobile ? "XS" : "S"} />
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
          setEndDate(update[1]);
        }}
        isClearable={true}
      />
    </div>
  );
};

export default MissionDatePicker;
