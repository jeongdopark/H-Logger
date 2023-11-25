import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export const GlobalStyle = createGlobalStyle`
  *{
    box-sizing: border-box;
  }
  li{
    list-style-type: none;
  }
  ${reset}
`;
