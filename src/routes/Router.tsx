import { PATH_NAME } from "../const/path";
import Layout from "../components/layout/Layout";
import Landing from "../pages/landing/Landing";
import Mission from "../pages/mission/Mission";
import CalendarDetail from "../pages/detail/Detail";
import { Suspense, lazy } from "react";
import CalendarPageSkeleton from "../components/skeleton/CalendarPage";
import RecordPageSkeleton from "../components/skeleton/Recordpage";
import AuthGuard from "../components/AuthGuard";

const Calendar = lazy(() => import("../pages/calendar/Calendar"));
const Record = lazy(() => import("../pages/record/Record"));

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
        path: PATH_NAME.RECORD,
        element: (
          <Suspense fallback={<RecordPageSkeleton />}>
            <AuthGuard>
              <Record />
            </AuthGuard>
          </Suspense>
        ),
        label: "record",
      },
      {
        path: PATH_NAME.CALENDAR,
        element: (
          <Suspense fallback={<CalendarPageSkeleton />}>
            <AuthGuard>
              <Calendar />
            </AuthGuard>
          </Suspense>
        ),
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
    ],
  },
];
