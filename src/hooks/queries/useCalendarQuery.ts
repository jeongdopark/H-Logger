import { db } from "../../firebase";
import { useSuspenseQuery } from "@tanstack/react-query";
import { QUERY_KEY } from "../../const/queryKey";
import { getDoc, doc } from "firebase/firestore";

const getCalendarData = async () => {
  const uid = localStorage.getItem("uid");
  const docRef = doc(db, "records", uid!);
  const docSnap = await getDoc(docRef);

  return docSnap.data()!.calendar;
};

const useCalendarDataQuery = () => {
  return useSuspenseQuery({
    queryKey: [QUERY_KEY.CANLENDAR],
    queryFn: () => getCalendarData(),
  });
};

export default useCalendarDataQuery;
