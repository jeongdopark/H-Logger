import { db } from "../../firebase";
import { useQuery } from "@tanstack/react-query";
import { collection, query, getDocs } from "firebase/firestore";
import { ICalendar } from "../../types";
const getCalendarData = async () => {
  const data: { [key: string]: ICalendar } = {};
  const calendarQuery = query(collection(db, "calendar"));
  const calendarQuerySnapshot = await getDocs(calendarQuery);

  calendarQuerySnapshot.forEach((calendarDoc) => {
    data[calendarDoc.id] = calendarDoc.data() as ICalendar;
  });

  return data;
};

const useCalendarDataQuery = () => {
  return useQuery({
    queryKey: ["calendar"],
    queryFn: () => getCalendarData(),
  });
};

export default useCalendarDataQuery;
