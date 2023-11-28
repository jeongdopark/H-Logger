import { db } from "../../firebase";
import { useQuery } from "@tanstack/react-query";
import { getDoc, doc } from "firebase/firestore";

const getCalendarData = async () => {
  const uid = localStorage.getItem("uid");
  const docRef = doc(db, "records", uid!);
  const docSnap = await getDoc(docRef);

  return docSnap.data()!.calendar;
};

const useCalendarDataQuery = () => {
  return useQuery({
    queryKey: ["calendar"],
    queryFn: () => getCalendarData(),
  });
};

export default useCalendarDataQuery;
