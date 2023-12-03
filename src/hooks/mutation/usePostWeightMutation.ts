import { db } from "../../firebase";
import { getDoc, doc, updateDoc } from "firebase/firestore";
import { useMutation, useQueryClient } from "@tanstack/react-query";

interface ILog {
  weight: number;
  dateKey: string;
}

const postWeight = async ({ weight, dateKey }: ILog) => {
  const uid = localStorage.getItem("uid");
  const docRef = doc(db, "records", uid!);
  const docSnap = await getDoc(docRef);
  const calendarData = docSnap.data()!.calendar;
  const weightData = docSnap.data()!.weights;

  if (calendarData[dateKey]) {
    if (calendarData[dateKey].weight) {
      throw new Error("등록된 기록이 있습니다.");
    } else {
      calendarData[dateKey] = { ...calendarData[dateKey], weight };
    }
  } else {
    // 해당 날짜에 meal 배열이 없으면, 새 배열 생성
    calendarData[dateKey] = { weight };
  }

  await updateDoc(docRef, {
    [`calendar.${dateKey}`]: calendarData[dateKey],
    weights: { ...weightData, [dateKey]: weight },
  });
};

const useCreateWeightMutation = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: postWeight,
    onSettled: () => {
      queryClient.invalidateQueries({
        queryKey: ["calendar"],
      });
    },
  });
};

export default useCreateWeightMutation;
