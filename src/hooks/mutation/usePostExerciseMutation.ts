import { useMutation, useQueryClient } from "@tanstack/react-query";
import { db } from "../../firebase";
import { getDoc, doc, updateDoc } from "firebase/firestore";
import { checkPeriod } from "../../utils/checkPeriod";
import { IMission } from "../../types/mission";

interface IExercise {
  category: string;
  time: string;
  dateKey: string;
}

export const postExercise = async ({ category, time, dateKey }: IExercise) => {
  // current mission이 존재하는지.
  // 존재한다면 기간 내에 있는지.
  // 기간 내에 있다면 횟수 +1 & exercise 등록
  const uid = localStorage.getItem("uid");
  const docRef = doc(db, "records", uid!);
  const docSnap = await getDoc(docRef);
  const calendarData = docSnap.data()!.calendar;
  const missions: IMission[] = docSnap.data()!.missions;

  // currentMission 존재
  if (missions.length !== 0) {
    // 기간 내에 있다면 횟수 +1 & exercise 등록
    if (checkPeriod(dateKey, missions[missions.length - 1].period.start, missions[missions.length - 1].period.end)) {
      missions[missions.length - 1].exercise_count += 1;
      // 같은 날짜에 있을 경우.
      if (missions[missions.length - 1].exercise[dateKey]) {
        missions[missions.length - 1].exercise[dateKey] = [
          ...missions[missions.length - 1].exercise[dateKey],
          { category, time },
        ];
      } else {
        // 없을 경우
        missions[missions.length - 1].exercise[dateKey] = [{ category, time }];
      }
    }
  }

  if (calendarData[dateKey]) {
    if (calendarData[dateKey].exercise) {
      const exerciseArray = calendarData[dateKey].exercise;
      exerciseArray.push({ category, time });
    } else {
      calendarData[dateKey] = { ...calendarData[dateKey], exercise: [{ category, time }] };
    }
  } else {
    // 해당 날짜에 exercise 배열이 없으면, 새 배열 생성
    calendarData[dateKey] = { exercise: [{ category, time }] };
  }

  await updateDoc(docRef, {
    [`calendar.${dateKey}`]: calendarData[dateKey],
    missions,
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
      queryClient.invalidateQueries({
        queryKey: ["mission"],
      });
    },
  });
};

export default useCreateExerciseMutation;
