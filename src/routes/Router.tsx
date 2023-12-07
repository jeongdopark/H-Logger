import { PATH_NAME } from "../const/path";
import Layout from "../components/layout/Layout";
import Landing from "../pages/landing/Landing";
import Calendar from "../pages/calendar/Calendar";
import Mission from "../pages/mission/Mission";
import CalendarDetail from "../pages/detail/Detail";
import Record from "../pages/record/Record";

export const RouterInfo = [
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Landing />,
        label: "main",
      },
      {
        path: PATH_NAME.CALENDAR,
        element: <Calendar />,
        label: "calendar",
      },
      {
        path: PATH_NAME.CALENDAR_DETAIL,
        element: <CalendarDetail />,
        label: "calendarDetail",
      },
      {
        path: PATH_NAME.MISSION,
        element: <Mission />,
        label: "mission",
      },
      {
        path: PATH_NAME.RECORD,
        element: <Record />,
        label: "record",
      },
    ],
  },
];
