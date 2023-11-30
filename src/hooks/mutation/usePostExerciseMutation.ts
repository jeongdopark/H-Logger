import { useMutation, useQueryClient } from "@tanstack/react-query";
import { db } from "../../firebase";
import { getDoc, doc, updateDoc } from "firebase/firestore";

interface IExercise {
  category: string;
  time: string;
  dateKey: string;
}

const postExercise = async ({ category, time, dateKey }: IExercise) => {
  const uid = localStorage.getItem("uid");
  const docRef = doc(db, "records", uid!);
  const docSnap = await getDoc(docRef);
  const calendarData = docSnap.data()!.calendar;

  if (calendarData[dateKey]) {
    const exerciseArray = calendarData[dateKey].exercise;
    exerciseArray.push({ category, time });
  } else {
    // 해당 날짜에 exercise 배열이 없으면, 새 배열 생성
    calendarData[dateKey] = { exercise: [{ category, time }] };
  }

  await updateDoc(docRef, {
    [`calendar.${dateKey}`]: calendarData[dateKey],
  });
};

const useCreateExerciseMutation = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: postExercise,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["calendar"],
      });
    },
  });
};

export default useCreateExerciseMutation;
