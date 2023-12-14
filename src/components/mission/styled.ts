import styled from "styled-components";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const CustomDatePicker = styled(DatePicker)`
  height: 45px;
  width: 220px;
  border: none;
  border-radius: 5px;
  text-align: center;
  margin-top: 10px;
  button {
    display: none;
  }
`;

export const S = {
  CustomDatePicker,
};
