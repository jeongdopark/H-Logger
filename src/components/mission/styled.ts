import styled from "styled-components";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const CustomDatePicker = styled(DatePicker)`
  height: ${(props) => (props.isMobile ? "40px" : "50px")};
  width: ${(props) => (props.isMobile ? "200px" : "240px")};
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
