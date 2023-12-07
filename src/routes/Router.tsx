import { PATH_NAME } from "../const/path";
import Layout from "../components/layout/Layout";
import Landing from "../pages/landing/Landing";
import { Suspense, lazy } from "react";
import CalendarSkeleton from "../components/skeleton/Calendar";
import Loading from "../components/Loading";
import RecordBoxSkeleton from "../components/skeleton/RecordBox";

const Calendar = lazy(() => import("../pages/calendar/Calendar.tsx"));
const Mission = lazy(() => import("../pages/mission/Mission.tsx"));
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
          <Suspense fallback={<CalendarSkeleton />}>
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
        path: PATH_NAME.MISSION,
        element: (
          <Suspense fallback={<Loading />}>
            <Mission />
          </Suspense>
        ),
        label: "mission",
      },
      {
        path: PATH_NAME.RECORD,
        element: (
          <Suspense fallback={<RecordBoxSkeleton />}>
            <Record />
          </Suspense>
        ),
        label: "record",
      },
    ],
  },
];
