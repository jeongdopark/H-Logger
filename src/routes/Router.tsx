import { BrowserRouter, Routes, Route } from "react-router-dom";
import { PATH_NAME } from "../const/path";
import Landing from "../pages/landing/Landing";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={PATH_NAME.LANDING} element={<Landing />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
