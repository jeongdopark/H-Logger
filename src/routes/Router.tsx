import { BrowserRouter, Routes, Route } from "react-router-dom";
import { PATH_NAME } from "../const/path";
import Calendar from "../pages/calendar/Calendar";
import Landing from "../pages/landing/Landing";
import CalendarDetail from "../pages/detail/CalendarDetail";
import Layout from "../components/layout/Layout";
import Record from "../pages/record/Record";
import Mission from "../pages/mission/Mission";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path={PATH_NAME.CALENDAR_DETAIL} element={<CalendarDetail />} />
          <Route path={PATH_NAME.CALENDAR} element={<Calendar />} />
          <Route path={PATH_NAME.RECORD} element={<Record />} />
          <Route path={PATH_NAME.MISSION} element={<Mission />} />
        </Route>
        <Route path={PATH_NAME.LANDING} element={<Landing />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
