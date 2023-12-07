import { PATH_NAME } from "../const/path";
import Layout from "../components/layout/Layout";
import Landing from "../pages/landing/Landing";
import withLazy from "../components/withLazy";

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
        element: withLazy("calendar"),
        label: "calendar",
      },
      {
        path: PATH_NAME.CALENDAR_DETAIL,
        element: withLazy("detail"),
        label: "calendarDetail",
      },
      {
        path: PATH_NAME.MISSION,
        element: withLazy("mission"),
        label: "mission",
      },
      {
        path: PATH_NAME.RECORD,
        element: withLazy("record"),
        label: "record",
      },
    ],
  },
];
