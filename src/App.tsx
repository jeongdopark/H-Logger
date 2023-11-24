import React from "react";
import Router from "./routes/Router";
import { GlobalStyle } from "./style/init";

const App = () => {
  return (
    <React.Fragment>
      <GlobalStyle />
      <Router />
    </React.Fragment>
  );
};

export default App;
