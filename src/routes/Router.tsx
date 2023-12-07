import { PATH_NAME } from "../const/path";
import { Suspense, lazy } from "react";
import Layout from "../components/layout/Layout";
import Landing from "../pages/landing/Landing";
import Mission from "../pages/mission/Mission";
import Loading from "../components/Loading";

const Calendar = lazy(() => import("../pages/calendar/Calendar.tsx"));
const CalendarDetail = lazy(() => import("../pages/detail/Detail.tsx"));
const Record = lazy(() => import("../pages/record/Record.tsx"));

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
        element: (
          <Suspense fallback={<Loading />}>
            <Calendar />
          </Suspense>
        ),
        label: "calendar",
      },
      {
        path: PATH_NAME.CALENDAR_DETAIL,
        element: (
          <Suspense fallback={<Loading />}>
            <CalendarDetail />
          </Suspense>
        ),
        label: "calendarDetail",
      },
      {
        path: PATH_NAME.RECORD,
        element: (
          <Suspense fallback={<Loading />}>
            <Record />
          </Suspense>
        ),
        label: "record",
      },
      {
        path: PATH_NAME.MISSION,
        element: <Mission />,
        label: "mission",
      },
    ],
  },
];
