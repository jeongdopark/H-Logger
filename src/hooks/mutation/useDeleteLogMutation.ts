import { useMutation, useQueryClient } from "@tanstack/react-query";
import { db } from "../../firebase";
import { getDoc, doc, updateDoc } from "firebase/firestore";

interface IArg {
  dateKey: string;
}

export const deleteLog = async ({ dateKey }: IArg) => {
  const uid = localStorage.getItem("uid");
  const docRef = doc(db, "records", uid!);
  const docSnap = await getDoc(docRef);
  const calendarData = docSnap.data()!.calendar;
  const new_calendarData = { ...calendarData[dateKey], dailyLog: {} };
  delete new_calendarData.dailyLog;
  await updateDoc(docRef, {
    [`calendar.${dateKey}`]: new_calendarData,
  });
};

const useDeleteLogMutation = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: deleteLog,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["calendar"],
      });
    },
  });
};

export default useDeleteLogMutation;
