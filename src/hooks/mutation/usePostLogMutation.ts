import { db } from "../../firebase";
import { getDoc, doc, updateDoc } from "firebase/firestore";
import { useMutation, useQueryClient } from "@tanstack/react-query";

interface ILog {
  log: string;
  score: number;
  dateKey: string;
}

const postDailyLog = async ({ log, score, dateKey }: ILog) => {
  const uid = localStorage.getItem("uid");
  const docRef = doc(db, "records", uid!);
  const docSnap = await getDoc(docRef);
  const calendarData = docSnap.data()!.calendar;

  if (calendarData[dateKey]) {
    if (calendarData[dateKey].dailyLog) {
      throw new Error("등록된 기록이 있습니다.");
    } else {
      calendarData[dateKey] = { ...calendarData[dateKey], dailyLog: { log, score } };
    }
  } else {
    // 해당 날짜에 meal 배열이 없으면, 새 배열 생성
    calendarData[dateKey] = { dailyLog: { log, score } };
  }

  await updateDoc(docRef, {
    [`calendar.${dateKey}`]: calendarData[dateKey],
  });
};

const useCreateDailyLogMutation = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: postDailyLog,
    onSettled: () => {
      queryClient.invalidateQueries({
        queryKey: ["calendar"],
      });
    },
  });
};

export default useCreateDailyLogMutation;
