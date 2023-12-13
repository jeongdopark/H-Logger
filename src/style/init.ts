import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@400;500;600;700&display=swap');
  body{
    
    font-family: 'Noto Sans KR', sans-serif !important;
    
  }
  *{
    box-sizing: border-box;
  }

  li{
    list-style-type: none;
  }
  ${reset}
`;
